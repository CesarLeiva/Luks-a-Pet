
fetch("https://backend-luks-a-pet-production.up.railway.app/propuestas",
    {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    })
    .then(function (res) { return res.json(); })
    .then(function (data) {
        console.log(data);
        if (data.message) {
            alert(data.message)
        } else {
            const propuestas = data;

            for (i = 0; i <= propuestas.length; i++) {
                document.getElementById("card").innerHTML +=
                    `<div class="containt">
                            <div class="pa mx-3" style="background-color: #5F6C7B; border: 2px; margin-bottom: 20px; border-radius: 10px;">
                                <section class="xd" style="margin-top: 10px;">
                                    <div class="fotoMascota m-2" style=" height: 200px; width: auto;">
                                        <img src=`+ propuestas[i].Foto + ` alt="nombre" style="border-radius: 15px; height: inherit; width: inherit;">
                                    </div>
                                    <div class="containt m-2" style="font-size: 190%; width: 100%;">
                                        <h1 style="font-size: 200%; text-align: center;">`+ propuestas[i].Nombre + `</h1>
                                        <div class="informaion">
                                        `+ propuestas[i].Edad + `, ` + propuestas[i].Sexo + `
                
                                        <br>
                                        `+ propuestas[i].Ciudad + `, ` + propuestas[i].Departamento + `
                                        </div>
                                        <div style="text-align: end;">
                                        <a href= "/html/ver pa.html?id=`+ propuestas[i].IdPropuesta + `" style="text-decoration: none; color: white; border-radius: 10px; background-color: #FF8298; margin-right: 15px;">
                                            <span class="mx-5">Me interesa</span>
                                        </a>
                                    </div>
                                    </div>
                                </section>
                            </div>
                        </div>`
                console.log(propuestas[i])
            }





        }

    })

