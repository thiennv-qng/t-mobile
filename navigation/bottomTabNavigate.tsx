import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigate, WalletStackNavigate } from "./stackNavigate";

import IonIcons from "@expo/vector-icons/Ionicons";

import { Navigations } from "../constant";
import { NavigationConfigs } from "../interface";

const Tab = createBottomTabNavigator();

const NAVIGATION_TABS: NavigationConfigs[] = [
  {
    name: Navigations.Home,
    component: MainStackNavigate,
    options: {
      tabBarIcon: (props) => <IonIcons {...props} name="home-outline" />,
    },
  },
  {
    name: Navigations.TabConnectWallet,
    component: WalletStackNavigate,
    options: {
      tabBarIcon: (props) => <IonIcons {...props} name="wallet-outline" />,
    },
  },
];

const BottomTabNavigate = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerShown: false,
      }}
      initialRouteName={Navigations.Home}
    >
      {NAVIGATION_TABS.map(({ name, component, options }) => (
        <Tab.Screen
          name={name}
          options={options}
          component={component}
          key={name}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigate;
