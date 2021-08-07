import React from 'react'

export const Msg = ({msg,bgColor}) => {
    const bg={
        "background":`${bgColor}`
    }
    return (
        <>

          <div className="custom_msg" style={bg}>
              <h4>{msg}</h4>
          </div>  
        </>
    )
}
