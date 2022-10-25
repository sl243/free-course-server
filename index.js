const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

// const categories = require('./data/categories.json')
// const courses = require('./data/courses.json')

app.get('/', (req, res) => {
  res.send('Webcode API running')
})

// app.get('/course', (req, res) => {
//     res.send(courses)
// })

// app.get('/course-categories', (req, res) => {
//     res.send(categories)
// })

// app.get('/course/:id', (req, res) => {
//     const id = req.params.id;
//     const selectCourse = courses.find(course => course.course_id === id)
//     res.send(selectCourse)
// })

app.listen(port, () => {
  console.log('Webcode free course server running', port)
})