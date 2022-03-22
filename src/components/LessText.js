import React, { useState } from 'react'


function LessText(props) {

    const [show, setShow] = useState(false)



    return (


        <div>

            <p> {show ? props.tekstas : props.tekstas.substring(0, props.length)}</p>

            {<button onClick={() => setShow(!show)} type="button" className="btn btn-link"> {show ? "read less" : "...read more"}</button>}
        </div>
    )
}

export default LessText