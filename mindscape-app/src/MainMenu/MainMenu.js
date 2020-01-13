import React, {Component} from 'react';
import '../MainMenu/MainMenu.css';

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            mood: ''
        };

      }

    updateColorsHandler = (event) => {
        this.setState( {
            
        })
    };

    updateMoodHandler = (event) => {
        this.setState( {
            
        })
    };

    render() {
        return (
            <div className = 'mainMenu'>
                <div className = 'mainMenu\_inner'>
                    <h1>{this.props.text}</h1>

                    <form>
                    color:
                    <input type ="color"/>

                    mood:
                    <input type = "text" value = {this.state.mood} onChange = {this.updateMoodHandler} />
                    </form>

                    <button onClick = {this.props.sendToScreen}>send</button>
                    <button onClick = {this.props.closeMainMenu}>x</button>
                </div>
            </div>
        );
    }
}

export default MainMenu;