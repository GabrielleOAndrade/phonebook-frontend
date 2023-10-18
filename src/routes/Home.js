import { useEffect, useState } from "react";
import personService from "../services/phonebook";

function Home() {
  const [persons, setPersons] = useState([]);
  const [nome, setNome] = useState('') 

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleNomeChange = (event) => {
    console.log(event.target,value);
    setNome(event.target.value);
  }
 
  const handleNumeroChange = (event) => {
    console.log(event.target.value);
    setNumero(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

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
