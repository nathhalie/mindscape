import React, {Component} from 'react';
import '../MainMenu/MainMenu.css';

class MainMenu extends Component {
    render() {
        return (
            <div className = 'mainMenu'>
                <div className = 'mainMenu\_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick = {this.props.goToMoodMenu}>mood</button>
                    <button onClick = {this.props.goToColorMenu}>color</button>
                </div>
            </div>
        );
    }
}

export default MainMenu;