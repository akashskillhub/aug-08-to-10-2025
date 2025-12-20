import React, { useState } from 'react'

const PracticeProp = () => {
    const [user, setUser] = useState([
        { id: 1, name: "john", subjects: ["js", "react", "node"] },
        { id: 2, name: "ross", subjects: ["java", "angular"] },
        { id: 3, name: "joe", subjects: ["php", "sql"] },
    ])
    return <>
        <div>PracticeProp</div>
        <div className="container">
            <div className="row">
                {
                    user.map(item => <div className="col-sm-4">
                        <CardList data={item}>  thank you </CardList>
                    </div>)
                }
            </div>
        </div>
    </>

}

const CardList = ({ data, children }) => {
    return <div class="card">
        <div class="card-header">{data.name}</div>
        <div class="card-body">
            <ul>
                {data.subjects.map(item => <li>{item}</li>)}
            </ul>
        </div>
        <div class="card-footer">{children}</div>
    </div>
}

export default PracticeProp