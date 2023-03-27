import { Fragment, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HorizontalView from "../components/horizontalView";
import IonIcons from "@expo/vector-icons/Ionicons";
import ViewContainer from "../components/viewContainer";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Navigations } from "../constant";
import {
  Camera,
  CameraType,
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
} from "expo-camera";

const random = Math.round(Math.random() * 10000); //random number

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [keyVal, setKeyVal] = useState("");
  const [err, setErr] = useState("");
  const [permission, setPermission] = useState("denied");
  const [camera, setCamera] = useState<Camera | null>(null);
  const [imgs, setImgs] = useState("");
  const [open, setOpen] = useState(false);

  const { navigate } = useNavigation<NavigationProp<any>>();

  const onSet = async () => {
    try {
      SecureStore.setItemAsync(key, random.toString());
    } catch (err) {
      console.log(err);
    }
  };

  const onGet = async () => {
    try {
      const val = await SecureStore.getItemAsync(keyVal);
      setValue(val || "");
    } catch (err) {
      console.log(err);
    }
  };

  const requestPermission = async (type: "CAMERA" | "BLUETOOTH_SCAN") => {
    try {
      if (permission == "granted") return setErr("You can use the camera");
      // const granted = await PermissionsAndroid.request(
      //   PermissionsAndroid.PERMISSIONS[type],
      //   {
      //     title: "Camera permission",
      //     message: "We need camera to scan your ass.",
      //     buttonPositive: "OK",
      //     buttonNegative: "Cancel",
      //   }
      // );
      const rs = await requestCameraPermissionsAsync();
      setPermission(rs.status);
      switch (rs.status) {
        case "granted":
          return setErr("You can use the camera");
        case "denied":
          return setErr("Camera permission have been denied");
        case "undetermined":
          return setErr("Permission undetermined.");
        default:
          return setErr("");
      }
    } catch (err) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const status = await getCameraPermissionsAsync();

        setPermission(status.status);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <ViewContainer>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 24 }}>
          <Text>Design</Text>
          <Text>Unlock your wallets</Text>
        </View>
        <View>
          <Text>Random value: {random}</Text>
          <HorizontalView
            style={{
              padding: 12,
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 6,
            }}
          >
            <TextInput
              style={{ flex: 1 }}
              placeholder="Enter key to set value"
              secureTextEntry={!visible}
              onChangeText={setKey}
              onSubmitEditing={onSet}
            />
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              <IonIcons name={visible ? "eye-off-outline" : "eye-outline"} />
            </TouchableOpacity>
          </HorizontalView>
        </View>

        <View>
          <Text>Input Key</Text>
          <HorizontalView
            style={{
              padding: 12,
              borderWidth: 1,
              borderColor: "#000",
              borderRadius: 6,
            }}
          >
            <TextInput
              style={{ flex: 1 }}
              placeholder="Enter key to get value"
              secureTextEntry={!visible}
              onChangeText={setKeyVal}
              onSubmitEditing={onGet}
            />
          </HorizontalView>
          <Text>Value: {value}</Text>
        </View>
      </View>
      <Button title="Wellcome" onPress={() => navigate(Navigations.Welcome)} />
      <Text>Status: {err}</Text>
      <Button
        title="Request permission"
        onPress={() => requestPermission("CAMERA")}
      />
      <Button title="Open Camera" onPress={() => setOpen(!open)} />

      {open && (
        <Fragment>
          <Text>{permission}</Text>
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
        </Fragment>
      )}
      <View style={{ width: 250, height: 300, backgroundColor: "#000" }}>
        <Text>Over flow</Text>
      </View>
    </ViewContainer>
  );
};

export default Login;
