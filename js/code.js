const API_KEY = 'badba1f52e7b4b7f7efd43fe';

let monedaOrigen = document.getElementById('moneda-origen');
let monedaDestino = document.getElementById('moneda-destino');
let cambio = document.getElementById('cambio');
let tipoCambio = document.getElementById('tipo-cambio');




window.addEventListener('load',()=>{

    const obtenerCambio = ()=>{

        let monedaOri = monedaOrigen.value
        let monedaDes = monedaDestino.value
        let monto = document.getElementById('monto').value;
        const apiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${monedaOri}`;

        fetch(apiUrl)
        .then(response => {return response.json()})
        .then(data => {
            
            const tasaDeCambio = data.conversion_rates[monedaDes];
            tipoCambio.textContent = `${monedaOri} / ${monedaDes} = ${tasaDeCambio} $${monedaDes} `;
            const montoTotal = monto ? monto * tasaDeCambio : null;
            cambio.textContent= `$${montoTotal.toFixed(3)} ${monedaDes}`;
            
        })
        .catch(e =>{
            console.log(e);
        })
    }
    obtenerCambio();
    monedaOrigen.addEventListener('change', obtenerCambio);
    monedaDestino.addEventListener('change', obtenerCambio); 
    document.getElementById('taza').addEventListener('click', obtenerCambio);

})