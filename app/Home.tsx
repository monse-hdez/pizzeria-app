import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native';
import styles from '../src/styles/homeStyles';

const pizzas = [
    {
        id: 1,
        nombre: 'Pizza Pepperoni',
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
];

export default function Home() {
    const { width } = useWindowDimensions();

    const isTablet = width >= 768;
    const isDesktop = width >= 1024;

    const renderCategorias = () => {
        const botones = (
            <>
                <TouchableOpacity
                    style={[
                        styles.tabActivo,
                        isDesktop && styles.tabDesktop,
                    ]}
                >
                    <Text
                        style={[
                            styles.tabTextoActivo,
                            isDesktop && styles.tabTextoDesktop,
                        ]}
                    >
                        Pizzas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tab,
                        isDesktop && styles.tabDesktop,
                    ]}
                >
                    <Text
                        style={[
                            styles.tabTexto,
                            isDesktop && styles.tabTextoDesktop,
                        ]}
                    >
                        Pastas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tab,
                        isDesktop && styles.tabDesktop,
                    ]}
                >
                    <Text
                        style={[
                            styles.tabTexto,
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

                {/* Header */}
                <Text style={styles.title}>Menú Principal</Text>

                {/* Categorías */}
                {renderCategorias()}

                {/* Lista */}
                <ScrollView
                    showsVerticalScrollIndicator={true} // 🔥 barra vertical visible
                    contentContainerStyle={[
                        styles.lista,
                        isTablet && styles.listaDesktop,
                    ]}
                >
                    {pizzas.map((pizza) => (
                        <View
                            key={pizza.id}
                            style={[
                                styles.card,
                                isDesktop && styles.cardDesktop,
                                isTablet && !isDesktop && styles.cardTablet,
                            ]}
                        >
                            <Image source={pizza.imagen} style={styles.imagen} />

                            <View style={styles.info}>
                                <Text style={styles.nombre}>{pizza.nombre}</Text>

                                <TouchableOpacity
                                    style={[
                                        styles.boton,
                                        isDesktop && styles.botonDesktop,
                                    ]}
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
                </ScrollView>

            </View>
        </View>
    );
}