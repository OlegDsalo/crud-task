import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Provider } from "react-redux";
import ListPage from "./pages/list-page/list-page";
import LoginPage from "./pages/login-page/login-page";
import AddPage from "./pages/add-page/add-page";
import EditPage from "./pages/edit-page/edit-page";
import { persistor, store } from "./store/store";
import Header from "./components/header/header";
import RequireAuth from "./hoc/require-auth";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <Provider store={ store }>
      <PersistGate loading={null} persistor={ persistor }>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={ <ListPage/> }/>
            <Route path="/list" element={ <ListPage/> }/>
            <Route path="/login" element={ <LoginPage/> }/>
            <Route path="/add" element={
              <RequireAuth>
                <AddPage/>
              </RequireAuth>
            }/>
            <Route path="/edit:id" element={
              <RequireAuth>
                <EditPage/>
              </RequireAuth>
            }/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
