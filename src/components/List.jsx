import React, {useState} from 'react';
import ItemList from "./ItemList";
import Button from "./Button";

function List({ggggg, destroy}) {

    const [forDelete, setForDelete] = useState([])

    const trash = (value)=>{
        if(!forDelete.includes(value)){
            setForDelete([...forDelete, value])
        }else{
            setForDelete(forDelete.filter((item)=>item!==value))
        }

        // destroy(forDelete)
    }

    const x = ()=>{
        destroy(forDelete)

        setForDelete([])
    }

    return (
        <>
            <Button action={x}>Delete</Button>
           <table style={{color:"white", margin:"60px 30px", fontSize:"35px", background:"rosybrown"}}>
               <tbody>

               {
                   ggggg.map((item, index) => (
                       <ItemList checked={forDelete.includes(index)} execute={trash} key={index} position={index}>{item}</ItemList>
                   ))

               }

               {
                   ggggg.length === 0 && (
                       <p style={{padding: "0px 10px"}}>Great Job! You don't have any task today</p>
                   )
               }



               </tbody>
           </table>
        </>
    );
}

export default List;