import React from 'react';
import './cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
   const history = props.history;

   const handleSubmit = async (evento) => {
      evento.preventDefault();
      
      const titulo = evento.target.titulo.value;
      const descricao = evento.target.descricao.value;
      const prioridade = evento.target.prioridade.value;
      const status = evento.target.status.value;
      const prazo = evento.target.prazo.value;
      
      const tarefa = {
         titulo,
         descricao,
         prioridade,
         status,
         prazo
      }

      try {
         const response = await Api.fetchPost(tarefa)
         const result = await response.json();
         alert(result.message);
         history.push('/');
      } catch (error) {
         console.log(error);
      }

   }

   return (
      <div className="container cadastro">
         <div className="card mt-4 py-2 px-3">
            <div className="card-title">
               <div className="row">
                  <div className="col">
                     <h3>Cadastro de Tarefas</h3>
                  </div>
               </div>
            </div>
            <div className="card-body">
               <form onSubmit={handleSubmit}>
                  <div className="row">
                     <div className="col">
                        <div className="form-floating mb-3">
                           <input type="text" className="form-control" name="titulo" id="floatingInput" placeholder="Digite o Titulo" />
                           <label htmlFor="floatingInput">Titulo</label>
                        </div>
                     </div>
                     
                     <div className="col">
                        <div className="form-floating">
                           <input type="date" className="form-control" name="prazo" id="floatingprazo" placeholder="Digite a descrição da tarefa" />
                           <label htmlFor="floatingprazo">Prazo</label>
                        </div>
                     </div>
                     
                  </div>
                  <div className="row">
                     <div className="col">
                        <div className="form-floating mb-3">
                           <select className="form-control" name="prioridade" id="floatingprioridade" placeholder="Selecione a Prioridade">
                              <option value="baixa">Baixa</option>
                              <option value="media">Média</option>
                              <option value="alta">Alta</option>
                           </select>
                           <label htmlFor="floatingprioridade">Prioridade</label>
                        </div>
                     </div>
                     <div className="col">
                        <div className="form-floating">
                           <select className="form-control" name="status" id="floatingstatus" placeholder="Digite a Status">
                              <option value="a fazer">A fazer</option>
                              <option value="fazendo">Fazendo</option>
                              <option value="feito">Feito</option>
                           </select>
                           <label htmlFor="floatingstatus">Status</label>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col">
                           <div className="form-floating">
                              <input type="text" className="form-control" name="descricao" id="floatingdescricao" placeholder="Digite a descrição da tarefa" />
                              <label htmlFor="floatingdescricao">Descrição</label>
                           </div>
                        </div>   
                  </div>
                  <div className="col d-flex justify-content-center mt-5">
                     <button className="btn btn-primary mx-2 w-25" type="submit">Enviar</button>
                     <button className="btn btn-info text-light mx-2 w-25" type="button">Voltar</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Cadastro