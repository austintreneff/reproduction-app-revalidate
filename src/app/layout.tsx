export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
