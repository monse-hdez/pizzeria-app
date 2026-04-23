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
    {
      nombre: "Queso",
      img: require("../assets/images/ingredientes/cheese.png"),
    },
    {
      nombre: "Pepperoni",
      img: require("../assets/images/ingredientes/pepperoni.png"),
    },
    {
      nombre: "Jalapeños",
      img: require("../assets/images/ingredientes/chilli.png"),
    },
    {
      nombre: "Piña",
      img: require("../assets/images/ingredientes/pina.png"),
    },
    {
      nombre: "Philadelphia",
      img: require("../assets/images/ingredientes/philadelphia.png"),
    },
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
      <Text style={styles.title}>Arma tu Pizza 🍕</Text>

      {/* Contenedor de pizza con ingredientes encima */}
      <View style={styles.pizzaContainer}>
        {/* Pizza base */}
        <Image
          source={require("../assets/images/ingredientes/pizzas.png")}
          style={styles.pizzaBase}
          resizeMode="contain"
        />

        {/* Ingredientes encima de la pizza */}
        {seleccionados.includes("Queso") && (
          <Image
            source={require("../assets/images/ingredientes/cheese.png")}
            style={styles.overlay}
            resizeMode="contain"
          />
        )}

        {seleccionados.includes("Pepperoni") && (
          <Image
            source={require("../assets/images/ingredientes/pepperoni.png")}
            style={styles.overlay}
            resizeMode="contain"
          />
        )}

        {seleccionados.includes("Jalapeños") && (
          <Image
            source={require("../assets/images/ingredientes/chilli.png")}
            style={styles.overlay}
            resizeMode="contain"
          />
        )}

        {seleccionados.includes("Piña") && (
          <Image
            source={require("../assets/images/ingredientes/pina.png")}
            style={styles.overlay}
            resizeMode="contain"
          />
        )}

        {seleccionados.includes("Philadelphia") && (
          <Image
            source={require("../assets/images/ingredientes/philadelphia.png")}
            style={styles.overlay}
            resizeMode="contain"
          />
        )}
      </View>

      {/* Ingredientes seleccionables */}
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
    color: "#6B3E26",
  },

  /* Contenedor de pizza */
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

  /* Ingredientes encima */
  overlay: {
    width: 250,
    height: 250,
    position: "absolute",
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
    backgroundColor: "#fff7f5",
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