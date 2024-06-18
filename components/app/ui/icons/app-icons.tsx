import { useIcons } from '@/context/app-icon-context';
import React from 'react';

/**
 * Props interface for the AppIcons component.
 * Specifies the iconName prop which determines the icon to render.
 * @interface IconProps
 */
interface IconProps {
  /**
   * Size of the icon
   * @type { number }
   */
  size: number;

  /**
   * Name of the icon to render. Should be one of the predefined values.
   * @type {'electricals' | 'vegetables' | 'fizzy-drinks' | 'tubers' | 'books' | 'cosmetics' 
   *        | 'bottled-water' | 'sachet-water' | 'beer' | 'dry-gin' | 'electronics' | 'furniture'
   *        | 'clothing' | 'toys' | 'sports' | 'accessories' | 'tools' | 'hardware' | 'software'
   *        | 'groceries' | 'dairy' | 'meat' | 'seafood' | 'bakery' | 'frozen-foods' | 'pet-supplies'
   *        | 'office-supplies' | 'cleaning-supplies' | 'personal-care' | 'health' | 'beauty' | 'automotive'
   *        | 'gardening' | 'outdoor' | 'home-decor' | 'appliances' | 'jewelry' | 'watches' | 'baby-products'
   *        | 'musical-instruments' | 'stationery' | 'pharmaceuticals' | 'medical-equipment'}
   */
  name: 'electricals' | 'vegetables' | 'fizzy-drinks' | 'tubers' | 'books' | 'cosmetics' 
            | 'bottled-water' | 'sachet-water' | 'beer' | 'dry-gin' | 'electronics' | 'furniture'
            | 'clothing' | 'toys' | 'sports' | 'accessories' | 'tools' | 'hardware' | 'software'
            | 'groceries' | 'dairy' | 'meat' | 'seafood' | 'bakery' | 'frozen-foods' | 'pet-supplies'
            | 'office-supplies' | 'cleaning-supplies' | 'personal-care' | 'health' | 'beauty' | 'automotive'
            | 'gardening' | 'outdoor' | 'home-decor' | 'appliances' | 'jewelry' | 'watches' | 'baby-products'
            | 'musical-instruments' | 'stationery' | 'pharmaceuticals' | 'medical-equipment'
            | 'GreenEnvelope'
}

const AppIcons: React.FC<IconProps> = ({ name, size }) => {
  const { iconMap } = useIcons();
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent size={size} /> : null;
};

export default AppIcons;
