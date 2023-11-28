import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks";

describe('Pruebas en el useCounter', () => { 

    test('Debe de retornar los valores por defecto', () => { 

        const { result } = renderHook( ()=> useCounter() );
        const { counter, decrement,increment,reset } = result.current;

        expect( counter).toBe(10);
        expect(decrement).toEqual(expect.any (Function));
        expect(increment).toEqual(expect.any (Function));
        expect(reset).toEqual(expect.any (Function));

     })

     test('Debe de generar el conter con el valor de 100', () => { 

        const { result } = renderHook( ()=> useCounter(100) );
        const { counter, decrement,increment,reset } = result.current;

        expect(result.current.counter).toBe(100);

      })


      test('Debe de incrementar el contador', () => { 

        const { result } = renderHook( ()=> useCounter(100) );
        const { counter, increment } = result.current;

        act( ()=> {
            increment();
        })

        expect(result.current.counter).toBe(101);

      })

      test('Debe de decrementar el contador', () => { 

        const { result } = renderHook( ()=> useCounter(100) );
        const { counter, decrement } = result.current;

        act( ()=> {
            decrement();
        })

        expect(result.current.counter).toBe(99);

      })


      
      test('Debe de reiniciar el contador', () => { 

        const { result } = renderHook( ()=> useCounter(100) );
        const { counter, increment,reset } = result.current;

        act( ()=> {
            increment(2)
            reset()
        })

        expect(result.current.counter).toBe(100);

      })
 })