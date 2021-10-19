import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../api/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './tarefaIndividual.css'

const TarefaIndividual = (props) => {
   const _id = props.match.params.id;
   const [tarefa, setTarefa] = useState({});
   const [open, setOpen] = useState(false);

   const onOpenModal = () => setOpen(true);
   const onCloseModal = () => setOpen(false);

   useEffect(() => {
      getTarefaById();
   }, []);

   const getTarefaById = async () => {
      const response = await Api.fetchGetById(_id);
      const result = await response.json();
      console.log(result)
      setTarefa(result);
   }

   const handleDelete = async (evento) => {
      evento.preventDefault();
      const response = await Api.fetchDelete(_id);
      const result = await response.json();
      alert(result.message);
      props.history.push('/');
   }


   return (
      <div className="container-sm flex-grow-1">
         <div className="card mt-5 p-5">
            <h1 className="text-center  text-secondary">{tarefa.titulo}</h1>
            <div className="w-100 d-flex align-items-center justify-content-center py-4">   
               <p className=" card lead text-center px-0 mx-0">{tarefa.descricao}</p>  
            </div>
            <div className="d-flex justify-content-around">   
               <span className="badge bg-secondary w-25 py-2">{tarefa.prioridade}</span>
               <span className="badge bg-secondary  w-33 py-2 w-25">{tarefa.status}</span>
               <span className="badge bg-secondary py-2 w-25">Prazo: {tarefa.prazo}</span>
            </div>   
            
            <div className="mt-5 mb-4 w-100 d-flex  justify-content-around">
               <Link to={`/edit/${tarefa._id}`} className="btn btn-outline-info mx- w-25">Editar</Link>
               <button className="btn btn-outline-danger mx- w-25" onClick={onOpenModal}>Excluir</button>
            </div>
         </div>   
         <Modal open={open} onClose={onCloseModal} center>
            <h3 className="mb-3 mt-2 text-secondary">Deseja excluir a tarefa "{tarefa.titulo}"?</h3>
            <div className="container w-100 d-flex justify-content-center">
               <button className="btn btn-danger mx-3 px-5" onClick={onCloseModal}>Não</button>
               <button className="btn btn-info mx-3 px-5 text-light" onClick={handleDelete}>Sim</button>
            </div>
         </Modal>
      </div>
   )
}

export default TarefaIndividual;