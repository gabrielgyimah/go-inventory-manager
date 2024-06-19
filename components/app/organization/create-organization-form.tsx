import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StyledBodyMutedText, StyledH3PrimaryText, StyledH4PrimaryText } from '../ui/styled-components/style-texts'
import { Formik } from 'formik'
import { CreateOrganizationSchema } from '@/schemas/organization-schemas'
import * as Yup from 'yup'
import { StyledMutedBorderContainer } from '../ui/styled-components/style-container'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/context/theme-context'
import GreenButton from '../ui/buttons/green-button'


export default function CreateOrganizationForm() {
  const { theme } = useTheme()

  const onSubmit = async (values: Yup.InferType<typeof CreateOrganizationSchema>) => {
  }

  return (
    <View style={styles.container}>
      <StyledH3PrimaryText text='Business Information' />
      <StyledBodyMutedText text='Let’s get to know more about your business' />
      <View>
        <Formik
          onSubmit={onSubmit}
          initialValues={{
            organizationName: '',
            country: '',
            currency: '',
            businessType: '',
          }}
          validationSchema={CreateOrganizationSchema}
        >
          {(({ values, isValid, errors, setFieldValue, handleSubmit}) => (
            <View style={{ paddingVertical: 24, gap: 16}}>
              <StyledMutedBorderContainer style={{ flexDirection: 'row', gap: 12, padding: 12, minHeight: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name='business' size={20} color={theme.text.muted}/>
                <TextInput
                  style={{ color: theme.text.primary, flex: 1}}
                  placeholder='Business Name *'
                  placeholderTextColor={theme.text.muted} 
                />
              </StyledMutedBorderContainer>
              <StyledMutedBorderContainer style={{ flexDirection: 'row', gap: 12, padding: 12, minHeight: 50, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                  style={{ color: theme.text.primary, flex: 1}}
                  placeholder='Business Type'
                  placeholderTextColor={theme.text.muted} 
                />
                <Ionicons name='chevron-down-outline' size={14} color={theme.text.muted}/>
              </StyledMutedBorderContainer>
              <StyledMutedBorderContainer style={{ flexDirection: 'row', gap: 12, padding: 12, minHeight: 50, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                  style={{ color: theme.text.primary, flex: 1}}
                  placeholder='Country'
                  placeholderTextColor={theme.text.muted} 
                />
                <Ionicons name='chevron-down-outline' size={14} color={theme.text.muted}/>
              </StyledMutedBorderContainer>
              <StyledMutedBorderContainer style={{ flexDirection: 'row', gap: 12, padding: 12, minHeight: 50, justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                  style={{ color: theme.text.primary, flex: 1}}
                  placeholder='Currency'
                  placeholderTextColor={theme.text.muted} 
                />
                <Ionicons name='chevron-down-outline' size={14} color={theme.text.muted}/>
              </StyledMutedBorderContainer>
              <View style={{ paddingTop: 80}}>
                <GreenButton title='Continue' onPressHandler={handleSubmit}/>
              </View>
            </View>
          ))}
        </Formik>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 12,
    }
})