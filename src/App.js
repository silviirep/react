import Input from "./components/Input";
import List from "./components/List";
import {useState} from "react";
import perroLindo from './assets/images/perro-lindo-arte-digital.jpg';


function App() {

    // const styleBackground ={
    //     backgroundImage:'url(${perroLindo})',
    //     backgroundSize:"cover",
    //     backgroundPosition:"center",
    //     width:"100vw",
    //     height:"100vh",
    // }
    const [todos, setTodos] = useState([
        // "sacar el perro",
        // "sacar el pipo",
        // "sacar el haku",
    ]);

    const save = (value)=>{
        console.log(value)
        setTodos([...todos, value])
    }

    const destroy = (value) =>{
        setTodos(todos.filter((item, index)=>!value.includes(index)))
    }

    return(
        <>
            <div style={{display:"flex",
                justifyContent:"center",
                width: "100vw",
                height: "100vh",
                background: `url(${perroLindo}) fixed no-repeat center center`,
                backgroundSize: "cover"
            }}>
                <div >
                    <h1 style={{textAlign:"center", color:"white", textShadow:"2px 2px 5px rgba(0,0,0,0.5)", fontSize:"50px", margin:"20px"}}>Welcome to your To-Do List</h1>
                    <Input  saveText ={save}/>
                    <List ggggg={todos} destroy = {destroy}/>
                </div>
            </div>
        </>
    );

}

export default App;
