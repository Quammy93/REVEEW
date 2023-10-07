const express = require("express")
const app = express()
const port = process.env.PORT || 5000 // the app can use either the hosting port during production 0r 5000 is not available
const cors = require("cors")

//const AuthRouter = require('./routers/auth')



// middleware


const start = () => {
    app.listen(port, () => console.log(`Server is running on port ${port}`))
}


app.use('/api', AuthController.register)
app.use('/api', AuthController.login)

start()
