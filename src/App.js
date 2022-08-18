import React from "react";
import logo from './assets/logo.png'
import dashboard from './assets/dashboard.svg'
import personagens from './assets/personagens.svg'
import naves from './assets/nave.svg'
import armas from './assets/armas.svg'
import pblack from './assets/persoblack.svg'
import naveblack from './assets/naveblack.svg'
import armablack from './assets/armablack.svg'



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
        
      <div className="content">
        <div className="cards-header">
          
          <div className="card">
              <div className="card-content">
                <div className="card-info">
                  <p>Personagens</p>
                  <h2>10</h2>
                </div>
                <img src={pblack}/>   
              </div>
          </div>
            
          <div className="card">
              <div className="card-content">
                <div className="card-info">
                  <p>Naves</p>
                  <h2>22</h2>
                </div>
                <img src={naveblack}/>   
              </div>
          </div>
            
          <div className="card">
              <div className="card-content">
                <div className="card-info">
                  <p>Armas</p>
                  <h2>35</h2>
                </div>
                <img src={armablack}/>   
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
