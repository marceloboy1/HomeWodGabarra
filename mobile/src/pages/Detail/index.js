import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import { Video } from 'expo-av';
import styles from './styles'

import logoImg from '../../assets/logo.png'


export default function Details(){
    const navigation = useNavigation();
    const route = useRoute()
    const aula = route.params.aula;
    
    function navigateBack(){
        navigation.goBack()
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=55${16981156669}`);
    }

    const title = (unescape(aula.title)+'.mp4')
    
    console.log("CURDEO")
    
    return(
        
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity  onPress={navigateBack}>
                    <Feather name="arrow-left" size={60} color="#ffcc00" />
                </TouchableOpacity>
            </View>

            <View style={styles.aula}>

            <Video
                source={{ uri: 'http://192.168.0.106:3333/video'}}
                posterSource={{ uri: '../../assets/splash.png'}}
                rate={1.0}
                volume={1.0}
                muted={false}
                useNativeControls={true}
                resizeMode="cover"
                usePoster = {true}
                style={{ width: 265, height: 300 }}
                />
                
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Entre em contato</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    );
}
