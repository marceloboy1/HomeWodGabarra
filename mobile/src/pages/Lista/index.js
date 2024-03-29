import React, {useState, useEffect} from 'react';
import { View, Image, Text, FlatList } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import logoImg from '../../assets/logo.png'
import * as VideoThumbnails from 'expo-video-thumbnails';
import { Video } from 'expo-av';


import api from '../../Services/api'

import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Lista(){
    const navigation = useNavigation()
    const route = useRoute()
    const [aulas, setaulas] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const { categoria } = route.params

    console.log("CATEGORIA")
    console.log(categoria)
    console.log("FIM")
    
    
    
    function navigateBack(){
        navigation.goBack()
    }
    function navigateToDetail(aula){
        navigation.navigate('Detail', { aula } );
    }
    
    async function loadaulas(){

        if (loading) {
            return;
        }

        if (total > 0 && aulas.length == total){
            return;
        }

        setLoading(true);

        const response = await api.get('aulas', {
            params: {page, categoria}
        });

        setaulas([... aulas, ... response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
        
    }

    useEffect(() => {
        loadaulas();
    }, []);


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity  onPress={navigateBack}>
                    <Feather name="arrow-left" size={60} color="#ffcc00" />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Escolha um dos vídeos</Text>
            <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} vídeos</Text>.
            </Text>
            <FlatList
                data={aulas}
                style={styles.aulaList}
                keyExtractor={aula => String(aula.id)}
                
                onEndReached={loadaulas}
                onEndReachedThreshold={0.2}
                renderItem={({ item: aula }) => (

                    <View style={styles.aula}>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navigateToDetail(aula)}
                        >
                            <Text style={styles.aulaProperty}>{aula.title}</Text>
                      
                            <Text style={styles.description}>{aula.description}</Text>
                      
                            {/* <Video
                                source={{ uri: `http://192.168.0.106:3333/video/${aula.title}`}}
                                rate={1.0}
                                volume={1.0}
                                muted={false}
                                style={{ width: 300, height: 300 }}
                            /> */}

                        </TouchableOpacity>
                    </View>
                )}
            />

         </View>
    );
}