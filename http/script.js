/*fetch("https://api.github.com/users", {
    method:"GET"
})
.then(Response => {
    if(!Response.ok){
        console.log("NOOOOOOOOOOOOO")
    }return Response.json()
})

.then(value => {
    console.log(value)
    let userList = document.querySelector(".userList")
    value.forEach(element => {
        let userItem = document.createElement("img")
        userItem.src = element.avatar_url
        let userInput = document.createElement("p")
        userInput.textContent = element.login
        userList.appendChild(userItem)
        userList.appendChild(userInput)
    })

})
.catch(error => {
    console.error(error)
})*/


/*fetch("https://restcountries.com/v3.1/all", {
    method: "GET"
})

.then(Response => {
    if(!Response.ok){
        console.log("NOOOOOOOO")
    }return Response.json()
})


.then(value){
    console.log(value)
}

.catch(error){
    console.error(Error)
}*/

/*let API_KEY = "6a2fb9e26109fad459c6094fb9bba928"
function getWeather(city){
let url = ""
return fetch(url)

    .then(Response => {
        if(!Response.ok){
            console.log("NOOOOO")
        }return Response.json()
    })
    .then(value => {
        console.log(value)
        let weather = document.querySelector(".weather")
        value.forEach(element => {
            let weatherCity = document.createElement("")
            let weatherAPI = document.createElement("")
        })
    })
}

getWeather('London')*/


let newButton = document.querySelector(".send_btn")
let textArea = document.querySelector(".textarea_class")
let comment = document.querySelector(".comment")
let userName = document.querySelector(".name_area")
let commentBlock = document.querySelector(".comment_block")

/*newButton.addEventListener("click", function(){
    setTimeout(() => {
        let text = textArea.value
        localStorage.setItem("SomeText", text)
        console.log("text")
        let getText = localStorage.getItem("SomeText", text)
        let p = document.createElement("p")
        p.textContent = getText
        comment.appendChild(p)
        if(textArea.value !== ""){
            textArea.value = ""
        }
    }, 1000)
})*/

newButton.addEventListener("click", function(){
    setTimeout(() => {
        let text = textArea.value
        let user = userName.value

        localStorage.setItem("SomeText", text)
        localStorage.setItem("someUser", user)
        console.log("text")
        let getText = localStorage.getItem("SomeText", text)
        let getUser = localStorage.getItem("someUser", user)
        let p = document.createElement("p")
        let some = document.createElement("p")
        some.textContent = `${getUser} :`
        p.textContent = getText
        
        commentBlock.appendChild(some)
        commentBlock.appendChild(p)



        
        
        
        some.className = "user_name"
        if(textArea.value !== "" || userName.value !== ""){
            textArea.value = ""
            userName.value = ""
        }
        


    }, 1000)
})