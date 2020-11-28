import React from 'react';
import {ReactComponent as InfoIcon} from '../assets/info.svg'

class AppBar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="app-header">
                <h1>Todo Lists</h1>
                <div className="icon">
                    <InfoIcon style={{height:'40px'}} />
                </div>
            </div>
         );
    }
}
 
export default AppBar;