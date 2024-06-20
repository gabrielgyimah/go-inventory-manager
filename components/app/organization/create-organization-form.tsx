import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { StyledBodyMutedText, StyledBodyPrimaryText, StyledH3PrimaryText, StyledH4PrimaryText } from '../ui/styled-components/style-texts'
import { Formik } from 'formik'
import { CreateOrganizationSchema } from '@/schemas/organization-schemas'
import * as Yup from 'yup'
import { StyledMutedBorderContainer } from '../ui/styled-components/style-container'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/context/theme-context'
import GreenButton from '../ui/buttons/green-button'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal'
import { OrganizationInterface, useOrganization } from '@/context/organization-context'

const mockOrganization: OrganizationInterface = {
  id: "org-123",
  name: "Tech Innovators Inc.",
  contactPersonFullName: "Jane Doe",
  OrganizationName: "Tech Innovators Incorporated",
  email: "contact@techinnovators.com",
  OrganizationType: {
    id: "type-1",
    title: "Technology",
    description: "Organizations in the technology industry."
  },
  country: "USA",
  contactPhone: "+1-800-555-1234",
  logoUrl: "https://example.com/logo.png"
};


export default function CreateOrganizationForm() {
  const { theme } = useTheme()
  const { setOrganization } = useOrganization()
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isPending, setIsPending] = useState(false)

  const [countryCode, setCountryCode] = useState<CountryCode>('NG')
  const [country, setCountry] = useState<Country | null>(null)
  const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(
    false,
  )
  const [withFlag, setWithFlag] = useState<boolean>(true)
  const [withEmoji, setWithEmoji] = useState<boolean>(true)
  const [withFilter, setWithFilter] = useState<boolean>(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState<boolean>(false)
  const [withCallingCode, setWithCallingCode] = useState<boolean>(false)

  const onSubmit = async () => {
    try {
      setIsPending(true)
      setErrorMessage('')
      setSuccessMessage('')
      setOrganization(mockOrganization)
    } catch (error) {
      
    } finally {
      setIsPending(false)
    }
  }


  return (
    <>
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
                    value={values.organizationName}
                    onChangeText={(v) => setFieldValue('organizationName', v)}
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
                <StyledMutedBorderContainer style={{ flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 6, justifyContent: 'center', alignItems: 'center'}}>
                  <CountryPicker
                    {...{
                      countryCode,
                      withFilter,
                      withFlag,
                      withCountryNameButton,
                      withAlphaFilter,
                      withCallingCode,
                      withEmoji,
                    }}
                    onSelect={(country: Country) => {
                      console.log({ country })
                      setCountryCode(country.cca2)
                      setCountry(country)
                      setFieldValue('currency', country.currency)
                      console.log({ values })
                    }}
                    visible
                  />
                  <StyledBodyPrimaryText text={country?.name!} style={{ flex: 1}}/>
                  <Ionicons name='chevron-down-outline' size={14} color={theme.text.muted}/>
                </StyledMutedBorderContainer>
                <StyledMutedBorderContainer style={{ flexDirection: 'row', gap: 12, padding: 12, minHeight: 50, justifyContent: 'center', alignItems: 'center'}}>
                  <StyledBodyPrimaryText 
                    text={values.currency ? values.currency : 'Currency'} 
                    style={{ flex: 1, color: values.currency ? theme.text.primary : theme.text.muted}} 
                  />
                  <Ionicons name='chevron-down-outline' size={14} color={theme.text.muted}/>
                </StyledMutedBorderContainer>
                <View style={{ paddingTop: 80}}>
                  <GreenButton title='Continue' onPressHandler={onSubmit}/>
                </View>
              </View>
            ))}
          </Formik>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 12,
    }
})