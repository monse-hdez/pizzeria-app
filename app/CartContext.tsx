import React, { createContext, useContext, useMemo, useState } from "react";
import { ImageSourcePropType } from "react-native";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  img?: ImageSourcePropType;
  qty: number;
  extras?: string[];
  type?: "pizza" | "drink" | "custom" | "extra";
  cartKey?: string;
};

type CartItemInput = Omit<CartItem, "qty"> & {
  qty?: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItemInput) => void;
  increase: (cartKey: string) => void;
  decrease: (cartKey: string) => void;
  removeItem: (cartKey: string) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const makeKey = (item: { id: string; extras?: string[] }) => {
  const extrasKey = (item.extras ?? []).slice().sort().join("|");
  return `${item.id}-${extrasKey}`;
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItemInput) => {
    const qtyToAdd = item.qty ?? 1;
    const cartKey = makeKey(item);

    setItems((prev) => {
      const existing = prev.find((p) => p.cartKey === cartKey);

      if (existing) {
        return prev.map((p) =>
          p.cartKey === cartKey ? { ...p, qty: p.qty + qtyToAdd } : p
        );
      }

      return [...prev, { ...item, qty: qtyToAdd, cartKey }];
    });
  };

  const increase = (cartKey: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.cartKey === cartKey ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrease = (cartKey: string) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.cartKey === cartKey && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (cartKey: string) => {
    setItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };

  const clearCart = () => setItems([]);

  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.qty, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, increase, decrease, removeItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return context;
}