import { StyleSheet, View, ImageBackground, FlatList, Text, Pressable } from 'react-native';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { StyledPrimaryContainer } from '../ui/styled-components/style-container';
import SearchBar from '../searchBar/searchBar';
import { StyledBodyMutedText, StyledH4PrimaryText, StyledH3PrimaryText, StyledH5PrimaryText, StyledBodyPrimaryText } from '../ui/styled-components/style-texts';
import { StyledMutedContainer } from '@/components/app/ui/styled-components/style-container';
import AppIcons from '@/components/app/ui/icons/app-icons';
import CategoryGrid from '../category-card-component/category-grid';
import { ProductInterface, useProduct } from '../../../context/product-context';
import { useOrganization } from '@/context/organization-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomBottomSheet from '../ui/custom-bottom-sheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const mockProducts: ProductInterface[] = [
  { id: '1', name: 'Nexus 50" Tv', units: '40 units', price: 60000, productImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600', categoryId: '1' },
  { id: '2', name: 'Nexus 43" Tv', units: '60 units', price: 70000, productImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600', categoryId: '1' },
  { id: '3', name: 'Nexus 65" Tv', units: '5 units', price: 120000, productImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600', categoryId: '5'  },
  { id: '4', name: 'Hisense 58" UHD A6 Tv', units: '60 units', price: 78000, productImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600', categoryId: '3'  },
  { id: '5', name: 'Apple Laptop', units: '78 units', price: 67000, productImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600', categoryId: '2'  },
  { id: '6', name: 'Samsung Laptop', units: '30 units', price: 76000, productImageUrl: '', categoryId: '6'  },
  { id: '7', name: 'LG Split Air Conditioner', units: '100 units', price: 54000, productImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600', categoryId: '5'  },
  { id: '8', name: 'Sony super Bass Speaker', units: '60 units', price: 50000, productImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600', categoryId: '2'  },
  { id: '9', name: 'Apple Airpod Pro', units: '73 units', price: 30000, productImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600', categoryId: '4' },
  { id: '10', name: 'Apple Watch series 9', units: '55 units', price: 70000, productImageUrl: 'https://images.pexels.com/photos/9561301/pexels-photo-9561301.jpeg?auto=compress&cs=tinysrgb&w=600', categoryId: '3' },
];


export default function InventoryContainer() {
  const { products, setProducts } = useProduct();
  const [filteredData, setFilteredData] = useState(products);
  const [searchActive, setSearchActive] = useState(false);
  const { organization } = useOrganization();
  const bottomSheet = useRef<BottomSheetModal | null>(null);
  const bottomSheetSnapPoints = useMemo(() => ['25%'], []);

  useEffect(() => {
    setProducts(mockProducts);
  }, [setProducts]);

  useEffect(() => {
    setFilteredData(products);
  }, [products]);

  const openBottomSheet = () => bottomSheet.current?.present();
  const closeBottomSheet = () => bottomSheet.current?.close();

  const handleSort = (sortOption: string) => {
    let sortedData = [...products];
    if (sortOption === 'name') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'units') {
      sortedData.sort((a, b) => parseInt(a.units) - parseInt(b.units));
    } else if (sortOption === 'price') {
      sortedData.sort((a, b) => a.price - b.price);
    }
    setFilteredData(sortedData);
    closeBottomSheet();
  };

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredData(filtered);
      setSearchActive(true);
    } else {
      setFilteredData(products);
      setSearchActive(false);
    }
  };

  return (
    <StyledPrimaryContainer style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar onSearch={handleSearch} />
      </View>
      {searchActive ? (
        <View style={styles.searchResultsContainer}>
          <StyledH4PrimaryText text={`Results (${filteredData.length})`} />
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                  <RenderProductImage product={item} />
                  <View style={{ flexDirection: 'column', gap: 16 }}>
                    <StyledBodyPrimaryText text={item.name} style={{ fontWeight: 500 }} />
                    <View style={styles.row}>
                      <View style={styles.units}>
                        <StyledBodyPrimaryText text={item.units} />
                      </View>
                      <StyledBodyMutedText text={`${organization?.currency} ${item.price.toFixed(2)}`} />
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      ) : (
        <>
          {products.length === 0 ? (
            <View style={styles.emptyContainer}>
              <View style={styles.centeredContent}>
                <StyledMutedContainer style={styles.envelope}>
                  <AppIcons name="GreenNoProducts" />
                </StyledMutedContainer>
                <View style={styles.emptyTextContainer}>
                  <StyledH4PrimaryText text="No Products yet" style={{ textAlign: 'center' }} />
                  <StyledBodyMutedText text="Start by adding a product to your inventory" style={{ textAlign: 'center' }} />
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.listContainer}>
              <View style={styles.fixedHeader}>
                <StyledH4PrimaryText text="Product Categories" style={{ left: 16, marginBottom: 15 }} />
                <CategoryGrid />
              </View>
              <View style={{ flexDirection: 'row', left: 16, marginVertical: 15, justifyContent: 'space-between', marginRight: 50 }}>
                <StyledH4PrimaryText text="All Products" />
                <TouchableOpacity onPress={openBottomSheet}>
                  <AppIcons name="UpDownArrow" />
                </TouchableOpacity>
              </View>
              <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                      <RenderProductImage product={item} />
                      <View style={{ flexDirection: 'column', gap: 16 }}>
                        <StyledBodyPrimaryText text={item.name} style={{ fontWeight: 500 }} />
                        <View style={styles.row}>
                          <View style={styles.units}>
                            <StyledBodyPrimaryText text={item.units} />
                          </View>
                          <StyledBodyMutedText text={`${organization?.currency} ${item.price.toFixed(2)}`} />
                        </View>
                      </View>
                      <View style={{ marginLeft: 50, marginTop: 0 }}>
                        <AppIcons name="VerticalMenu" size={24} />
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          )}
        </>
      )}

      <CustomBottomSheet ref={bottomSheet} customDetached snapPoints={bottomSheetSnapPoints} title="Sort By">
        <View style={{ paddingVertical: 20, alignItems: 'center' }}>
          <Pressable style={styles.sortOption} onPress={() => handleSort('name')}>
            <StyledBodyPrimaryText style={styles.sortOptionText} text='Name'/>
          </Pressable>
          <Pressable style={styles.sortOption} onPress={() => handleSort('units')}>
            <StyledBodyPrimaryText style={styles.sortOptionText} text='Units'/>
          </Pressable>
          <Pressable style={styles.sortOption} onPress={() => handleSort('price')}>
            <StyledBodyPrimaryText style={styles.sortOptionText} text='Price'/>
          </Pressable>
        </View>
      </CustomBottomSheet>
    </StyledPrimaryContainer>
  );
}

interface RenderProductImageProps {
  product: ProductInterface;
}

const RenderProductImage: React.FC<RenderProductImageProps> = ({ product }) => {
  const words = product.name.split(' ');
  const initials = words.map(word => word[0]).join('');

  return (
    <>
      {product.productImageUrl ? (
        <ImageBackground source={{ uri: product.productImageUrl }} style={styles.imageBackground} />
      ) : (
        <StyledMutedContainer style={[styles.imageBackground, { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f1f1' }]}>
          <StyledH3PrimaryText text={initials} style={{ textAlign: 'center' }} />
        </StyledMutedContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingTop: 32,
  },
  fixedHeader: {
    zIndex: 1,
  },
  searchBar: {
    width: '100%',
    padding: 16,
  },
  envelope: {
    padding: 100,
    borderRadius: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    marginTop: 16,
  },
  searchResultsContainer: {
    flex: 1,
    marginTop: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTextContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    left: 16,
    right: 16,
  },
  imageBackground: {
    width: 50,
    height: 75,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    left: 0,
  },
  units: {
    padding: 8,
    borderRightWidth: 1,
  },
  sortOption: {
    padding: 10,
  },
  sortOptionText: {
    fontSize: 16,
  },
});
