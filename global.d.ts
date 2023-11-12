declare module '*.png' {
  const value: import('react-native').ImageSourcePropType
  export default value
}

declare module '*.jpg' {
  const value: import('react-native').ImageSourcePropType
  export default value
}

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.gif'
