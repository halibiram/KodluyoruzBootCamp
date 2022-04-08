document.querySelector('#myBtn').addEventListener("click",getData)

function getData(){
    let age =document.querySelector("#age").value
    console.log(age)
    fetch("https://randomuser.me/api/?results=500")
    .then(response=>response.json())
    .then(responJson=>{
        let author=responJson.results
        console.log(author)
        let output="<h2><center>Get User Data</center></h2>";
        let flag=true
        author.forEach(lists=>{
            if(age==lists.dob.age){
            flag=false
            output+=`<div class="container">
                        <div class="card">
                            <ul class="list-group">
                               <li class="list-group-item"><h2>${lists.name.first+" "+lists.name.last}</h2></li>
                                <li class="list-group-item"><img src="${lists.picture.large}"></li>
                                <li class="list-group-item">Phone Number: ${lists.cell}</li>
                                <li class="list-group-item">E-mail: ${lists.email}</li>
                                <li class="list-group-item">Gender: ${lists.gender}</li>
                                <li class="list-group-item">DOB: ${lists.dob.date}</li>
                                <li class="list-group-item">Age: ${lists.dob.age}</li>
                                <li class="list-group-item">Country: ${lists.location.country}</li>
                                <li class="list-group-item">City: ${lists.location.city}</li>
                                

                            </ul>
                        </div>
                     </div>`
            }
                   
        })
        if(flag){
            output="<h2><center>No results were found! :(</center></h2>"
            output+="<h3><center>Try again...</center></h3>"
        }
        document.querySelector("#output").innerHTML=output;
    
    })
}

