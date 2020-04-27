Project Title
Priorityze

Getting Started
Clone and install gems:

git clone git@github.com:jmcgloin/priorityze.git
bundle install
Prerequisites
You will need the following

Rails  6+
PostgreSQL
The server hosting the front end  for the origin in CORS
Installing
Setup and migrate

rails db:setup
rails db:migrate 
If migrations fail, you may need to comment out two options in goals-app/goals-app-api/app/models/user.rb then uncomment them after successful migration. These options are

:jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist
Update urls in actions

Deployment
Ensure CORS settings are appropriate for you servers.

Built With
Rails 6 - The API framework used
Devise - For authentication
Devise-JWT - User authorization using web tokens
Rack-CORS - CORS Middleware
PostgreSQL - Databse
React - Front end framework
React-Redux - React bindings for redux
Redux - State manager
Contributing
Please visti (https://github.com/jmcgloin/priorityze) to contribute.

Authors
Jason McGloin - The whole thing - My GitHub
License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Michael Doherty
Micah Shute
Adam Mazur - Blog post
Nandhogopal Ezhilmaran - Blog post
Heartcombo and Devise docs - Docs
Waiting-for-dev and Devise-JWT docs - Docs
