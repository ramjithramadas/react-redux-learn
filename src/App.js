import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
   return (
      <Provider store={store}>
         <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>React Redux</h1>
            <Counter />
            <h6>Logged IN: true</h6>
         </div>
      </Provider>
   );
}

export default App;
