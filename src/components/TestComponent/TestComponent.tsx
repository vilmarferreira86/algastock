import React, { useState, useEffect } from 'react';
import './TestComponent.css';



const TestComponent = (props: { name: string, colaborador: string }) => {

    const [age, setAge] = useState(36)
    
    useEffect(() => {
        console.log('Component was created')
    }, [])

    useEffect(() => {
        console.log('Age has been updated to: ' + age)
    }, [age])

    return (<div className='TestComponent'>Olá, {props.name}. <br/>
            O seu colaborador { props.colaborador } possui { age } anos <br/>
            <button onClick={() => {
                {
                    setAge(age + 1)
                }
            }}>
                Incrementar
            </button>

        </div>
    )
}

export default TestComponent