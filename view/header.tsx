import { View, TouchableOpacity, StyleSheet } from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";
import SelectChain from "../components/selectChain";
import HorizontalView from "../components/horizontalView";
import CustomImage from "../components/customImage";

import { NavigationProp, useNavigation } from "@react-navigation/native";

const Header = () => {
  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <HorizontalView style={{ justifyContent: "space-between" }}>
      <HorizontalView>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              padding: 4,
              borderRadius: 4,
              backgroundColor: "#dadada",
              justifyContent: "center",
            }}
          >
            <IonIcons name="apps" size={19} />
          </View>
        </TouchableOpacity>
        <SelectChain />
      </HorizontalView>
      <HorizontalView>
        <HorizontalView
          style={{
            padding: 4,
            backgroundColor: "#dadada",
            borderRadius: 8,
            gap: 12,
          }}
        >
          <IonIcons name="chevron-down" />
          <CustomImage
            uri="https://cryptologos.cc/logos/thumbs/bnb.png?v=023"
            size={20}
          />
        </HorizontalView>
        <TouchableOpacity>
          <IonIcons name="notifications-outline" size={20} />
        </TouchableOpacity>
      </HorizontalView>
    </HorizontalView>
  );
};

const styles = StyleSheet.create({
  gap: {
    gap: 8,
  },
});

export default Header;
