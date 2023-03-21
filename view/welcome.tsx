import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Header from "../components/header";
import HorizontalView from "../components/horizontalView";
import ViewContainer from "../components/viewContainer";
import IonIcons from "@expo/vector-icons/Ionicons";

import { Navigations } from "../constant";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <ViewContainer style={{ gap: 24 }}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.secondary}>Welcome to Desig!</Text>

        <View>
          <Text style={styles.title}>The</Text>
          <Text style={styles.title}>smartcontractless</Text>
          <Text style={styles.title}>solution</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigate(Navigations.ConnectWallet)}>
        <HorizontalView style={styles.button}>
          <IonIcons style={styles.btnChild} name="wallet-outline" size={24} />
          <Text style={styles.btnChild}>Add/New wallet</Text>
        </HorizontalView>
      </TouchableOpacity>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "800",
  },
  secondary: {
    fontSize: 24,
    fontWeight: "800",
    color: "#dadada",
  },
  button: {
    width: "auto",
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#7767f6",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  btnChild: {
    color: "#fff",
    fontWeight: "600",
  },
  content: {
    paddingTop: 80,
    paddingBottom: 24,
  },
});

export default Welcome;
