import './globals.css';

export const metadata = {
  title: 'Nahid Akanda — Portfolio',
  description: 'MS Economics & Quantitative Analysis | Data Analytics | Business Operations | Open to Analyst & Coordinator Roles',
  keywords: 'Nahid Akanda, data analytics, economics, quantitative analysis, Chicago, DePaul University',
  openGraph: {
    title: 'Nahid Akanda — Portfolio',
    description: 'MS in Economics & Quantitative Analysis at DePaul University. Open to Analyst & Coordinator Roles.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
