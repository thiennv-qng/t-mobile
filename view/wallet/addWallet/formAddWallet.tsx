import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Navigations } from "../../../constant";

const FormAddWallet = () => {
  const { goBack } = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.fillContent}>
      <View style={{ ...styles.fillContent, ...styles.gap8 }}>
        <Text style={styles.description}>Private Key</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>

      <View>
        <Button type="outline">Save</Button>
        <Button type="clear" onPress={goBack}>
          Cancel
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fillContent: {
    flex: 1,
  },
  description: {
    color: "#00000073",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 6,
    padding: 12,
  },
  gap8: {
    gap: 8,
  },
});

export default FormAddWallet;
