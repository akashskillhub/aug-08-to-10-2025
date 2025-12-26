import React from 'react'

const Input = ({
    label,
    type,
    className,
    validFeedback,
    invalidFeedback,
    varient = "floating",
    ...otherProps
}) => {
    switch (varient) {
        case "normal": return <div>
            <label htmlFor="">{label}</label>
            <input type={type} className={className} {...otherProps} />
            <div className='valid-feedback'>{validFeedback}</div>
            <div className='invalid-feedback'>{invalidFeedback}</div>
        </div>
        case "floating": return <div class="form-floating mb-3">
            <input type={type} className={className} {...otherProps} />
            <label htmlFor="">{label}</label>
            <div className='valid-feedback'>{validFeedback}</div>
            <div className='invalid-feedback'>{invalidFeedback}</div>
        </div>
        default: break;
    }

}

export default Input