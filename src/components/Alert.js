import React from 'react'

export default function Alert(props) {
    const capatalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong> {capatalize(props.alert.type)}</strong>:{props.alert.msg}     {/* agr type success hai toh success likha ayega aur message aayega alert wala */}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}


// props.alert && -----> if these are null then  no further statement is going to be run ,if not null then then further statement will run
