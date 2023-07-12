import { Link } from "react-router-dom";
import "regenerator-runtime";


const Home = () => {
  
  return (
    <div className="bg-gray-100 ">
      <header className="py-12 dark:bg-slate-950 ">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Welcome to Futurus!
          </h1>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400">
            We are shaping the future with AI technology.
          </p>
        </div>
      </header>

      <section className="bg-blue-500 dark:bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Link
              to="/bot"
              className="bg-white text-blue-500 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 hover:bg-blue-200"
            >
             Start
            </Link>
          </div>
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Join Us Today!
          </h2>
          <p className="text-lg text-center text-white">
            Experience the possibilities of AI with Futurus. Contact us now to
            get started.
          </p>
        </div>
      </section>

      <footer className="bg-gray-200 dark:bg-slate-950 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-white">
            &copy; {new Date().getFullYear()} Futurus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
