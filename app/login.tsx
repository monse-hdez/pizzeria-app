import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
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
import { auth } from "../firebaseConfig";
import styles from "../src/styles/loginStyles";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(40)).current;
    const router = useRouter();
    const handleLogin = async () => {
        if (!email || !password) {
            setErrorMsg("Completa todos los campos");
            return;
        }

        try {
            setLoading(true);
            setErrorMsg(""); // limpiar error

            await signInWithEmailAndPassword(auth, email, password);

            router.replace("/Home");

        } catch (error: any) {

            console.log(error.code);

            if (error.code === "auth/invalid-email") {
                setErrorMsg("Correo no válido");
            }
            else if (error.code === "auth/invalid-credential") {
                // 🔥 fallback moderno
                setErrorMsg("Correo o contraseña incorrectos");
            }
            else {
                setErrorMsg("Error al iniciar sesión");
            }

        } finally {
            setLoading(false);
        }
    };

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
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text);
                                setErrorMsg("");
                            }}
                        />

                        <TextInput
                            placeholder="Contraseña"
                            secureTextEntry
                            style={styles.input}
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={(text) => {
                                setPassword(text);
                                setErrorMsg("");
                            }}
                        />
                        {errorMsg ? (
                            <Text style={{
                                color: "red",
                                marginBottom: 10,
                                textAlign: "center"
                            }}>
                                {errorMsg}
                            </Text>
                        ) : null}

                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                            onPress={handleLogin}
                        >
                            <Text style={styles.buttonText}>
                                {loading ? "Cargando..." : "Ingresar"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.replace("/forgot-password")}>
                            <Text style={styles.registerLink}>¿Olvidaste tu contraseña?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.replace("/register")}>
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