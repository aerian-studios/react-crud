import React from 'react'
import { Link } from 'react-router'
import config from 'react-global-configuration'
import configHelper  from '../utils/configHelper'

class Menu extends React.Component {

    render() {
        let entities = config.get('entities')
        return (
            //@todo the menu is currently just disabled because we're rendering this crud app in a wider app which has it's own menu. Need a strategy
            <span></span>
            /*<ul>
                <li><Link to={''}>Home</Link></li>
                {
                    entities.ids.map(entity =>
                        <li key={entity}><Link to={entity}>{ configHelper.getEntityLabel(config, entity) }</Link></li>
                    )
                }
            </ul>*/
        )
    }
}

export default Menu
