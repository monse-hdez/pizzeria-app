import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../src/services/firebaseConfig';

export default function RegisterScreen() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

const handleRegister = async () => {
  console.log("Botón funcionando");

  if (!nombre || !correo || !password) {
    alert("Completa todos los campos");
    return;
  }

  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        correo,
        password
      );

    console.log("USUARIO CREADO:", userCredential);

    alert("Registro guardado correctamente");

    router.replace('/login');

  } catch (error: any) {

    console.log("ERROR COMPLETO:", error);

    if (error.code === 'auth/email-already-in-use') {

      alert("Ese correo ya existe");

    } else if (error.code === 'auth/weak-password') {

      alert("La contraseña debe tener mínimo 6 caracteres");

    } else if (error.code === 'auth/invalid-email') {

      alert("Correo inválido");

    } else {

      alert(error.message);
    }
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>

      <TextInput
        placeholder="Nombre"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        placeholder="Correo"
        style={styles.input}
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>
          Registrarse
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,

    // Aquí cambias el fondo
    backgroundColor: '#f4e1c1',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#8B0000',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d9b382',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#E63946',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#8B0000',
    fontWeight: 'bold',
    fontSize: 15,
  },
});