import { Text, View } from "react-native"
import { globalStyles } from "../../theme/theme";
import { FlatList } from "react-native-gesture-handler";
import { PrimaryButton } from "../../components/shared/PrimaryButton";

const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
    { id: 4, name: 'Producto 4', price: 400 },
    { id: 5, name: 'Producto 5', price: 500 },
    { id: 6, name: 'Producto 6', price: 600 },
    { id: 7, name: 'Producto 7', price: 700 },
    { id: 8, name: 'Producto 8', price: 800 },
    { id: 9, name: 'Producto 9', price: 900 },
    { id: 10, name: 'Producto 10', price: 1000 },
];

export const ProductsScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10, fontSize: 30 }}>Productos</Text>

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <PrimaryButton
                        onPress={() => { }}
                        label={item.name}
                    />
                )}
            ></FlatList>

            <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>

            <PrimaryButton
                onPress={() => { }}
                label='Ajustes'
            />

        </View >
    )
}
