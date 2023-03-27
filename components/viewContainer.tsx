import { ScrollView } from "react-native";
import { View, ViewProps } from "react-native";

const ViewContainer = (props: ViewProps) => {
  return (
    <ScrollView
      style={{
        padding: 12,
      }}
    >
      <View
        style={{
          gap: 12,
          ...(props.style as object),
        }}
      >
        {props.children}
      </View>
    </ScrollView>
  );
};

export default ViewContainer;
