import 'babel-polyfill'
import React from "react"
import ReactDOM from "react-dom"

const match = /^(?:.+?\.com\/)([^/]+).*$/i.exec(document.URL)
const path = match && match[1];

console.log(document.URL)
console.log(path)

(async function () {
    let app
    switch (path) {
        case 'index':
            app = await import(`./app/index`)
            break
        case '10086':
            app = await import(`./app/10086`)
            break
        default:
            app = await import(`./app/404`)
            break
    }
    ReactDOM.render(React.createElement(app.default, null, null), document.getElementById("root"))
})()