import {Component} from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }
        this.changeData = this.changeData.bind(this)
        setTimeout(() => this.changeData(), 1000)
    }

    changeData() {
        this.setState({
            isLoaded: true
        })
    }

    render() {
        const {isLoaded} = this.state
        return (
            <div className="App" >
                { isLoaded
                    ? <strong>Данные загружены</strong>
                    : <em>Загрузка данных</em> }
            </div>
        )
    }
}