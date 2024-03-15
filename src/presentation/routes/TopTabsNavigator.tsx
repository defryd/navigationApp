import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AbaoutScreen } from '../screens/abaout/AboutScreen';
import { HamburguerMenu } from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
    return (
        <>
            <HamburguerMenu />
            <Tab.Navigator>
                <Tab.Screen name="Perfil" component={ProfileScreen} />
                <Tab.Screen name="About" component={AbaoutScreen} />
            </Tab.Navigator>
        </>
    );
}