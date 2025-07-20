import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import MyList from "./components/pages/my-list";
import UnderDevelopment from "./components/pages/under-development";
import Register from "./components/pages/register";
import Movies from "./components/pages/movies";
import Series from "./components/pages/series";
import { AuthProvider, ProtectedRoute } from "./hooks/auth";
import Logout from "./components/pages/logout";
import Premium from "./components/pages/premium";
import PageTemplate from "./components/templates/page-template";
import { Provider } from "react-redux";
import store from "./stores/redux/store";
// import SeriesByGenre from "./components/pages/series-by-genre";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PageTemplate />}>
            <Route index element={<Home />} />
            <Route path="/series">
              <Route index element={<Series />} />
              <Route path="/series/genre/:genreId" element={<Series />} />
            </Route>
            <Route path="/movies" >
              <Route index element={<Movies />} />
              <Route path="/movies/genre/:genreId" element={<Movies />} />
            </Route>
            <Route
              path="/lists"
              element={
                <ProtectedRoute>
                  <MyList />
                </ProtectedRoute>
              }
            />
            <Route path="/premium" element={<Premium />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          
          <Route
            path="/profile"
            element={
              <UnderDevelopment
                tag="Profile"
                header={<p>mfatihz.std@gmail.com</p>}
              />
            }
          />
          {/* Auth */}
          <Route
            path="/forgot-password"
            element={
              <UnderDevelopment to="/login" tag="Login">
                Kembali ke Login
              </UnderDevelopment>
            }
          />
          {/* Footer */}
          <Route
            path="/genre/:genreId"
            element={<UnderDevelopment tag="Genre" />}
          />
          <Route
            path="/help/:helpId"
            element={<UnderDevelopment tag="Help" />}
          />
          {/* Catch-all route untuk path lain di footer */}
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
