// import { NavigationProp, useNavigation } from "@react-navigation/native";
// import { View, Text, Button } from "react-native";
import { Button } from "@rneui/base";
import { useCallback } from "react";
import { Linking } from "react-native";
import ViewContainer from "../../components/viewContainer";
import WalletInfo from "./walletInfo";
import IonIcons from "@expo/vector-icons/Ionicons";

const YourWallet = () => {
  return (
    <ViewContainer>
      <WalletInfo />
    </ViewContainer>
  );
};

export default YourWallet;
