import { Text, View } from "react-native";
import { useLinkingListener } from "../hooks/useLinkingListener";
import HorizontalView from "./horizontalView";

const ViewQureryData = () => {
  const { queryData } = useLinkingListener();

  return (
    <View>
      {queryData && (
        <View>
          <Text>The App have open by deeplink!!</Text>

          <HorizontalView>
            <Text>Hostname:</Text>
            <Text>{queryData.hostname}</Text>
          </HorizontalView>

          <HorizontalView>
            <Text>Path:</Text>
            <Text>{queryData.path}</Text>
          </HorizontalView>

          {queryData.queryParams && (
            <HorizontalView>
              <Text>Query Params:</Text>
              <Text style={{ flex: 1 }}>
                {JSON.stringify(queryData.queryParams)}
              </Text>
            </HorizontalView>
          )}

          {queryData.scheme && (
            <HorizontalView>
              <Text>Scheme:</Text>
              <Text>{JSON.stringify(queryData.scheme)}</Text>
            </HorizontalView>
          )}
        </View>
      )}
    </View>
  );
};

export default ViewQureryData;
