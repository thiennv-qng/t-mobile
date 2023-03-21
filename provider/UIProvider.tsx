import { ReactNode } from "react";
import { ThemeProvider } from "@rneui/themed";

type UIProviderProps = { children: ReactNode };
const UIProvider = ({ children }: UIProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default UIProvider;
