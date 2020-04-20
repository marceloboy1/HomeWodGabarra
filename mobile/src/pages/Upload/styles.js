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

    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },

    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        borderRadius: 8,
        
    },

    group: {
        backgroundColor: "#ffcc00",
        padding: 10,
        borderRadius: 3,
        height: 50,
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    groupText:{
        color: '#292924',
        fontSize: 15,
        fontWeight: 'bold',

    },

    action: {
        backgroundColor: "#ffcc00",
        marginTop: 10,
        padding: 10,
        borderRadius: 8,
        height: 60,
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

     form: {
        marginTop: 10,
        backgroundColor: "#fff",
        height: 50,
        width: "100%",
        borderRadius: 8
     },

     formField: {
        marginTop: 10,
        backgroundColor: "#fff",
        height: 150,
        width: "100%",
        borderRadius: 8
     },

     inputText:{
        color: '#292924',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },

    buttonContainer: {
        backgroundColor: '#292924',
        flex: 1,
        padding: 10,
    },
});