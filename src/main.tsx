import { createRoot } from "react-dom/client";

import { AppRouter } from "./router/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(<AppRouter />);
