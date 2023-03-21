import { Image, ImageProps, ImageResizeMode, ImageStyle } from "react-native";

type CustomImageProps = {
  uri?: string;
  resizeMode?: ImageResizeMode;
  size?: number;
} & Partial<ImageProps>;
const CustomImage = ({
  uri = "",
  size = 24,
  resizeMode = "contain",
  ...props
}: CustomImageProps) => {
  return (
    <Image
      {...props}
      source={{
        ...(props.source as object),
        uri: uri,
        cache: "only-if-cached",
      }}
      style={{
        ...(props.style as object),
        width: size,
        height: size,
        resizeMode,
      }}
    />
  );
};

export default CustomImage;
