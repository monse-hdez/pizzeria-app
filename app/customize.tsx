import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Customize() {
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  const ingredientes = [
    { nombre: "Queso", img: require("../assets/images/ingredientes/cheese.png") },
    { nombre: "Pepperoni", img: require("../assets/images/ingredientes/pepperoni.png") },
    { nombre: "Jalapeños", img: require("../assets/images/ingredientes/chilli.png") },
    { nombre: "Piña", img: require("../assets/images/ingredientes/pina.png") },
    { nombre: "Philadelphia", img: require("../assets/images/ingredientes/philadelphia.png") },
    { nombre: "Champiñón", img: require("../assets/images/ingredientes/champinion.png") },
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
      <Text style={styles.title}>Arma tu Pizza 🍕</Text>

      {/* Pizza */}
      <View style={styles.pizzaContainer}>
        <Image
          source={require("../assets/images/ingredientes/pizzas.png")}
          style={styles.pizzaBase}
          resizeMode="contain"
        />

        {/* Queso */}
        {seleccionados.includes("Queso") && (
          <>
            <Image source={require("../assets/images/ingredientes/cheese.png")} style={styles.queso1} />
            <Image source={require("../assets/images/ingredientes/cheese.png")} style={styles.queso2} />
            <Image source={require("../assets/images/ingredientes/cheese.png")} style={styles.queso3} />
          </>
        )}

        {/* Pepperoni */}
        {seleccionados.includes("Pepperoni") && (
          <>
            <Image source={require("../assets/images/ingredientes/pepperoni.png")} style={styles.pepperoni1} />
            <Image source={require("../assets/images/ingredientes/pepperoni.png")} style={styles.pepperoni2} />
            <Image source={require("../assets/images/ingredientes/pepperoni.png")} style={styles.pepperoni3} />
          </>
        )}
      </View>

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
            <Image source={item.img} style={styles.icon} />
            <Text style={styles.cardText}>{item.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4e1c1",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#6B3E26",
  },
  pizzaContainer: {
    width: 250,
    height: 250,
    position: "relative",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  pizzaBase: {
    width: 250,
    height: 250,
    position: "absolute",
  },

  queso1: { position: "absolute", width: 45, height: 45, top: 40, left: 50 },
  queso2: { position: "absolute", width: 40, height: 40, top: 120, right: 60 },
  queso3: { position: "absolute", width: 42, height: 42, bottom: 90, left: 90 },

  pepperoni1: { position: "absolute", width: 40, height: 40, top: 60, right: 50 },
  pepperoni2: { position: "absolute", width: 38, height: 38, top: 140, left: 60 },
  pepperoni3: { position: "absolute", width: 42, height: 42, bottom: 40, right: 80 },

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
  defaultCard: { borderWidth: 1, borderColor: "#ccc" },
  selectedCard: {
    borderWidth: 2,
    borderColor: "#c0392b",
    backgroundColor: "#fff7f5",
  },
  icon: { width: 55, height: 55, marginBottom: 8 },
  cardText: { fontSize: 14, fontWeight: "500" },

  button: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#c0392b",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});