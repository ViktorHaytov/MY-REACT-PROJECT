import {Routes, Route} from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import { BookDetails } from "./components/BookDetails/BookDetails";
import { CatalogBook } from "./components/catalog/CatalogBook";
import { CreateBook } from "./components/CreateBook/CreateBook";
import { EditBook } from "./components/EditBook/EditBook";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from './components/Logout/Logout';
import { Register } from "./components/Register/Register";



function App() {



  return (
    <AuthProvider>
    <div>
      <Header />

      <main>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/catalog' element={<CatalogBook />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='/create' element={<CreateBook /> }/>
          <Route path='/catalog/:bookId' element={<BookDetails />}/>
          <Route path='/catalog/:bookId/edit' element={<EditBook />}/>
        </Routes>

      </main>

    </div>
    </AuthProvider>
  );
}

export default App;
