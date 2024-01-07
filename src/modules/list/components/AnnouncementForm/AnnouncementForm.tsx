import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import {
  Form,
  TextField,
  SelectField,
  FileDropDown,
  Loader,
} from 'shared/components'
import { listApi } from 'shared/store/api'
import listStore from 'shared/store/list'
import { useModuleTranslation } from '../../utils'
import { useFormProps } from './AnnouncementForm.config'
import { InputsContainer } from './AnnouncementForm.styles'

const AnnouncementForm = () => {
  const { onSubmit } = useFormProps()
  const formProps = useFormProps()
  const { t } = useModuleTranslation()
  const { isLoading } = listApi.useGetMainCategoriesQuery({})

  const mainCategories = useSelector(listStore.selectors.getMainCtegories)
  return (
    <Form {...formProps} onSubmit={onSubmit}>
      <InputsContainer>
        <TextField
          name="title"
          label={t('announcementForm.inputs.title')}
          variant="filled"
          id="title"
        />
        <TextField
          multiline
          maxRows={12}
          name="description"
          label={t('announcementForm.inputs.description')}
          variant="filled"
          id="description"
        />
        <TextField
          name="price"
          label={t('announcementForm.inputs.price')}
          variant="filled"
          id="price"
          type="number"
        />
        <FileDropDown name="image" />
        {isLoading ? (
          <Loader />
        ) : (
          <SelectField
            name="category"
            label={t('announcementForm.inputs.category')}
            options={mainCategories}
          />
        )}
        <Button type="submit" variant="contained">
          {t('announcementForm.submit')}
        </Button>
      </InputsContainer>
    </Form>
  )
}

export default AnnouncementForm
