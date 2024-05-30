import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <h1>Welcome!</h1>
  },
  {
    path: '/login',
    element: <LoginFormPage />
  }
])

function App() {
  return <RouterProvider router={routes} />
}

export default App;
