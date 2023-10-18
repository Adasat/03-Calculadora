import { Image, ImageBackground, Text, View } from 'react-native'
import { styles } from '../theme/app.theme'
import { ButtonCalc } from '../components/ButtonCalc'
import { useCalculator } from '../hooks/useCalculator';


export const CalculadoraScreens = () => {

  const {  
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
  } = useCalculator()

  return (
    <View style={styles.calculadoraContainer}>
      

     
      <Image source={require('../../assets/udlaspalmas.png')} style={styles.logo}/>
      {lastNum !== '0' && (
        <Text style={styles.smallResult}>{lastNum}</Text>
      )}
      <Text 
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
        >{num}
      </Text>
      


      {/* 1º Fila */}

      <View style={styles.row}>
        <ButtonCalc text='C' color='#ffff' action={clean} />
        <ButtonCalc text='+/-' color='#ffff' action={positiveNegative} />
        <ButtonCalc text='del'color='#ffff' action={btnDelete} />
        <ButtonCalc text='/' color='#004b9d' action={btnDividir} />
      </View>

      {/* 2º Fila */}

      <View style={styles.row}>
        <ButtonCalc text='7' action={createNum}/>
        <ButtonCalc text='8' action={createNum}/>
        <ButtonCalc text='9' action={createNum}/>
        <ButtonCalc text='X' color='#004b9d' action={btnMultiplicar}  />
      </View>

      {/* 3º Fila */}

      <View style={styles.row}>
        <ButtonCalc text='4' action={createNum}/>
        <ButtonCalc text='5' action={createNum}/>
        <ButtonCalc text='6' action={createNum}/>
        <ButtonCalc text='-' color='#004b9d' action={btnRestar} />
      </View>

      {/* 4º Fila */}

      <View style={styles.row}>
        <ButtonCalc text='1' action={createNum}/>
        <ButtonCalc text='2' action={createNum}/>
        <ButtonCalc text='3'action={createNum}/>
        <ButtonCalc text='+' color='#004b9d' action={btnSumar} />
      </View>

      {/* 4º Fila */}

      <View style={styles.row}>
        <ButtonCalc text='0' action={createNum} ancho/>
        <ButtonCalc text='.' action={createNum} />
        <ButtonCalc text='=' color='#004b9d' action={calculate} />
      </View>
    </View>
  )
}
