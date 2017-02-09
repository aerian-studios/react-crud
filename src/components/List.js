import React from 'react'
import { Link } from 'react-router'
import config from 'react-global-configuration'
import configHelper  from '../utils/configHelper'

class List extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div>loading</div>
            )
        } else {
            return (
                <div>
                    <h2>{ configHelper.getEntityLabel(config, this.props.entity) }</h2>
                    <table>
                        <thead>
                        <tr>
                            {
                                this.props.columns.map(column =>
                                    <th key={column}>{ column }</th>
                                )
                            }
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.itemIds.map(itemId =>
                                this.renderRow(itemId)
                            )
                        }
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    renderRow (itemId) {
        return (
            <tr key={itemId}>
                {
                    this.props.columns.map(column =>
                        <td key={itemId+column}>{this.props.items[itemId][column]}</td>
                    )
                }
                <td><Link to={this.props.entity + '/edit/' + itemId}>edit</Link></td>
            </tr>
        )
    }
}

export default List