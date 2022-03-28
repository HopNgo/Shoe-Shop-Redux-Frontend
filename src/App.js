import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { loadUser } from "./redux/user/userSlice";
import AuthAdmin from "./utils/AuthAdmin";
import AuthUser from "./utils/AuthUser";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    if (localStorage.getItem("rememberedAccount") === null) {
      dispatch(loadUser());
    }
  }, [dispatch]);
  return (
    <div className="App-container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={<AuthUser isAdmin={currentUser && currentUser.isAdmin} />}
          />
          <Route
            path="/admin/*"
            element={<AuthAdmin isAdmin={currentUser && currentUser.isAdmin} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
