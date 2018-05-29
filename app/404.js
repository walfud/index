import React, {
    Component,
} from "react"

export default class App extends React.Component {
    constructor() {
        super()
    }

    render() {
      return (
          <div style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
          }}>
              <span>404 Not Found!</span>
          </div>
      )
    }
}