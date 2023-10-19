import { Provider } from "react-redux";
import Component from "./components/component";
import store from "./service/store/store"; // Use the default export, not curly braces
// import ApiTest from "./ApiTest";
function App() {
  return (
    <>
      <Provider store={store}>
        <Component/>
      </Provider>
    </>
  );
}

export default App;
