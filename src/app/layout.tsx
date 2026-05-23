import type { Metadata } from 'next';
import { PageWrapper } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'CONSERVVE INFRA SOLUTIONS',
    template: '%s | CONSERVVE INFRA SOLUTIONS',
  },
  description: 'Premium construction and land acquisition management across India.',
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
