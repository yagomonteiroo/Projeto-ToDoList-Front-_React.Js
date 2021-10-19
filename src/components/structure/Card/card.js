import React from 'react'
import { Link } from 'react-router-dom';
import './card.css'

const Card = (props) => {
   const tarefa = props.data;
   let resumo = `${tarefa.descricao}.`;
   if (resumo.length >= 96){
      resumo = tarefa.descricao.substr(0, 96) + "..."
   }
   
   return (
      <Link to={`/tarefa/${tarefa._id}`} className="col">
         <div className="card hover-shadow">
            <div className="card-body">
               <h5 className="card-title">{tarefa.titulo}</h5>
               <p className="card-text">{resumo}</p>
               <span className="badge bg-primary">Prioridade: {tarefa.prioridade}</span>
               <span className="badge bg-light text-dark mx-3">Status: {tarefa.status}</span>
               <span className="badge bg-light text-dark mx-1">Prazo: {tarefa.prazo}</span>

            </div>
         </div>
      </Link>

   )
}

export default Card