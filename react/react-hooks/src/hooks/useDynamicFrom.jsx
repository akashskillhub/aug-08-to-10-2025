import React from 'react'

//                      👇array of object
const useDynamicFrom = (config) => {
    const handleui = (item) => {
        switch (item.type) {
            case "number":
            case "email":
            case "password":
            case "date":
            case "color":
            case "time":
            case "text": return <div>
                <input
                    type={item.type}
                    placeholder={`Enter ${item.label}`}
                    {...item}
                />
                <div className="invalid-feedback">{item.error}</div>
            </div>
            case "textarea": return <div>
                <textarea className='form-control' placeholder={`Enter ${item.label} `} ></textarea>
            </div>
            case "select": return <div>
                <select className='form-control'>
                    <option value="">choose {item.label}</option>
                    {item.option.map(op => <option value={op}>{op}</option>)}
                </select>
            </div>
            case "checkbox":
            case "radio": return <div>
                {item.option.map(op => <div>
                    <input type={item.type} name={item.label} id={op} />
                    <label htmlFor={op}>{op}</label>
                </div>)}
            </div>

            default:
        }
    }

    const ui = config.map(item => handleui(item))
    return ui
}

export default useDynamicFrom