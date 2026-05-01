import { Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import styles from "../styles/homeStyles";

type Props = {
    item: any;
    onAdd: (item: any) => void;
    onCustomize: () => void;
};

export default function ProductCard({ item, onAdd, onCustomize }: Props) {

    const { width } = useWindowDimensions(); // ✅ DENTRO del componente

    const getCardStyle = () => {
        if (width > 1000) return styles.cardDesktop;
        if (width > 600) return styles.cardTablet;
        return styles.card;
    };

    return (
        <View style={getCardStyle()}>
            <Image source={item.imagen} style={styles.imagen} />

            <View style={styles.info}>
                <Text style={styles.nombre}>{item.nombre}</Text>

                <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {
                        if (item.id === 4) {
                            onCustomize();
                        } else {
                            onAdd(item);
                        }
                    }}
                >
                    <Text style={styles.botonTexto}>Agregar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}