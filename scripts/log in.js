var usuario = "cesarleacu@hotmail.com";
var contraseña = "cesar";

  
document.querySelector('.login')
    .addEventListener('submit', e => {
        e.preventDefault()
        
        const form = Object.fromEntries(
            new FormData(e.target)
        )
       
        let payload = 
        {
            correo:form.correo,
            contra:form.contraseña
        }
    
        fetch("http://localhost:3001/login",
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(function(res){ return res.json(); })
        .then(function(data){ 
            console.log(data);
            if(data.message){
                alert("error", data.message)
            }else{
                 //aaqui va el codigo
                console.log( data  ) 
                console.log( data[0].Correo  ) 
                console.log( data[0].Role  ) 
            }
           
       
        
        
        
        })

        
    })