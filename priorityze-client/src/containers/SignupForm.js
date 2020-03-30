import  React, {Component} from 'react';
import { connect } from 'react-redux';

import { signUp } from '../actions/user';

class SignupForm extends Component {
	state = ({
		user: {
			username: "",
			email: "",
			password: ""//,
			// passwordConfirmation: ""
		},
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
	}
	componentDidUpdate = () => {
		if(this.props.user.token) this.props.history.push("/user")
	}
	render() {
		const { username, email, password /*, passwordConfirmation} */ } = this.state.user
		return (
			<div className="flex flex-column flex-around">
				<div className="messages">
					{this.props.message}
				</div>
				<form onSubmit={ this.signUp }>
					<label>Username: <input
						type="text"
						value={ username }
						onChange={ this.onChange }
						name="username"
						required
					/></label>
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
					{/*<label>Confirm password: <input
						className={ this.state.matching ? "matches" : null }
						type="password"
						value={ passwordConfirmation }
						onChange={ this.onChange }
						name="passwordConfirmation"
					/></label>*/}
					<button type="submit">Sign Up!</button>
				</form>
			</div>
		)
	}
}

export default connect(({ user }) => ({ user }), { signUp })(SignupForm)