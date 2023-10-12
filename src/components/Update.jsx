import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser =useLoaderData()
    const handleUpdate =event=>{
        event.preventDefault()
        const form =event.target 
        const name =form.name.value 
        const email =form.email.value 
        const user ={name,email}

        console.log(user)
        const updatedUser ={name,email}
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('user update successfully')
            }
        })
    }
    console.log(loadedUser)
    return (
        <div>
            <h2>Update information of :{loadedUser.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" defaultValue={loadedUser?.name} name="name" id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;