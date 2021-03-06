import React from 'react';
import Header from './Header.js';
import { connect } from 'react-redux';
import { logout } from './../../redux/authReducer.js';
class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {
    logout
})(HeaderContainer);