import { Avatar, Button, Skeleton } from "@rneui/base";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import HorizontalView from "../../components/horizontalView";
import IonIcons from "@expo/vector-icons/Ionicons";

const WalletInfo = () => {
  return (
    <View style={{ gap: 32 }}>
      <HorizontalView style={styles.spaceBetween}>
        <HorizontalView>
          <Avatar
            rounded
            size={62}
            source={{ uri: "https://picsum.photos/900/900.jpg" }}
          />
          <View style={{ gap: 4 }}>
            <Text style={styles.description}>Wallet Address</Text>
            <Skeleton height={24} animation="pulse" width={120} />
          </View>
        </HorizontalView>
        <HorizontalView style={{ gap: 0 }}>
          <Button
            type="clear"
            size="sm"
            icon={<IonIcons name="qr-code-outline" size={18} />}
          />
          <Button
            type="clear"
            size="sm"
            icon={<IonIcons name="copy-outline" size={18} />}
          />
        </HorizontalView>
      </HorizontalView>
      <View style={{ gap: 8 }}>
        <Text style={styles.description}>Multisig Name</Text>
        <HorizontalView style={styles.groupInput}>
          <TextInput style={styles.textInput} />
          <ActivityIndicator />
        </HorizontalView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spaceBetween: { justifyContent: "space-between" },
  card: {
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 16,
  },
  description: {
    color: "#00000073",
  },
  gap8: { gap: 8 },
  groupInput: {
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: "#dadada80",
  },
  textInput: {
    flex: 1,
    paddingVertical: 4,
  },
});

export default WalletInfo;
