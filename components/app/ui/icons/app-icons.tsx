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
  size?: number;

  /**
   * Color of the icon
   * @type { string }
   */
  color?: string;

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
            | 'GreenEnvelope' | 'GreenNoProducts'
            | 'Televison' | 'Airpods' | 'Speakers' | 'Storage'
            | 'HomeIcon' | 'CategoryIcon' | 'MoneyIcon' | 'ShoppingBagIcon' | 'InventoryIcon' | 'ExpiredIcon'
            | 'StockLevelsIcon' | 'ExpandIcon' | 'UpDownArrow'
}

const AppIcons: React.FC<IconProps> = ({ name, size, color }) => {
  const { iconMap } = useIcons();
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent size={size} color={color} /> : null;
};

export default AppIcons;
