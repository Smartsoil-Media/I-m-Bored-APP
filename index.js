

document.getElementById("get-activity").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(Response => Response.json())
    .then(data => {
     console.log(data)
     document.getElementById('msg').innerHTML = `
     <h4> ${data.activity} </h4> 
     `
     document.getElementById('link').innerHTML = ` TYPE: ${data.type}`
    })
})


