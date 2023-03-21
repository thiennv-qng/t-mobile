import { View, ViewProps } from "react-native";

const Content = (props: ViewProps) => {
  return (
    <View
      {...props}
      style={{
        flexShrink: 1,
        gap: 6,
        ...(props.style as object),
      }}
    >
      {props.children}
    </View>
  );
};

const HorizontalView = (props: ViewProps) => {
  return (
    <View
      {...props}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        ...(props.style as object),
      }}
    >
      {props.children}
    </View>
  );
};

HorizontalView.Content = Content;

export default HorizontalView;
