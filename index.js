import 'babel-polyfill'
import React from "react"
import ReactDOM from "react-dom"

const [host, dir, ..._] = document.URL.replace(/^https?:\/\//i, '').split('/')

console.log(document.URL)
console.log(host)
console.log(dir)

;(async function () {
    let app
    switch (dir || 'index') {
        case 'index':
            app = await import(`./app/index`)
            break
        case '10086':
            app = await import(`./app/10086`)
            break
        case 'note':
            app = await import(`./app/note`)
            break
        default:
            app = await import(`./app/404`)
            break
    }
    ReactDOM.render(React.createElement(app.default, null, null), document.getElementById("root"))
})()