import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

// 👇 definimos el tipo
type CartItem = {
  id: number;
  name: string;
  price: number;
  img: any;
  qty: number;
};

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Pizza Pepperoni",
      price: 150,
      img: require("../assets/(Ventana Carrito)/pizzza.png"),
      qty: 1,
    },
    {
      id: 2,
      name: "Refresco Cola",
      price: 50,
      img: require("../assets/(Ventana Carrito)/refresco.png"),
      qty: 1,
    },
  ]);

  // ➕ aumentar
  const increase = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ➖ disminuir
  const decrease = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🛒 Carrito de Compras</Text>

      {items.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.img} style={styles.img} />

          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>${item.price}.00</Text>

            <View style={styles.controls}>
              <TouchableOpacity
                onPress={() => decrease(item.id)}
                style={styles.btn}
              >
                <Text style={styles.btnText}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qty}>{item.qty}</Text>

              <TouchableOpacity
                onPress={() => increase(item.id)}
                style={styles.btn}
              >
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.total}>
        <Text style={styles.totalText}>Total: ${total}.00</Text>
      </View>

      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>
          Finalizar Compra
        </Text>
      </TouchableOpacity>

      <Image
        source={require("../assets/(Ventana Carrito)/pizzabajo.png")}
        style={styles.bottomImage}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f4e1c1",
  },

  header: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8e8d0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
  },

  img: {
    width: 60,
    height: 60,
    marginRight: 10,
  },

  info: {
    flex: 1,
  },

  name: {
    fontWeight: "bold",
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  btn: {
    backgroundColor: "#c0392b",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  btnText: {
    color: "white",
    fontSize: 16,
  },

  qty: {
    marginHorizontal: 10,
    fontWeight: "bold",
  },

  total: {
    backgroundColor: "#c0392b",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },

  totalText: {
    color: "white",
    fontWeight: "bold",
  },

  checkoutBtn: {
    backgroundColor: "#2ecc71",
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },

  checkoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  bottomImage: {
    width: "100%",
    height: 220,
    marginTop: 15,
    borderRadius: 20,
  },
});