import  React, {Component} from 'react';
import { connect } from 'react-redux';

import { logIn } from '../actions/user';

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
	}
	componentDidUpdate = () => {
		console.log("signup form props: ", this.props)
		if(this.props.user.token) this.props.history.push("/user")
	}
	render() {
		const { email, password } = this.state.user
		return (
			<div className="flex flex-column flex-around">
				<div className="messages">
					{this.props.message}
				</div>
				<form onSubmit={ this.logIn }>
					<label>Email: <input
						type="email"
						value={ email }
						onChange={ this.onChange }
						name="email"
						required
					/></label>
					<label>Password: <input
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

export default connect(({ user }) => ({ user }), { logIn })(LoginForm)