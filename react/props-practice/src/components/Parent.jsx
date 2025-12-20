import Child from './Child'

const Parent = ({ brand, count, setCount }) => {
    return <>
        <div>Parent</div>
        <button onClick={e => setCount(count + 1)}>+1</button>
        <button onClick={e => setCount(count - 1)}>-1</button>
        <hr />
        <Child brand={brand} count={count}></Child>
    </>
}

export default Parent