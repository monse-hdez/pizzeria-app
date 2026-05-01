import { useEffect } from 'react';
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../app/CartContext";
import Cart from "../../app/cart";

type Props = {
    visible: boolean;
    slideAnim: Animated.Value;
    toggleCart: () => void;
};

export default function CartPanel({ visible, slideAnim, toggleCart }: Props) {

    const { items } = useCart();

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: visible ? 0 : 350,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    return (
        <View
            pointerEvents={visible ? "auto" : "none"}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 999,
                elevation: 999
            }}
        >

            {/* OVERLAY */}
            <TouchableOpacity
                activeOpacity={1}
                onPress={toggleCart}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: visible ? 'rgba(0,0,0,0.5)' : 'transparent'
                }}
            />

            {/*  PANEL */}
            <Animated.View
                style={{
                    transform: [{ translateX: slideAnim }],
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: 350,
                    height: '100%',
                    backgroundColor: '#d6c39a',
                    zIndex: 1000
                }}
            >

                {/*  BOTÓN CERRAR */}
                <TouchableOpacity onPress={toggleCart} style={{ padding: 10 }}>
                    <Text style={{ color: '#000' }}>✖ Cerrar</Text>
                </TouchableOpacity>

                {/*  CONTENIDO */}
                <Cart />

            </Animated.View>

        </View>
    );
}