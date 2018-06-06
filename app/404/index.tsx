import * as React from "react"
import 'wired-elements'

interface IProps { }
interface IState {

}

export default class App extends React.Component<IProps, IState> {
  state = {};

  render() {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img src={require('./404.png')} />
        <span>404 Not Found!</span>
      </div>
    );
  }

  _renderSecret() {
    return (
      <div>
        <wired-card>
          <h4>Anydesk</h4>
          <wired-listbox>
            <wired-item text="home: desktop-c4cqn3p@ad" />
            <wired-item text="office: 586822336" />
            <wired-item text="mac: 417286111" />
          </wired-listbox>
        </wired-card>
      </div>
    )
  }
}
