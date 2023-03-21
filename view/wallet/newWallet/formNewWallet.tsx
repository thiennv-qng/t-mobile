import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import HorizontalView from "../../../components/horizontalView";
import ViewContainer from "../../../components/viewContainer";
import IonIcons from "@expo/vector-icons/Ionicons";

import { NewWalletType } from "../../../constant";

const FormNewWallet = () => {
  const params = (useRoute().params as { type: NewWalletType }) || {};
  const [name, setName] = useState("Nguyen Van A");
  const [emails, setEmails] = useState<string[]>([]);
  const [emailsValue, setEmailsValue] = useState<Record<string, string>>({});
  const { goBack } = useNavigation<NavigationProp<any>>();

  const getEmails = useCallback(() => {
    if (!params.type) return setEmails([]);

    const length = Number(params.type.slice(-1) || 0);
    const newEmails = new Array(length).fill("");
    setEmails(newEmails);
  }, []);

  useEffect(() => {
    getEmails();
  }, [getEmails]);

  return (
    <ViewContainer style={styles.formContainer}>
      <HorizontalView style={{ ...styles.spaceBetween, ...styles.gap12 }}>
        <View style={{ ...styles.threshold, ...styles.gap8 }}>
          <Text style={styles.thresholdText}>Multisig Threshold</Text>
          <TouchableOpacity onPress={goBack}>
            <HorizontalView style={styles.thresholdButton}>
              <Text>{params.type}</Text>
              <IonIcons name="pencil" />
            </HorizontalView>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.threshold, ...styles.gap8 }}>
          <Text style={styles.thresholdText}>Multisig Name</Text>
          <HorizontalView style={styles.thresholdButton}>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.thresholdInput}
            />
            <TouchableOpacity onPress={() => {}}>
              <IonIcons
                style={styles.thresholdABSButton}
                name="shuffle-outline"
              />
            </TouchableOpacity>
          </HorizontalView>
        </View>
      </HorizontalView>
      <View style={styles.gap12}>
        <Text style={styles.thresholdText}>Email</Text>
        <View style={styles.gap8}>
          {emails.map((_, idx) => (
            <TextInput
              value={emailsValue[`email#${idx + 1}`]}
              style={styles.emailInput}
              onChangeText={(value) =>
                setEmailsValue((prev) => ({
                  ...prev,
                  [`email#${idx + 1}`]: value,
                }))
              }
              placeholder={`Email #${idx + 1}`}
              key={idx}
            />
          ))}
        </View>
      </View>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 32,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  gap8: {
    gap: 8,
  },

  gap12: {
    gap: 12,
  },
  threshold: {
    width: "50%",
    flex: 1,
  },
  thresholdButton: {
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: "#cecece",
    minHeight: 38,
  },
  thresholdInput: {
    flex: 1,
  },
  emailInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#cecece",
    borderStyle: "solid",
    borderRadius: 4,
    paddingVertical: 2,
    padding: 8,
  },
  thresholdText: {
    fontWeight: "800",
  },
  thresholdABSButton: {
    fontSize: 18,
  },
});

export default FormNewWallet;
