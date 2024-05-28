import NewMicForm from "./components/NewMicForm"
import MicPage from "./components/MicPage"
import App from "./components/App";

const routes = [
    {
      path: "/",
      element: <App />
    },
    {
        path: "/form",
        element: < NewMicForm />
    },
    {
        path: "/mics",
        element: <MicPage />
    }
  ]

  export default routes;