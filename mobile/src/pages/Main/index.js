import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
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

                <TouchableOpacity style={styles.action} onPress={() => navigation.push('Pilates')}>
                    <Text style={styles.actionText}>Pilates</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={() => navigation.push('Crossfit')}>
                    <Text style={styles.actionText}>Crossfit</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.action} onPress={() => navigation.push('Idoso')}>
                    <Text style={styles.actionText}>Idoso</Text>
                </TouchableOpacity>

            </View>
        </View>
        
    );
}
