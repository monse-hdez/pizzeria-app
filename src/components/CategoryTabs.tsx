import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/homeStyles";
type Props = {
    categoria: string;
    setCategoria: (cat: string) => void;
    isDesktop: boolean;
};

export default function CategoryTabs({ categoria, setCategoria, isDesktop }: Props) {
    const Tab = (name: string) => (
        <TouchableOpacity
            style={categoria === name ? styles.tabActivo : styles.tab}
            onPress={() => setCategoria(name)}
        >
            <Text style={categoria === name ? styles.tabTextoActivo : styles.tabTexto}>
                {name}
            </Text>
        </TouchableOpacity>
    );

    if (isDesktop) {
        return (
            <View style={styles.categoriasDesktop}>
                {Tab('pizzas')}
                {Tab('bebidas')}
            </View>
        );
    }

    return (
        <ScrollView horizontal>
            {Tab('pizzas')}
            {Tab('bebidas')}
        </ScrollView>
    );
}