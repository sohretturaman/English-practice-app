/** @format */

import { Provider, useDispatch } from "react-redux";
import NavigationScreen from "./src/NavigationScreen";
import store from "./src/store/Store";
import SavedNewsContextProvider from "./src/store/SavedNewsContext";
import { AppContextProvider } from "./src/store/SelectLangContext";

function App() {
  return (
    <Provider store={store}>
      <SavedNewsContextProvider>
        <AppContextProvider>
          <NavigationScreen />
        </AppContextProvider>
      </SavedNewsContextProvider>
    </Provider>
  );
}
export default App;
