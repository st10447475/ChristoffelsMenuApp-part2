
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation'; 


interface MenuItem {
  id: string;
  name: string;
  price: number;
  course: string;
  description: string;
}

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();  
  
  
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', name: 'Grilled Shrimp Cocktail', price: 120, course: 'Starters', description: 'Fresh shrimp grilled to perfection, served with a tangy cocktail sauce.' },
    { id: '2', name: 'Bruschetta', price: 90, course: 'Starters', description: 'Toasted baguette topped with diced tomatoes, basil, and mozzarella cheese.' },
    { id: '3', name: 'Caesar Salad', price: 85, course: 'Starters', description: 'Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.' },
    { id: '4', name: 'Beef Wellington', price: 300, course: 'Mains', description: 'Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.' },
    { id: '5', name: 'Lemon Herb Roasted Chicken', price: 220, course: 'Mains', description: 'Juicy chicken marinated with lemon and herbs, roasted to perfection.' },
    { id: '6', name: 'Spaghetti Carbonara', price: 180, course: 'Mains', description: 'Classic Italian pasta with a creamy sauce, bacon, and parmesan.' },
    { id: '7', name: 'Chocolate Lava Cake', price: 90, course: 'Desserts', description: 'Decadent chocolate cake with a gooey molten center, served with vanilla ice cream.' },
    { id: '8', name: 'Cheesecake', price: 85, course: 'Desserts', description: 'Rich and creamy cheesecake topped with fresh strawberries.' },
    { id: '9', name: 'Tiramisu', price: 95, course: 'Desserts', description: 'Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.' },
  ]);

  const calculateAveragePrice = (course: string): string => {
    const filteredItems = menuItems.filter(item => item.course === course);
    const total = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return filteredItems.length ? (total / filteredItems.length).toFixed(2) : 'N/A';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Christoffel's Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.summary}>Total Items: {menuItems.length}</Text>
      <Text style={styles.summary}>Average Price (Starters): ${calculateAveragePrice('Starters')}</Text>
      <Text style={styles.summary}>Average Price (Mains): ${calculateAveragePrice('Mains')}</Text>
      <Text style={styles.summary}>Average Price (Desserts): ${calculateAveragePrice('Desserts')}</Text>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddMenuItem', { setMenuItems })} 
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#F5F5DC' },
  heading: { fontSize: 24, fontFamily: 'serif', color: '#D4AF37', marginBottom: 16 },
  item: { padding: 10, marginVertical: 8, backgroundColor: '#9CAF88' },
  itemName: { fontWeight: 'bold', fontSize: 18 },
  summary: { marginTop: 8, fontSize: 16, color: '#D4AF37' },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#D4AF37',
    padding: 16,
    borderRadius: 50,
  },
  fabText: { fontSize: 24, color: '#FFFFFF' },
});
