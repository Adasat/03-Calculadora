import { useRef, useState } from "react"

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculator = () => {
    const [lastNum, setLastNum] = useState('0')
    const [num, setNum] = useState('0')
    const lastOperation = useRef<Operadores>()
  
    const clean = () => {
      setNum('0')
      setLastNum('0')
    }
  
    const createNum = (numText: string) => {
      //No aceptar doble punto
      if(num.includes('.') && numText === '.') return
      if(num.startsWith('0') || num.startsWith('-0')){
        //Punto decimal
        if(numText === '.'){
          setNum(num + numText)
          
          //Evaluar si es otro cero y hay un punto
        }else if (numText === '0' && num.includes('.')){
          setNum(num + numText)
  
          //Evaluar si es diferente de 0 y no tiene un punto
        }else if(numText !== '0' && !num.includes('.')){
          setNum(numText)
  
          // Evitar el 0000.0
        }else if(numText ==='0' && !num.includes('.')){
          setNum(num)
  
        }else{
          setNum(num + numText)
        }
      }else {
        setNum(num + numText)
      }
  
    }
  
    const positiveNegative = () => {
      if (num.includes('-')){
        setNum(num.replace('-', ''))
      }else{
        setNum('-' + num)
      }
    }
  
    const btnDelete = () => {
      if(num.includes('-') && num.length === 2 || num.length === 1){
        setNum('0')
      }else{
        setNum(num.slice(0, -1))
      }
    }
  
    const changeNum = () => {
      if(num.endsWith('.')){
        setLastNum(num.slice(0,-1))
      }else{
        setLastNum(num)
      }
      setNum('0')
  
    }
  
    const btnDividir = () => {
      changeNum()
      lastOperation.current = Operadores.dividir
    }
  
    const btnMultiplicar = () => {
      changeNum()
      lastOperation.current = Operadores.multiplicar
    }
  
    const btnRestar = () => {
      changeNum()
      lastOperation.current = Operadores.restar
    }
    
    const btnSumar = () => {
      changeNum()
      lastOperation.current = Operadores.sumar
    }
  
    const calculate = () => {
  
      const num1 = Number(num)
      const num2 = Number(lastNum)
      
  
        switch(lastOperation.current){
            case Operadores.sumar:
            setNum(`${num1 + num2}`)
            break
            case Operadores.restar:
            setNum(`${num2 - num1}`)
            break
            case Operadores.dividir:
                if (num1 >= 0) {
                    setNum(`${num2 / num1}`)
                }else{
                    setNum('0')
                }
                break;
            case Operadores.multiplicar:
            setNum(`${num1 * num2}`)
            break
        }
        setLastNum('0')
     
    }

    return {
    lastNum,
    num,
    clean,
    positiveNegative,
    btnDelete,
    btnDividir,
    createNum,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calculate,
    }
  
}

