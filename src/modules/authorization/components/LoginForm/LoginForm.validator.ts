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
      .max(20, () => t('validation.maxLength', { value: '20' }))
      .required()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, () =>
        t('validation.password')
      ),
  }).required()
  return loginSchema
}
