import { useState } from "react";
import { Button, Text, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

const EXPBiometric = () => {
  const [error, setError] = useState("");
  const [supportedType, setSupportedType] = useState("Supported:");
  const AuthenticationType = LocalAuthentication.AuthenticationType;

  const biometric = async () => {
    try {
      setError("");
      // Detect device supported authenticate methods.
      const supportedAuthTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (
        supportedAuthTypes.includes(AuthenticationType.FINGERPRINT) &&
        !supportedType.includes("FINGERPRINT")
      )
        setSupportedType((prev) => `${prev} FINGERPRINT`);

      if (
        supportedAuthTypes.includes(AuthenticationType.IRIS) &&
        !supportedType.includes("IRIS")
      )
        setSupportedType((prev) => `${prev} IRIS`);

      if (
        supportedAuthTypes.includes(AuthenticationType.FACIAL_RECOGNITION) &&
        !supportedType.includes("FACIAL_RECOGNITION")
      )
        setSupportedType((prev) => `${prev} FACIAL_RECOGNITION`);

      // Detect deveice has hardware to authenticate
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware)
        throw "Device don't have the hardware to authenticate by biometrics";

      // Detect deveice has existed finger, touch id or face id
      const isEnrollAysnc = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrollAysnc) throw "No finger, touch id or face id yet!";
      else {
        // Determine what kind of authentication is enrolled on the device.
        // NONE ~ SecurityLevel.NONE ＝ 0
        // SECRET ~ SecurityLevel.SECRET ＝ 1
        // BIOMETRIC ~ SecurityLevel.BIOMETRIC ＝ 2
        const enrollAsync = await LocalAuthentication.getEnrolledLevelAsync();
        console.log("enrollAsync: ", enrollAsync);
      }

      const rs = await LocalAuthentication.authenticateAsync({
        promptMessage: "Biometrics",
        fallbackLabel: "Use passcode.",
      });
      console.log("rs: ", rs);
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <View>
      <Text>Biometrics</Text>
      {/* <Text>{NSFaceIDUsageDescription}</Text> */}
      <Button onPress={biometric} title="biometric" />

      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <Text>{supportedType}</Text>
    </View>
  );
};

export default EXPBiometric;
