import type { Metadata } from 'next';
import { PageWrapper } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Conservve Infra Solutionss',
    template: '%s | Conservve Infra Solutionss',
  },
  description: 'Premium construction and land acquisition management across India.',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
