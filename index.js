import 'babel-polyfill'

const app = '10086';

(async function () {
    switch (app) {
        case '10086':
            await import(`./app/10086`)
            break
        default:
            break
    }
})()