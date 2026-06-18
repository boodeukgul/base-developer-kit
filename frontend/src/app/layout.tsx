import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Base Developer Kit',
  description: 'Learn and build on Base with ready-made examples',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
