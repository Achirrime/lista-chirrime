import { CheckCircle } from "@phosphor-icons/react";
import Footer from "../components/footer";
import { Header } from "../components/header";
import { Slider } from "../components/slider";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-slate-50 min-h-screen">
        <Slider />
        <div className="text-center bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Encontre o seu nome aqui
          </h1>
          <p className="text-base sm:text-lg mt-1">
            Cadastre, pesquise e elimine nomes na lista.
          </p>
          <p className="mt-2 flex items-center justify-center gap-2 text-base sm:text-lg">
            Para detalhes, clica no nome
            <CheckCircle size={24} className="text-sky-blue-500" />
          </p>
        </div>
      
      </main>
      <Footer />
    </>
  );
};

export default Home;
