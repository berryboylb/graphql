# Getting Started with the project.
 
 ## Scripts
 In the project directory, you can run:
 ``` 
 npm run start
 ```
 ### starts the server-side app in the production mode without refreshing the server when there are changes and interact with graphql GUI
 Open [http://localhost:5000/graphql](http://localhost:5000/graphql) to view it in the browser.

 ``` 
 npm run server
 ```
 ### starts the server-side app in the development mode refreshing the server when there are changes and interact with graphql GUI
 Open [http://localhost:5000/graphql](http://localhost:5000/graphql) to view it in the browser.

 ``` 
 npm run client
 ```
 ### starts the react client app  in developement mode
 Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
  ``` 
 npm run dev
 ```
 ###  Uses concurrently(package) to start both the client app and server-side app at the same time in developement mode.
 Open [http://localhost:3000](http://localhost:3000) and [http://localhost:5000/graphql](http://localhost:5000/graphql) to view it in the browser.
 
 ## GraphQL enpoints
 ### [http://localhost:5000/graphql/getAllTransactions](http://localhost:5000/graphql/getAllTransactions) this returns all the transactions grouped by their date
 ### [http://localhost:5000/graphql/getTransactionsBytypesorStatus](http://localhost:5000/graphql/getTransactionsBytypesorStatus)
 ### this returns filtered array by the status passed to it.
 
 
 ## Filters
 ### The data gottten from the endpoints can be filtered by the status of the transaction only(pending, successful and failed).
 ### The select component can be used to filter or the search component but any invalid search params will yield an error.
 
 
 ## Client pages
 ### There are two client pages; one for getting all the data and the other for filtered data.
 ### [http://localhost:3000](http://localhost:3000) This is the homepage that returns transactions grouped by date.
 ### [http://localhost:3000//filter/{status}](http://localhost:3000//filter/{status}) This returns  filtered data based on the type of status passed either pending, failed or successful.
