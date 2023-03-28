import { useEffect, useState } from "react";

import {
  Camera,
  CameraType,
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
} from "expo-camera";
import { Image, TouchableOpacity, View } from "react-native";
import HorizontalView from "./horizontalView";
import IonIcons from "@expo/vector-icons/Ionicons";

const TakePicture = () => {
  const [permission, setPermission] = useState("denied");
  const [camera, setCamera] = useState<Camera | null>(null);
  const [imgs, setImgs] = useState("");
  const [open, setOpen] = useState(false);

  const openCamera = async () => {
    try {
      const rs = await requestCameraPermissionsAsync();
      if (rs.granted) setOpen(!open);
    } catch (err) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const status = await getCameraPermissionsAsync();
        setPermission(status.status);
      } catch (err) {
        console.log(err);
        setPermission("denied");
      }
    })();
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={openCamera}>
        <IonIcons name="camera" size={32} />
      </TouchableOpacity>
      {open && (
        <HorizontalView style={{ gap: 8 }}>
          {permission == "granted" && (
            <Camera
              style={{ width: 150, height: 180 }}
              type={CameraType.front}
              ref={(ref) => setCamera(ref)}
            >
              <TouchableOpacity
                onPress={async () => {
                  if (!camera) return;
                  const data = await camera.takePictureAsync();
                  setImgs(data.uri);
                  console.log("data: ", data);
                }}
              >
                <IonIcons name="camera" size={32} style={{ opacity: 0.5 }} />
              </TouchableOpacity>
            </Camera>
          )}
          {imgs && (
            <Image
              source={{ uri: imgs }}
              style={{ width: 150, aspectRatio: 1 / 1 }}
            />
          )}
        </HorizontalView>
      )}
    </View>
  );
};

export default TakePicture;
