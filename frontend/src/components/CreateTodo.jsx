export function CreateTodo(){
    const 
    return <div>
        <input type =" text" placeholder="title"></input>
        <input type =" text" placeholder="description"></input>
        <button 
        onClick={()=> {
            fetch("http://localhost:3000/todo"),{
                method : "POST",
                body: {

                }
            }
            .then(async function(res) {
                const res = await res.json();
                alert("Todo added")
            })
        }}
        
        >add todo</button>
        
    </div>
} 