import React from 'react'

class ClassComponent extends React.Component<{ name: string }> {

    constructor(props: any) {
        super(props)
        console.log('constructor reached')
    }

    state = {
        name: 'Vilmar e Joana'
    }

    componentDidMount(): void {
        console.log('DidMount reached')
    }

    componentDidUpdate(): void {
        console.log('DidUpdate reached')
    }
    
    render() {

        console.log('render reached')

        return <div>
            <p>name: { this.state.name }</p>
            <button onClick={() => {
                this.setState({ name: 'Vilmar' })
            }}>Click me</button>
        </div>
    }
}

export default ClassComponent