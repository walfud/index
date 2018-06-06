import * as React from "react"
import { WiredCard, WiredListbox, WiredItem, } from "wired-elements"

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
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <img src={require('./404.png')} /> */}
        {this._renderSecret()}
      </div>
    );
  }

  _renderSecret() {
    return (
      <div>
        <WiredCard>
          <h4>Anydesk</h4>
          <WiredListbox>
            <WiredItem text="home: desktop-c4cqn3p@ad" />
            <WiredItem text="office: 586822336" />
            <WiredItem text="mac: 417286111" />
          </WiredListbox>
        </WiredCard>
      </div>
    )
  }
}
