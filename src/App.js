import React from "react";
import logo from './assets/logo.png'
import dashboard from './assets/dashboard.svg'
import personagens from './assets/personagens.svg'
import naves from './assets/nave.svg'
import armas from './assets/armas.svg'
function App() {
  return (
    <div className="container">
      <div className="lateral-menu">
        <img src={logo}/>
        <div className="menu-itens">
          <ul>
            <li>
              <img src={dashboard}/>
              <p>Perfil</p>
            </li>
            <li>
              <img src={personagens}/>
              <p>Personagens</p>
            </li>
            <li>
              <img src={naves}/>
              <p>Naves</p>
            </li>
            <li>
              <img src={armas}/>
              <p>Armas</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
