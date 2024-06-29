import React from 'react';
import { View, StyleSheet, TextInputProps } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '@/context/theme-context';
import { StyledPrimaryContainer } from '@/components/app/ui/styled-components/style-container';
import FineTune from '@/components/app/ui/icons/icons/settings-finetune';
import FloatingLabelInput from '@/components/app/ui/styled-components/floating-label-input';

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch, ...props }) => {
  const { theme } = useTheme();

  return (
    <StyledPrimaryContainer style={styles.container}>
      <View style={styles.searchContainer}>
        <FloatingLabelInput
          label="Search"
          value={props.value}
          onChangeText={onSearch}
          containerStyle={styles.floatingLabelContainer}
          inputStyle={styles.input}
          leftIcon={<FontAwesome name="search" size={20} style={[styles.icon, { color: theme.background.secondary }]} />}
          placeholder={placeholder}
        />
      </View>
      <View style={styles.iconContainer}>
        <FineTune style={{ height: 60 }} />
      </View>
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
    width: '90%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  iconContainer: {
    width: '10%',
  },
  floatingLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

export default SearchBar;
