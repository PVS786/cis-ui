import { redirect } from 'next/navigation';

/**
 * /services is not a standalone page — it redirects to the first
 * service offering. Users reach individual services via the navbar dropdown.
 */
export default function ServicesRootPage() {
  redirect('/services/land-acquisition');
}
