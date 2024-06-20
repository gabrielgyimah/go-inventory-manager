import React, { forwardRef, useCallback, useEffect } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetBackgroundProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTheme } from '@/context/theme-context';
import Separator from './separator';

export interface CustomBottomSheetProps {
  children: React.ReactNode;
  snapPoints: string[];
  handleClose?: () => void;
  handleChanges?: (index: number) => void;
  showFooter?: boolean;
  customBackgroundColor?: string;
  customDetached?: boolean;
  customBorderRadius?: number;
  customPadding?: number;
  title?: string;
  isPanDownToCloseEnabled?: boolean;
  showIndicator?: boolean;
}

export type Ref = BottomSheetModal;

const defaultProps: Partial<CustomBottomSheetProps> = {
  customPadding: 12,
};

const CustomBottomSheet = forwardRef<Ref, CustomBottomSheetProps>((props, mapSheetRef) => {
  const { theme, primaryBackgroundColorAnimation } = useTheme();
  const {
    children,
    snapPoints,
    handleClose,
    handleChanges,
    showFooter,
    customBackgroundColor,
    customDetached,
    customBorderRadius,
    title,
    customPadding,
    isPanDownToCloseEnabled = true, // Default to true if not provided
    showIndicator = true,
  } = props;

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        pressBehavior={!isPanDownToCloseEnabled ? 'none' : 'close'}
      />
    ),
    [isPanDownToCloseEnabled]
  );

  useEffect(() => {
    console.log('Component mounted');
    console.log({ isPanDownToCloseEnabled });
  }, [isPanDownToCloseEnabled]);

  return (
    <BottomSheetModal
      onChange={handleChanges}
      ref={mapSheetRef}
      index={1}
      snapPoints={snapPoints}
      enableDynamicSizing
      enablePanDownToClose={isPanDownToCloseEnabled}
      handleIndicatorStyle={{ 
        width: !showIndicator ? 0 : 80, 
        height: !showIndicator ? 0 : 6, 
        marginTop: !showIndicator ? 0 : 6, 
        backgroundColor: !showIndicator ? 'none' : theme.text.muted 
      }}
      backdropComponent={renderBackdrop}
      detached={customDetached}
      backgroundComponent={BackgroundComponent}
      topInset={showIndicator ? undefined : 0}
      bottomInset={customDetached ? 24 : 0}
      style={{ margin: customDetached ? 12 : 0 }}
      keyboardBlurBehavior='restore'
      backgroundStyle={[{
        backgroundColor: customBackgroundColor || 'transparent',
        borderRadius: customBorderRadius || 16,
      }]}
    >
      <BottomSheetScrollView style={{ flex: 1 }}>
        {title && (
          <View style={{ paddingTop: 16, paddingBottom: 8 }}>
            <Text style={{ color: theme.others.white, textAlign: 'center', fontWeight: '700', fontSize: 22 }}>
              {title}
            </Text>
          </View>
        )}
        <View style={{ 
          paddingBottom: customPadding ? customPadding : 12, 
          paddingHorizontal: customPadding ? customPadding : 12, gap: 12 
        }}>
          {children}
        </View>
        {showFooter && (
          <>
            <Separator />
            <View style={{ paddingVertical: 8 }}>
              {/** Can Have Logo Here */}
            </View>
          </>
        )}
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});

CustomBottomSheet.defaultProps = defaultProps;

export default CustomBottomSheet;

const BackgroundComponent: React.FC<BottomSheetBackgroundProps> = ({ style }) => {
  const { mode } = useTheme();

  return (
    <BlurView
      style={[style, { overflow: 'hidden' }]}
      intensity={40}
      tint={mode === 'light' ? 'systemChromeMaterialLight' : 'systemThickMaterialDark'}
    />
  );
};
