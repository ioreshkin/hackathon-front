import './reset.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {store} from "./services/store.ts";
import MainPage from "./pages/main-page/MainPage.tsx";

function App() {


  return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage/>} />
          </Routes>
        </Router>
      </Provider>
  );
}

export default App;
