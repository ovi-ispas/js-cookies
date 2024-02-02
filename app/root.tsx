import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { useEffect, useRef } from 'react'

export default function App() {
  const colorInputRef = useRef<HTMLInputElement>(null)

  // After hydration, read the background color from the cookie and set it on the body
  useEffect(() => {
    const cookies = document.cookie.split(';')
    const bgColorCookie = cookies.find((cookie) => cookie.includes('bgColor'))
    const bgColorCookievalue = bgColorCookie?.split('=')[1]
    document.body.style.backgroundColor = bgColorCookievalue ?? '#ffffff'
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>JS Cookies</h1>
        <input type="color" defaultValue="#ffffff" ref={colorInputRef} />{' '}
        <button
          onClick={() => {
            const color = colorInputRef.current?.value as string
            document.body.style.backgroundColor = color
            document.cookie = `bgColor=${color}`
          }}
        >
          Set background color
        </button>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
