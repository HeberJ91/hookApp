import { useMemo, useState } from "react";
import { useCounter } from "../hooks"
 
const heavyStuff = ( iterarionNumber=100) => {
    for( let i=0; i< iterarionNumber; i++){
        console.log('Working');
    }

    return `${ iterarionNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo( () => heavyStuff(counter), [counter])
    return (
        <>
            <h1>Counter: <small> { counter } </small>   </h1>
            <hr/>

            <h4> { memorizeValue} </h4>

            <button 
                className='btn btn-primary'
                onClick={ () => increment()}>
                +1
            </button>

            <button 
                className="btn btn-outline-primary"
                onClick={ () => setShow(!show)}
            > 
                Show/Hide { JSON.stringify(show)}
            </button>
        </>
    )
}
