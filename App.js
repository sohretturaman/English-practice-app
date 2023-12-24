/** @format */

import { Provider, useDispatch } from "react-redux";
import NavigationScreen from "./src/NavigationScreen";
import store from "./src/store/Store";

function App() {
  return (
    <Provider store={store}>
      <NavigationScreen />
    </Provider>
  );
}
export default App;
