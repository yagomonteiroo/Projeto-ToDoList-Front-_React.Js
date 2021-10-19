import React from 'react';
import './home.css'
import ListCard from '../../components/structure/ListCard/listcard';

const Home = () => {
   return (
      <div className="container home">
         <h1 className="text-center mt-2">Lista de Tarefas</h1>
         <ListCard />
      </div>
   )
}

export default Home