'use client'

import { GlobalAPIProvider } from './globalAPI'
import { ModalProvider } from './modal'

const provider = (provider, props = {}) => [provider, props]

const ProviderComposer = ({ providers, children }) => {
  for (let i = providers.length - 1; i >= 0; --i) {
    const [Provider, props] = providers[i]
    children = <Provider {...props}>{children}</Provider>
  }
  return children
}

const Providers = ({ children, globalAPI }) => {
  return (
    <ProviderComposer
      providers={[
        provider(ModalProvider),
        provider(GlobalAPIProvider, { value: globalAPI }),
      ]}
    >
      {children}
    </ProviderComposer>
  )
}

export default Providers
