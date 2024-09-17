import Button from "./Button";

function Input({saveText}) {

    const handleText = ()=>{
        const input = document.querySelector("#task")
        saveText(input.value)
        alert("Your to-do was saved successfully!")
        input.value= ""
        // console.log(input.value);
    }

    return (
        <>
            <input id="task"
                   style={{padding:"10px 20px", width: "100%", border:"none", margin:"15px 0px", borderRadius:"10px", fontSize:"20px"}}
                   placeholder="Insert your task" />
            <br/>
            <Button action={handleText}>Add</Button>
        </>
    );
}

export default Input;
