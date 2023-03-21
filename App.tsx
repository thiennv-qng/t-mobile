import * as React from "react";
import Navigation from "./navigation";
import UIProvider from "./provider/UIProvider";

const App = () => {
  return (
    <UIProvider>
      <Navigation />
    </UIProvider>
  );
};

export default App;
