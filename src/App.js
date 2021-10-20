
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/shared/header/header';
import Footer from './components/shared/footer/footer';
import Home from './pages/home/home';
import TarefaIndividual from './pages/tarefaIndividual/tarefaIndividual';
import Cadastro from './pages/cadastro/cadastro';
import Edicao from './pages/edicao/edicao'

function App() {
   return (
      <div className="app">
         <Header />
         <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/tarefa/:id" component={TarefaIndividual} />
            <Route path="/edit/:id" component={Edicao} />
         </Switch>
         <Footer />
      </div>
   );
}

export default App;