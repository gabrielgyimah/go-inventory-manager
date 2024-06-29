import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from '@/context/theme-context';
import { StyledMutedBorderContainer, StyledPrimaryContainer } from '../ui/styled-components/style-container';
import FilterSearchButton from '../ui/icons/icons/filter-search-icon';
import FineTune from '../ui/icons/icons/settings-finetune';

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch, ...props }) => {
  const { theme } = useTheme();

  return (
    <StyledPrimaryContainer style={styles.container}>
      <StyledMutedBorderContainer style={[styles.searchContainer ]}>
        <FontAwesome name="search" size={30} style={[styles.icon, { color: theme.background.secondary}]} />
        <TextInput
          style={[styles.input]}
          placeholder='Search'
          onChangeText={onSearch}
          {...props}
        />
      </StyledMutedBorderContainer>
      <FineTune />
    </StyledPrimaryContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 50,
    width: '90%',
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
});

export default SearchBar;
