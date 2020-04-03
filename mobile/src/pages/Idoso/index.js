import React from 'react';
import { View, Image, Text } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import logoImg from '../../assets/logo.png'

import styles from '../Main/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Idoso(){

    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather style={styles.back} name="arrow-left"/>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Idoso</Text>
            <Text style={styles.description}>Escolha a intensidade do seu treino</Text>
        
            <View style={styles.actions}>

                <TouchableOpacity style={styles.action} onPress={() => navigation.push('Lista')}>
                    <Text style={styles.actionText}>Iniciante</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={() => navigation.push('Lista')}>
                    <Text style={styles.actionText}>Intemediário</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.action} onPress={() => navigation.push('Lista')}>
                    <Text style={styles.actionText}>Avançado</Text>
                </TouchableOpacity>

            </View>


         </View>
    );
}