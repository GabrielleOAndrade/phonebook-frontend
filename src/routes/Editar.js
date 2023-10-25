import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import personService from "../services/phonebook";

function Editar() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const { id } = useParams();
  const navigate = useNavigate("");

 useEffect(() => {
    personService.getOne(id).then((response) => {
      setNome(response.data.nome);
      setNumero(response.data.numerpo);
    }
    )
  }, [id]);
  const handleNomeChange = (event) => {
    // console.log(event.target.value);
    setNome(event.target.value);
  };

  const handleNumeroChange = (event) => {
    // console.log(event.target.value);
    setNumero(event.target.value);
  };
   const editPerson = async (event) => {
    event.prevenDefatult();

    const personObject = {
      nome: nome,
      numero: numero,
    };
    await personService.update(id, personObject);

    navigate("/");
   };

   const cancel = () => {
    navigate("/");
   };

    return (
      <div>
        <form onSubmit={editPerson}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome:
            </label>
            <input
              type="text"
              placeholder="Digite o seu nome..."
              className="form-control"
              defaultValue={nome}
              onChange={handleNomeChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefone" className="form-label">
              Telefone:
            </label>
            <input
              type="text"
              placeholder="Digite o seu telefone..."
              defaultValue={numero}
              className="form-control"
              onChange={handleNumeroChange}
            />
            <button className="btn btn-secundary-success mt-4">Editar</button>
            <button className="btn btn-warning mt-4 mx-3" onClick={cancel}c>Cancelar</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Editar;