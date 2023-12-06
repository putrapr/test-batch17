import express from 'express';
// const express = require("express");

const app = express()
const port = 3030

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/login', (req, res) => {
  res.send('Anda sudah login')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})