import { useState } from "react"; //importando o hook useState que nos permite guardar e controlar estados

//Importando as imagens que serão utilizadas bno projeto
import PetAdopt from "../../assets/petadopt.jpeg";
import ReciclaTech from "../../assets/reciclatech.jpeg";
import VerdeAcao from "../../assets/verdeacao.jpeg";

function Projetos() {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      imagem: PetAdopt,
      nome: "PetAdopt",
      descricao: "Projeto criado para adoção de pets.",
    },

    {
      id: 2,
      imagem: ReciclaTech,
      nome: "ReciclaTech",
      descricao: "Projeto focado para facilitar doações de eletrônicos.",
    },

    {
      id: 3,
      imagem: VerdeAcao,
      nome: "Verde Ação",
      descricao: "Projeto que conecta interessados em ações voluntárias.",
    },
  ]);

  return (
    <>
      <article>
        {projetos.map((item) => (
          <div key={item.id}>
            <img src={item.imagem} alt="" />
            <h2> {item.nome} </h2>
            <p> {item.descricao} </p>
            <h3> {projetos[1].nome} </h3>
          </div>
        ))}
      </article>
    </>
  );
}

export default Projetos;
