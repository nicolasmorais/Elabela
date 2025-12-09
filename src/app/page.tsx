import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to the dashboard or any other default route
  redirect('/dashboard');
}