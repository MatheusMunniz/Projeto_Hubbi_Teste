import React from "react";
//Import Menu Lateral
import logo from './assets/logo.png'
import dashboard from './assets/dashboard.svg'
import personagens from './assets/personagens.svg'
import naves from './assets/nave.svg'
import armas from './assets/armas.svg'
//Import Personagens
import luke from './assets/fotos/Luke.jpg'
import Vader from './assets/fotos/darth-vader.jpg'
import C3po from './assets/fotos/c3pO.jpg'
//Import Naves
import Xwing from './assets/fotos/xwing.jpg'
import Millennium from './assets/fotos/milenium.jpg'
import TieFighter from './assets/fotos/tie-fighter.jpg'
//Import Armas
import DL44 from './assets/fotos/dl-44.jpg'
import Sabre from './assets/fotos/lightsaber.jpg'
import Granada from './assets/fotos/grenade.png'
import perfil from './pages/perfil/index'
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
              <a href='#'>
              <p>Perfil</p>
              </a>
            </li>
            <li>
              <img src={personagens}/>
              <a href='#'>
              <p>Personagens</p>
              </a>
            </li>
            <li>
              <img src={naves}/>
              <a href='#'>
              <p>Naves</p>
              </a>
            </li>
            <li>
              <img src={armas}/>
              <a href='#'>
              <p>Armas</p>
              </a>
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
                  <h2 id="personagens">48</h2>
                </div>
                <img src={pblack}/>   
              </div>
          </div>
            
          <div className="card">
              <div className="card-content">
                <div className="card-info">
                  <p>Naves</p>
                  <h2 id="naves">22</h2>
                  
                </div>
                <img src={naveblack}/>   
              </div>
          </div>
            
          <div className="card">
              <div className="card-content">
                <div className="card-info">
                  <p>Armas</p>
                  <h2 id="armas">35</h2>
                </div>
                <img src={armablack}/>   
              </div>
          
          </div>
        </div>
        <centro>
      <div className="Centro">
        <h1>Personagens</h1>
        <ul>
          <li>
            <a href="#"><img src={luke}/></a>
            <span>Luke Skywalker</span>
          </li>
          <li>
            <a href="#"><img src={Vader}/></a>
            <span>Darth Vader</span>
          </li>
          <li>
            <a href="#"><img src={C3po}/></a>
            <span>C-3PO</span>
          </li>
        </ul>
        <h1>Naves</h1>
        <ul>
          <li>
            <a href="#"><img src={Xwing}/></a>
            <span>X-Wing</span>
          </li>
          <li>
            <a href="#"><img src={Millennium}/></a>
            <span>Millennium Falcon</span>
          </li>
          <li>
            <a href="#"><img src={TieFighter}/></a>
            <span>Tie Fighter</span>
          </li>
        </ul>
        <h1>Armas</h1>
        <ul>
          <li>
            <a href="#"><img src={DL44}/></a>
            <span>DL-44</span>
          </li>
          <li>
            <a href="#"><img src={Sabre}/></a>
            <span>Lightsaber</span>
          </li>
          <li>
            <a href="#"><img src={Granada}/></a>
            <span>Grenade</span>
          </li>
        </ul>
      </div>
      </centro>
      </div>
      

       <login />

    </div>
  );
}

export default App;
