
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  course: string;
};


export type MenuStackParamList = {
  Home: undefined; 
  AddMenuItem: { setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> }; 
  FilterMenu: undefined; 
};


export type AddMenuItemScreenProps = {
  route: RouteProp<MenuStackParamList, 'AddMenuItem'>; 
  navigation: StackNavigationProp<MenuStackParamList, 'AddMenuItem'>; 
};


export type HomeScreenProps = {
  navigation: StackNavigationProp<MenuStackParamList, 'Home'>;
};

export type FilterMenuScreenProps = {
  navigation: StackNavigationProp<MenuStackParamList, 'FilterMenu'>;
};
