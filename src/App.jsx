import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./components/body/Home.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { HelpPage } from "./components/body/HelpPage.jsx";
//faltam os css's nos seus devidos lugares(css modules), apeas editar as referencias de onde vêm as estilizações
//lembre se de alterar o css para a pagina ficar como deseja, minha preocupação atual é resolver os carroséis.
export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home nomePagina="Home" />} />
        <Route path="/help" element={<HelpPage nomePagina="Help" />} />
      </Routes>

      <Footer />
    </>
  );
}
/*exemplo de Rota

<Route path='/' element={<Home nomePagina='Home' />}/>
*/
