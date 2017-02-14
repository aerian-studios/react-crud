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
                <List
                    listDataUrl={ configHelper.getListDataUrl(config, this.props.params.entity) }
                    entity={ this.props.params.entity }
                />
                { this.renderDetails() }
            </div>
        )
    }

    renderDetails() {
        let entityId = this.props.params.entityId
        if (entityId) {
            return (
                <Form entity={this.props.params.entity} entityId={entityId} />
            )
        }
    }
}

export default ListPage
