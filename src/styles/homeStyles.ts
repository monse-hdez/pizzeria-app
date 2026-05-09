import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        paddingTop: 110,
        paddingHorizontal: 20,
        overflow: 'hidden',
        flex: 1,
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
        marginBottom: 10,
        fontWeight: "bold",
        fontStyle: "italic",
        letterSpacing: 4,
    },

    categoriasScroll: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
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
        marginHorizontal: 5,
        alignSelf: 'center',
    },

    tabActivo: {
        backgroundColor: '#F4A261',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 12,
        marginHorizontal: 5,
        alignSelf: 'center',
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
        backgroundColor: '#2c2a29',
        borderRadius: 15,
        marginBottom: 15,
        overflow: 'hidden',
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
        height: 120,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    info: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 100,
    },

    nombre: {
        color: '#f7f6f4',
        fontSize: 18,
        fontWeight: 'bold',
    },


    boton: {
        backgroundColor: '#2ECC71',
        paddingHorizontal: 15,
        borderRadius: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonTexto: {
        color: '#f8f8f8',
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
        overflow: 'hidden',
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
        color: '#f9f7f7',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    menuItem: {
        color: '#fdf6f6',
        fontSize: 16,
        marginBottom: 15,
    },
    cartBadge: {
        position: 'absolute',
        top: -6,
        right: -6,
        backgroundColor: 'red',
        borderRadius: 999,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cartBadgeText: {
        color: '#fcf9f9',
        fontSize: 12,
        fontWeight: 'bold',
    },

    
});

export default styles;