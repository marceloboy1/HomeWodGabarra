import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Details from '../Detail';

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
    headerText: {
        fontSize: 15,
        color: '#ffcc00',
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    
    title:{
        fontSize: 30,
        marginBottom: 0,
        marginTop: 15,
        color: '#ffcc00',
        fontWeight: 'bold',
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    aulaList:{
        marginTop: 15,
    },

    aula:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    aulaProperty:{
        fontSize: 25,
        color: '#41414d',
        fontWeight: 'bold',
    },

    aulaValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },
    
    detailsButton:{
        borderRadius: 8,
    },

    detailsButtonText:{
        color: '#e02041',
        fontWeight: 'bold',
        borderRadius: 8,
        fontSize: 15,
    },
    
    thumb: {
        width: 265,
        height: 300,
    }


});