import {useState} from 'react';

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);
    const [age, onChangeAge] = useState(20);
    const [user, setUser] = useState({
        name: 'Elon',
        age: '30',
        email: 'elon@mail.com'
    })

    // const increase = () => {
    //     setCount(count+1);
    // }

    const increase = () => setCount(count+1);

    // const increaseAge = () => {
    //     onChangeAge(age+1)
    // }

    const changeUser = () => {
        setUser({...user, name: 'Gated'})
    }

    return (
        <div className="function">
            <h2>Functional Component</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increase</button>
            {/* <p>Age: {age}</p>
            <button onClick={increaseAge}>Increase Age</button> */}
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <button onClick={changeUser}>Change User</button>
        </div>
    )
}

export default FunctionalComponent;
