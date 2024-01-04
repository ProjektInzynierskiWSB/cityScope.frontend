import { Button } from '@mui/material'
import { Form, TextField } from 'shared/components'
import { useModuleTranslation } from '../../utils'
import { useFormProps } from './LoginForm.config'

const LoginForm = () => {
  const { onSubmit } = useFormProps()
  const formProps = useFormProps()
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
        name="password"
        label={t('inputs.password')}
        variant="filled"
        id="password"
        type="password"
      />
      <Button type="submit" variant="contained" fullWidth>
        {t('buttons.submitLogin')}
      </Button>
    </Form>
  )
}

export default LoginForm
