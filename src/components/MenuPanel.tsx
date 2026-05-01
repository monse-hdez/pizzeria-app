import { useEffect } from 'react';
import { Animated, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/homeStyles";

type Props = {
    visible: boolean;
    slideMenu: Animated.Value;
    toggleMenu: () => void;
    cerrarSesion: () => void;
};

export default function MenuPanel({ visible, slideMenu, toggleMenu, cerrarSesion }: Props) {

    useEffect(() => {
        Animated.timing(slideMenu, {
            toValue: visible ? 0 : -300,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);


    if (!visible) return null;

    return (
        <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 999
        }}>

            {/* FONDO OSCURO (bloquea todo) */}
            <TouchableOpacity
                activeOpacity={1}
                onPress={toggleMenu}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}
            />

            {/*  MENÚ */}
            <Animated.View style={[
                styles.menuPanel,
                {
                    transform: [{ translateX: slideMenu }],
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 250,
                    height: '100%',
                    zIndex: 1000
                }
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

        </View>
    );
}