import React from 'react'
import { connect } from 'react-redux'
import List from '../components/List'
import { fetchListData } from '../actions/actions'
import { store } from '../store'

const mapStateToProps = (state) => {
    return {
        isLoading: state.list.isLoading,
        items: state.list.data.items,
        itemIds: state.list.data.itemIds,
        columns: state.list.data.columns,
    };
}

class ListContainer extends React.Component {

    componentWillMount() {
        store.dispatch(fetchListData(this.props.listDataUrl))
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.listDataUrl !== nextProps.listDataUrl) {
            store.dispatch(fetchListData(nextProps.listDataUrl))
        }
    }

    render() {
        return <List {...this.props} />
    }
}

export default connect(mapStateToProps)(ListContainer)
