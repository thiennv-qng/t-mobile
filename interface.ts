import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";

export type NavigationConfigs = {
  name: string;
  component: any;
  options?: BottomTabNavigationOptions;
};
