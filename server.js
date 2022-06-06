const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
	'oolong': {
		'type': 'black',
		'origin': 'Yo momma\'s house',
		'waterTemp': 200,
		'steepTimeSeconds': 180,
		'caffinated': true,
		'flavor': 'delicious'
	},
	'matcha': {
		'type': 'green',
		'origin': 'Yo daddy\'s house',
		'waterTemp': 200,
		'steepTimeSeconds': 180,
		'caffinated': true,
		'flavor': 'delicious'
	},
	'unknown': {
		'type': 'unknown',
		'origin': 'unknown',
		'waterTemp': 'unknown',
		'steepTimeSeconds': 'unknown',
		'caffinated': false,
		'flavor': 'no clue'
	}
}


app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
	const teaName = request.params.name.toLowerCase()
	if(tea[teaName]){
		response.json(tea[teaName])
	}else{
		response.json(tea['unknown'])
	}
})


app.listen(process.env.port || PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})