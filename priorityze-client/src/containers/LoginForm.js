import  React, {Component} from 'react';
import { connect } from 'react-redux';

import { logIn, responseError } from '../actions/user';

class LoginForm extends Component {
	state = ({
		user: {
			email: "",
			password: ""
		}
	})
	onChange = ({ target }) => {
		this.setState({
			user: {
				...this.state.user,
				[target.name]: target.value
			}
		})
	}
	logIn = (event) => {
		event.preventDefault();
		this.props.logIn({ user: this.state.user })
		this.setState({
			user: {
				email: "",
				password: ""
			}
		})
	}
	componentDidMount = () => {
		if(localStorage.getItem('priorityzeIdToken')) this.props.history.push("/user")
	}
	componentDidUpdate = () => {
		if(localStorage.getItem('priorityzeIdToken')) this.props.history.push("/user")
		if(this.props.user.errorMessage) setTimeout(() => this.props.responseError(""), 3000)
	}
	render() {
		const { email, password } = this.state.user
		const { errorMessage } = this.props.user
		return (
			<div className="flex flex-column flex-around full-height">
				<div className="messages">
					 {errorMessage}
				</div>
				<form onSubmit={ this.logIn } className="auth-form" >
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
					<button type="submit">Log In!</button>
				</form>
			</div>
			
		)
	}
}

export default connect(({ user }) => ({ user }), { logIn, responseError })(LoginForm)