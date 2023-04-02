import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
import InboxSelect from "./components/InboxSelect";
import store from "./lib/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App"></div>
            <InboxScreen />

            <InboxSelect />
            <InboxSelect />
        </Provider>
    );
}

export default App;
