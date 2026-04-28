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
    {
      nombre: "Champiñón",
      img: require("../assets/images/ingredientes/champinion.png"),
    },
    {
      nombre: "Cebolla",
      img: require("../assets/images/ingredientes/cebolla.png"),
    },
    {
      nombre: "Tocino",
      img: require("../assets/images/ingredientes/tocino.png"),
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

      {/* Contenedor de pizza */}
      <View style={styles.pizzaContainer}>
        {/* Pizza base */}
        <Image
          source={require("../assets/images/ingredientes/pizzas.png")}
          style={styles.pizzaBase}
          resizeMode="contain"
        />

        {/* QUESO */}
        {seleccionados.includes("Queso") && (
          <>
            <Image
              source={require("../assets/images/ingredientes/cheese.png")}
              style={styles.queso1}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/cheese.png")}
              style={styles.queso2}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/cheese.png")}
              style={styles.queso3}
              resizeMode="contain"
            />
          </>
        )}

        {/* PEPPERONI */}
        {seleccionados.includes("Pepperoni") && (
          <>
            <Image
              source={require("../assets/images/ingredientes/pepperoni.png")}
              style={styles.pepperoni1}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/pepperoni.png")}
              style={styles.pepperoni2}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/pepperoni.png")}
              style={styles.pepperoni3}
              resizeMode="contain"
            />
          </>
        )}

        {/* JALAPEÑOS */}
        {seleccionados.includes("Jalapeños") && (
          <>
            <Image
              source={require("../assets/images/ingredientes/chilli.png")}
              style={styles.jalapeno1}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/chilli.png")}
              style={styles.jalapeno2}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/chilli.png")}
              style={styles.jalapeno3}
              resizeMode="contain"
            />
          </>
        )}

        {/* PIÑA */}
        {seleccionados.includes("Piña") && (
          <>
            <Image
              source={require("../assets/images/ingredientes/pina.png")}
              style={styles.pina1}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/pina.png")}
              style={styles.pina2}
              resizeMode="contain"
            />
          </>
        )}

        {/* PHILADELPHIA */}
        {seleccionados.includes("Philadelphia") && (
          <>
            <Image
              source={require("../assets/images/ingredientes/philadelphia.png")}
              style={styles.phila1}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/philadelphia.png")}
              style={styles.phila2}
              resizeMode="contain"
            />
          </>
        )}
        {/* CHAMPIÑON */}
        {seleccionados.includes("Champiñón") && (
          <>
            <Image
              source={require("../assets/images/ingredientes/champinion.png")}
              style={styles.champ1}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/champinion.png")}
              style={styles.champ2}
              resizeMode="contain"
            />
          </>
        )}
        {/* CEBOLLA */}
        {seleccionados.includes("Cebolla") && (
          <>
            <Image
              source={require("../assets/images/ingredientes/cebolla.png")}
              style={styles.cebo1}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/cebolla.png")}
              style={styles.cebo2}
              resizeMode="contain"
            />
          </>
        )}
        {/* TOCINO */}
        {seleccionados.includes("Tocino") && (
          <>
            <Image
              source={require("../assets/images/ingredientes/tocino.png")}
              style={styles.toci1}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/ingredientes/tocino.png")}
              style={styles.toci2}
              resizeMode="contain"
            />
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

  /* QUESO */
  queso1: {
    position: "absolute",
    width: 45,
    height: 45,
    top: 40,
    left: 50,
  },

  queso2: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 120,
    right: 60,
  },

  queso3: {
    position: "absolute",
    width: 42,
    height: 42,
    bottom: 50,
    left: 90,
  },

  /* PEPPERONI */
  pepperoni1: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 60,
    right: 50,
  },

  pepperoni2: {
    position: "absolute",
    width: 38,
    height: 38,
    top: 140,
    left: 60,
  },

  pepperoni3: {
    position: "absolute",
    width: 42,
    height: 42,
    bottom: 40,
    right: 80,
  },

  /* JALAPEÑOS */
  jalapeno1: {
    position: "absolute",
    width: 45,
    height: 45,
    top: 35,
    left: 100,
  },

  jalapeno2: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 130,
    right: 40,
  },

  jalapeno3: {
    position: "absolute",
    width: 42,
    height: 42,
    bottom: 60,
    left: 70,
  },

  /* PIÑA */
  pina1: {
    position: "absolute",
    width: 45,
    height: 45,
    top: 80,
    left: 40,
  },

  pina2: {
    position: "absolute",
    width: 42,
    height: 42,
    bottom: 70,
    right: 60,
  },

  /* PHILADELPHIA */
  phila1: {
    position: "absolute",
    width: 40,
    height: 42,
    top: 90,
    right: 70,
  },

  phila2: {
    position: "absolute",
    width: 42,
    height: 42,
    bottom: 50,
    left: 80,
  },
  /* CHAMPIÑON */
  champ1: {
    position: "absolute",
    width: 40,
    height: 42,
    top: 90,
    right: 100,
  },

  champ2: {
    position: "absolute",
    width: 42,
    height: 42,
    bottom: 50,
    left: 110,
  },
  /* CEBOLLA */
  cebo1: {
    position: "absolute",
    width: 40,
    height:42,
    top: 90,
    right: 120,
  },

  cebo2: {
    position: "absolute",
    width: 42,
    height: 42,
    bottom: 50,
    left: 150,
  },
  /* TOCINO */
  toci1: {
    position: "absolute",
    width: 40,
    height: 42,
    top: 90,
    right: 30,
  },

  toci2: {
    position: "absolute",
    width: 70,
    height: 42,
    bottom: 50,
    left: 30,
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