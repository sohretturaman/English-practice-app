/** @format */

import { Provider, useDispatch } from "react-redux";
import NavigationScreen from "./src/NavigationScreen";
import store from "./src/store/Store";
import SavedNewsContextProvider from "./src/store/SavedNewsContext";
import { AppContextProvider } from "./src/store/SelectLangContext";
import SearchedVideosContextProvider from "./src/store/SearchedVideosContext";

function App() {
  return (
    <Provider store={store}>
      <SearchedVideosContextProvider>
        <SavedNewsContextProvider>
          <AppContextProvider>
            <NavigationScreen />
          </AppContextProvider>
        </SavedNewsContextProvider>
      </SearchedVideosContextProvider>
    </Provider>
  );
}
export default App;
