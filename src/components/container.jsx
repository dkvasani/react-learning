import React, { Component } from "react";
import { Button, Table, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Container extends Component {

  constructor(props) {
    super(props);     
}  
  state = {
    isLoaded : false,
      items: []
  };

  

  componentDidMount() {
    fetch("https://mufqtxupq3.execute-api.ap-south-1.amazonaws.com/dev")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.stockData
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  getColor(changePrice) {
    if (changePrice < 0) {
        return {color:'#FF0000'};
    } else {
        return {color:'#008000'};
    }
  }
  render() {
   
    return (
        <React.Fragment>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Stock Name</th>
      <th>Open Price</th>
      <th>Current Price</th>
      <th>High Price</th>
      <th>Low Price</th>
      <th>Change Percentage</th>
      <th>Change Price</th>
      <th>Eps</th>
      <th>52 week Low Price</th>
      <th>52 week High Price</th>
    </tr>
  </thead>
  <tbody>
    
  { this.state.items.map(item => 
    <tr style={this.getColor(item.change_price)} key = {item.stock_code}>
    <td><Link to={`/details/${item.stock_code}`} params={{ stockCode: item.stock_code }} >{ item.stock_code}</Link></td>
    <td>{ item.open_price}</td>
    <td>{ item.current_price}</td>
    <td>{ item.high_price}</td>
    <td>{ item.low_price}</td>
    <td>{ item.change_percentage} %</td>
    <td>{ item.change_price}</td>
    <td>{ item.eps}</td>
    <td>{ item.fifty_two_week_low}</td>
    <td>{ item.fifty_two_week_high}</td>
    
  </tr>        
            
            ) }
    
    
  </tbody>
</Table>
            </React.Fragment>
    );
  }
}

export default Container;
