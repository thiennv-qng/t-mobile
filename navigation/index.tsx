import { createURL, parse } from "expo-linking";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";

import BottomTabNavigate from "./bottomTabNavigate";

import { prefix } from "../constant";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";

const Navigation = () => {
  const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: [prefix, "tmobile://app", "tmobile://"],
    config: {
      screens: {
        Home: "home",
        YourWallet: "wallet",
        ConnectWallet: "connect-wallet",
      },
    },
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <NavigationContainer linking={linking}>
        <BottomTabNavigate />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;
