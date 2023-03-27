import { useMemo, useState } from "react";
import { openURL, canOpenURL, parse } from "expo-linking";

import { Text } from "react-native";
import { Button } from "@rneui/base";
import WalletInfo from "./walletInfo";
import ViewContainer from "../../components/viewContainer";
import ViewQureryData from "../../components/viewQureryData";

import useInitialUrl from "../../hooks/useInitialUrl";
import { useLinkingListener } from "../../hooks/useLinkingListener";
import { useNavigation } from "@react-navigation/native";

const YourWallet = () => {
  const { queryData } = useLinkingListener();
  const [confirm, setConfirm] = useState("Not Confirm");
  const [loading, setLoading] = useState(false);
  const { processing, url } = useInitialUrl();

  const queryParam = useMemo(() => {
    if (!queryData?.queryParams) return {};
    return JSON.parse(JSON.stringify(queryData.queryParams));
  }, []);

  const data = useMemo(() => {
    if (!url) return {};
    return parse(url);
  }, []);

  const onConfirm = async () => {
    try {
      setLoading(true);
      const path = queryParam.fallback;
      const message = "?message=this-is-the-message";
      if (!path) throw new Error("Invalid fallback url.");
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
      // TODO: notify error
    } finally {
      setLoading(false);
    }
  };

  return (
    <ViewContainer>
      <WalletInfo />
      <Text>{confirm}</Text>
      <Text>{processing ? "Loading..." : "Done"}</Text>
      <ViewQureryData />
      {url && <Text>{JSON.stringify(url)}</Text>}
      <Button onPress={onConfirm} loading={loading}>
        Confirm
      </Button>
    </ViewContainer>
  );
};

export default YourWallet;
