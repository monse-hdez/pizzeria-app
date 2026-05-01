import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        paddingTop: 115,
        paddingHorizontal: 15,
    },

    wrapper: {
        flex: 1,
        width: '100%',
        maxWidth: 1200,
        alignSelf: 'center',
    },

    title: {
        color: "#fff",
        fontSize: 35,
        textAlign: "center",
        marginBottom: 2,
        fontWeight: "bold",
        fontStyle: "italic",
        letterSpacing: 4,
    },

    categoriasScroll: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        marginTop: 30,

    },

    categoriasDesktop: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        marginBottom: 15,
    },

    tab: {
        backgroundColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 12,
        marginHorizontal: 20,
    },

    tabActivo: {
        backgroundColor: '#F4A261',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 12,
        marginHorizontal: 5,
    },

    tabTexto: {
        color: '#FFF',
        fontSize: 17,
    },

    tabTextoActivo: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17,
    },

    tabDesktop: {
        paddingVertical: 14,
        paddingHorizontal: 30,
    },

    tabTextoDesktop: {
        fontSize: 18,
    },

    lista: {
        paddingBottom: 20,
    },

    listaDesktop: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
    },

    card: {
        backgroundColor: '#2C2C2C',
        borderRadius: 15,
        marginBottom: 15,
        overflow: 'hidden',
        width: '100%',
        alignItems: "center",
    },

    cardTablet: {
        width: '45%',
        marginBottom: 20,
        alignItems: "center",
    },

    cardDesktop: {
        width: 320,
        margin: 10,
        alignItems: "center",
    },

    imagen: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },

    info: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    nombre: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },


    boton: {
        backgroundColor: '#2ECC71',
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 15,
    },

    botonTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    },

    botonDesktop: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },

    botonTextoDesktop: {
        fontSize: 16,
    },
    cartButton: {
        position: 'absolute',
        top: 60,
        right: 20,
        backgroundColor: '#E67E22',
        padding: 15,
        borderRadius: 50,
        zIndex: 10,
        alignItems: "center",
    },

    cartPanel: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 280,
        backgroundColor: '#2C2C2C',
        padding: 20,
        zIndex: 9,
        alignItems: "center",
    },

    cartTitle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        alignItems: "center",
    },
    menuButton: {
        position: 'absolute',
        top: 60,
        left: 20,
        backgroundColor: '#E67E22',
        padding: 15,
        borderRadius: 50,
        zIndex: 10,
    },

    menuPanel: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: 260,
        backgroundColor: '#2C2C2C',
        padding: 20,
        zIndex: 9,
    },

    menuTitle: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    menuItem: {
        color: '#FFF',
        fontSize: 16,
        marginBottom: 15,
    },

});

export default styles;