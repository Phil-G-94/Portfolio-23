import { heroText } from "../../data/heroText";
import { useEffect, useState } from "react";

let timer;

export default function Typewriter() {
    const [text, setText] = useState("");

    const [animStarted, setAnimStarted] = useState(false);

    useEffect(() => {
        let i = -1;

        if (animStarted) {
            return;
        }

        setAnimStarted(true);

        timer = setInterval(() => {
            i++;
            if (i === heroText.length - 1) clearInterval(timer);

            setText((prev) => prev + heroText[i]);
        }, 40);
    }, [animStarted, setAnimStarted]);

    useEffect(() => {
        return () => {
            setAnimStarted(false);
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="m-16 flex md:justify-center sm:justify-center space-x-1 ">
            <div className="max-w-2xl text-left">{!text ? "" : text}</div>
        </div>
    );
}
