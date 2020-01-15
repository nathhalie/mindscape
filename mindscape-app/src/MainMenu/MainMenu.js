import React, {Component} from 'react';
import '../MainMenu/MainMenu.css';

class MainMenu extends Component {

    render() {
        return (
            <div className = 'mainMenu'>
                <div className = 'mainMenu\_inner'>
                    <h1>{this.props.text}</h1>

                    <form name = 'mainMenuOptions' onSubmit = {this.props.validateOptionsForm}>
                        <div className = 'visualOptions'>
                            visuals:
                            <input id = "color" 
                            type = "color" 
                            onChange = {(e) => this.props.updateColorsHandler(e.target.value)}/>
                        </div>

                        <div className = 'energyOptions'>
                            energy:
                            <input id = "energy" type = "range" onChange = {(e) => this.props.updateEnergyHandler(e.target.value)} />
                        </div>

                        {/* onChange={(e) => this.props.updateTextCB(e.target.value) */}

                        <div className = 'effectsOptions'>
                            effects:
                            <input id = "effects" type = "text" onChange = {(e) => this.props.updateEffectsHandler(e.target.value)} />
                        </div>
                    </form>

                    <button id = "sendButton" 
                    onClick = {this.props.updateScreenHandler} 
                    style={{backgroundColor:this.props.bgColor}}>send</button>
                </div>
            </div>
        );
    }
}

export default MainMenu;