import React from 'react'
import { StyledPrimaryContainer } from '@/components/app/ui/styled-components/style-container'
import CreateOrganizationForm from '@/components/app/organization/create-organization-form'

export default function CreateOrganizationScreen() {
  return (
    <StyledPrimaryContainer style={{ flex: 1}}>
        <CreateOrganizationForm />
    </StyledPrimaryContainer>
  )
}