import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import config from 'react-global-configuration'

//views
import HomePage from './views/Home'
import ListPageContainer from './views/List'

//store
import { store, history } from './store'

//set up config
config.set(
    {
        baseUrl: '/api',
        entities: {
            ids: ['package'],
            byId: {
                'package': {},
            }
        }
    }
);

class CrudApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={HomePage} />
                    <Route path="/:entity(/edit/:entityId)" component={ListPageContainer} />
                </Router>
            </Provider>
        )
    }
}

export default CrudApp