import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { StyledBodyPrimaryText } from '../ui/styled-components/style-texts';
import { StyledMutedBorderContainer } from '../ui/styled-components/style-container';
import AppIcons from '../ui/icons/app-icons';
import { useTheme } from '@/context/theme-context';
import { useNavigation } from '@react-navigation/native';

interface CategoryCardProps {
  title: string;
  iconName: 'electricals' | 'vegetables' | 'fizzy-drinks' | 'tubers' | 'books' | 'cosmetics' 
            | 'bottled-water' | 'sachet-water' | 'beer' | 'dry-gin' | 'electronics' | 'furniture'
            | 'clothing' | 'toys' | 'sports' | 'accessories' | 'tools' | 'hardware' | 'software'
            | 'groceries' | 'dairy' | 'meat' | 'seafood' | 'bakery' | 'frozen-foods' | 'pet-supplies'
            | 'office-supplies' | 'cleaning-supplies' | 'personal-care' | 'health' | 'beauty' | 'automotive'
            | 'gardening' | 'outdoor' | 'home-decor' | 'appliances' | 'jewelry' | 'watches' | 'baby-products'
            | 'musical-instruments' | 'stationery' | 'pharmaceuticals' | 'medical-equipment' | 'Airpods' | 'Speakers'
            | 'Storage' | 'Televison';
  categoryId: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, iconName, categoryId }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const handlePress = () => {
    // router.navigate('Products', { categoryId });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <StyledMutedBorderContainer style={styles.card}>
        <AppIcons name={iconName} size={30} color='black'/>
        <StyledBodyPrimaryText text={title} numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 14, color: 'black'}} />
      </StyledMutedBorderContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  tile: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
});

export default CategoryCard;
