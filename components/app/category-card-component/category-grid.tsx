import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryCard from './category-card';
import { useCategory, Category } from '../../../context/categories-context';
import { router } from 'expo-router';
import GreenButton from '../ui/buttons/green-button';

const mockCategories: Category[] = [
  { id: '1', title: 'Books', description: 'Electrical appliances and gadgets.', productsCount: 120, iconName: 'clothing' },
  { id: '2', title: 'Air Conditions', description: 'Fresh vegetables and greens.', productsCount: 80, iconName: 'vegetables' },
  { id: '3', title: 'Airpods', description: 'Carbonated beverages.', productsCount: 45, iconName: 'Airpods' },
  { id: '4', title: 'Storage', description: 'Various kinds of tubers.', productsCount: 60, iconName: 'Storage' },
  { id: '5', title: 'Television', description: 'Books and reading materials.', productsCount: 150, iconName: 'Televison' },
  { id: '6', title: 'Speakers', description: 'Beauty and skincare products.', productsCount: 70, iconName: 'Speakers' },
  { id: '7', title: 'Books', description: 'Different brands of bottled water.', productsCount: 40, iconName: 'bottled-water' },
  { id: '8', title: 'Sachet Water', description: 'Affordable sachet water.', productsCount: 55, iconName: 'sachet-water' },
];

const CategoryGrid: React.FC = () => {
  const { categories, setCategories } = useCategory();

  useEffect(() => {
    setCategories(mockCategories);
  }, [setCategories]);

  const handleMoreCategories = () => {
    router.navigate('MoreCategoriesScreen'); // Ensure this screen is defined
  };

  const renderCategory = ({ item, index }: { item: Category, index: number }) => {
    if (index === 7) {
      return (
        <GreenButton
          containerStyle={styles.moreButton}
          title='More'
          onPressHandler={handleMoreCategories}
        />
      );
    }
    return <CategoryCard title={item.title} iconName={item.iconName} categoryId={item.id} />;
  };

  return (
    <FlatList
      data={[...categories.slice(0, 8)]}
      renderItem={renderCategory}
      keyExtractor={(item) => item.id}
      numColumns={4}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.grid}
    />
  );
};

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  moreButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
});

export default CategoryGrid;
