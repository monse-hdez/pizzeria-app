import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";



export default function ExtraIngredients() {
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

const pizzaName = "Pepperoni";
const pizzaBasePrice = 250;

  const extras = [
    { nombre: "Queso Extra", precio: 20, img: require("../assets/images/ingredientes/cheese.png") },
    { nombre: "Pepperoni Extra", precio: 30, img: require("../assets/images/ingredientes/pepperoni.png") },
    { nombre: "Champiñones Extra", precio: 15, img: require("../assets/images/ingredientes/champinion.png") },
    { nombre: "Jalapeños Extra", precio: 10, img: require("../assets/images/ingredientes/chilli.png") },
    { nombre: "Cebolla Extra", precio: 10, img: require("../assets/images/ingredientes/cebolla.png") },
    { nombre: "Tocino Extra", precio: 35, img: require("../assets/images/ingredientes/tocino.png") },
    { nombre: "Piña Extra", precio: 20, img: require("../assets/images/ingredientes/pina.png")},
    { nombre: "Salchicha Extra", precio: 25, img: require("../assets/images/ingredientes/salchicha.png")},
  ];

  const totalPrice =
  pizzaBasePrice +
  extras
    .filter((item) => seleccionados.includes(item.nombre))
    .reduce((sum, item) => sum + item.precio, 0);

  const toggleExtra = (item: string) => {
    if (seleccionados.includes(item)) {
      setSeleccionados(seleccionados.filter((i) => i !== item));
    } else {
      setSeleccionados([...seleccionados, item]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Ingredientes Extra 🍕</Text>
      <Text style={styles.subtitle}>
        Selecciona los ingredientes adicionales
      </Text>

      {/* Imagen principal */}
      <Image
        source={require("../assets/images/ingredientes/pizza.png")}
        style={styles.pizza}
        resizeMode="contain"
      />

      {/* Grid de ingredientes */}
      <View style={styles.grid}>
        {extras.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleExtra(item.nombre)}
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
      <Text style={styles.totalText}>
        {pizzaName}: ${totalPrice}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirmar Pedido</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5E6D3",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6B3E26",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
    textAlign: "center",
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
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  defaultCard: {
    borderWidth: 1,
    borderColor: "#ddd",
  },

  selectedCard: {
    borderWidth: 2,
    borderColor: "#C0392B",
  },

  icon: {
    width: 55,
    height: 55,
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },

  button: {
    marginTop: 15,
    width: "100%",
    backgroundColor: "#C0392B",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  totalText : {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#fff",
  },
});