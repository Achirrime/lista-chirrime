import Footer from "../components/footer";
import { Header } from "../components/header";
import { Slider } from "../components/slider";


export const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        <div className="-10 text-center  bg-slate-50">
        <h1 className=" text-4xl p-8 font-bold">Encontre o seu nome aqui</h1>
        <p className="text-lg mt-1">Cadaste, pesquise e elimine nomes na lista.</p>
        </div>
        <div className="mt-10 bg-slate-50">
          <Slider/>
        </div>
      </main>
      <Footer/>
    </>
  );
};
export default Home;