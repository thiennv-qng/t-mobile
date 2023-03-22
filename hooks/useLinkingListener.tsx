import { useCallback, useEffect, useState } from "react";
import { addEventListener, parse, ParsedURL } from "expo-linking";

export const useLinkingListener = () => {
  const [queryData, setQueryData] = useState<ParsedURL | null>(null);

  const handleListener = useCallback(({ url }: { url: string }) => {
    if (!url) return setQueryData(null);
    return setQueryData(parse(url));
  }, []);

  useEffect(() => {
    const event = addEventListener("url", handleListener);
    return () => event.remove();
  }, []);

  return { queryData };
};
