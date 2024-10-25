
import { StackNavigationProp } from '@react-navigation/stack';

export type MenuStackParamList = {
  Home: undefined; 
  AddMenuItem: { setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> }; 
};

export type HomeScreenNavigationProp = StackNavigationProp<MenuStackParamList, 'Home'>;
