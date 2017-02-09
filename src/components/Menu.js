import React from 'react'
import { Link } from 'react-router'
import config from 'react-global-configuration'
import configHelper  from '../utils/configHelper'

class Menu extends React.Component {

    render() {
        let entities = config.get('entities')
        return (
            <ul>
                <li><Link to={''}>Home</Link></li>
                {
                    entities.ids.map(entity =>
                        <li key={entity}><Link to={entity}>{ configHelper.getEntityLabel(config, entity) }</Link></li>
                    )
                }
            </ul>
        )
    }
}

export default Menu
