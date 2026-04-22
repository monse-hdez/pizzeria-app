import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions
} from "react-native";

type CartItem = {
  id: number;
  name: string;
  price: number;
  img: any;
  qty: number;
};

export default function Cart() {
  const { width } = useWindowDimensions();
  const isWeb = width > 600;

  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Pizza Pepperoni",
      price: 150,
      img: require("../assets/images/carrito/pizzza.png"),
      qty: 1,
    },
    {
      id: 2,
      name: "Refresco Cola",
      price: 50,
      img: require("../assets/images/carrito/refresco.png"),
      qty: 1,
    },
  ]);

  const increase = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decrease = (id: number) => {
    setItems(items.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.screen,
        { flexGrow: 1 },
        isWeb && { justifyContent: "center", alignItems: "center" }
      ]}
    >
      <View style={[styles.container, isWeb && { width: 400 }]}>

        <Text style={styles.header}>🛒 Carrito de Compras</Text>

        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.img} style={styles.img} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>${item.price}.00</Text>

              <View style={styles.controls}>
                <TouchableOpacity onPress={() => decrease(item.id)} style={styles.btn}>
                  <Text style={styles.btnText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.qty}</Text>

                <TouchableOpacity onPress={() => increase(item.id)} style={styles.btn}>
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View>
          <View style={styles.total}>
            <Text style={styles.totalText}>Total: ${total}.00</Text>
          </View>

          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Finalizar Compra</Text>
          </TouchableOpacity>

          <Image
            source={require("../assets/images/carrito/pizzabajo.png")}
            style={styles.bottomImage}
          />
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: "#d6c39a",
    padding: 15,
  },

  container: {
    width: "100%",
    backgroundColor: "#f4e1c1",
    borderRadius: 20,
    padding: 15,
    flex: 1,
    justifyContent: "space-between",
  },

  header: {
    textAlign: "center",
    fontSize: 22,
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
    width: 65,
    height: 65,
    marginRight: 10,
  },

  info: {
    flex: 1,
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  btn: {
    backgroundColor: "#c0392b",
    borderRadius: 8,
    paddingHorizontal: 12,
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
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },

  totalText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  checkoutBtn: {
    backgroundColor: "#2ecc71",
    padding: 14,
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
    height: 180,
    marginTop: 15,
    borderRadius: 15,
  },
});