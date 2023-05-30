# Finnplay test task for front-end developer

This app contains two main folder.
*client
*server

client:
This is the fontend application build on the React. Foler strucutue given below.

client
├───build: contains production ready files
├───public: contain index.html folder root file which is used by the react.
src: main source code folder which contains the business logic and User interface.
├───assets: contains images and icons folder.
│ └───images: contains images files.
├───components: contains reusable components that will be used in pages or views.
│ ├───common: common component which can be used in many places.
│ │  
│ ├───gamesContainer: game container component to show all the games listing UI.
│ │ ├───FiltersContainer: filter component to show all the filers like groups, provider, soring and seach input.
│ │ └───imageList: reusable component to show all the game listing.
│ └───header: application header component finnplay.
├───data: some static data.
├───interfaces: interfaces to define the javascript variables, functions, objects and etc types.
│ └───redux:
├───pages: this folder contains all the pages of our application.
│ ├───gamesList: gamelist folder to show game listing.
│ ├───login: player login page.
│ └───pageNotFound: this page will show when no url route will match in our application.
├───redux: state management to define the application states like login, gamelisting, sorting and API fetching.
├───routes: application routing.
├───theme: theme configuration according to our application desing.
└───utils: some common util function to use in business logic.

server:
src
├───data.json: static json file that is servered to the client side with data like gamelist, provider and groups.
└───index.js: file which contains API that are used on the server side.

## commands to use the application

npm run start:client

<!-- this command is used to start the fontend application -->

npm run build

<!-- this command is used to build the fontend application -->

npm run start:server

<!-- this command is used to start the server -->

npm run lint:fix

<!-- this command is used to fix the estling issues -->
