

const URL = "http://localhost:5000/";
const headers = new Headers({
    "Contet-type": "application/json"
});

const addUser = async(user) =>{
    try {
        await fetch(`${URL}users/3`,{
            method: "DELETE",
            body: JSON.stringify(user),
            headers: headers,
        });
    } catch (error) {
        console.log(error);
    }
}

addUser()