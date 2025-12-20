import { useState } from "react"

const Calculator = () => {
    let [result, setResult] = useState(0)
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Calculator</div>
                        <div className="card-body">
                            <h1>{result}</h1>
                            <input className="form-control mb-2" type="number" onChange={e => setNum1(+e.target.value)} />
                            <input className="form-control mb-2" type="number" onChange={e => setNum2(+e.target.value)} />
                            <div className="btn-group w-100">
                                <button className="btn btn-primary" onClick={e => setResult(num1 + num2)}>+</button>
                                <button className="btn btn-secondary" onClick={e => setResult(num1 - num2)}>-</button>
                                <button className="btn btn-warning" onClick={e => setResult(num1 * num2)}>*</button>
                                <button className="btn btn-danger" onClick={e => setResult(num1 / num2)}>/</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Calculator