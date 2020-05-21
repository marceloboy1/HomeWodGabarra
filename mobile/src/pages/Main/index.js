import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native'
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import styles from './styles'

import logoImg from '../../assets/logo.png'


export default function Main(){
    const navigation = useNavigation();
    const route = useRoute()
   
    function navigateBack(){
        navigation.goBack()
    }
   
    return(
        
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />

                
            </View>
            <Text style={styles.title}> Olá, seja bem vindo.</Text>
            <Text style={styles.description}> Escolha o seu treino.</Text>

            <View style={styles.actions}>

                <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Lista', {categoria: '0'})}>
                    <Text style={styles.actionText}>Pilates</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Lista', {categoria: '1'})}>
                    <Text style={styles.actionText}>Crossfit</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Lista', {categoria: '2'})}>
                    <Text style={styles.actionText}>Idoso</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Upload')}>
                    <Text style={styles.actionText}>Upload</Text>
                </TouchableOpacity>

            </View>
        </View>
        
    );
}
