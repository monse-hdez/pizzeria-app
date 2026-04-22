import React, { useEffect, useRef } from "react";
import {
    Animated,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import styles from "../src/styles/loginStyles";

export default function LoginScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(40)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(translateY, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <ImageBackground
            source={require("../assets/loginImg/pizza-bg.jpg")}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.overlay} />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >

                <Animated.View
                    style={[
                        styles.content,
                        {
                            opacity: fadeAnim,
                            transform: [{ translateY }],
                        },
                    ]}
                >
                    <Text style={styles.title}>Pizzería</Text>
                    <Text style={styles.title}>" Bella"</Text>

                    <View style={styles.card}>
                        <TextInput
                            placeholder="Correo electrónico"
                            style={styles.input}
                            placeholderTextColor="#999"
                        />

                        <TextInput
                            placeholder="Contraseña"
                            secureTextEntry
                            style={styles.input}
                            placeholderTextColor="#999"
                        />

                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.buttonText}>Ingresar</Text>
                        </TouchableOpacity>

                        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
                        <Text style={styles.link}>
                            ¿No tienes cuenta? Regístrate
                        </Text>
                    </View>
                </Animated.View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}