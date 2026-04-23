import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Customize() {
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  const ingredientes = [
    { nombre: "Queso", img: require("../assets/images/ingredientes/cheese.png") },
    { nombre: "Pepperoni", img: require("../assets/images/ingredientes/pepperoni.png") },
    { nombre: "Jalapeños", img: require("../assets/images/ingredientes/chilli.png") },
    { nombre: "Piña", img: require("../assets/images/ingredientes/pina.png") },
    { nombre: "Philadelphia", img: require("../assets/images/ingredientes/philadelphia.png") },
  ];

  const toggleIngrediente = (item: string) => {
    if (seleccionados.includes(item)) {
      setSeleccionados(seleccionados.filter((i) => i !== item));
    } else {
      setSeleccionados([...seleccionados, item]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Arma tu Pizza</Text>

      {/* Imagen principal */}
      <Image
        source={require("../assets/images/ingredientes/pizza.png")}
        style={styles.pizza}
        resizeMode="contain"
      />

      {/* Ingredientes */}
      <View style={styles.grid}>
        {ingredientes.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleIngrediente(item.nombre)}
            style={[
              styles.card,
              seleccionados.includes(item.nombre)
                ? styles.selectedCard
                : styles.defaultCard,
            ]}
          >
            <Image
              source={item.img}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.cardText}>{item.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botón */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5e6d3",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
  },

  pizza: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },

  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  defaultCard: {
    borderWidth: 1,
    borderColor: "#ccc",
  },

  selectedCard: {
    borderWidth: 2,
    borderColor: "#c0392b",
  },

  icon: {
    width: 55,
    height: 55,
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    fontWeight: "500",
  },

  button: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#c0392b",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});