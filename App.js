/** @format */

import { Provider, useDispatch } from "react-redux";
import NavigationScreen from "./src/NavigationScreen";
import store from "./src/store/Store";
import SavedNewsContextProvider from "./src/store/SavedNewsContext";

function App() {
  return (
    <Provider store={store}>
      <SavedNewsContextProvider>
        <NavigationScreen />
      </SavedNewsContextProvider>
    </Provider>
  );
}
export default App;
