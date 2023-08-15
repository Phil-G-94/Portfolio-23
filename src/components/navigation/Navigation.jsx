import { NavLink } from "react-router-dom";

const Navigation = () => {
    const navLinkStyling =
        "hover:bg-yellow-500 hover:underline p-2 font-semibold rounded-md";

    return (
        <header>
            <nav className="sticky top-0">
                <ul className="flex flex-col sm:gap-1 md:gap-2 gap-4 m-2 p-0 list-none justify-evenly md:flex-row ">
                    <li>
                        <NavLink
                            to="/"
                            className={navLinkStyling}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about-me"
                            className={navLinkStyling}
                        >
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="projects"
                            className={navLinkStyling}
                        >
                            {" "}
                            Projects{" "}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
