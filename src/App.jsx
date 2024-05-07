import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteA from './componentes/MeusComponentes/ComponenteA'
import Loginstatus from './componentes/Login/LoginStatus'
import Cabecalho from './componentes/MeusComponentes/Cabecalho'
import Rodape from './componentes/MeusComponentes/Rodape'

function App() {
  const [count, setCount] = useState(0)

//retorno da função que é visualização do componente
  return (
    <>
      <div>
        <Cabecalho/>
        <ComponenteA/>
        <Loginstatus/>
        <Rodape/>
      
      </div>
      
    </>
  )
}

export default App
