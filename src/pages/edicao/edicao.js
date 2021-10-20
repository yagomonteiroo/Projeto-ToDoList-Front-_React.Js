import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/api";
import moment from "moment";
import "./edicao.css"

const Edicao = (props) => {
   const _id = props.match.params.id;
   const history = props.history;
   // criacao do estado
   const [tarefa, setTarefa] = useState({});

   // o use effect chama a funcao getById que retorna o objeto do backend de acordo com o id
   useEffect(() => {
      getTarefaById();
   }, []);

   const getTarefaById = async () => {
      // faz uma chamada para api para pegar o objeto de acordo com o id.
      const response = await Api.fetchGetById(_id);
      const result = await response.json();
      // atualizo o meu estado de acordo com o resultado.
      setTarefa(result);
   };

   const handleFieldsChange = (event) => {
      // clono meu objeto do estado
      const campos = { ...tarefa };
      // para cada input eu atualizo o seu respectivo valor no obj
      campos[event.target.name] = event.target.value;

      // atualizo o meu estado com esse novo objeto.
      setTarefa(campos);
   };

   const handleSubmit = async (evento) => {
      evento.preventDefault();
      // faco uma copia do estado com obj atualizado.
      const tarefaObj = { ...tarefa };
      // transforma o salario em inteiro.
      const data= new Date(tarefaObj.prazo)
      tarefaObj.prazo = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
      try {
         const response = await Api.fetchPut(tarefaObj, _id);
         const result = await response.json();
         alert(result.message);
         history.push("/"); // forca o historico a voltar para a rota de / => home
      } catch (error) {
         console.log(error);
      }
   };

   const transformDate = (prazo) => {
      return moment(prazo).utc().format('YYYY-MM-DD')};


   return (
      <div className="container cadastro">
         <div className="card mt-4 py-2 px-3">
            <div className="card-title text-primary text-center mt-2">
               <div className="row">
                  <div className="col">
                     <h1>Editar de Tarefa</h1>
                  </div>
               </div>
            </div>
            <div className="card-body">
               <form onSubmit={handleSubmit}>
                  <div className="row">
                     <div className="col">
                        <div className="form-floating mb-3">
                           <input type="text" className="form-control" name="titulo" id="floatingInput" placeholder="Digite o Titulo" value={tarefa.titulo} onChange={handleFieldsChange}/>
                           <label htmlFor="floatingInput">Titulo</label>
                        </div>
                     </div>
                     
                     <div className="col">
                        <div className="form-floating">
                           <input type="text" className="form-control" name="prazo" value={tarefa.prazo} id="floatingprazo" placeholder="Digite a descrição da tarefa" onChange={handleFieldsChange} />
                           <label htmlFor="floatingprazo">Prazo</label>
                        </div>
                     </div>
                     
                  </div>
                  <div className="row">
                     <div className="col">
                        <div className="form-floating mb-3">
                           <select className="form-control" name="prioridade" id="floatingprioridade" placeholder="Selecione a Prioridade" value={tarefa.prioridade} onChange={handleFieldsChange}>
                              <option value="baixa">Baixa</option>
                              <option value="media">Média</option>
                              <option value="alta">Alta</option>
                           </select>
                           <label htmlFor="floatingprioridade">Prioridade</label>
                        </div>
                     </div>
                     <div className="col">
                        <div className="form-floating">
                           <select className="form-control" name="status" id="floatingstatus" placeholder="Digite a Status" value={tarefa.status} onChange={handleFieldsChange}>
                              <option value="a fazer">A fazer</option>
                              <option value="fazendo">Fazendo</option>
                              <option value="feito">Feito</option>
                           </select>
                           <label htmlFor="floatingstatus">Status</label>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col mb-1">
                           <div className="form-floating">
                              <input type="text" className="form-control" name="descricao" onChange={handleFieldsChange} id="floatingdescricao" placeholder="Digite a descrição da tarefa" value={tarefa.descricao} />
                              <label htmlFor="floatingdescricao">Descrição</label>
                           </div>
                        </div>   
                  </div>
                  <div className="col d-flex justify-content-center mt-4">
                     <button className="btn btn-primary mx-5 px-5 " type="submit">Enviar</button>
                     <Link className="link" to="/"><button className="btn btn-secondary text-light mx-5 px-5 " type="button">Voltar</button></Link>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Edicao;

