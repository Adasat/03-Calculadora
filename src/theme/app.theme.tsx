import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent:'center',
    opacity: 0.9
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    
  },
  result: {
    color: 'black',
    fontSize: 60,
    fontWeight: '700',
    textAlign: 'right',
    marginBottom:10
  },
  smallResult: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFE400'
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    padding: 10,
    color: 'white',
  },
  logo:{
    width: 200,
    resizeMode: 'contain',
    height: 200,
    zIndex: 4,
    top: 10,
    left: -10,
    position: 'absolute'
    
  }
  

});
