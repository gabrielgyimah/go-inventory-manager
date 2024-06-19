import React, { createContext, useContext } from 'react';

// Import all icons from the '../components/app/ui/icons/icons' directory using require.context
const iconContext = require.context('../components/app/ui/icons/icons', false, /\.tsx$/);
const iconMap: Record<string, React.ComponentType<any>> = {};

iconContext.keys().forEach((key) => {
  const fileName = key.replace(/^\.\/(.*)\.tsx$/, '$1');

  const iconName = fileName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  iconMap[iconName] = iconContext(key).default;
});



interface IconContextInterface {
  iconMap: Record<string, React.ComponentType<any>>;
}

const IconContext = createContext<IconContextInterface | null>(null);

export const useIcons = () => {
  const context = useContext(IconContext);
  if (!context) {
    throw new Error('useIcons must be used within an AppIconProvider');
  }
  return context;
};

export const AppIconProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <IconContext.Provider value={{ iconMap }}>
      {children}
    </IconContext.Provider>
  );
};
