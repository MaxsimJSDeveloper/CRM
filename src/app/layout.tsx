import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/app/components/providers';
import './globals.css';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="CRM - effective customer relationship management"
        />
        <meta name="keywords" content="CRM, management, customers, business" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Maksym" />

        <link rel="icon" href="/icons/logo.svg" type="image/svg+xml" />
        <title>CRM</title>
      </head>
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
