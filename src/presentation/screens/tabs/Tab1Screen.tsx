import { View } from "react-native"
import { HamburguerMenu } from "../../components/shared/HamburguerMenu"
import { Text } from "react-native-reanimated/lib/typescript/Animated"
import { IonIcon } from "../../components/shared/IonIcon"


export const Tab1Screen = () => {

    // const navigation = useNavigation();

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
    //                 <Text>Menu</Text>
    //             </Pressable>
    //         )
    //     })
    // }, [])


    return (
        <View>
            <HamburguerMenu />
            <Text>Tab1Screen</Text>

            <IonIcon name='rocket-outline' />
        </View>
    )
}
