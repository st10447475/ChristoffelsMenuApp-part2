
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { MenuItem } from '../types'; 
import { AddMenuItemScreenProps } from '../types'; 

export default function AddMenuItemScreen({ route }: AddMenuItemScreenProps) {
  const navigation = useNavigation();
  const { setMenuItems } = route.params;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('Starters');

  const addMenuItem = () => {
    const newItem: MenuItem = {
      id: (Math.random() * 1000).toString(),
      name,
      description,
      price: parseFloat(price),
      course,
    };

    setMenuItems((prevItems) => [...prevItems, newItem]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Menu Item</Text>
      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <Button title="Add Item" onPress={addMenuItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 24, marginBottom: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, padding: 10 },
  picker: { height: 50, width: '100%', marginBottom: 12 },
});
