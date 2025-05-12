import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
createRoot(document.getElementById("root")!).render(<App />);
