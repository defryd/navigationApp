import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export type RootStackParams = {
    Home: undefined;
    Products: undefined;
    Settings: undefined;
    Product: { id: number, name: string };
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            headerShown: false,
        })
    }, [])


    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            }

        }}>
            <Stack.Screen name="Home" component={HomeScreens} />
            <Stack.Screen name="Product" component={ProductScreen} />

            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}