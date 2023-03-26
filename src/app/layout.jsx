'use client'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import '../../assets/styles/main.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  )
}
