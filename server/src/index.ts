import express, { NextFunction, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import sessions from 'express-session'
import cors from 'cors'
import games from './data.json'

const allowedUsers = [
    { userName: 'player1', password: 'player1' },
    { userName: 'player2', password: 'player2' },
]

const userSession: any = {}

const app = express()
app.use(cors())
app.use(express.json())

// creating 24 hours from milliseconds
const oneDay = 4000 * 60 * 60 * 24

app.use(
    sessions({
        secret: 'thisismysecrctekeyfhrgfgrfrty84fwir767',
        saveUninitialized: true,
        cookie: { maxAge: oneDay },
        resave: false,
    }),
)

// cookie parser middleware
app.use(cookieParser())

app.post('/login', (request, response) => {
    const userDetails = {
        userName: request.body.userName,
        password: request.body.password,
    }

    const isUserFound = allowedUsers.find(
        ({ userName, password }) =>
            userName === userDetails.userName &&
            password === userDetails.password,
    )

    if (isUserFound) {
        (request.session as any).profile = userDetails
        userSession[userDetails.userName] = request.session
        response
            .status(200)
            .send({ message: 'Player found successfully.', userDetails })
    } else {
        response.status(403).send({ message: 'Player not found.' })
    }
})

app.post('/checkSession', (request, response) => {
    const { userName } = request.body

    if (userSession[userName]) {
        const session = request.session
        const sessionExiredDate = userSession[userName].cookie._expires

        if (new Date() > new Date(sessionExiredDate)) {
            delete userSession[userName]
            response.status(401).send({ message: 'Session expired.' })
        } else {
            response.status(200).send({ message: 'Session active.' })
        }
    } else {
        response.status(401).send({ message: 'Session expired.' })
    }
})

app.get('/gamelist', (_, response) => {
    response.status(200).send(games)
})

app.listen(4500, () => {
    console.log('Listen on the port 4500...')
})
