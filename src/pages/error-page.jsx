import { Link } from "react-router-dom";
import { Header } from "../components/header";
import imgError from "../components/assets/erro1.jpg"

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="flex justify-center items-center  flex-col mt-36">
        <img src={imgError} alt="" className="w-[20%] " />
          <div className=" flex justify-center flex-col">
            <strong className="text-8xl text-orange ">OOPS</strong>
                <p className="text-center text-2xl mt-12">
                
                Nome não encontrado
                </p>

                <div className="flex justify-center items-center">
                    <Link to="/">
                        {" "}
                        <button className="text-white text-sm border-black border-spacing-4 shadow-lg rounded-2xl bg-cyan-500 w-40 h-10 hover:bg-sky-800  hover:transition-all duration-500 ease-in-out hover:duration-200 hover:ease-in-out hover:w-44 mt-11 hover:mt-12 hover:shadow-2xl hover:rounded-3xl">
                        Página inicial
                        </button>
                    </Link>
                </div>
          </div>
        </div>
      </main>
    </div>
  );
};
