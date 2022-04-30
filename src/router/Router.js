import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CreatePokemon from "../pages/Create";
import UpdatePokemon from "../pages/Update";
import Base from "../pages/index";
import Bank from "../pages/Bank";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthRoute from "./AuthRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/crear"
            element={
              <AuthRoute>
                <CreatePokemon />
              </AuthRoute>
            }
          />
          <Route
            path="/actualizar/:id"
            element={
              <AuthRoute>
                <UpdatePokemon />
              </AuthRoute>
            }
          />
          <Route path="/counter" element={<Bank />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
