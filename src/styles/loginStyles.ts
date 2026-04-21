import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scroll: {
        flexGrow: 1,
    },

    content: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.4)",
    },

    title: {
        color: "#fff",
        fontSize: 32,
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        width: "100%",
        maxWidth: 400,
        alignSelf: "center",

      
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        width: "100%",
    },

    button: {
        backgroundColor: "#d35400",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 5,
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

    link: {
        marginTop: 10,
        textAlign: "center",
        color: "#555",
    },
});

export default styles;