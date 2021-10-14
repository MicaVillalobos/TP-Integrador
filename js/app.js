let seccion = document.getElementById("main");
// seccion.style.visibility="hidden"
const comprarTickets = () => {
    seccion.innerHTML = `
    <div class="container tickets">
    <div class="row">
        <div class="card-group card-ticket">
                <div class="card-body border border-primary border border-2">
                    <h5 class="card-title text-center">Estudiante</h5>
                    <p class="card-text text-center">Tienen un decuento</p>
                    <p class="card-title text-center fw-bold font-weight-bold">80%</p>
                    <p class="card-text text-center"><small class="text-muted">* presentar documentación</small></p>
            </div>
        </div>
        <div class="card-group card-ticket">
            <div class="card-body border border-success border border-2">
                <h5 class="card-title text-center">Trainee</h5>
                <p class="card-text text-center">Tienen un decuento</p>
                <p class="card-title text-center fw-bold font-weight-bold">50%</p>
                <p class="card-text text-center"><small class="text-muted">* presentar documentación</small></p>
            </div>
        </div>
        <div class="card-group card-ticket">
            <div class="card-body border border-warning border border-2">
                <h5 class="card-title text-center">Junior</h5>
                <p class="card-text text-center">Tienen un decuento</p>
                <p class="card-title text-center fw-bold font-weight-bold">15%</p>
                <p class="card-text text-center"><small class="text-muted">* presentar documentación</small></p>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col text-uppercase text-center">
        <p class="conoce-oradores text-center mb-0">VENTA</p>
        <h1 class="text-center fs-2">Valor de ticket $200</h1>
    </div>
</div>
<div class="container">
    <div class="row d-flex justify-content-center">
        <form class="col-md-7" style="margin-top: 10px !important; margin-bottom: 20px !important;">
            <div class="form-row">
                <div class="d-flex">
                    <div class="col mr-10">
                            <input type="text" class="form-control" id="nombre" placeholder="Nombre" aria-label="Nombre">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" id="apellido" placeholder="Apellido" aria-label="Apellido">
                        </div>
                </div>
                <div class="form-group col-12 col-md-12 mt-3">
                    <input type="email" class="form-control" id="correo" placeholder="Correo">
                </div>
                <div class="d-flex mt-3 w-985">
                    <div class="form-group col-12 col-md-6 mr-10">
                        <label for="">Cantidad</label>
                        <input id="cantidadEntrada" type="text" class="form-control" placeholder="Cantidad">
                    </div>
                    <div class="form-group col-12 col-md-6">
                        <label for="">Categoria</label>
                        <select class="form-select" id="categoria">
                            <option value="estudiante" selected>Estudiante</option>
                            <option value="trainee">Trainee</option>
                            <option value="junior">Junior</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-row mt-3">
                <div class="form-group col-md-12">
                    <div id="totalCompra" class="alert alert-primary" role="alert">
                        Total a pagar: $
                    </div>
                </div>
            </div>
            <div class="form-row d-flex">
                <div class="form-group col mr-10">
                    <button type="reset" id="borrarContenido" class="btn btn-tickets btn-block">Borrar</button>
                </div>
                <div class="form-group col">
                    <button type="button" id="botonCalcular" class="btn btn-tickets btn-block">Resumen</button>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
    `;
    document.querySelector("#botonCalcular").addEventListener('click', ()=>{
        let inputs = document.querySelectorAll("input");
        let descuento = document.querySelector("#categoria").value;
        let comprador={
            nombre:inputs[0].value,
            apellido:inputs[1].value,
            correo:inputs[2].value,
            cantidad:inputs[3].value,
        };
        calcularValor(descuento,comprador.cantidad);
    });

    document.querySelector("#borrarContenido").addEventListener('click', ()=>{
        let totalCompra = document.querySelector("#totalCompra");
        totalCompra.innerHTML="Total a pagar: $ ";

    });

    const calcularValor=(descuento, cantidadEntradas)=>{
        let totalCompra = document.querySelector("#totalCompra");
        totalCompra.innerHTML="Total a pagar: $ ";
        let resultado = 0;
        resultado = ((cantidadEntradas*200) - (cantidadEntradas * 200)*calcularPorcentaje(descuento));
        totalCompra.innerHTML+=resultado;
    }


    const calcularPorcentaje=(descuento)=>{
        if(descuento == "estudiante"){
            return 0.8;
        }
        if(descuento == "trainee"){
            return 0.5;
        }
        if(descuento == "junior"){
             return 0.15;
        }
    }

        
};