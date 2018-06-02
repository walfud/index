import React, {
    Component,
} from 'react'
import 'wired-elements'

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