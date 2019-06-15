import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from "../../actions";

class GoogleAuth extends Component {


    componentDidMount() {
        window.gapi.load(
            'client:auth2',

            () => window.gapi.client.init({
                clientId: process.env.REACT_APP_CLIENT_ID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        )
    }

    renderDiv = (text) => (
        <div className={this.props.className}>{text}</div>
    )

    renderAuthButton = () => {
        switch (this.props.isSignedIn) {
            case null:
                return {
                    text: null,
                    clickHandler: null
                }
            case true:
                return {
                    text: 'Sign Out',
                    clickHandler: this.onSignOut
                }
            default:
                return {
                    text: 'Sign In',
                    clickHandler: this.onSignIn
                }
        }
    }

    onAuthChange = (isSignedIn) => {

        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }

    }


    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }

    render() {

        const {text, clickHandler} = this.renderAuthButton()

        return (
            <div onClick={clickHandler} className={this.props.className} style={{cursor: 'pointer'}}>
                {text}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signOut, signIn})(GoogleAuth)