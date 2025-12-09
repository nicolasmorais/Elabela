import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to the dynamic route handler which will determine the correct content
  redirect('/');
}