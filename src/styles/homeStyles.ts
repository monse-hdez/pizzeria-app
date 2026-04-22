import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        paddingTop: 50,
        paddingHorizontal: 15,
        alignItems: 'center',
    },

    wrapper: {
        width: '100%',
        maxWidth: 1200,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
        textAlign: 'center',
    },

    // 🔥 CATEGORÍAS

    categoriasScroll: {
        flexDirection: 'row',
        justifyContent: 'center', // ✅ centrado en celular
        alignItems: 'center',
        paddingBottom: 10,
        flexGrow: 1, // 🔥 importante para centrar
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
        fontSize: 14,
    },

    tabTextoActivo: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
    },

    tabDesktop: {
        paddingVertical: 14,
        paddingHorizontal: 30,
    },

    tabTextoDesktop: {
        fontSize: 18,
    },

    // 🔥 LISTA

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
    },

    cardTablet: {
        width: '45%',
        marginBottom: 20,
    },

    cardDesktop: {
        width: 320,
        margin: 10,
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

    // 🔥 BOTÓN

    boton: {
        backgroundColor: '#2ECC71',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },

    botonTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 13,
    },

    botonDesktop: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },

    botonTextoDesktop: {
        fontSize: 16,
    },
});

export default styles;