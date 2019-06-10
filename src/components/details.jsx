import React from 'react'
import { Button, Table, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

class StockDetails extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        isLoaded: false,
        items: []
    };

    componentDidMount() {

        fetch("https://mufqtxupq3.execute-api.ap-south-1.amazonaws.com/dev/stock-details?code=" + this.props.match.params.stockCode)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.stockData.reverse()
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
    render() {
        return (
            <div>
                <h4>Stock Details Of {this.props.match.params.stockCode}</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Open Price</th>
                            <th>High Price</th>
                            <th>Low Price</th>
                            <th>Prev Close Price</th>
                            <th>Close Price</th>
                            <th>Total Traded Quantity</th>
                            <th>PercentageDly QttoTradedQty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(item =>
                            <tr style={this.getColor(item.prev_close, item.close_price)}>

                                <td>{item.date}</td>
                                <td>{item.open_price}</td>
                                <td>{item.high_price}</td>
                                <td>{item.low_price}</td>
                                <td>{item.prev_close} </td>
                                <td>{item.close_price}</td>
                                <td>{item.TotalTradedQuantity}</td>
                                <td>{item.PercentageDlyQttoTradedQty}</td>

                            </tr>

                        )}
                    </tbody>
                </Table>
            </div>
        )
    }

    getColor(prev_close, close_price) {
        if (close_price < prev_close) {
            return { color: '#FF0000' };
        } else {
            return { color: '#008000' };
        }
    }
}
export default StockDetails