import 'babel-polyfill'

(async function () {
    switch ('10086') {
        case '10086':
            await import('./app/10086')
            break
        default:
            break
    }
})()