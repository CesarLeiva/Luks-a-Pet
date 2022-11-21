

fetch("https://backend-luks-a-pet-production.up.railway.app/admin/reportes",
    {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    })
    .then(function (res) { return res.json(); })
    .then(function (data) {
        console.log(data);
        if (data.message) {
            document.getElementById("card").innerHTML +=
                `<h4>No hay Reportes</h4>`
            alert(data.message)

        } else {
            const reportes = data;

            for (i = 0; i <= reportes.length; i++) {
                document.getElementById('card').innerHTML +=
                    `<div class="containt">
            <div class="pa mx-4" style="background-color: #5F6C7B; border: 2px; margin-bottom: 20px; border-radius: 10px;">
                <section class="xd" style="margin-top: 10px;">
                    <div class="fotoMascota m-2" style=" height: 200px; width: auto;">
                        <img src=`+ reportes[i].Foto + `  alt="nombre" style="border-radius: 15px; height: inherit; width: inherit;">
                    </div>
                    <div class="containt m-2" style="font-size: 190%; width: 100%;">
                        <h1 style="font-size: 200%; text-align: center;">`+ reportes[i].mascota_nombre + `</h1>
                        <div class="informaion mt-4 mx-5">
                            Adoptante: `+ reportes[i].Nombre + `
                            <br>
                            Cédula: `+ reportes[i].IdAdoptante + `
                            <br>
                            No. teléfono: `+ reportes[i].Celular + `
                            </div>
                        </div>
                </section>
            </div>
        </div>`
                console.log(reportes[i])
            }


        }
    }
    );
