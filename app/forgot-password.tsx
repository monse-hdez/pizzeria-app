import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleReset = async () => {
        if (!email) {
            Alert.alert("Error", "Ingresa tu correo");
            return;
        }

        try {
            setLoading(true);

            await sendPasswordResetEmail(auth, email);

            Alert.alert(
                "Listo",
                "Si el correo está registrado, recibirás un enlace 📩"
            );

            setEmail("");

        } catch (error: any) {
            Alert.alert("Error", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ImageBackground
            source={require("../assets/passwordImg/pizza-fondo.jpg")}
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
            }}
            resizeMode="cover"
        >
            <View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.9)", // aquí está la "sombra"
                }}
            />

            {/* BOTÓN REGRESAR */}
            <TouchableOpacity
                style={{
                    position: "absolute",
                    top: 50,
                    left: 20,
                }}
                onPress={() => router.replace("/login")}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: "#fffcfc",
                        fontWeight: "bold",
                    }}
                >
                    ← Regresar
                </Text>
            </TouchableOpacity>

            {/* CARD */}
            <View
                style={{
                    width: "100%",
                    maxWidth: 400,
                    backgroundColor: "#fff",
                    padding: 20,
                    borderRadius: 15,
                    elevation: 5,
                }}
            >
                <Text
                    style={{
                        fontSize: 22,
                        marginBottom: 15,
                        textAlign: "center",
                        fontWeight: "bold",

                    }}
                >
                    Recuperar contraseña
                </Text>

                <TextInput
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={{
                        borderWidth: 1,
                        borderColor: "#ccc",
                        padding: 12,
                        borderRadius: 10,
                        marginBottom: 15,
                    }}
                />

                <TouchableOpacity
                    onPress={handleReset}
                    disabled={loading}
                    style={{
                        backgroundColor: "#e6731b",
                        padding: 12,
                        borderRadius: 10,
                        alignItems: "center",
                    }}
                >
                    <Text style={{ color: "#fff", fontWeight: "bold" }}>
                        {loading ? "Enviando..." : "Enviar"}
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
