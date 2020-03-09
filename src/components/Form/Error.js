import React from 'react'

const Error = ({ touched, message}) => {

    if (!touched) {
        return <div className="form-message invalid"></div>
    }
    else if (message) {
        return <div className="form-message-invalid">{message}</div>
    }
     return null
}

export default Error