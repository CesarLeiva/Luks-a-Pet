const pqrs1 = {
    nombre: 'César',
    mensaje: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda labore provident consequuntur corporis ipsam obcaecati maiores, tempora expedita, culpa, corrupti commodi qui dicta. Architecto modi ipsa amet, quibusdam iure quo.'
}

const pqrs2 = {
    nombre: 'Luis',
    mensaje: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda labore provident consequuntur corporis ipsam obcaecati maiores, tempora expedita, culpa, corrupti commodi qui dicta. Architecto modi ipsa amet, quibusdam iure quo.'
}

const pqrs3 = {
    nombre: 'Daniel',
    mensaje: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda labore provident consequuntur corporis ipsam obcaecati maiores, tempora expedita, culpa, corrupti commodi qui dicta. Architecto modi ipsa amet, quibusdam iure quo.'
}


const pqrs = [pqrs1, pqrs2, pqrs3];

for(i=0; i<=pqrs.length; i++){
    document.getElementById("card").innerHTML +=
        `<div class="containt">
            <div class="pa mx-3">
                <section>
                    <h1 class="m-4">`+pqrs[i].nombre+`:</h1>
                    <h4 class="m-4">`+pqrs[i].mensaje+`</h4>
                </section><br>
            </div>
        </div>`
        console.log(pqrs[i])
}