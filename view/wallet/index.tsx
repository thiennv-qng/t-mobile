import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { Avatar } from "@rneui/base";
import HorizontalView from "../../components/horizontalView";
import ViewContainer from "../../components/viewContainer";

import { Navigations } from "../../constant";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const WALLET_OPTIONS = [
  {
    uri: "https://picsum.photos/900/900.jpg",
    title: "New Wallet",
    description: "I have no wallet. Please create for me a new one!",
    key: Navigations.NewWallet,
  },
  {
    uri: "https://picsum.photos/900/900.jpg",
    title: "Add Wallet",
    description: "I had my own wallets with private key already.",
    key: Navigations.AddWallet,
  },
  {
    uri: "https://picsum.photos/900/900.jpg",
    title: "Learn more",
    description: "I want to learn more about wallet security before the setup.",
    key: "",
  },
];

const ConnectWallet = () => {
  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <ViewContainer>
      {WALLET_OPTIONS.map(({ description, title, uri, key }) => (
        <TouchableOpacity onPress={() => navigate(key)} key={title}>
          <HorizontalView style={styles.card}>
            <Avatar
              rounded
              source={{ uri: "https://picsum.photos/900/900.jpg" }}
              size={68}
            />
            <HorizontalView.Content>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </HorizontalView.Content>
          </HorizontalView>
        </TouchableOpacity>
      ))}
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  description: {
    color: "#214316",
  },
});
export default ConnectWallet;
