import axios from "axios";

// Função para buscar os dados na api

export default fetchPost = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data; //Retorna os dados
    } catch (error) {
      console.log("Dados não encontrados", error)
    }
}
