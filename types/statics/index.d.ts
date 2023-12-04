declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  > & '*.svg'

  export default ReactComponent
}
declare module '*.webp'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const __API__: string;
