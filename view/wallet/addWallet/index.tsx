import ViewContainer from "../../../components/viewContainer";
import WalletInfo from "../walletInfo";
import FormAddWallet from "./formAddWallet";

const AddWallet = () => {
  return (
    <ViewContainer style={{ flex: 1 }}>
      <WalletInfo />
      <FormAddWallet />
    </ViewContainer>
  );
};

export default AddWallet;
