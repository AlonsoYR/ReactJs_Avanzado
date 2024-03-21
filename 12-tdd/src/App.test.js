//Vamos a construir una aplicacion de seleccion y busqieda de Emisoras de Radio en Streaming

//0- La aplicacion debe renderizar correctamente
describe('0- La aplicacion debe renderizar correctamente', () => {
    test('0- La aplicacion debe renderizar correctamente', () => {
        const r = render(<App/>)
        expect(r).toBeDefined();
    })
    
})


//1- El nombre de la aplicacion debe mostrarse en algun lugar => "OpenRadioCamp"

//2- Debemos poder buscar radios por nombre
//2a- La aplicacion debe tener un campo input con el placeholder => "Escribe el nombre de la radio"
//2b- La aplicacion debe tener un boton de busqueda => Texto "Buscar"
//2c- Cuando hacemos clic en el boton uscar, se debe ejeutar la funcion de busqueda una sola vez

//3- Debe existir un listado de emisoras 
//3a- El listado debe iniciar vacio
//3b- Cuando se hace una busqueda valida, el listado debe mostrar al menos un resultado
//3c- Cuando hacemos una busqueda invalida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisoras para esta busqueda"

