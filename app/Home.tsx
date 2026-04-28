import { useRouter } from 'expo-router';
import { useRef, useState, useEffect } from 'react';
import {
  Alert,
  Animated,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from "react-native";

import styles from '../src/styles/homeStyles';
import Cart from './cart';

type CartItem = {
  id: number;
  name: string;
  price: number;
  img: any;
  qty: number;
};

// ================== DATOS ==================
const pizzas = [
  { id: 1, nombre: 'Pepperoni', precio: 150, imagen: require('../assets/homeImg/pepperoni.jpg') },
  { id: 2, nombre: 'Hawaiana', precio: 140, imagen: require('../assets/homeImg/hawaiana.jpg') },
  { id: 3, nombre: 'Vegetariana', precio: 130, imagen: require('../assets/homeImg/vegetariana.jpg') },
  { id: 4, nombre: 'Arma tu pizza', precio: 160, imagen: require('../assets/homeImg/armatupizza.jpg') },
];

const bebidas = [
  { id: 5, nombre: 'Coca-Cola', precio: 50, imagen: require('../assets/homeImg/cocacola.jpg') },
  { id: 6, nombre: 'Jugo de naranja', precio: 45, imagen: require('../assets/homeImg/naranja.jpg') },
  { id: 7, nombre: 'Limonada', precio: 40, imagen: require('../assets/homeImg/limonada.jpg') },
];

// ================== COMPONENTE ==================
export default function Home({ route }: any) {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;
  const isDesktop = width >= 1024;

  const [categoria, setCategoria] = useState('pizzas');
  const [cartVisible, setCartVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const slideAnim = useRef(new Animated.Value(300)).current;
  const slideMenu = useRef(new Animated.Value(-300)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
  if (route?.params?.nuevaPizza) {
    setCartItems((prev) => {
      const existe = prev.find(
        item => item.id === route.params.nuevaPizza.id
      );

      if (existe) {
        return prev.map(item =>
          item.id === route.params.nuevaPizza.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, route.params.nuevaPizza];
    });
  }
}, [route?.params?.nuevaPizza]);

  // ================== FUNCIONES ==================
  const cerrarSesion = () => {
    setMenuVisible(false);

    if (Platform.OS === "web") {
      const confirmacion = window.confirm("¿Estás seguro de cerrar sesión?");
      if (confirmacion) router.replace("/login");
    } else {
      setTimeout(() => {
        Alert.alert(
          "Cerrar sesión",
          "¿Estás seguro de cerrar sesión?",
          [
            { text: "No", style: "cancel" },
            { text: "Sí", onPress: () => router.replace("/login") }
          ]
        );
      }, 200);
    }
  };

  const addToCart = (item: any) => {
    setCartItems((prev) => {
      const exist = prev.find(p => p.id === item.id);

      if (exist) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { 
        id: item.id,
        name: item.nombre,
        price: item.precio,
        img: item.imagen,
        qty: 1
      }];
    });
  };
  
  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideMenu, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideMenu, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const toggleCart = () => {
    if (cartVisible) {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setCartVisible(false));
    } else {
      setCartVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const cambiarCategoria = (nuevaCategoria: string) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setCategoria(nuevaCategoria);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  // ================== UI ==================
  const renderCategorias = () => {
    const botones = (
      <>
        <TouchableOpacity
          style={[
            categoria === 'pizzas' ? styles.tabActivo : styles.tab,
            isDesktop && styles.tabDesktop,
          ]}
          onPress={() => cambiarCategoria('pizzas')}
        >
          <Text style={[
            categoria === 'pizzas' ? styles.tabTextoActivo : styles.tabTexto,
            isDesktop && styles.tabTextoDesktop,
          ]}>
            Pizzas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            categoria === 'bebidas' ? styles.tabActivo : styles.tab,
            isDesktop && styles.tabDesktop,
          ]}
          onPress={() => cambiarCategoria('bebidas')}
        >
          <Text style={[
            categoria === 'bebidas' ? styles.tabTextoActivo : styles.tabTexto,
            isDesktop && styles.tabTextoDesktop,
          ]}>
            Bebidas
          </Text>
        </TouchableOpacity>
      </>
    );

    if (isDesktop) {
      return <View style={styles.categoriasDesktop}>{botones}</View>;
    }

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator>
        {botones}
      </ScrollView>
    );
  };

  // ================== RENDER ==================
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Pizzería</Text>
        <Text style={styles.title}>" Bella "</Text>

        {renderCategorias()}

        <Animated.ScrollView
          style={{
            opacity: fadeAnim,
            transform: [{
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              })
            }]
          }}
          contentContainerStyle={[
            styles.lista,
            isTablet && styles.listaDesktop,
          ]}
        >
          {(categoria === 'pizzas' ? pizzas : bebidas).map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={item.imagen} style={styles.imagen} />

              <View style={styles.info}>
                <Text style={styles.nombre}>{item.nombre}</Text>

                <TouchableOpacity
                  style={styles.boton}
                  onPress={() => {
                  if (item.id === 4) {
                  router.push('/customize');
                  } else {
                  addToCart(item); 
                 }
                }}
                >
                  <Text style={styles.botonTexto}>Agregar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>

      {/* BOTÓN CARRITO */}
      {!cartVisible && (
        <TouchableOpacity style={styles.cartButton} onPress={toggleCart}>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>🛒</Text>
        </TouchableOpacity>
      )}

      {/* BOTÓN MENÚ */}
      {!menuVisible && (
        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={{ color: '#FFF', fontSize: 20 }}>☰</Text>
        </TouchableOpacity>
      )}

      {/* OVERLAY */}
      {(menuVisible || cartVisible) && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 8,
          }}
          onPress={menuVisible ? toggleMenu : toggleCart}
        />
      )}

      {/* CARRITO */}
      {cartVisible && (
        <Animated.View style={[
          styles.cartPanel,
          { transform: [{ translateX: slideAnim }] }
        ]}>
          <TouchableOpacity onPress={toggleCart}>
            <Text style={{ color: '#FFF' }}>✖ Cerrar</Text>
          </TouchableOpacity>
          <Cart 
          items={cartItems}
          setItems={setCartItems}
          />
        </Animated.View>
      )}

      {/* MENÚ */}
      {menuVisible && (
        <Animated.View style={[
          styles.menuPanel,
          { transform: [{ translateX: slideMenu }] }
        ]}>
          <TouchableOpacity onPress={toggleMenu}>
            <Text style={{ color: '#FFF' }}>✖ Cerrar</Text>
          </TouchableOpacity>

          <Text style={styles.menuTitle}>Menú</Text>

          <TouchableOpacity>
            <Text style={styles.menuItem}>Acerca de</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.menuItem}>Contacto</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={cerrarSesion}>
            <Text style={styles.menuItem}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}