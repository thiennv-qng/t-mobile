import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HorizontalView from "../../../components/horizontalView";
import ViewContainer from "../../../components/viewContainer";
import { Navigations, NewWalletType } from "../../../constant";

const ADD_WALLET_OPTIONS = [
  {
    title: "1-out-of-1",
    description:
      "The multisig will never 1 approval over 1 signer to successfully sign a transaction.",
    type: NewWalletType.OneOutOfOne,
  },
  {
    title: "2-out-of-2",
    description:
      "The multisig will need 2 approval over 2 signer to successfully sign a transaction.",
    type: NewWalletType.TwoOutOfTwo,
  },
  {
    title: "2-out-of-3",
    description:
      "The multisig will need 2 approval over 3 signer to successfully sign a transaction.",
    type: NewWalletType.TwoOutOfThree,
  },
  {
    title: "3-out-of-4",
    description:
      "The multisig will need 3 approval over 4 signer to successfully sign a transaction.",
    type: NewWalletType.ThreeOutOfFour,
  },

  {
    title: "3-out-of-5",
    description:
      "The multisig will need 3 approval over 5 signer to successfully sign a transaction.",
    type: NewWalletType.ThreeOutOfFive,
  },
];
const NewWallet = () => {
  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <ViewContainer>
      {ADD_WALLET_OPTIONS.map(({ description, type, title }) => (
        <TouchableOpacity
          onPress={() =>
            navigate(Navigations.FormNewWallet, {
              type,
            })
          }
          key={title}
        >
          <HorizontalView style={styles.card}>
            <Text style={styles.title}>
              {title} - {type}
            </Text>
            <Text style={styles.description}>{description}</Text>
          </HorizontalView>
        </TouchableOpacity>
      ))}
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "flex-start",
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 16,
    gap: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
  },
  description: {
    color: "#214316",
    flexShrink: 1,
  },
});

export default NewWallet;
