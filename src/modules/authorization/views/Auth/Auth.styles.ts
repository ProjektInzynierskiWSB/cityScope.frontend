import { Button, alpha, keyframes, styled } from '@mui/material'

export const Container = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const SwitchModeContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  right: 45,
  top: 11,
  width: 60,
  height: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  backgroundColor: theme.palette.background.default,
}))

export const BackgroundElement = styled('div')(({ theme }) => ({
  position: 'fixed',
  height: '100%',
  animation: `${slide} 26s ease-in-out infinite alternate`,
  backgroundImage: `linear-gradient(90deg, ${
    theme.palette.primary.dark
  }  50%, ${alpha(theme.palette.primary.main, 0.8)} 50%)`,
  left: '-50%',
  right: '-50%',
  zIndex: -1,
  opacity: 0.5,
}))

export const BackgroundElement2 = styled(BackgroundElement)({
  animationDirection: 'alternate-reverse',
  animationDuration: '14s',
})

export const BackgroundElement3 = styled(BackgroundElement)({
  animationDuration: '19s',
})

export const Content = styled('div')(({ theme }) => ({
  height: 366,
  boxSizing: 'border-box',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: alpha(theme.palette.background.default, 0.9),
  boxShadow: '0px 0px 20px 0px rgba(66, 68, 90, 0.05)',
  borderRadius: 8,
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: theme.spacing(6),
  gap: theme.spacing(4),
}))

export const Column = styled('div')(({ theme }) => ({
  width: 350,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  height: '100%',
}))

export const RegisterButton = styled(Button)(({ theme }) => ({
  width: theme.spacing(42),
  marginTop: 'auto',
}))

export const slide = keyframes`
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
  `
