import { Fragment, useState } from "react";

import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Overlay } from "@rneui/base";
import HorizontalView from "./horizontalView";
import CustomImage from "./customImage";

type OptionsData = { uri: string; label: string; key: string };
type ChainOptionType = Record<string, OptionsData[]>;

const DUMMY_OPTION = {
  uri: "https://cryptologos.cc/logos/thumbs/ethereum.png?v=023",
  label: "Ethereum",
  key: "ethereum",
};
const CHAIN_OPTIONS: ChainOptionType = {
  ethereum: [
    {
      uri: "https://cryptologos.cc/logos/thumbs/ethereum.png?v=023",
      label: "Ethereum",
      key: "ethereum",
    },
    {
      uri: "https://cryptologos.cc/logos/thumbs/ethereum.png?v=023",
      label: "Goeli",
      key: "goeli",
    },
    {
      uri: "https://cryptologos.cc/logos/thumbs/ethereum.png?v=023",
      label: "Sepolia",
      key: "sepolia",
    },
  ],
  binace: [
    {
      uri: "https://cryptologos.cc/logos/thumbs/bnb.png?v=023",
      label: "Binance",
      key: "binance",
    },
    {
      uri: "https://cryptologos.cc/logos/thumbs/bnb.png?v=023",
      label: "BSC Testnet",
      key: "bsc-testnet",
    },
  ],
  solana: [
    {
      uri: "https://cryptologos.cc/logos/thumbs/solana.png?v=023",
      label: "Solana",
      key: "solana",
    },
    {
      uri: "https://cryptologos.cc/logos/thumbs/solana.png?v=023",
      label: "Solana Testnet",
      key: "solana-testnet",
    },
    {
      uri: "https://cryptologos.cc/logos/thumbs/solana.png?v=023",
      label: "Solana Devnet",
      key: "solana-devnet",
    },
  ],
};

const SelectChain = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<OptionsData>(DUMMY_OPTION);

  const onSelect = (option: OptionsData) => {
    setSelected(option);
    setVisible(false);
  };

  return (
    <Fragment>
      <View style={{ padding: 4, borderRadius: 4, backgroundColor: "#dadada" }}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <CustomImage uri={selected.uri} size={20} />
        </TouchableOpacity>
      </View>
      <Overlay
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        overlayStyle={{ backgroundColor: "#fff", minWidth: 250 }}
      >
        <View style={{ gap: 12 }}>
          {Object.keys(CHAIN_OPTIONS).map((key) => (
            <View key={key} style={{ gap: 4 }}>
              <Text style={{ color: "#797979", textTransform: "capitalize" }}>
                {key}
              </Text>
              <View style={{ gap: 6 }}>
                {CHAIN_OPTIONS[key].map((option) => (
                  <TouchableOpacity
                    onPress={() => onSelect(option)}
                    key={option.key}
                  >
                    <HorizontalView
                      style={{
                        columnGap: 8,
                        borderRadius: 4,
                        padding: 8,
                        backgroundColor:
                          option.key === selected.key
                            ? "#dadada"
                            : "transparent",
                      }}
                    >
                      <CustomImage uri={option.uri} />
                      <Text>{option.label}</Text>
                    </HorizontalView>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Overlay>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  dialog: {
    borderRadius: 4,
  },
});

export default SelectChain;
