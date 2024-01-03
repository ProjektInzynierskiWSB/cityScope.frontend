import { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, Typography } from '@mui/material'
import { Container, ImgPreview } from './FileDropDown.styles'

interface FileDropDownProps {
  name: string
}

const FileDropDown = ({ name }: FileDropDownProps) => {
  const { register, unregister, setValue, watch } = useFormContext()
  const files = watch(name)
  const { t } = useTranslation()
  const onDrop = useCallback(
    (droppedFiles: any) => {
      setValue(name, droppedFiles, { shouldValidate: true })
    },
    [setValue, name]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })
  useEffect(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])

  return (
    <>
      {!!files?.length && (
        <ImgPreview>
          {files.map((file: File) => {
            return (
              <div key={file.name}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  style={{
                    height: '300px',
                  }}
                />
              </div>
            )
          })}
        </ImgPreview>
      )}
      <Container
        {...getRootProps()}
        isDragActive={isDragActive}
        role="button"
        aria-label="File Upload"
        id={name}
      >
        <input type="file" {...getInputProps()} />
        <Typography>
          {isDragActive ? t('dropDown.dropHere') : t('dropDown.drag&Drop')}
        </Typography>
        <Button variant="contained" sx={{ marginTop: '5px' }}>
          {t('dropDown.add')}
        </Button>
      </Container>
    </>
  )
}

export default FileDropDown
