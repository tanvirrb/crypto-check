import React from 'react';
import PropTypes from 'prop-types';

import { renderChangePercent } from "../utils/helpers";

import './List.css';

class List extends React.Component {

    static propTypes = {
        currencies: PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <table className="Table">
                    <thead className="Table-head">
                    <tr>
                        <th>Cryptocurrency</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                    </tr>
                    </thead>
                    <tbody className="Table-body">
                    {Object.keys(this.props.currencies).map(key =>
                        <tr
                            key={key}
                            // onClick={() => history.push(`/currency/${currency.id}`)}
                        >
                            <td>
                                <span className="Table-rank">{this.props.currencies[ key ].rank}</span>
                                {this.props.currencies[ key ].name}
                            </td>
                            <td>
                                <span className="Table-dollar">$</span>
                                {this.props.currencies[ key ].price}
                            </td>
                            <td>
                                <span className="Table-dollar">$</span>
                                {this.props.currencies[ key ].marketCap}
                            </td>
                            <td>{renderChangePercent(this.props.currencies[ key ].percentChange24h)}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;