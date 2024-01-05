import { useTranslation } from 'react-i18next'
import { object, string } from 'yup'

export const useLoginSchema = () => {
  const { t } = useTranslation()

  const loginSchema = object({
    email: string()
      .min(3, () => t('validation.minLength', { value: '3' }))
      .required()
      .email(() => t('validation.email')),
    password: string()
      .min(3, () => t('validation.minLength', { value: '3' }))
      .max(40, () => t('validation.maxLength', { value: '40' }))
      .required(),
  }).required()
  return loginSchema
}
