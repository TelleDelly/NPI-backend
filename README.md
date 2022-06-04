# NPI-backend
This is a RESTful api backend for our trailblazer project, where you can find trails and parks with a click of a button. This api sends natural points of interest which can be viewed on a map. 

## Technology Used
MongoDB, Mongoose, Express, Cors, Node.js

## Key Features
1. Three data models for trails, parks, and comments all with full crud capabilities
2. Queried search for parks that can grab by name or state location
3. A latLon route that sends data for our map to render, this reduced package size and decreased fetch time by 35%
4. Comments linked to parks with a reference

## Linked to Deployed version
Live version deployed with Heroku: https://fathomless-eyrie-16229.herokuapp.com

## Link to Frontend Application
Frontend Live Application: https://629ae6acfd78673090ac9aac--taupe-dodol-1145d5.netlify.app/
Frontend Repo: https://github.com/PatriotxZero/trailblazer-frontend


## Plans for the future
1. Populating trail model with usable data
2. Create users and enable login
3. Update query search to include limits
4. Create new route to server marker data in respect to a center location

Authors
Martin Wilson   Myles Turner   David Dobrose


