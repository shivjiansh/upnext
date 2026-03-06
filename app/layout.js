import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://upnext.agency'),
  title: {
    default: 'Upnext — B2B Growth Marketing Agency',
    template: '%s | Upnext'
  },
  description:
    'Upnext is a premium B2B marketing agency for SaaS, tech, and enterprise brands. Strategy-led creative and conversion systems from Lucknow, India.',
  keywords: [
    'B2B marketing agency',
    'SaaS growth agency',
    'enterprise marketing partner',
    'Lucknow marketing agency'
  ],
  openGraph: {
    title: 'Upnext — B2B Growth Marketing Agency',
    description: 'Premium growth systems for SaaS and enterprise brands.',
    type: 'website',
    locale: 'en_IN'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
