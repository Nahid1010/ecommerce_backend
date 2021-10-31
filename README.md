# ecommerce_backend
##### Installation

Code:`git@github.com:Nahid1010/ecommerce_backend.git`.
You can clone code from github link and run it locally on your computer.

##### Prerequisites
A computer with `mysql` database installed locally, `node.js` and `npm` (node package manager). It uses `express`, `mysql2`,`sequelize`,`dotenv` node packages. To clone code from github, you need to have aceess to the Internet. Also your computer should have Terminal (Unix) software installed.
Since this application is only providing the backend services via API calls, you will need to have an API client like `insomnia` to test this app's functionality. 


##### Installing and running
* Open a terminal.
* Create a directory for this project.
* Change current directory to this project direcory.
* Issue the following command - `git@github.com:Nahid1010/ecommerce_backend.git`
* If you don't have `node.js` installed already then download it, and follow the instructions to install it.
* Once installed, use `npm` to install `express`, `mysql2`, `sequelize`,`dotenv` package by issuing `npm i <package>` command at the terminal prompt (where `<package>` is one of `express`, `mysql2`,`sequelize` `dotenv`).
* After that you need to create a database  using the file `db/schema.sql`. Following image shows the design of the databse and relations between the tables-
![](assets/images/ecommerce.png)