import TableComponent from "../../shared/base/TableComponent.mjs"

export default class TableBrowserComponent extends TableComponent {
    render(data) {
        const template = this.prepareData(data)
        document.body.insertAdjacentHTML("afterbegin", template)
    }

    prepareData(data) {
        const [firstItem] = data
        const tHeaders = Object.keys(firstItem)
                            .map(text => `<th scope=col>${text}</th>`)

        const joinLists = list => list.join('')

        const tBodyValues = data.map(item => Object.values(item))
                                .map(item => item.map(value => `<td>${value}</td>`))
                                .map(tds => `<tr>${joinLists(tds)}</tr>`)

        return `
            <table class="table">
                <thead>
                    <tr>${joinLists(tHeaders)}</tr>
                </thead>
                <tbody>
                    <tr>${joinLists(tBodyValues)}</tr>
                </tbody>
            </table>
        `                            
    }
}