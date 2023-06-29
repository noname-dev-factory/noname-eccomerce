import { Navbar } from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
