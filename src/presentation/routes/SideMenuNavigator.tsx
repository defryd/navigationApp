import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { View, Text, useWindowDimensions } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator

            drawerContent={(props) => <CustomDrawerContent {...props} />}

            screenOptions={{
                drawerType: (dimensions.width >= 768 ? 'permanent' : 'slide'),
                headerShown: false,
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: globalColors.light,
                drawerInactiveBackgroundColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20,
                }
            }}
        >
            <Drawer.Screen options={{ drawerIcon: ({ color }) => (<IonIcon name='bondfire-outline' color={color} />) }} name="Tabs" component={BottomTabNavigator} />
            <Drawer.Screen options={{ drawerIcon: ({ color }) => (<IonIcon name='person-circle-outline' color={color} />) }} name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View
                style={{
                    height: 200,
                    backgroundColor: globalColors.primary,
                    marginBottom: 30,
                    borderRadius: 50,
                }}
            >
            </View>
            <DrawerItemList {...props} />
            <Text></Text>
        </DrawerContentScrollView>
    )
}