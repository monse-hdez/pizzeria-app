import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
    Alert, Animated,
    Image, Platform, ScrollView,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions
} from "react-native";
import styles from '../src/styles/homeStyles';
import Cart from './cart';

const pizzas = [
    {
        id: 1,
        nombre: 'Pepperoni',
        imagen: require('../assets/homeImg/pepperoni.jpg'),
    },
    {
        id: 2,
        nombre: 'Hawaiana',
        imagen: require('../assets/homeImg/hawaiana.jpg'),
    },
    {
        id: 3,
        nombre: 'Vegetariana',
        imagen: require('../assets/homeImg/vegetariana.jpg'),
    },
    {
        id: 4,
        nombre: 'Arma tu pizza',
        imagen: require('../assets/homeImg/armatupizza.jpg'),
    },
];

const bebidas = [
    {
        id: 1,
        nombre: 'Coca-Cola',
        imagen: require('../assets/homeImg/cocacola.jpg'),
    },
    {
        id: 2,
        nombre: 'Jugo de naranja',
        imagen: require('../assets/homeImg/naranja.jpg'),
    },
    {
        id: 3,
        nombre: 'Limonada',
        imagen: require('../assets/homeImg/limonada.jpg'),
    },
];


export default function Home() {
    const { width } = useWindowDimensions();
    const [categoria, setCategoria] = useState('pizzas');
    const [cartVisible, setCartVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(300)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const [menuVisible, setMenuVisible] = useState(false);
    const slideMenu = useRef(new Animated.Value(-300)).current;
    const isTablet = width >= 768;
    const isDesktop = width >= 1024;
    const router = useRouter();
    const cerrarSesion = () => {
        setMenuVisible(false);

        if (Platform.OS === "web") {
            const confirmacion = window.confirm("¿Estás seguro de cerrar sesión?");

            if (confirmacion) {
                router.replace("/login");
            }
        } else {
            setTimeout(() => {
                Alert.alert(
                    "Cerrar sesión",
                    "¿Estás seguro de cerrar sesión?",
                    [
                        { text: "No", style: "cancel" },
                        {
                            text: "Sí",
                            onPress: () => router.replace("/login"),
                        },
                    ]
                );
            }, 200);
        }
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
    // Animación al cambiar categoría
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
                    <Text
                        style={[
                            categoria === 'pizzas' ? styles.tabTextoActivo : styles.tabTexto,
                            isDesktop && styles.tabTextoDesktop,
                        ]}
                    >
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
                    <Text
                        style={[
                            categoria === 'bebidas' ? styles.tabTextoActivo : styles.tabTexto,
                            isDesktop && styles.tabTextoDesktop,
                        ]}
                    >
                        Bebidas
                    </Text>
                </TouchableOpacity>
            </>
        );

        if (isDesktop) {
            return <View style={styles.categoriasDesktop}>{botones}</View>;
        }

        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.categoriasScroll}
            >
                {botones}
            </ScrollView>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>

                <Text style={styles.title}>Pizzería</Text>
                <Text style={styles.title}>" Bella "</Text>
                {renderCategorias()}

                <Animated.ScrollView
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 0],
                                }),
                            },
                        ],
                    }}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={[
                        styles.lista,
                        isTablet && styles.listaDesktop,

                    ]}

                >
                    {(categoria === 'pizzas' ? pizzas : bebidas).map((item) => (
                        <View
                            key={item.id}
                            style={[
                                styles.card,
                                isDesktop && styles.cardDesktop,
                                isTablet && !isDesktop && styles.cardTablet,
                            ]}
                        >
                            <Image source={item.imagen} style={styles.imagen} />

                            <View style={styles.info}>
                                <Text style={styles.nombre}>{item.nombre}</Text>

                                <TouchableOpacity
                                    style={[
                                        styles.boton,
                                        isDesktop && styles.botonDesktop,
                                    ]}
                                    onPress={() => {
                                        if (item.id === 4) {
                                            router.push('/customize');
                                        }
                                    }}
                                >
                                    <Text
                                        style={[
                                            styles.botonTexto,
                                            isDesktop && styles.botonTextoDesktop,
                                        ]}
                                    >
                                        Agregar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </Animated.ScrollView>

            </View>
            {/* BOTÓN CARRITO */}
            {!cartVisible && (
                <TouchableOpacity
                    style={styles.cartButton}
                    onPress={toggleCart}
                >
                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>🛒</Text>
                </TouchableOpacity>
            )}

            {/* BOTÓN MENÚ */}
            {!menuVisible && (
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={toggleMenu}
                >
                    <Text style={{ color: '#FFF', fontSize: 20 }}>☰</Text>
                </TouchableOpacity>
            )}

            {/* FONDO OSCURO PARA CERRAR MENÚ */}
            {menuVisible && (
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
                    onPress={toggleMenu}
                />
            )}

            {/* FONDO OSCURO PARA CERRAR CARRITO */}
            {cartVisible && (
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
                    onPress={toggleCart}
                />
            )}

            {/* PANEL DEL CARRITO */}
            {cartVisible && (
                <Animated.View
                    style={[
                        styles.cartPanel,
                        { transform: [{ translateX: slideAnim }], zIndex: 9 },
                    ]}
                >
                    <TouchableOpacity onPress={toggleCart}>
                        <Text style={{ color: '#FFF', fontSize: 18, marginBottom: 10 }}>
                            ✖ Cerrar
                        </Text>
                    </TouchableOpacity>

                    <Cart />
                </Animated.View>
            )}

            {/* PANEL DEL MENÚ */}
            {menuVisible && (
                <Animated.View
                    style={[
                        styles.menuPanel,
                        { transform: [{ translateX: slideMenu }], zIndex: 9 },
                    ]}
                >
                    <TouchableOpacity onPress={toggleMenu}>
                        <Text style={{ color: '#FFF', fontSize: 18, marginBottom: 10 }}>
                            ✖ Cerrar
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.menuTitle}>Menú</Text>

                    <TouchableOpacity>
                        <Text style={styles.menuItem}>Acerca de</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.menuItem}>Contacto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={cerrarSesion}>
                        <Text style={styles.menuItem}>Cerrar Sesion</Text>
                    </TouchableOpacity>
                </Animated.View>
            )}

        </View>
    );
}