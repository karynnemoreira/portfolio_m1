import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Projetos from "../Projetos/Projetos"
import Inicio from "../Inicio/Inicio"
import Contatos from "../Contados/Contatos"

//BrowserRouter: Container que vai envolver tudo relacionado as nossas rotas. E vai habilitar essa funcionalidade.

//Routes: Uma caixa que vai envolver todas as rotas.  

//Route <Route /> Define uma rota individual. Nele que vamos chamar os componentes. Ex: <Route path="/projetos" element={<Projetos />} />

//Link é usado para criar links entre as páginas, substituindo a tag <a>.

function NavBar() {
  return (
    <BrowserRouter>

     <nav>
      <img src="https://play-lh.googleusercontent.com/E6RS-I1T58nvom_QfR7gondwJ1OWqfv2c8lz09FviTc9XWjrNMCl4XiAZD0-6qb0Tw=w256" alt="Logo" />
      <ul>
        <li> <Link to="/"> Início   </Link> </li>
        <li> <Link to="/projetos"> Projetos </Link> </li>
        <li> <Link to="/contatos"> Contatos </Link> </li>
      </ul>
    </nav>

<Routes> 
    <Route path="/" element={<Inicio />} /> 
    <Route path="/projetos" element={<Projetos />} />
    <Route path="/contatos" element={<Contatos/>} />
</Routes>

    </BrowserRouter>
   
  );
}

export default NavBar;
