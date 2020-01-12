import React, {Component} from 'react';
import './App.css';
import MainMenu from './MainMenu/MainMenu';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {showMainMenu: false};
    this.toggleMainMenu = this.toggleMainMenu.bind(this);
  }

  toggleMainMenu() {
    this.setState(
      {
        showMainMenu: !this.state.showMainMenu
      }
    );
  }

  render () {
    return (
      <div>
        <button onClick = {this.toggleMainMenu.bind(this)}>click to launch mindscape</button>

        {this.state.showMainMenu ?
          <MainMenu 
            text = 'how im feeling'
            goToMoodMenu = {this.toggleMainMenu.bind(this)}
            goToColorMenu = {this.toggleMainMenu.bind(this)}
          />
        :null
        }
      </div>
    );
  }

}

export default App;
