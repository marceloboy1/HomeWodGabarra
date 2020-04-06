import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    
    container: {
        backgroundColor: '#292924',
        flex: 1,
        paddingHorizontal: 24, 
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 15,
    },


    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        
    },

    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        color: "#13131a",
        lineHeight: 30,
    },

    action: {
        backgroundColor: "#ffcc00",
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        height: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
  
      actionText:{
          color: '#292924',
          fontSize: 25,
          fontWeight: 'bold',
      },

    back: {
        fontSize: 60,
        color: "#ffcc00",
     },
});