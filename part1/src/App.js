import './App.css';
import Mensaje from './Mensaje.js';

const App =  () => {

  return (
    <div className="App">
      <Mensaje color="red" title="Este es un mensaje"/>
      <Mensaje color="blue" title="que esta hecho"/>
      <Mensaje color="yellow" title="en react"/>
    </div>
  );
}

export default App;
