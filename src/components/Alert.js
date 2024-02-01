import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'50px'}}>
       {props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} type={props.alert.type} role="alert">
                <strong>{props.alert.type} </strong>{props.alert.msg}
                <button htmlType="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
       
        </div>
       }
       </div>
    )
}
