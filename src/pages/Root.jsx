import Navigation from "../components/navigation/Navigation";

import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <Navigation></Navigation>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;
