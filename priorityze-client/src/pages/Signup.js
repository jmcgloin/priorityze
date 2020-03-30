import  React, {Component} from 'react';
import { connect } from 'react-redux';

import { signUp } from '../actions/user';

class Signup extends Component {
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
		}, () => {console.log(this.state.user)})
	}
	signUp = (event) => {
		event.preventDefault();
		const { user } = this.state
		console.log("submitting")
		this.props.signUp({ user })
	}
	componentDidUpdate = () => {
		if(this.props.currentUser) {
			// let history = useHistory();
		 //  let location = useLocation();
		 //  let { from } = location.state || { from: { pathname: "/" } };
		 //  let login = () => {
		 //    fakeAuth.authenticate(() => {
		 //      history.replace(from);
		 //    });
		 //  }
		}
	}
	render() {
		const { username, email, password /*, passwordConfirmation} */ } = this.state.user
		return (
			<div className="flex flex-column flex-around">
				<div>
					warning messages go here
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

export default connect(({ user }) => ({ user }), ({ signUp }))(Signup)



// let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/" } };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });