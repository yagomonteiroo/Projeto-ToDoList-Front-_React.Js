import React, { useState, useEffect } from 'react'
import Card from '../Card/card'
import Api from '../../../api/api'

const ListCard = () => {
   const [tarefas, setTarefas] = useState([]);

   useEffect(() => {
      getVagas();
   }, []);

   const getVagas = async () => {
      const response = await Api.fetchGetAll();
      const data = await response.json();
      setTarefas(data);
   }

   return (
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-4">
         {
            tarefas.map((tarefa, index) => (
               <Card data={tarefa} key={index} />
            ))
         }
      </div>
   )
}

export default ListCard