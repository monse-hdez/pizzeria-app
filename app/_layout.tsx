import { Stack } from "expo-router";
import { CartProvider } from "../app/CartContext";

export default function Layout() {
  return (
    <CartProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </CartProvider>
  );
}