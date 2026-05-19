import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, db }
from "../src/services/firebaseConfig";

import {
  doc,
  getDoc
} from "firebase/firestore";
import { useCart }
from "./CartContext";

export default function Seguimiento() {

  const router = useRouter();
  const { clearCart } = useCart();

  const [estado, setEstado] =
    useState("Pedido recibido 🍕");

  const [progreso, setProgreso] =
    useState(35);
    const [nombre, setNombre] =
        useState("");

    const [direccion, setDireccion] =
        useState("");

  useEffect(() => {

    const obtenerUsuario = async () => {

  try {

    const user = auth.currentUser;

    if (!user) return;

    const docRef =
      doc(db, "usuarios", user.uid);

    const docSnap =
      await getDoc(docRef);

    if (docSnap.exists()) {

      const data = docSnap.data();

      setNombre(data.nombre);
      setDireccion(data.direccion);
    }

  } catch (error) {

    console.log(error);
  }
};

obtenerUsuario();

    const timer1 = setTimeout(() => {
      setEstado("Preparando pedido 👨‍🍳");
      setProgreso(55);
    }, 4000);

    const timer2 = setTimeout(() => {
      setEstado("Repartidor en camino 🛵");
      setProgreso(80);
    }, 8000);

    const timer3 = setTimeout(() => {
      setEstado("Pedido entregado ✅");
      setProgreso(100);
    }, 12000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };

  }, []);

  return (

    <View style={styles.container}>

      {/* MAPA */}
      <View style={styles.mapContainer}>

        {Platform.OS === "web" ? (

          <iframe
            src="https://maps.google.com/maps?q=20.6597,-103.3496&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{
              border: 0,
            }}
          />

        ) : (

          <View style={styles.fakeMap}>

            <Text style={styles.fakeMapText}>
              🍕 Mapa de seguimiento
            </Text>

            <Text style={styles.fakeMapSubtext}>
              Aquí aparecerá el mapa real
            </Text>

          </View>

        )}

      </View>

      {/* INFO */}
      <View style={styles.infoBox}>

        <Text style={styles.title}>
          Seguimiento de Pedido
        </Text>

        <Text style={styles.status}>
          {estado}
        </Text>

        {/* BARRA */}
        <View style={styles.progressBackground}>

          <View
            style={[
              styles.progressFill,
              { width: `${progreso}%` }
            ]}
          />

        </View>

        <Text style={styles.time}>
          Tiempo estimado: 15 min
        </Text>

        <Text style={styles.delivery}>
          🛵 Repartidor cerca de tu ubicación
        </Text>

        {/* BOTÓN */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => {
        clearCart();
        router.replace("/Home");
        }}
        >

          <Text style={styles.homeButtonText}>
            🍕 Volver al inicio
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#d6c39a",
  },

  mapContainer: {
    overflow: "hidden",
  },

  fakeMap: {
    width: "100%",
    height: 400,
    backgroundColor: "#bdc3c7",
    justifyContent: "center",
    alignItems: "center",
  },

  fakeMapText: {
    fontSize: 28,
    fontWeight: "bold",
  },

  fakeMapSubtext: {
    marginTop: 10,
    fontSize: 18,
  },

  infoBox: {
    flex: 1,
    backgroundColor: "#f4e1c1",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    marginTop: -20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },

  status: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "600",
  },

  progressBackground: {
    width: "100%",
    height: 14,
    backgroundColor: "#ddd",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#2ecc71",
    borderRadius: 20,
  },

  time: {
    fontSize: 18,
    marginBottom: 10,
  },

  delivery: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#c0392b",
  },

  homeButton: {
    marginTop: 25,
    backgroundColor: "#c0392b",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },

  homeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  userText: {
  fontSize: 18,
  marginBottom: 8,
},

});