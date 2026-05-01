import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";
import { useCart } from "./CartContext"; // ✅ correcto

// ====== COMPONENTE ======
export default function Cart() {
  const { items, increase, decrease, total } = useCart(); // ✅ usar funciones del context
  const { width } = useWindowDimensions();
  const isWeb = width > 600;
  const router = useRouter();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
        paddingBottom: 30
      }}
    >
      <View style={[styles.container, isWeb && { width: 400 }]}>

        <Text style={styles.header}>🛒 Carrito de Compras</Text>

        {/* CARRITO VACÍO */}
        {items.length === 0 && (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Tu carrito está vacío 🥲
          </Text>
        )}

        {/* PRODUCTOS */}
        {items.map((item) => (
          <View key={item.cartKey} style={styles.card}>
            {item.img && <Image source={item.img} style={styles.img} />}

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>${item.price}.00</Text>

              <View style={styles.controls}>
                <TouchableOpacity
                  onPress={() => decrease(item.cartKey!)}
                  style={styles.btn}
                >
                  <Text style={styles.btnText}>−</Text>
                </TouchableOpacity>

                <Text style={styles.qty}>{item.qty}</Text>

                <TouchableOpacity
                  onPress={() => increase(item.cartKey!)}
                  style={styles.btn}
                >
                  <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* TOTAL */}
        <View>
          <View style={styles.total}>
            <Text style={styles.totalText}>Total: ${total}.00</Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutBtn}
            onPress={() =>
              router.push({
                pathname: "/checkout",
                params: { items: JSON.stringify(items) }
              })
            }
          >
            <Text style={styles.checkoutText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

// ====== ESTILOS ======
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#d6c39a",
    padding: 15,
  },

  container: {
    width: "100%",
    backgroundColor: "#f4e1c1",
    borderRadius: 20,
    padding: 15,
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
});