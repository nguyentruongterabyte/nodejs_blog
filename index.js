const express = require( 'express' )
const app = express()
const port = 3000

// route
app.get( '/tin-tuc', ( req, res ) => {
  var a = 2
  var b = 1

  var c = a + b
  res.send( 'Hello, world!' )
} )

app.listen( port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})