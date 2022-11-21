fetch("https://backend-luks-a-pet-production.up.railway.app/pqrs",
    {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    })
    .then(function (res) { return res.json(); })
    .then(function (data) {
        console.log(data);
        if (data.message) {

            document.getElementById("card").innerHTML +=
                `<h4>No hay PQRS</h4>`
            alert(data.message)

        } else {
            const pqrs = data;

            for (i = 0; i <= pqrs.length; i++) {
                document.getElementById("card").innerHTML +=
                    `<div class="containt">
                        <div class="pa mx-3">
                            <section>
                                <h1 class="m-4">`+ pqrs[i].Nombres + `:</h1>
                                <h4 class="m-4">`+ pqrs[i].Mensaje + `</h4>
                            </section><br>
                        </div>
                    </div>`
                console.log(pqrs[i])
            }

        }
    }
    );



