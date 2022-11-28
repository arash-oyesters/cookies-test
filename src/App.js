import { Provider } from "react-redux";
import Cookie from "./components/Cookie";
import Counter from "./components/Counter";
import store from "./Redux/Store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
      <Cookie />
    </div>
  );
}

export default App;
