[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# E-commerce Back End Starter Code


## Description
Create a basic ecommerce backend, with a relational database of product details accessible and editable via API request, deployed via server on your local machine.

[Watch a video walkthrough](https://github.com/jwhit-commit/jwhit-ecommerce/blob/main/Assets/jwhit-ecommerce.webm)


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
`git clone git@github.com:jwhit-commit/jwhit-ecommerce.git`

## Usage
Once installed, open the terminal, install NPM modules, and launch MySQL. Initialize database schema in MySQL, seed database tables, initialize server in terminal, then can utilize API endpoints via HTTP requests.

Example:

Open terminal and install NPM: `$ npm i`  
Launch MySQL: `mysql -u root -p`  
Initialize database schema (Develop>db>schema.sql) in MySQL:
```
-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;
```  
Seed database tables: `npm run seed`  
Initialize server in terminal: `node server.js`  
Utilize API endpoints via HTTP request: `GET http://localhost:3001/api/categories`  

## License
This is distributed under The MIT License. [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing
Anyone may fork and contribute to this project.

## Tests
Once initialized, API endpoints can be tested via the browser or an application like [Insomnia](https://insomnia.rest/).

## Questions
Find me on [Github](https://github.com/jwhit-commit).
