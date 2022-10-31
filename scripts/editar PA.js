//metes los datos de la propuesta en un objeto
const propuesta = {
    nombre: 'Jack',
    edad: '2 años',
    sexo: 'Macho',
    departamento: 'Bolivar',
    ciudad: 'Cartagena',
    esterilizado: 'si',
    descripcion: 'Muy bonito él',
}

document.getElementById("nombre").innerHTML = '<input type="text" class="form-control input" id="nombreMascota" name="nombreMascota" placeholder="Nombre de la mascota" value="'+propuesta.nombre+'">';
document.getElementById("edad").innerHTML = '<input type="text" class="form-control input" id="edadMascota" name="edadMascota" placeholder="Edad de la mascota" value = "'+propuesta.edad+'">';
if(propuesta.sexo == "Macho"){
    document.getElementById("sexo").innerHTML =`<select class="form-control input" name="sexoMascota" id="sexoMascota">
                                                    <option value="macho">Macho</option>
                                                    <option value="hembra">Hembra</option>
                                                </select>`;
}
else{
    document.getElementById("sexo").innerHTML =`<select class="form-control input" name="sexoMascota" id="sexoMascota">
                                                    <option value="macho">Hembra</option>
                                                    <option value="hembra">Macho</option>
                                                </select>`;
}
document.getElementById("departamento").innerHTML = '<input type="text" class="form-control input" name="departamentoMascota" id="departamentoMascota" placeholder="Departamento" value="'+propuesta.departamento+'" required>';
document.getElementById("ciudad").innerHTML = '<input type="text" class="form-control input" name="ciudadMascota" id="ciudadMascota" placeholder="Ciudad" value="'+propuesta.ciudad+'" required>'
if (propuesta.esterilizado == "si"){
    document.getElementById("esterilizado").innerHTML =`<div id="opcionesRadio" class=" mx-2">
                                                            <input type="radio" value="si" id="siEsterilizado" name="esterilizado" checked>
                                                            <label for="nombreMascota" class="form-label">Sí</label>
                                                            <input type="radio" value="no" id="noEsterilizado" name="esterilizado">
                                                            <label for="nombreMascota" class="form-label">No</label>
                                                        </div>`;
}
else{
    document.getElementById("esterilizado").innerHTML =`<div id="opcionesRadio" class=" mx-2">
                                                            <input type="radio" value="si" id="siEsterilizado" name="esterilizado">
                                                            <label for="nombreMascota" class="form-label">Sí</label>
                                                            <input type="radio" value="no" id="noEsterilizado" name="esterilizado" checked>
                                                            <label for="nombreMascota" class="form-label">No</label>
                                                        </div>`;
}

document.getElementById("descripcion").innerHTML = '<textarea class="form-control  input" name="descripcionMascota" id="descripcionMascota" cols="30" rows="10" placeholder="Escribe aquí">'+propuesta.descripcion+'</textarea>'

document.querySelector('form')
    .addEventListener('submit', e => {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        hoy = new Date;
        const propuesta = {
            nombre: data.nombreMascota,
            edad: data.edadMascota,
            sexo: data.sexoMascota,
            departamento: data.departamentoMascota,
            ciudad: data.ciudadMascota,
            esterilizado: data.esterilizado,
            foto: data.fotoMascota,
            descripcion: data.descripcionMascota,
            fecha: hoy.toLocaleDateString(),
        }
        console.log(propuesta)
    })