/** @format */

import { Provider, useDispatch } from "react-redux";
import NavigationScreen from "./src/NavigationScreen";
import store from "./src/store/Store";

import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function App() {
  useEffect(() => {
    // get the saved theme on init , try to take user's current theme later on
    AsyncStorage.getItem("savedTheme").then((value) => {
      console.log("initial saved val", value);
    });
  }, []);
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  );
}
export default App;
