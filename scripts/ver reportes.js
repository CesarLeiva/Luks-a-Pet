const reporte1 = {
    nombre: 'Jack',
    adoptante: 'César',
    identificacion: '1002245969',
    celular: '3106367564'
}

const reporte2 = {
    nombre: 'Rita',
    adoptante: 'Luis',
    identificacion: '1002245969',
    celular: '3106367564'
}

const reporte3 = {
    nombre: 'Temari',
    adoptante: 'Daniel',
    identificacion: '1002245969',
    celular: '3106367564'
}


const reportes = [reporte1, reporte2, reporte3];

for(i=0; i<=reportes.length; i++){
    document.getElementById('card').innerHTML +=
        `<div class="containt">
            <div class="pa mx-4" style="background-color: #5F6C7B; border: 2px; margin-bottom: 20px; border-radius: 10px;">
                <section class="xd" style="margin-top: 10px;">
                    <div class="fotoMascota m-2" style=" height: 200px; width: auto;">
                        <img src="/imagenes/image 5.jpg" alt="nombre" style="border-radius: 15px; height: inherit; width: inherit;">
                    </div>
                    <div class="containt m-2" style="font-size: 190%; width: 100%;">
                        <h1 style="font-size: 200%; text-align: center;">`+reportes[i].nombre+`</h1>
                        <div class="informaion mt-4 mx-5">
                            Adoptante: `+reportes[i].adoptante+`
                            <br>
                            Cédula: `+reportes[i].identificacion+`
                            <br>
                            No. teléfono: `+reportes[i].celular+`
                            </div>
                        </div>
                </section>
            </div>
        </div>`
        console.log(reportes[i])
}