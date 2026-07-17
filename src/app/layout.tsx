import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'WPT Global Taiwan',
    template: '%s | WPT Global Taiwan',
  },
  description: 'WPT Global Taiwan - Official Poker Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body>{children}</body>
    </html>
  );
}
