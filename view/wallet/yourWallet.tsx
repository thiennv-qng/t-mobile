import { useMemo, useState } from "react";
import { openURL, canOpenURL } from "expo-linking";

import { Text } from "react-native";
import { Button } from "@rneui/base";
import WalletInfo from "./walletInfo";
import ViewContainer from "../../components/viewContainer";
import ViewQureryData from "../../components/viewQureryData";
import { useLinkingListener } from "../../hooks/useLinkingListener";

const YourWallet = () => {
  const { queryData } = useLinkingListener();
  const [confirm, setConfirm] = useState("Not Confirm");
  const [loading, setLoading] = useState(false);

  const queryParam = useMemo(() => {
    if (!queryData?.queryParams) return {};
    return JSON.parse(JSON.stringify(queryData.queryParams));
  }, []);

  const onConfirm = async () => {
    try {
      setLoading(true);
      const path = queryParam.fallback;
      const message = "?message=this-is-the-message";
      console.log("path + messageL: ", path + message);

      const canopen = await canOpenURL(path + message);
      if (!canopen) throw new Error("Cannot confirm");

      setTimeout(() => {
        setLoading(false);
        setConfirm("Confirmed");
      }, 1500);

      setTimeout(() => {
        (async () => {
          await openURL(path + message);
        })();
      }, 2000);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ViewContainer>
      <WalletInfo />
      <Text>{confirm}</Text>
      <ViewQureryData />
      <Button onPress={onConfirm} loading={loading}>
        Confirm
      </Button>
    </ViewContainer>
  );
};

export default YourWallet;
