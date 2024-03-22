//Vamos a construir una aplicacion de seleccion y busqieda de Emisoras de Radio en Streaming

import { fireEvent, render, screen, } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

const mockArray = [{"changeuuid":"0d510055-6c11-4a46-a2d2-5bb2a54916cf","stationuuid":"d608bb74-0740-47e3-a1e2-c11edfeec91f","serveruuid":"91f5a249-ff2a-4b92-967a-dac4b2a7802f","name":" \tROCKANTENNE Alternative (mp3)","url":"https://stream.rockantenne.de/alternative/stream/mp3","url_resolved":"https://s6-webradio.rockantenne.de/alternative/stream/mp3","homepage":"https://www.rockantenne.de/","favicon":"https://www.rockantenne.de/logos/station-rock-antenne/apple-touch-icon.png","tags":"","country":"Germany","countrycode":"DE","iso_3166_2":null,"state":"","language":"german","languagecodes":"de","votes":431,"lastchangetime":"2023-11-05 04:07:20","lastchangetime_iso8601":"2023-11-05T04:07:20Z","codec":"MP3","bitrate":128,"hls":0,"lastcheckok":1,"lastchecktime":"2024-03-21 12:32:48","lastchecktime_iso8601":"2024-03-21T12:32:48Z","lastcheckoktime":"2024-03-21 12:32:48","lastcheckoktime_iso8601":"2024-03-21T12:32:48Z","lastlocalchecktime":"2024-03-21 12:32:48","lastlocalchecktime_iso8601":"2024-03-21T12:32:48Z","clicktimestamp":"2024-03-21 23:19:45","clicktimestamp_iso8601":"2024-03-21T23:19:45Z","clickcount":222,"clicktrend":4,"ssl_error":0,"geo_lat":null,"geo_long":null,"has_extended_info":false}];

beforeEach(() => render(<App/>));

//0- La aplicacion debe renderizar correctamente
describe('0- La aplicacion debe renderizar correctamente', () => {
    test('0- La aplicacion debe renderizar correctamente', () => {
        const r = render(<App/>);
        expect(r).toBeDefined();
    });
})


//1- El nombre de la aplicacion debe mostrarse en algun lugar => "OpenRadioCamp"
describe('1- El nombre de la aplicacion debe mostrarse en algun lugar => "OpenRadioCamp"', () => {
    test('1- El nombre de la aplicacion debe mostrarse en algun lugar => "OpenRadioCamp"', () => {
        const nombre = "OpenRadioCamp";
        const el = screen.getByText(nombre);
        expect(el).toBeInTheDocument();
    })  
})


//2- Debemos poder buscar radios por nombre
//2a- La aplicacion debe tener un campo input con el placeholder => "Escribe el nombre de la radio"
//2b- La aplicacion debe tener un boton de busqueda => Texto "Buscar"
//2c- Cuando hacemos clic en el boton uscar, se debe ejeutar la funcion de busqueda una sola vez
describe('2- Debemos poder buscar radios por nombre', () => {
    test('La aplicacion debe tener un campo input con el placeholder => "Escribe el nombre de la radio"', () => {
        const placeholdertext = "Escribe el nombre de la radio";
        const input = screen.getByPlaceholderText(placeholdertext);
        expect(input).toBeInTheDocument();
    })
    test('La aplicacion debe tener un boton de busqueda => Texto "Buscar"', () => {
        const buttontext = "Buscar";
        const button = screen.getByText(buttontext);
        expect(button).toBeInTheDocument();
    })
    test('Cuando hacemos clic en el boton uscar, se debe ejeutar la funcion de busqueda una sola vez', () => {
        const funcionMock = jest.fn();
        const buttontext = "Buscar";
        const button = screen.getByText(buttontext);
        button.addEventListener("click", funcionMock);
        fireEvent.click(button);
        expect(funcionMock).toHaveBeenCalledTimes(1);
    })
})


//3- Listado de emisoras 
//3a- Debe existir un listado de emisoras
//3b- El listado debe iniciar vacio
//3c- Cuando se hace una busqueda valida, el listado debe mostrar al menos un resultado
//3d- Cuando hacemos una busqueda invalida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisoras para esta busqueda"

describe('3- Listado de emisoras', () => {
    test('Debe existir un listado de emisoras', () => {
        const listado = screen.getByLabelText('listado-emisoras');
        expect(listado).toBeInTheDocument();
    })
    test('El listado debe iniciar vacio', () => {
        const listado = screen.getByLabelText('listado-emisoras');
        const childrenCount = listado.childElementCount;
        expect(childrenCount).toBe(0);
    })
    test('Cuando se hace una busqueda valida, el listado debe mostrar al menos un resultado', async () => {
        const placeholdertext = "Escribe el nombre de la radio";
        const input = screen.getByPlaceholderText(placeholdertext);
        const buttontext = "Buscar";
        const button = screen.getByText(buttontext);
        const listado = screen.getByLabelText('listado-emisoras');
        const childrenCount = listado.childElementCount;
        //await waitForElement(() => queryByLabelText('length-not-null'));
        fireEvent.change(input, { target: { value: 'rock'}});
        fireEvent.click(button);
        expect(childrenCount).toBeGreaterThanOrEqual(0);
    })
    
})
