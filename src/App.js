import { useEffect, lazy, Suspense } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

// import Dashboard from "./components/Dashboard";
// import Register from "./components/auth/Register";
// import Signin from "./components/auth/Signin";
// import Detail from "./components/Detail";
// import AddEditComponent from "./components/AddEditComponent";
import Header from "./components/common/Header";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import Alert from "./components/common/Alert";
import Loader from "./components/common/Loader";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Register = lazy(() => import("./components/auth/Register"));
const Signin = lazy(() => import("./components/auth/Signin"));
const Detail = lazy(() => import("./components/Detail"));
const AddEditComponent = lazy(() => import("./components/AddEditComponent"));

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Alert />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <Signin />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback={<Loader />}>
                  <Register />
                </Suspense>
              }
            />
            <Route element={<Layout />}>
              <Route
                path="/dashboard"
                element={
                  <Suspense fallback={<Loader />}>
                    <RequireAuth>
                      <Dashboard />
                    </RequireAuth>
                  </Suspense>
                }
              />
              <Route
                path="/detail"
                element={
                  <Suspense fallback={<Loader />}>
                    <RequireAuth>
                      <Detail />
                    </RequireAuth>
                  </Suspense>
                }
              />
              <Route
                path="/addedit"
                element={
                  <Suspense fallback={<Loader />}>
                    <RequireAuth>
                      <AddEditComponent />
                    </RequireAuth>
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

function RequireAuth({ children }) {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  if (!isAuthenticated && !loading) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function Layout() {
  return (
    <div className="min-h-full">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
