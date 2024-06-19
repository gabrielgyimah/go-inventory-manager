import * as Yup from 'yup'

export const CreateOrganizationSchema = Yup.object().shape({
  organizationName: Yup.string()
    .required()
    .min(3, 'Organization name must be 3 characters minimum')
    .max(80, 'Organization name must be 80 characters maximum'),
  country: Yup.string()
    .required()
    .min(3, 'Organization country must be 1 characters minimum')
    .max(80, 'Organization country must be 80 characters maximum'),
  currency: Yup.string()
    .required()
    .min(3, 'Organization currency must be 3 characters minimum')
    .max(80, 'Organization currency must be 80 characters maximum'),
  businessType: Yup.string()
    .required()
    .min(12, 'Organization type must be 12 characters minimum')
    .max(40, 'Organization type must be 80 characters maximum'),
})