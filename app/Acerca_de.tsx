import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Acerca_De() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* TÍTULO */}
      <Text style={styles.title}>🍕 Pizzería Bella</Text>

      {/* IMAGEN */}
      <Image
        source={require("../assets/homeImg/pepperoni.jpg")}
        style={styles.image}
      />

      {/* INFORMACIÓN */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>¿Quiénes somos?</Text>

        <Text style={styles.text}>
          Pizzería Bella es un restaurante dedicado a ofrecer pizzas
          deliciosas, bebidas refrescantes y una experiencia agradable
          para todos nuestros clientes.
        </Text>

        <Text style={styles.text}>
          Nuestro objetivo es brindar comida de calidad con ingredientes
          frescos y un excelente servicio.
        </Text>

        <Text style={styles.subtitle}>📍 Dirección</Text>

        <Text style={styles.text}>
          Calle Principal #123, Centro
        </Text>

        <Text style={styles.subtitle}>📞 Contacto</Text>

        <Text style={styles.text}>
          Teléfono: 348-000-0000
        </Text>

        <Text style={styles.text}>
          Email: pizzeriabella@gmail.com
        </Text>

        <Text style={styles.subtitle}>🕒 Horarios</Text>

        <Text style={styles.text}>
          Lunes a Domingo: 1:00 PM - 11:00 PM
        </Text>
      </View>

      {/* BOTÓN */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Volver al Inicio</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f4e1c1",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#c0392b",
    marginTop: 20,
    marginBottom: 20,
  },

  image: {
    width: 250,
    height: 180,
    borderRadius: 20,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff5e6",
    padding: 20,
    borderRadius: 20,
    width: "100%",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#c0392b",
    marginTop: 10,
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#c0392b",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 30,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});