import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/providers';
import { DashboardNav } from '@/components/dashboard/nav';
import { DashboardHeader } from '@/components/dashboard/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Modern admin dashboard built with Next.js and shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <div className="hidden border-r bg-background md:block md:w-64">
              <div className="flex h-full flex-col">
                <div className="flex h-14 items-center border-b px-4 font-semibold">
                  Admin Dashboard
                </div>
                <div className="flex-1 space-y-4 p-4">
                  <DashboardNav />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <DashboardHeader />
              <main className="flex-1 p-6">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}