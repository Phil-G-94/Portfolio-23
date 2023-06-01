export default function Social() {
    return (
        <div className="flex flex-col">
            <a
                href="https://www.linkedin.com/in/phil-georgiou/"
                target="_blank"
                className="inline-flex m-3 "
                rel="noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin"
                >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect
                        x="2"
                        y="9"
                        width="4"
                        height="12"
                    ></rect>
                    <circle
                        cx="4"
                        cy="4"
                        r="2"
                    ></circle>
                </svg>
            </a>
            <a
                href="https://github.com/Phil-G-94"
                target="_blank"
                rel="noreferrer"
                className="inline-flex m-3"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a>

            <a
                href="https://discord.com/users/philG#0436"
                target="_blank"
                rel="noreferrer"
                className="inline-block m-3"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                >
                    <path
                        d="M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </a>
        </div>
    );
}
