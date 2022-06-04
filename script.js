const serverStatus = document.getElementById('serverStatus');
const statusURL = "https://api.spacetraders.io/game/status"

async function retriveServerStatus(){
    await fetch(statusURL,{cache:"no-cache"})
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Request Failed');
            }, netErr => console.log(netErr.message))
            .then(jsonResponse => {
                serverStatus.innerHTML = jsonResponse['status'];
            });
}

const accoutUrl = "https://api.spacetraders.io/my/account?token="
const token = "e89465ed-834f-4bb4-b8ca-d2620441c85f"
const userSection = document.getElementById("user")

const writeStupid = message => {
    console.log(message)
    const newParagraph = document.createElement("p")
    
    newParagraph.appendChild(document.createTextNode(message.user.username)) // füge den Textknoten zum neu 
    newParagraph.appendChild(document.createTextNode(" joined on ")) 
    newParagraph.appendChild(document.createTextNode(message.user.joinedAt))

    userSection.appendChild(newParagraph)
    
}

async function retriveAccount(){
    await fetch(accoutUrl + token, {method: 'GET'})
        .then(response => response.json())
        .then(_ => writeStupid(_))
}
retriveAccount()