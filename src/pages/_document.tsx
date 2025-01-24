import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Aureus Marketing</title>
      </Head>
      <body className="min-h-screen font-sans antialiased gradient">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
