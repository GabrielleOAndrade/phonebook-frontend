import axios from "axios";

const urlBase = "http://localhost:3001/api/persons";

const getAll = () => axios.get(urlBase);

const getOne = (id) => axios.get(`${urlBase}/${id}`)

const create = (personObject) => axios.post(urlBase, personObject);

const remove = (id) => axios.delete(`${urlBase}/${id}`)

const update = (id, personObject) => axios.patch(`${urlBase}/${id}`, personObject)

const personService = { getAll, getOne, create, remove, update };

export default personService;
