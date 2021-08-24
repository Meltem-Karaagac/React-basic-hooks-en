import {useState, useEffect} from 'react';

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);
    const [age, onChangeAge] = useState(20);

    useEffect(() => {
        console.log('Func Comp Rendered!');
        return () => {
            console.log('Func Comp UNmounted!')
        }
    }, [count])

    // const increase = () => {
    //     setCount(count+1);
    // }

    const increase = () => setCount(count+1);

    const increaseAge = () => {
        onChangeAge(age+1)
    }

    return (
        <div className="function">
            <h2>Functional Component</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
            <p>Age: {age}</p>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    )
}

export default FunctionalComponent;
