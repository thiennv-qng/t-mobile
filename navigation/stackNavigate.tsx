import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { createElement } from "react";

// import ConnectWallet from "../view/connectWallet";

import { Navigations } from "../constant";
import Login from "../view/login/register";
import ConnectWallet from "../view/wallet";
import AddWallet from "../view/wallet/addWallet";
import FormAddWallet from "../view/wallet/addWallet/formAddWallet";
import NewWallet from "../view/wallet/newWallet";
import FormNewWallet from "../view/wallet/newWallet/formNewWallet";
import YourWallet from "../view/wallet/yourWallet";
import Welcome from "../view/welcome";

const Stack = createNativeStackNavigator();

const NAVIGATION_STACK = [
  {
    name: Navigations.Welcome,
    component: Welcome,
  },
  {
    name: Navigations.ConnectWallet,
    component: ConnectWallet,
  },
  {
    name: Navigations.NewWallet,
    component: NewWallet,
  },
  {
    name: Navigations.FormNewWallet,
    component: FormNewWallet,
  },
  {
    name: Navigations.AddWallet,
    component: AddWallet,
  },
  {
    name: Navigations.YourWallet,
    component: YourWallet,
  },
  {
    name: Navigations.Login,
    component: Login,
  },
];

const MainStackNavigate = () => {
  return (
    <Stack.Navigator
      initialRouteName={Navigations.Login}
      screenOptions={{ headerShown: false }}
    >
      {NAVIGATION_STACK.map(({ component, name }) => (
        <Stack.Screen
          name={name}
          key={name}
          component={component}
          options={{ animation: "slide_from_left" }}
        />
      ))}
    </Stack.Navigator>
  );
};

const WalletStackNavigate = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Navigations.YourWallet}
        component={YourWallet}
        options={{ animation: "slide_from_left" }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigate, WalletStackNavigate };
