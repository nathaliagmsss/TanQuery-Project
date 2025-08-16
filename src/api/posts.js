import axios from "axios";

// Função para buscar os dados na api

export default fetchPost = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    return response.data; //Retorna os dados
}

// Função para enviar um novo usuárioa

export const createUser = async (newUser) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newUser
    );
    return response.data; // Retorna o novo usuário
  };