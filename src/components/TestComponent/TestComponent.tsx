import React, { useState } from 'react';
import './TestComponent.css';



const TestComponent = (props: { name: string, colaborador: string }) => {

    const [age, setAge] = useState(36)
    
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