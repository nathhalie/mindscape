import React, {Component} from 'react';
import './App.css';
import MainMenu from './MainMenu/MainMenu';
import MoodOptions from './MainMenu/MoodOptions/MoodOptions';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {showMainMenu: false
    };
    this.toggleMainMenu = this.toggleMainMenu.bind(this);
  }

  toggleMainMenu() {
    this.setState(
      {
        showMainMenu: !this.state.showMainMenu
      }
    );
  }


  updateBackgroundHandler = (event) => {

  }

  render () {
    return (
      <div>
        <center>
        <button onClick = {this.toggleMainMenu.bind(this)}>click to launch mindscape</button>

        {this.state.showMainMenu ?
          <MainMenu 
            text = 'how im feeling'
            //goToMoodOptions = {this.toggleMoodOptions.bind(this)}
            //goToColorOptions = {this.toggleColorOptions.bind(this)}
          />
        :null
        }
        </center>
      </div>
    );
  }

}

export default App;
