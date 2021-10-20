const Api = {
   apiUrl: 'https://backend-lista-de-tarefas.herokuapp.com/tarefas',
   fetchGetAll: () => fetch(Api.apiUrl),
   fetchGetById: id => fetch(`${Api.apiUrl}/${id}`),
   fetchPost: (tarefa) => {
      return fetch(Api.apiUrl, {
         method: 'POST',
         headers: new Headers({
            "Content-Type": "application/json",
         }),
         body: JSON.stringify(tarefa)
      })
   },
   fetchPut: (tarefa, id) => {
      return fetch(`${Api.apiUrl}/${id}`, {
         method: 'PUT',
         headers: new Headers({
            "Content-Type": "application/json",
         }),
         body: JSON.stringify(tarefa)
      })
   },
   fetchDelete: (id) => {
      return fetch(`${Api.apiUrl}/${id}`, {
         method: 'DELETE'
      })
   }
}

export default Api;