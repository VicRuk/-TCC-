import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useRef } from "react";
import { styles } from './style';
import { ScrollView, Text, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, StatusBar, Dimensions, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Header from '../../components/Header';
import api from '../../services/api';
import Grid from '../../components/Grids/eletricidade';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from 'react-native-modal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import LottieView from 'lottie-react-native';


export default function Home() {
  const { width, height } = Dimensions.get('window');
  const navigation= useNavigation();
  async function incendio(){      
    navigation.reset({
      index: 0,
      routes: [{ name: 'Incendio' }]
    });
  }
  const animation = useRef(null);
  useEffect(() => {
    if (animation.current) {
      animation.current.play(0, 32, { loop: false, autoPlay: true });
      setTimeout(() => {
        if (animation.current) {
          animation.current.play(33, 102, { loop: true });
        }
      }, 1100);
    }
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <TouchableOpacity  onPress={incendio} style={styles.botao}>
        <LottieView
        source={require('../../assets/gift.json')}
        autoPlay
        loop={true}
        ref={animation}
        style={styles.videolegal}
        />
      </TouchableOpacity>
    </View>
  )
}