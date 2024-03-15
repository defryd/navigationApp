import { Text, View } from "react-native"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { StackActions, useNavigation } from "@react-navigation/native"
import { globalStyles } from "../../theme/theme";

export const SettingsScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 10 }}>Settings Screen</Text>

            <PrimaryButton
                label="Regresar"
                onPress={() => navigation.goBack()}
            />

            <PrimaryButton
                label="Regresar a Home"
                onPress={() => navigation.dispatch(StackActions.popToTop())}
            />
        </View>
    )
}
