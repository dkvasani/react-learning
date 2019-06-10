import React from 'react';


class Users extends React.Component {
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
            
            <h1>Hello User Component</h1>
        
        </div> );
    }
}
export default Users;