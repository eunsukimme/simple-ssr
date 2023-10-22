const { renderToString } = require('react-dom/server')
const React = require('react')
const { Counter } = require('./components/Counter')

const counterApp = renderToString(<Counter />)

module.exports = {
    counterApp
}

