
const handleDelete = (id) => {
    const url = `http://localhost:3001/propuesta/${id}`
    fetch(url,
        {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
        .then(function (res) { return res.json(); })
        .then(function (data) {
            console.log(data);
            if (data.message) {
                alert(data.message)
                window.location.reload()
            } else {
                console.log(data)
            }
        });


}

const myFunction = (id) => { console.log(id) }




const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
    alert("Iniciar sesion");
} else {
    const url = `https://backend-luks-a-pet-production.up.railway.app/propuestas/${user.id}`

    fetch(url,
        {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
        .then(function (res) { return res.json(); })
        .then(function (data) {
            console.log(data);
            if (data.message) {
                alert(data.message)

                document.getElementById("card").innerHTML +=
                    `<div class="containt text-dark p-2">
                ${data.message}
                </div> 
                `
            } else {
                const propuestas = data;

                for (i = 0; i <= propuestas.length; i++) {

                    if (propuestas[i].Adoptado == false) {

                        document.getElementById("card").innerHTML +=
                            `<div class="containt">
        <div class="pa mx-3" style="background-color: #5F6C7B; border: 2px; margin-bottom: 20px; border-radius: 10px;">
            <section style="margin-top: 10px;">
                <div class="fotoMascota m-2" style="height: 200px; width: auto;">
                    <img src=`+ propuestas[i].Foto + ` alt="nombre" style="border-radius: 15px; height: inherit; width: inherit;">
                </div>
                    <div class="containt m-2" style="font-size: 190%; width: 100%;">
                    <h1 style="font-size: 200%; text-align: center;">`+ propuestas[i].Nombre + `</h1>
                    <div style="height: 75px;"></div>
                    <div style="text-align: center;">
                    <button class="btn" onclick="handleDelete(`+ propuestas[i].IdPropuesta + `)" style="text-decoration: none; color: white; border-radius: 10px; background-color: #FF8298; margin-right: 15px;">
                    <span class="mx-5">Eliminar</span>
                        </button>
                        </div>
                    <div style="text-align: center; font-size: 18px;">
                        <a href= "/html/reporte adopcion.html?id=`+ propuestas[i].IdPropuesta + `" style="text-decoration: none; color: white;">
                            Fue adoptado?
                            <span style="color: #FF8298;">Repórtalo aquí</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>`


                    } else {

                        document.getElementById("card").innerHTML +=
                            `<div class="containt">
        <div class="pa mx-3" style="background-color: #5F6C7B; border: 2px; margin-bottom: 20px; border-radius: 10px;">
            <section style="margin-top: 10px;">
                <div class="fotoMascota m-2" style="height: 200px; width: auto;">
                    <img src=`+ propuestas[i].Foto + ` alt="nombre" style="border-radius: 15px; height: inherit; width: inherit;">
                </div>
                    <div class="containt m-2" style="font-size: 190%; width: 100%;">
                    <h6 style="font-size: 160%; text-align: center;">`+ propuestas[i].Nombre + ` ya fue adoptado</h6>
           
                </div>
            </section>
        </div>
    </div>`
                    }
                }






            }

        })
}
                            //