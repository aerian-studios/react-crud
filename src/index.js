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
//@todo this needs to be outside this library and passed in, or loaded in from an API
config.set(
    {
        baseUrl: '/api',
        entities: {
            ids: ['plugin'],
            byId: {
                'plugin': {},
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