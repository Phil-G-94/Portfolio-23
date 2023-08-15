// page imports
import Root from "./pages/Root";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/about-me",
                    element: <AboutMe />,
                },
                {
                    path: "/projects",
                    element: <Projects />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
            ],
        },
    ]);

    return (
        <RouterProvider router={router}>
            <Home></Home>
        </RouterProvider>
    );
}

export default App;
