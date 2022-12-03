import React from 'react'

class ClassComponent extends React.Component<{ name: string }> {

    state = {
        name: 'Vilmar e Joana'
    }
    
    render() {
        return <div>
            <p>name: { this.state.name }</p>
            <button onClick={() => {
                this.setState({ name: 'Vilmar' })
            }}>Click me</button>
        </div>
    }
}

export default ClassComponent