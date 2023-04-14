import React, {useState} from 'react';

const IncrementDecrement = () => {
    let [counter, setCounter] = useState(0);


    const onClickIncrement = () => {
        console.log('increment');
        setCounter(++counter);
        console.log(counter);
    };
    const onClickDecrement = () => {
        console.log('decrement');
        setCounter(--counter);
        console.log(counter);
    };
    return (
        <div>
            <h2>value is -> {counter} </h2>
            <button onClick={onClickIncrement} > increment
            </button>

            <button onClick={onClickDecrement} > decrement
            </button>

        </div>
    );
};

export default IncrementDecrement;
