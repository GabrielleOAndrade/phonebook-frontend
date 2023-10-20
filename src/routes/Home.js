import { useEffect, useState } from "react";
import personService from "../services/phonebook";

function Home() {
  const [persons, setPersons] = useState([]);
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  useEffect(() => {
    fetchData(); //Carrega os dados iniciais
   },[]);

  const fetchData = () => {
    personService.getAll().then((response) => {
      setPersons(response.data);  
  })
  }; 
    const addPerson = async (event) => {
      event.preventDefault();
    const personObject = {
      nome: nome,
      numero: numero,
    }
    
    await personService.create(personObject);
   // console.log("button clicked", event.target);
   setNome("");
   setNumero("");
   // Após criação, atualize a lista de persons chamando fetchData novamente
   fetchData();
  };

  const handleNomeChange = (event) => {
    // console.log(event.target.value);
    setNome(event.target.value);
  };

  const handleNumeroChange = (event) => {
    // console.log(event.target.value);
    setNumero(event.target.value);
  };

  return (
    <div className="container">
      <h2>Home</h2>
      <form onSubmit={addPerson}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            placeholder="Digite o seu nome..."
            className="form-control"
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
            className="form-control"
            onChange={handleNumeroChange}
          />
          <button className="btn btn-success mt-4">Cadastrar</button>
        </div>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.nome}</td>
              <td>{person.numero}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
          }

export default Home;
