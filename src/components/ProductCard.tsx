import { useRef } from "react";
import { Animated, Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import styles from "../styles/homeStyles";

type Props = {
    item: any;
    onAdd: (item: any) => void;
    onCustomize: () => void;
};

export default function ProductCard({ item, onAdd, onCustomize }: Props) {

    const { width } = useWindowDimensions();
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const pressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.85,
            useNativeDriver: true,
        }).start();
    };

    const pressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const getCardStyle = () => {
        if (width > 1000) return styles.cardDesktop;
        if (width > 600) return styles.cardTablet;
        return styles.card;
    };

    return (
        <View style={getCardStyle()}>
            <Image source={item.imagen} style={styles.imagen} />

            <View style={styles.info}>
                <Text style={styles.nombre}>{item.nombre}</Text>

                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <TouchableOpacity
                        style={styles.boton}
                        onPressIn={pressIn}
                        onPressOut={pressOut}
                        onPress={() => {
                            if (item.id === 4) {
                                onCustomize();
                            } else {
                                onAdd(item);
                            }
                        }}
                    >
                        <Text style={styles.botonTexto}>Agregar</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    );
}