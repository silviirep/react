import React from 'react';

function Button({children, action}) {

    return (
        <>
            <div style={{display:"inline-flex", width:"225px", margin:"0px 30px", justifyContent:"center"}}>
                <button className={"btn"} style={{
                    background:"rosybrown",
                    width:"150px",
                    height:"40px",
                    borderRadius:"50px",
                    color:"white",
                    border:"none",
                    fontSize:"20px",
                    fontWeight:"bold",
                    letterSpacing:"2px",
                }}
                        onClick={()=>action()}>{children}</button>
        </div>
            </>
    );
}

export default Button;