import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="pt-BR" className='pt-16'>
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
