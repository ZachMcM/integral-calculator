import './globals.css'

export const metadata = {
  title: 'Riemann-Sum-Calculator Example',
  description: 'A simple riemann sum calculator app built using the riemann-sum-calculator npm pacakage.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-neutral-800 text-white'>
      <body>{children}</body>
    </html>
  )
}
