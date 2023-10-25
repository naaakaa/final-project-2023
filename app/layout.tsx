import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import LogInButton from './components/LogInButton';
import SignUpButton from './components/SignUpButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Home |Kidical Mass', template: '%s | Kidical Mass' },
  description: 'Website for the Kidical Mass, a bikeride for children',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/allevents">All Events</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/login">Log In</Link>
          <LogInButton />
          <SignUpButton />
          {Math.floor(Math.random() * 10)}
        </nav>

        {children}
        <footer>
          <div>Contact: email@mail.com</div>
          <div>Impressum</div>
        </footer>
      </body>
    </html>
  );
}
