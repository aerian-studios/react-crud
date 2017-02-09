import config from 'react-global-configuration'
import pluralize from 'pluralize'

//@todo - really? This doesn't exist in native js? Should probably get moved to a utility helper
function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.substr(1)
}

const configHelper = {

    getEntityLabel(config, entity) {
        //@todo validate input
        let labelFromConfig = config.get('entities').byId[entity].label
        return labelFromConfig ? labelFromConfig : ucfirst(pluralize(entity))
    },

    getListDataUrl(config, entity) {
        //@todo validate input

        //get base url from config
        let url = config.get('baseUrl')
        //@todo this is a bit of a hack because the config returns the root object if the property is a blank string
        if (url !== null && typeof url === 'object') {
            url = ''
        }

        //if a listDataUrl is set in the config use it, otherwise default to '/' + entity
        let listUrlFromConfig = config.get('entities').byId[entity].listDataUrl
        url += listUrlFromConfig ? listUrlFromConfig : '/' + entity

        return url
    }

}

export default configHelper
