import { View, ViewProps } from "react-native";

const ViewContainer = (props: ViewProps) => {
  return (
    <View
      {...props}
      style={{ padding: 12, gap: 12, ...(props.style as object) }}
    >
      {props.children}
    </View>
  );
};

export default ViewContainer;
