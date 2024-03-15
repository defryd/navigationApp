import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { type NavigationProp, useNavigation, DrawerActions } from "@react-navigation/native"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import type { RootStackParams } from "../../routes/StackNavigator";
import { useEffect } from "react";

export const HomeScreens = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                    style={{ marginLeft: 10 }}
                >
                    <Text>Menu</Text>
                </Pressable>
            )
        })
    }, [])


    return (
        <View style={globalStyles.container}>

            {/* <Pressable
                onPress={() => navigation.navigate('Products' as never)}
                style={globalStyles.primaryButton}>
                <Text style={globalStyles.buttonText}>Productos</Text>
            </Pressable> */}

            <PrimaryButton
                onPress={() => navigation.navigate('Products')}
                label="Productos"
            />

            <PrimaryButton
                onPress={() => navigation.navigate('Settings' as never)}
                label="Configuración"
            />

        </View>
    )
}
