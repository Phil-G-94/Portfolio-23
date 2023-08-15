import Social from "../components/ui/Social";

import Hero from "../components/hero/Hero";

const Home = () => {
    return (
        <>
            <main className="flex flex-col place-content-center h-screen m-1">
                <h1 className="text-xl font-bold m-3">Phil Georgiou</h1>
                <div>
                    <Social></Social>
                </div>

                <div>
                    <Hero />
                </div>
            </main>
        </>
    );
};

export default Home;
