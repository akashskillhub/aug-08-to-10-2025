import React, { useState } from 'react'

const Budget = () => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState("")
    const [category, setCategory] = useState("")
    const [note, setNote] = useState("")

    const [bank, setBank] = useState([])

    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const [balance, setBalance] = useState(0)

    const handleClick = () => {
        const obj = { title, amount, type, category, note }
        // setBank([obj, ...bank])
        const allData = [obj, ...bank]
        const inc = allData
            .filter(item => item.type === "income")
            .reduce((sum, item) => item.amount + sum, 0)
        const exp = allData
            .filter(item => item.type === "expense")
            .reduce((sum, item) => item.amount + sum, 0)
        const bal = inc - exp

        setBank(allData)
        setIncome(inc)
        setExpense(exp)
        setBalance(bal)
    }
    return <>

        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Budget Planner</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <input className="form-control my-2" type="text" placeholder='Enter Title' onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-control my-2" type="text" placeholder='Enter Amount' onChange={e => setAmount(+e.target.value)} />
                                </div>
                                <div className="col-sm-6">
                                    <select className="form-control my-2" onChange={e => setType(e.target.value)} >
                                        <option value="">Choose Type</option>
                                        <option value="income">Income</option>
                                        <option value="expense">Expense</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <select className="form-control my-2" onChange={e => setCategory(e.target.value)} >
                                        <option value="">Choose Category</option>
                                        <option value="food">Food</option>
                                        <option value="trasnport">Trasnport</option>
                                        <option value="rent">Rent</option>
                                        <option value="salary">Salary</option>
                                        <option value="investments">Investments</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <textarea className="form-control my-2" placeholder='Enter Note' onChange={e => setNote(e.target.value)} ></textarea>
                                </div>
                            </div>
                            <button className='btn btn-primary btn-lg w-100' onClick={handleClick}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* .container>.row>.col-sm-6.offset-sm-3>.card>.card-body */}
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6>Income</h6>
                                            <strong>{income}</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6>Expense</h6>
                                            <strong>{expense}</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6>Balance</h6>
                                            <strong>{balance}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <table className='table table-bordered table-hover'>
            <thead>
                <tr>
                    <th>title</th>
                    <th>amount</th>
                    <th>category</th>
                    <th>type</th>
                    <th>note</th>
                </tr>
            </thead>
            <tbody>
                {
                    bank.map(item => <tr>
                        <td>{item.title}</td>
                        <td>{item.amount}</td>
                        <td>{item.category}</td>
                        <td>{item.type}</td>
                        <td>{item.note}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Budget