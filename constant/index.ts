import { createURL } from "expo-linking";

export enum Navigations {
  Home = "Home",
  Welcome = "Welcome",
  About = "About",
  ConnectWallet = "ConnectWallet",
  TabConnectWallet = "TabConnectWallet",
  YourWallet = "YourWallet",
  NewWallet = "NewWallet",
  AddWallet = "AddWallet",
  FormNewWallet = "FormNewWallet",
  Login = "Login",
}

export enum NewWalletType {
  OneOutOfOne = "1/1",
  TwoOutOfTwo = "2/2",
  TwoOutOfThree = "2/3",
  ThreeOutOfFour = "3/4",
  ThreeOutOfFive = "3/5",
}

export const prefix = createURL("tmobile://");

export const PassWord = "12345679";
