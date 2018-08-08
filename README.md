# dotorg_node
Backend nodeJS setup for the frontend dotorg project

## Setup
`yarn start` to run the server on localhost
http://localhost:5000/

## Publishing
`git push` for a commit will also update the herokuapp instance
https://portitude.herokuapp.com/

## API

### GET (all)
https://portitude.herokuapp.com/all

### GET, PUT, UPDATE
https://portitude.herokuapp.com/artists/<artist_ID>

### POST
https://portitude.herokuapp.com/post

body: 
```
{
  name: 'string',
  longName: 'string'
}
```
