import React, {Component} from 'react';
import './App.css';
import MainMenu from './MainMenu/MainMenu';
import MoodOptions from './MainMenu/MoodOptions/MoodOptions';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMainMenu: false,
      bgColor: '',
      bgEnergy: '',
      bgEffects: ''
    };
    this.toggleMainMenu = this.toggleMainMenu.bind(this);
    this.updateScreenHandler = this.updateScreenHandler.bind(this);
  }

  toggleMainMenu() {
    this.setState(
      {
        showMainMenu: !this.state.showMainMenu //sets showMainMenu to true, to display on the screen! or false. 
      }
    );
  }


  updateColorsHandler = (newBgColor) => {
    this.setState(
      {
        bgColor: newBgColor
      }
    )
  }

  updateEnergyHandler = (newEnergy) => {
    this.setState(
      {
        bgEnergy: newEnergy
      }
    )
  }

  updateEffectsHandler = (newEffect) => {
    this.setState(
      {
        bgEffects: newEffect
      }
    )
  }

  updateScreenHandler() {
    document.body.style.backgroundColor = this.state.bgColor;
  }

  render () {
    return (
      <div>
        <center>
        <button onClick = {this.toggleMainMenu.bind(this)}>launch: the mindscape</button>

        {this.state.showMainMenu ?
          <MainMenu 
            text = 'how im feeling'
            updateColorsHandler = {this.updateColorsHandler}
            updateEnergyHandler = {this.updateEnergyHandler}
            updateEffectsHandler = {this.updateEffectsHandler}
            updateScreenHandler = {this.updateScreenHandler}
          />
        :null
        }
        </center>
      </div>
    );
  }
}

export default App;
