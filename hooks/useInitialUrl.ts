import { useCallback, useEffect, useState } from "react";
import { Linking } from "react-native";

const useInitialUrl = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const getInitialUrl = useCallback(async () => {
    try {
      setProcessing(true);
      const initialUrl = await Linking.getInitialURL();
      setUrl(url);
    } catch (err) {
      // TODO: notify error
    } finally {
      setProcessing(false);
    }
  }, []);

  useEffect(() => {
    getInitialUrl();
  }, [getInitialUrl]);
  return { url, processing };
};

export default useInitialUrl;
