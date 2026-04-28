import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

// ====== TIPOS ======
type CartItem = {
  id: number;
  name: string;
  price: number;
  img: any;
  qty: number;
};

type Props = {
  setItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

// ====== COMPONENTE ======
export default function Checkout({ setItems }: Props) {
  const { width } = useWindowDimensions();
  const isWeb = width > 600;

  // ====== PARAMS ======
  const params = useLocalSearchParams();

  const parsedItems: CartItem[] = params.items
    ? JSON.parse(params.items as string)
    : [];

  // ====== CÁLCULOS ======
  const subtotal = parsedItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  // ====== ACCIÓN ======
  const finalizarCompra = () => {
    alert("✅ Pedido realizado con éxito");
    setItems([]); // limpia carrito
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.screen,
        isWeb && { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <View style={[styles.ticket, isWeb && { width: 400 }]}>
        <Text style={styles.title}>🧾 Ticket de Compra</Text>

        {/* LISTA */}
        {parsedItems.length === 0 ? (
          <Text style={styles.empty}>No hay productos 🥲</Text>
        ) : (
          parsedItems.map((item) => (
            <View key={item.id} style={styles.row}>
              <Text style={styles.itemText}>
                {item.name} x{item.qty}
              </Text>
              <Text style={styles.itemText}>
                ${item.price * item.qty}.00
              </Text>
            </View>
          ))
        )}

        {/* DIVISOR */}
        <View style={styles.divider} />

        {/* RESUMEN */}
        <View style={styles.row}>
          <Text style={styles.label}>Subtotal</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>IVA (16%)</Text>
          <Text>${iva.toFixed(2)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>

        {/* BOTÓN */}
        <TouchableOpacity style={styles.button} onPress={finalizarCompra}>
          <Text style={styles.buttonText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// ====== ESTILOS ======
const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: "#d6c39a",
    padding: 20,
  },

  ticket: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#ccc",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  empty: {
    textAlign: "center",
    marginVertical: 20,
    color: "#888",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  itemText: {
    fontSize: 14,
  },

  label: {
    fontSize: 14,
    color: "#555",
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },

  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#c0392b",
  },

  divider: {
    borderBottomWidth: 1,
    borderStyle: "dashed",
    marginVertical: 10,
    borderColor: "#aaa",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#2ecc71",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});