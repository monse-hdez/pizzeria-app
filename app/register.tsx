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

import {
  createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  doc,
  setDoc
} from 'firebase/firestore';

import {
  auth,
  db
} from '../src/services/firebaseConfig';

export default function RegisterScreen() {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');

  // OBTENER COORDENADAS
  const obtenerCoordenadas = async (
    direccion: string
  ) => {

    try {

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=AIzaSyBZ_we-sNh-QlfuDyeSAwWdi3P1hm3VrwY`
      );

      const data = await response.json();

      if (data.results.length > 0) {

        const location =
          data.results[0].geometry.location;

        return {
          latitude: location.lat,
          longitude: location.lng,
        };
      }

      return null;

    } catch (error) {

      console.log(error);

      return null;
    }
  };

  // REGISTRO
  const handleRegister = async () => {

    console.log("Entrando al registro");

    if (
      !nombre ||
      !correo ||
      !password ||
      !direccion
    ) {

      Alert.alert(
        "Error",
        "Completa todos los campos"
      );

      return;
    }

    try {

      // CREAR USUARIO
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          correo,
          password
        );

      const user = userCredential.user;

      // OBTENER COORDENADAS
      const coords =
        await obtenerCoordenadas(direccion);

      console.log("COORDS:", coords);

      if (!coords) {

        console.log(
          "No se obtuvieron coordenadas"
        );
      }

      // GUARDAR EN FIRESTORE
      await setDoc(
        doc(db, "usuarios", user.uid),
        {

          nombre,
          correo,
          direccion,

          latitude:
            coords?.latitude || 0,

          longitude:
            coords?.longitude || 0,

          createdAt: new Date(),
        }
      );

      Alert.alert(
        "Éxito",
        "Usuario registrado correctamente"
      );

      router.replace('/login');

    } catch (error: any) {

      console.log("ERROR:", error);

      if (
        error.code ===
        'auth/email-already-in-use'
      ) {

        Alert.alert(
          "Error",
          "Ese correo ya existe"
        );

      } else if (
        error.code ===
        'auth/weak-password'
      ) {

        Alert.alert(
          "Error",
          "La contraseña debe tener mínimo 6 caracteres"
        );

      } else if (
        error.code ===
        'auth/invalid-email'
      ) {

        Alert.alert(
          "Error",
          "Correo inválido"
        );

      } else {

        Alert.alert(
          "Error",
          "Ocurrió un problema"
        );
      }
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Crear Cuenta
      </Text>

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

      <TextInput
        placeholder="Dirección"
        style={styles.input}
        value={direccion}
        onChangeText={setDireccion}
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
});