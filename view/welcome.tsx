import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Header from "./header";
import HorizontalView from "../components/horizontalView";
import ViewContainer from "../components/viewContainer";
import IonIcons from "@expo/vector-icons/Ionicons";
import ViewQureryData from "../components/viewQureryData";

import { Navigations } from "../constant";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useLinkingListener } from "../hooks/useLinkingListener";
import EXPBoimetric from "./expBiometric";

const Welcome = () => {
  const { navigate } = useNavigation<NavigationProp<any>>();
  const { queryData } = useLinkingListener();

  // const onConfirm = async () => {
  //   if (!queryData) return;
  //   const fallback = JSON.parse(JSON.stringify(queryData.queryParams)).fallback;
  //   if (await canOpenURL(fallback)) openURL(fallback);
  // };

  // const goToNextPage = async () => {
  //   const canopen = await Linking.canOpenURL("tmobile://YourWallet");
  //   console.log("tmobile://YourWallet", canopen);
  //   if (canopen) Linking.openURL("tmobile://YourWallet");
  // };

  return (
    <ViewContainer style={{ gap: 24 }}>
      <Header />
      <View style={styles.content}>
        <ViewQureryData />
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
      {/* <Button onPress={onConfirm}>Confirm</Button>
      <Button onPress={goToNextPage}>Next Page</Button> */}
      <EXPBoimetric />
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
