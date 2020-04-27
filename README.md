# Priorityze

[![Priorityze](http://img.youtube.com/vi/SVFWMP_gmdM/0.jpg)](https://youtu.be/SVFWMP_gmdM)

## Getting Started

Clone and install gems:
```
git clone git@github.com:jmcgloin/priorityze.git
bundle install
```

### Prerequisites

You will need the following

```
Rails  6+
PostgreSQL
The server hosting the front end  for the origin in CORS
```

### Installing

Setup and migrate
```
rails db:setup
rails db:migrate 
```
If migrations fail, you may need to comment out two options in `goals-app/goals-app-api/app/models/user.rb` then uncomment them after successful migration.  These options are
```
:jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist
```
Update urls in actions

## Deployment

Ensure CORS settings are appropriate for you servers.

## Built With
* [Rails 6](https://rubygems.org/gems/rails/versions/6.0.2.1) - The API framework used
* [Devise](https://rubygems.org/gems/devise/versions/4.7.1) - For authentication
* [Devise-JWT](https://rubygems.org/gems/devise-jwt/versions/0.6.0) - User authorization using web tokens
* [Rack-CORS](https://rubygems.org/gems/rack-cors/versions/1.1.1) - CORS Middleware
* [PostgreSQL](https://rubygems.org/gems/pg/versions/0.18.4) - Databse
* [React](https://reactjs.org/) - Front end framework
* [React-Redux](https://react-redux.js.org/) - React bindings for redux
* [Redux](https://redux.js.org/) - State manager



## Contributing

Please visti (https://github.com/jmcgloin/priorityze) to contribute.


## Authors

* **Jason McGloin** - *The whole thing* - [My GitHub](https://github.com/jmcgloin/goals_app)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Michael Doherty
* Micah Shute
* Adam Mazur - [Blog post](https://medium.com/@mazik.wyry/rails-5-api-jwt-setup-in-minutes-using-devise-71670fd4ed03)
* Nandhogopal Ezhilmaran - [Blog post](https://medium.com/@nandhae/2019-how-i-set-up-authentication-with-jwt-in-just-a-few-lines-of-code-with-rails-5-api-devise-9db7d3cee2c0)
* Heartcombo and Devise docs - [Docs](https://github.com/heartcombo/devise)
* Waiting-for-dev and Devise-JWT docs - [Docs](https://github.com/waiting-for-dev/devise-jwt)
