const dispatch = require('micro-route/dispatch')
import api from './api.js'
module.exports = dispatch()
  .dispatch('/', 'GET', (req, res) => "hello word")
  .dispatch('/api', 'GET', api )
  
  

