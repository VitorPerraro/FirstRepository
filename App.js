import './App.css';
import livro from './assets/livro.png'
import agenda from './assets/agenda.png'
import dolar from './assets/dolar.png'


function App() {
  return (
    <div className="App">

      <div className='div1'>
      <h1>Vitor Perraro</h1>
      <h1 className='imers'>Imersão em conteúdo</h1>
      <p>Leve o seu aprendizado para o próximo nivel</p>
      <p>Dias 17, 18 e 19!</p>
      <button>Clique para saber mais!</button>
      </div>



      <div className='div2'>

          <div className='metod'>
            <img src={agenda} className='icons'></img>
            <h1>Metodologia</h1>
            <p>teste</p>
          </div>

          <div className='mat'>
            <img src={livro} className='icons'></img>
            <h1>Materias</h1>
            <p>Testando</p>
          </div>

          <div className='invest'>
          <img src={dolar} className='icons'></img>
          <h1>Investimento</h1>
          <p>Testando</p>
          </div>

      </div>
    









    </div>
  );
}

export default App;
