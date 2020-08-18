import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';

import navBar from './navbar';

const mapSTP = ({session, entities: {users}}) => {
    return {
        currentUser: users[session.id]
    }
}

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapSTP, mapDTP)(navBar);