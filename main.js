const select = document.getElementById("select");
const inputElement = document.getElementById('input');
const btnDesglosar = document.getElementById("btnDesglosar");
const lista = document.getElementById("lista");

function desglosarCantidades() {
    const inputValue = parseInt(inputElement.value, 10); // Usar parseInt para obtener un número entero
    const selectValue = select.value;

    if (selectValue === '2000' && inputValue >= 2000) {
        let residuo = inputValue;
        const denominaciones = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);
                denominaciones[0]
                const parrafo = document.createElement('p');
                parrafo.classList.add("fs-3","colorResultado")
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }
    //********************************************************************************************************************************************************************/
    if (selectValue === '1000' && inputValue >= 1000) {
        let residuo = inputValue;
        const denominaciones = [1000, 500, 200, 100, 50, 25, 10, 5, 1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);

                const parrafo = document.createElement('p');
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }
    //******************************************************************************************************************************************************************* */
    if (selectValue === '500' && inputValue >= 500) {
        let residuo = inputValue;
        const denominaciones = [500, 200, 100, 50, 25, 10, 5, 1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);

                const parrafo = document.createElement('p');
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }
    //********************************************************************************************************************************************************************** */
    if (selectValue === '200' && inputValue >= 200) {
        let residuo = inputValue;
        const denominaciones = [200, 100, 50, 25, 10, 5, 1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);

                const parrafo = document.createElement('p');
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }
    //************************************************************************************************************************************************************** */
    if (selectValue === '100' && inputValue >= 100) {
        let residuo = inputValue;
        const denominaciones = [100, 50, 25, 10, 5, 1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);

                const parrafo = document.createElement('p');
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }
    //******************************************************************************************************************************************************************** */
    if (selectValue === '50' && inputValue >= 50) {
        let residuo = inputValue;
        const denominaciones = [50, 25, 10, 5, 1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);

                const parrafo = document.createElement('p');
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }
    //**************************************************************************************************************************************************************** */
    if (selectValue === '25' && inputValue >= 25) {
        let residuo = inputValue;
        const denominaciones = [25, 10, 5, 1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);

                const parrafo = document.createElement('p');
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }
    //************************************************************************************************************************************************************************* */
    if (selectValue === '10' && inputValue >= 10) {
        let residuo = inputValue;
        const denominaciones = [10, 5, 1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);

                const parrafo = document.createElement('p');
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }
    //****************************************************************************************************************************************************************** */
    if (selectValue === '5' && inputValue >= 5) {
        let residuo = inputValue;
        const denominaciones = [5, 1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);

                const parrafo = document.createElement('p');
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }
    //****************************************************************************************************************************************************************** */
    if (selectValue === '1' && inputValue >= 1) {
        let residuo = inputValue;
        const denominaciones = [1]; // Agrega todas las denominaciones que desees manejar

        for (const denominacion of denominaciones) {
            if (residuo >= denominacion) {
                const cantidad = Math.floor(residuo / denominacion);

                const parrafo = document.createElement('p');
                parrafo.textContent = ` ${cantidad} x ${denominacion}`;
                lista.appendChild(parrafo);
                residuo %= denominacion;
            }
        }
    }

}


btnDesglosar.addEventListener('click', () => {
    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";
    desglosarCantidades();
});
