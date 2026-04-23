import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleReset = () => {
        if (!email) {
            Alert.alert("Error", "Ingresa tu correo");
            return;
        }

        // Aquí después puedes conectar Firebase
        Alert.alert("Listo", "Se envió un enlace de recuperación");
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
                Recuperar contraseña
            </Text>

            <TextInput
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                style={{
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 15,
                }}
            />

            <Button title="Enviar" onPress={handleReset} />
        </View>
    );
}