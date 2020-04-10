import  React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp, responseError } from '../actions/user';

class SignupForm extends Component {
	state = ({
		user: {
			username: "",
			email: "",
			password: ""//,
			// passwordConfirmation: ""
		},
		errorMessage: this.props.user.errorMessage,
		matching: false
	})
	onChange = ({ target }) => {
		this.setState({
			user: {
				...this.state.user,
				[target.name]: target.value
			}
		})
	}
	signUp = (event) => {
		event.preventDefault();
		this.props.signUp({ user: this.state.user })
		this.setState({
			user: {
				username: "",
				email: "",
				password: ""
			}
		})
	}
	componentDidUpdate = () => {
		if(this.props.user.errorMessage) setTimeout(() => this.props.responseError(""), 3000)
	}
	render() {
		const { username, email, password /*, passwordConfirmation} */ } = this.state.user
		const { errorMessage } = this.props.user
		return (
			localStorage.getItem('priorityzeIdToken') ? <Redirect to="/user" /> : (
			<div className="flex flex-column flex-around full-height">
				<div className="messages">
					 {errorMessage} {/*make this vanish and click-to-close-able*/}
				</div>
				<form onSubmit={ this.signUp } className="auth-form">
					<label><p>Username: </p><input
						type="text"
						value={ username }
						onChange={ this.onChange }
						name="username"
						required
						autoFocus
					/></label>
					<label><p>Email: </p><input
						type="email"
						value={ email }
						onChange={ this.onChange }
						name="email"
						required
					/></label>
					<label><p>Password: </p><input
						type="password"
						value={ password }
						onChange={ this.onChange }
						name="password"
						required
					/></label>
					<button type="submit">Sign Up!</button>
				</form>
			</div>
			)
		)
	}
}

// const mapDispatchtoProps = dispatch => {
// 	return {
// 		signUp: 
// 	}
// }

export default connect(({ user }) => ({ user }), { signUp, responseError })(SignupForm)