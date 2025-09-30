import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <Header />
        <Test/>
        <Routes>
          <Route path='/' element={ <NotesListPage/> } />
          <Route path='/note/:id' element={ <NotePage/> } />
        </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
