import React from 'react'

const Input = ({
    label,
    type,
    className,
    validFeedback,
    invalidFeedback,
    ...otherProps
}) => {
    return <div>
        <label htmlFor="">{label}</label>
        <input type={type} className={className} {...otherProps} />
        <div className='valid-feedback'>{validFeedback}</div>
        <div className='invalid-feedback'>{invalidFeedback}</div>
    </div>
}

export default Input