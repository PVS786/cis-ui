import { Footer } from './footer';
import { Header } from './header';

interface PageWrapperProps {
  children: React.ReactNode;
}

/**
 * PageWrapper — Layout shell wrapping Header + Footer.
 */
export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <a className="sr-only focus:not-sr-only focus:absolute focus:z-[var(--z-toast)] focus:p-4 focus:bg-[var(--color-surface)] focus:text-[var(--color-primary)]" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 flex flex-col min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
