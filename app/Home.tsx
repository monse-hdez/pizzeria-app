import { useLocalSearchParams, useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";

import { bebidas, pizzas } from '../src/data/productos';
import styles from '../src/styles/homeStyles';

import CartPanel from '../src/components/CartPanel';
import CategoryTabs from '../src/components/CategoryTabs';
import MenuPanel from '../src/components/MenuPanel';
import ProductCard from '../src/components/ProductCard';

import { useCart } from '../app/CartContext';
type Product = {
  id: number;
  nombre: string;
  precio: number;
  imagen: any;
};

export default function Home() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  const [categoria, setCategoria] = useState<string>('pizzas');
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const slideAnim = useRef(new Animated.Value(300)).current;
  const slideMenu = useRef(new Animated.Value(-300)).current;
  const { addItem, items, clearCart } = useCart();
  const totalItems = items.reduce(
    (total, item) => total + item.qty,
    0
  );
  // AGREGAR AL CARRITO 
  const addToCart = (item: Product) => {
    addItem({
      id: String(item.id),
      name: item.nombre,
      price: item.precio,
      img: item.imagen,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>

        <Text style={styles.title}>Pizzería  "Bella"</Text>


        <CategoryTabs
          categoria={categoria}
          setCategoria={setCategoria}
          isDesktop={isDesktop}
        />

        <Animated.ScrollView
          style={{ flex: 1 }}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 10 },
            isDesktop && styles.listaDesktop
          ]}
        >
          {(categoria === 'pizzas' ? pizzas : bebidas).map((item: Product) => (
            <ProductCard
              key={item.id}
              item={item}
              onAdd={(item) => {
                setSelectedItem(item);
                setModalVisible(true);
              }}
              onCustomize={() => router.push("/customize")}
            />
          ))}

        </Animated.ScrollView>
      </View>
      {/* 🛒 BOTÓN CARRITO */}
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => setCartVisible(true)}
      >
        <Text style={{ color: '#FFF' }}>🛒</Text>

        {totalItems > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>
              {totalItems}
            </Text>
          </View>
        )}
      </TouchableOpacity>

      {/* ☰ BOTÓN MENÚ */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuVisible(true)}
      >
        <Text style={{ color: '#FFF' }}>☰</Text>
      </TouchableOpacity>

      {/* PANEL CARRITO */}
      <CartPanel
        visible={cartVisible}
        slideAnim={slideAnim}
        toggleCart={() => setCartVisible(false)}
      />

      {/* PANEL MENÚ */}
      <MenuPanel
        visible={menuVisible}
        slideMenu={slideMenu}
        toggleMenu={() => setMenuVisible(false)}

        cerrarSesion={() => {
          clearCart();
          router.replace("/login");
        }}
      />
      {/* 🔥 MODAL */}
      {modalVisible && (
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              ¿Desea agregar ingredientes extra?
            </Text>

            <View style={styles.modalButtons}>

              {/* ❌ NO */}
              <TouchableOpacity
                style={styles.modalBtnNo}
                onPress={() => {
                  if (selectedItem) addToCart(selectedItem);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalBtnText}>No</Text>
              </TouchableOpacity>

              {/* ✅ SÍ */}
              <TouchableOpacity
                style={styles.modalBtnYes}
                onPress={() => {
                  setModalVisible(false);
                  router.push("/extraIngredients");
                }}
              >
                <Text style={styles.modalBtnText}>Sí</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      )}
    </View >
  );
}