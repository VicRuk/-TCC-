import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useRef } from "react";
import { styles } from './style';
import { ScrollView, Text, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, StatusBar, Dimensions, Alert } from 'react-native';
import { Video } from 'expo-av';

export default function Usuario() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', }}>
      <Video
        source={require('../../assets/sus2.mp4')}
        style={styles.videolegal2}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
      />
    </View>
  )
}