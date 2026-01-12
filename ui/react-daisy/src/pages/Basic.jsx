import React from 'react'

const Basic = () => {
    return <>

        {
            ["alert-info", "alert-success", "alert-warning", "alert-error"]
                .map(item => <div className={`alert ${item}`}>
                    <span>12 unread messages. Tap to see.</span>
                </div>)
        }
        <br /><br />
        {
            ["alert-info", "alert-success", "alert-warning", "alert-error"]
                .map(item => <div className={`alert alert-outline ${item}`}>
                    <span>12 unread messages. Tap to see.</span>
                </div>)
        }
        <br /><br />
        {
            ["alert-info", "alert-success", "alert-warning", "alert-error"]
                .map(item => <div className={`alert alert-dash ${item}`}>
                    <span>12 unread messages. Tap to see.</span>
                </div>)
        }

        <button className="btn btn-primary">Primary</button>


    </>
}

export default Basic