
import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { AuthContext } from './store/AuthContext';

function App() {
  const [isForm,setIsForm] = useState(true)
  

  

  function closeForm(){
    setIsForm((prev)=>!prev)
  }
  return (
    <div className="App"> 
      <AuthContext.Provider value={false}>
      <Header form={isForm}/>
      {isForm && <Form  onCloseForm = {closeForm}/>}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
