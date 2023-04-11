import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
import store from "./lib/store";
import Box from "./components/Box";

function App() {
    return (
        <Provider store={store}>
            <div className="App"></div>
            <InboxScreen />
        </Provider>
    );
}

export default App;
