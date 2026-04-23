import { useRouter } from "expo-router";
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
    const router = useRouter();

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
                            onPress={() => router.push("/Home")}
                        >
                            <Text style={styles.buttonText}>Ingresar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push("/forgot-password")}>
                            <Text style={styles.registerLink}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push("/register")}>
                            <Text style={styles.link}> ¿No tienes cuenta? <Text style={styles.registerLink}>
                                Regístrate
                            </Text></Text>

                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}