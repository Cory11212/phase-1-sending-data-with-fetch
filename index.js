// Add your code here
function submitData(username, mail){
    const configurationObject = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body : JSON.stringify({
            name : username,
            email : mail
        })
    }
    return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(data => document.body.append(data.id))
    .catch(error => document.body.append(error.message))
}