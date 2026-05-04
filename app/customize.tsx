import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useCart } from "../app/CartContext";
import styles from "../src/styles/customStyles";
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
  const router = useRouter();
  const precioBase = 150;
  const { addItem } = useCart();

  const ingredientes = [
    {
      nombre: "Queso",
      precio: 20,
      img: require("../assets/images/ingredientes/cheese.png"),
    },
    {
      nombre: "Pepperoni",
      precio: 30,
      img: require("../assets/images/ingredientes/pepperoni.png"),
    },
    {
      nombre: "Jalapeños",
      precio: 15,
      img: require("../assets/images/ingredientes/chilli.png"),
    },
    {
      nombre: "Piña",
      precio: 25,
      img: require("../assets/images/ingredientes/pina.png"),
    },
    {
      nombre: "Philadelphia",
      precio: 35,
      img: require("../assets/images/ingredientes/philadelphia.png"),
    },
    {
      nombre: "Champiñón",
      precio: 20,
      img: require("../assets/images/ingredientes/champinion.png"),
    },
    {
      nombre: "Cebolla",
      precio: 10,
      img: require("../assets/images/ingredientes/cebolla.png"),
    },
    {
      nombre: "Tocino",
      precio: 40,
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

  const total = precioBase + ingredientes
  .filter((item) => seleccionados.includes(item.nombre))
  .reduce((sum, item) => sum + item.precio, 0);

const agregarAlCarrito = () => {
  const nuevaPizza = {
    id: Date.now().toString(), // importante que sea string
    name: "Pizza Personalizada",
    price: total,
    img: require("../assets/images/ingredientes/pizzas.png"),
  };

  addItem(nuevaPizza);

  router.back(); // regresa al home
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

      <Text style={styles.totalText}>
        Total: ${total}
      </Text>

      {/* Botón */}
      <TouchableOpacity 
        style={styles.button}
        onPress={agregarAlCarrito}
        >
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}