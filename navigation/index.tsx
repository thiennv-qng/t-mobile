import { createURL } from "expo-linking";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";

import BottomTabNavigate from "./bottomTabNavigate";

import { Navigations } from "../constant";

const prefix = createURL("tmobile://app");

const Navigation = () => {
  const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: Navigations.Home,
        YourWallet: Navigations.YourWallet,
        ConnectWallet: Navigations.ConnectWallet,
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <BottomTabNavigate />
    </NavigationContainer>
  );
};

export default Navigation;
