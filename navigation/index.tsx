import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { Linking } from "react-native";
import { Navigations } from "../constant";

import BottomTabNavigate from "./bottomTabNavigate";

const Navigation = () => {
  const linking: LinkingOptions<ReactNavigation.RootParamList> = {
    prefixes: ["https://tmobile.com", "tmobile://"],
    config: {
      screens: {
        Home: Navigations.Home,
        YourWallet: Navigations.YourWallet,
        ConnectWallet: Navigations.ConnectWallet,
      },
    },
  };

  const handleDeepLink = useCallback(async ({ url }: { url: string }) => {
    await Linking.openURL(url);
    alert(url);
  }, []);

  useEffect(() => {
    Linking.addEventListener("url", handleDeepLink);
    return () => Linking.removeAllListeners("url");
  }, []);

  return (
    <NavigationContainer linking={linking}>
      <BottomTabNavigate />
    </NavigationContainer>
  );
};

export default Navigation;
