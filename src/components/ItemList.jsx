import React from 'react';

function ItemList({children,position, execute, checked}) {
    const handleBox = ()=>{
        execute(position)
    }
    return (
        <>
            <tr >
                <td style={{borderBottom:"2px solid black", padding:"3px 1rem"}}>
                    <input style={{height:"20px", width:"30px", borderRadius:"15px"}}    checked={checked} id={position} type={"checkbox"} onChange={handleBox}/>
                </td>
                <td style={{borderBottom:"2px solid black", padding:"3px 1rem"}}>{children}</td>
            </tr>
        </>
    );
}

export default ItemList;