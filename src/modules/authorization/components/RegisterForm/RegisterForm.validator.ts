import { useTranslation } from 'react-i18next'
import { object, string, ref } from 'yup'

export const useRegisterSchema = () => {
  const { t } = useTranslation()

  const registerSchema = object({
    email: string()
      .min(3, () => t('validation.minLength', { value: '3' }))
      .max(20, () => t('validation.maxLength', { value: '30' }))
      .required()
      .email(() => t('validation.email')),
    password: string()
      .min(3, () => t('validation.minLength', { value: '3' }))
      .max(20, () => t('validation.maxLength', { value: '20' }))
      .required()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, () =>
        t('validation.password')
      ),
    passwordRepeat: string().oneOf([ref('password'), ''], () =>
      t('validation.passwordRepeat')
    ),
  }).required()
  return registerSchema
}
