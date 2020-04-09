import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    
    container: {
        backgroundColor: '#292924',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24, 
        paddingTop: Constants.statusBarHeight + 20,
    },

    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },

    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },

    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
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