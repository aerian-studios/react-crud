import React from 'react'
import Menu from '../components/Menu'
import List from '../containers/List'
import Form from '../../../react-form/src/containers/Form'
import config from 'react-global-configuration'
import configHelper from '../utils/configHelper'

class ListPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="col-sm-7">
                    <List
                        listDataUrl={ configHelper.getListDataUrl(config, this.props.params.entity) }
                        entity={ this.props.params.entity }
                    />
                </div>
                { this.renderDetails() }
            </div>
        )
    }

    renderDetails() {
        let entityId = this.props.params.entityId
        if (this.entitySelected()) {
            return (
                <div className="col-sm-5">
                    <h3>Edit { configHelper.getEntityLabel(config, this.props.params.entity, false) }</h3>
                    <Form entity={this.props.params.entity} entityId={entityId} />
                </div>
            )
        }
    }

    /**
     * returns true if a specific entity is selected
     * @return boolean
     */
    entitySelected() {
        return (typeof this.props.params.entityId !== 'undefined')
    }
}

export default ListPage
