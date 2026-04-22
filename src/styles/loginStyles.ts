import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
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
        fontSize: 45,
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
        fontStyle: "italic",
    },

    card: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,

        width: "85%",
        maxWidth: 400,
        alignSelf: "center",

        minWidth: 280,

        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
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