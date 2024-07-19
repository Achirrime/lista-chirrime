import Footer from "../components/footer";
import { Header } from "../components/header";
import Imagem1 from "../components/assents/estudantes.jpg";


export const Home = () => {
  return (
    <>
      <Header />
      <main className="bg-orange-50">
        <div className="-10 text-center  bg-orange-50">
        <h1 className=" text-4xl p-8 font-bold">Encontre o seu nome aqui</h1>
        <p className="text-lg mt-1">Cadaste, pesquise e elimine nomes na lista.</p>
        </div>
        <div className="mt-10 bg-orange-50">
        <img src={Imagem1} alt="" className="ml-80 justify-center"/>
        </div>
      </main>
      <Footer/>
    </>
  );
};
export default Home;