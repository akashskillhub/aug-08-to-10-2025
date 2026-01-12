import React from 'react'

const Basic = () => {
    return <>
        {
            [
                "bg-red-50",
                "bg-red-100",
                "bg-red-200",
                "bg-red-300",
                "bg-red-400",
                "bg-red-500",
                "bg-red-600",
                "bg-red-700",
                "bg-red-800",
                "bg-red-900",
                "bg-red-950"
            ]
                .map(item => <div key={item} className={`${item}`} >
                    Lorem ipsum dolor sit amet.
                </div>)
        }

        <button className='border-2 border-amber-600 px-6 py-2 hover:bg-blue-400'>test</button>

    </>
}

export default Basic