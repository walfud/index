import React, {
    Component,
} from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
    constructor() {
        super()

        this.filteredCount = 0
        this.state = {
            filters: [],
            nums: [],
            favorites: [],
        }
    }

    componentDidMount() {
        (async () => {
            const body = await fetch('http://10086.walfud.com/api/num').then(res => res.text())
            const nums = JSON.parse(body)
            this.setState({
                nums: nums.sort((a, b) => a.num - b.num),
                filteredCount: nums.length,
            })
        })()
    }

    render() {
        let filteredNum = this.state.nums
        for (let filter of this.state.filters) {
            switch (filter.type) {
                case 'include':
                    filteredNum = filteredNum.filter(x => x.num.includes(filter.data))
                    break
                case 'exclude':
                    filteredNum = filteredNum.filter(x => !x.num.includes(filter.data))
                    break
                default:
                    break
            }
        }

        return (
            <div style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
            }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    {this._renderLabels()}
                </div>

                <div>
                    {this._renderFilter()}
                </div>

                <div>
                    {this._renderStatus(filteredNum.length)}
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'space-between',
                }}>
                    <div style={{ flex: 1, borderWidth: 1, borderColor: 'red', }}>
                        {this._renderNumList(filteredNum)}
                    </div>
                    <div style={{ flex: 1, borderWidth: 1, borderColor: 'red', }}>
                        {this._renderSelectList()}
                    </div>
                </div>
            </div>
        )
    }

    _renderLabels() {
        return [
            <button
                style={{}}
                onClick={_ => this.setState({ filters: [] })}
            >
                清空
            </button>,
            this.state.filters.map((x, i) =>
                <Label
                    key={i}
                    id={i}
                    text={`${x.type === 'include' ? '包含' : '排除'}: ${x.data}`}
                    onRemove={pos => this.setState({ filters: this.state.filters.filter((_, i) => i !== pos) })}
                />
            )
        ]
    }

    _renderFilter() {
        return [
            <TextFilter
                key='include'
                text="包含"
                onDone={val =>
                    this.setState({
                        filters: [
                            ...this.state.filters,
                            {
                                type: 'include',
                                data: val,
                            }
                        ]
                    })
                } />,
            <TextFilter
                key='exclude'
                text="排除"
                onDone={val =>
                    this.setState({
                        filters: [
                            ...this.state.filters,
                            {
                                type: 'exclude',
                                data: val,
                            }
                        ]
                    })
                }
            />,
        ]
    }

    _renderStatus(count) {
        return <span>当前: {count} 条数据</span>
    }

    _renderNumList(filteredNum) {
        return (
            <ul>
                {
                    filteredNum.map(x =>
                        <li>
                            <span>{x.num}</span>
                            <button
                                onClick={_ => this.setState({
                                    favorites: [...this.state.favorites, x],
                                })}
                            >
                                添加到收藏列表
                            </button>
                        </li>
                    )
                }
            </ul>
        )
    }

    _renderSelectList() {
        return (
            <ul>
                {
                    this.state.favorites.map((x, i) =>
                        <li>
                                                        <span>{x.num}</span>
                            <button
                                onClick={_ => this.setState({
                                    favorites: this.state.favorites.filter((_, j) => i !== j),
                                })}
                            >
                                移除
                            </button>
                        </li>
                    )
                }
            </ul>
        )
    }
}

function Label({
    id,
    text,
    onRemove,
}) {
    return (
        <button
            style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 3,
                padding: 2,
            }}
            onClick={_ => onRemove(id)}
        >
            <span>{text}</span>
        </button>
    )
}

class TextFilter extends Component {
    constructor() {
        super()
        this.state = {
            value: 0,
        }
    }
    render() {
        return (
            <div>
                <input
                    type="number"
                    value={this.state.value}
                    onChange={event => this.setState({ value: event.target.value })}
                />
                <button
                    onClick={event => this.props.onDone(this.state.value)}
                >
                    {this.props.text}
                </button>
            </div>
        )
    }
}


// class CheckFilter extends Component {

// }

ReactDOM.render(<App />, document.getElementById("app"))