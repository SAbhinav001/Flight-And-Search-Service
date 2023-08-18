This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

`src`-> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the src folder

`config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion, this is done in the server-config.js. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.


`routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.


`middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.


`controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

`repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.


`services` -> contains the buiness logic and interacts with repositories for data from the database


`utils` -> contains helper methods, error classes etc.

-SETUP this project

. In the root directory , create a .env and the following

 ```
 PORT= {Port number of your choice}
 ```

 -execute follwing command to get started.
 ```
 npm install
 ```

. Go Inside the src folder , execute follwing command
````
npx sequelize init
```` 
-By executiong above command , you will get seeder, migration and config.json file and folder.

then config the db detials in confiog json and run command
```
npx sequelize db:create
```

and if there is any model , migration , then just use migrate command else create new model and then migrte


## DB Design

--Airplane table
--Flight Table
--Airport Table 
--City
