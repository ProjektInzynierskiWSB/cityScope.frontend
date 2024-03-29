import { Button } from '@mui/material'
import { Form, TextField } from 'shared/components'
import { useModuleTranslation } from '../../utils'
import { useFormProps } from './RegisterForm.utils'

export interface RegisterFormProps {
  switchViews: () => void
}

const RegisterForm = ({ switchViews }: RegisterFormProps) => {
  const formProps = useFormProps(switchViews)
  const { onSubmit } = formProps
  const { t } = useModuleTranslation()

  return (
    <Form {...formProps} onSubmit={onSubmit}>
      <TextField
        name="email"
        label={t('inputs.email')}
        variant="filled"
        id="email"
      />
      <TextField
        name="nickName"
        label={t('inputs.nickName')}
        variant="filled"
        id="nickName"
      />
      <TextField
        name="password"
        label={t('inputs.password')}
        variant="filled"
        id="password"
        type="password"
      />
      <TextField
        name="confirmPassword"
        label={t('inputs.passwordRepeat')}
        variant="filled"
        id="confirmPassword"
        type="password"
      />
      <Button type="submit" variant="contained" fullWidth>
        {t('buttons.register')}
      </Button>
    </Form>
  )
}

export default RegisterForm
