import Navbar from '../components/Navbar';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
}
