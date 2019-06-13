import React, {Component} from 'react'

class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }


    componentDidMount() {
        window.gapi.load(
            'client:auth2',

            () => window.gapi.client.init({
                clientId: process.env.REACT_APP_CLIENT_ID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange()
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        )
    }

    renderDiv = (text) => (
        <div className={this.props.className}>{text}</div>
    )

    renderAuthButton = () => {
        switch (this.state.isSignedIn) {
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

    onAuthChange = () => {

        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })

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

export default GoogleAuth