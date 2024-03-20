import { sumar, restar, multiplicar, dividir, devuelveEmail, devuelveObjeto, Rectangulo, devuelveArrayNum, devuelveArrayStr, devuelveArrayObj,
devuelveTrue, devuelveFalse, devuelveNull, devuelveUndefined } from './index'

// Aqui vamos a crear nuestros casos de prueba
// describe, test(it)
// Assertions "expect"

describe('Assertions basicos en los numeros', () => {
    test('La suma funciona', () => {
        const resultado = sumar(2, 3);
        expect(resultado).toBe(5);
        expect(resultado).toEqual(5);
    })
    test('La suma no resta', () => {
        const resultado = sumar(2, 3);
        expect(resultado).not.toBe(-1);
        expect(resultado).not.toEqual(-1);
    })
    test('La resta funciona', () => {
        const resultado = restar(2, 3);
        expect(resultado).toBe(-1);
        expect(resultado).toEqual(-1);
    })
    test('La multiplicacion funciona', () => {
        const resultado = multiplicar(2, 5);
        expect(resultado).toBe(10);
        expect(resultado).toEqual(10);
    })
    test('La division funciona', () => {
        const resultado = dividir(6, 2);
        expect(resultado).toBe(3);
        expect(resultado).toEqual(3);
    })
    test('Probamos el >', () => {
        const resultado = dividir(6, 2);
        expect(resultado).toBeGreaterThan(0);
        expect(resultado).toBeGreaterThanOrEqual(3);
    })
    test('Probamos el <', () => {
        const resultado = multiplicar(5, 8);
        expect(resultado).toBeLessThan(100);
        expect(resultado).toBeLessThanOrEqual(40);
    })
})

describe('Assertions basicos con boleanos', () => {
    test('Probar que algo es true', () => { 
        const r = devuelveTrue();
        expect(r).toBeTruthy();
     })
    test('Probar que algo es false', () => { 
        const r = devuelveFalse();
        expect(r).toBeFalsy();
     })
    test('Probar que algo es null', () => { 
        const r = devuelveNull();
        expect(r).toBeNull();
     })
    test('Probar que algo es defined', () => { 
        const r = 5;
        expect(r).toBeDefined();
     })
    test('Probar que algo es undefined', () => { 
        const r = devuelveUndefined();
        expect(r).toBeUndefined();
     })
})


describe('Assertions basicos en los strings', () => {
    test('El cambo debe tener un email', () => {
        const email = devuelveEmail();
        expect(email).toMatch(/[a-zA-Z].[a-zA-Z]\.com/);
    })
})

describe('Assertions basicos en objetos', () => {
    test('Dos objetos son iguales', () => {
        const objA = devuelveObjeto();
        const objB = devuelveObjeto();
        expect(objA).toEqual(objB);
    })
    test('El obeto DEBE tener una propiedad llamada "ancho"', () => {
      const rectangulo = devuelveObjeto();
      expect(rectangulo).toHaveProperty('ancho');
    })
    test('La propiedad "ancho" del rectangulo siempre debe ser 10', () => {
        const rectangulo = devuelveObjeto();
        expect(rectangulo).toHaveProperty('ancho',10);
      })
      test('El objeto rectA debe ser un Clase Rectangulo', () => {
        //const rectA = {ancho: 10, alto: 11};
        const rectA = new Rectangulo(10, 11);
        expect(rectA).toBeInstanceOf(Rectangulo);
      })
      
})

describe('Assertions basicos en arrays', () => {
    test('Array contiene leche', () => {
      const ar = devuelveArrayStr();
      expect(ar).toContain('leche');
    })
    test('Array contiene 5', () => {
        const ar = devuelveArrayNum();
        expect(ar).toContain(5);
      })
    test('Array contiene id: 5', () => {
        const ar = devuelveArrayObj();
        expect(ar).toContainEqual({id: 5});
      })
})

describe('Assertions con funciones mock', () => {
  test('Primera prueba con mock', () => {
    const mockFn = jest.fn(() => 5);
    const res = mockFn();
    expect(mockFn).toHaveBeenCalled();
  })

  test('Que la funcion haya sido llamado n veces', () => {
    const mockFn = jest.fn(() => 5);
    const res = mockFn();
    const res2 = mockFn();
    const res3 = mockFn();
    expect(mockFn).toHaveBeenCalledTimes(3);
  })
  test('Que la funcion haya sido llamado con un parametro', () => {
    const mockFn = jest.fn(() => 5);
    const res = mockFn('prueba');
    expect(mockFn).toHaveBeenCalledWith('prueba');
  })
})
