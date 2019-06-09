import React, {Component} from 'react';

import Header from './header';
import ContainerCom from './container';


class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 4},
            {id: 5, value: 5},
        ]
     }
    render() { 
        return ( <div>
            <Header/>
            <ContainerCom />
        
        </div> );
    }
}
 
export default Counters;
