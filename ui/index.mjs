import { database } from '../shared/data.mjs'

class Application {
    constructor(factory) {
        this.table = factory.createTable()
    }

    initialize(database) {
        this.table.render(database)
    }
}

;(async function main() {
    const path = globalThis.window ? 'browser' : 'console'
    const { default: ViewFactory } = await import(`../plataforms/${path}/index.mjs`)

    await new Application(new ViewFactory).initialize(database)
})()