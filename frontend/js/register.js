const registerform = document.getElementById('form');
registerform.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    if(registerform['password1'].value !== registerform['password2'].value){
        alert('passwords do not match');
    }
    else{
       sendUserCredentials({
        email:registerform['email'].value,
        password:registerform['password1'].value,
       })
       window.location.href = '/frontend/login';
    }
})

async function sendUserCredentials(data){
    //for fetch youu drop the path  at first
   let response = await fetch('http://localhost:3000/api/v1/user/createUser',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    console.log(response);
    const result = await response.json();
    alert(result.message);
    console.log(result.data);
}
