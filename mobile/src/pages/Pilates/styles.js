import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
//import Pilates from '../Pilates';

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


    back: {
        fontSize: 60,
        color: "#ffcc00",
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#ffcc00',
        fontWeight: 'bold',
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#b9cdff',
    },

    action: {
        backgroundColor: "#ffcc00",
        marginTop: 30,
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

});