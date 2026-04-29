import { StyleSheet } from "react-native";

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

  totalText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#c0392b",
  },
});