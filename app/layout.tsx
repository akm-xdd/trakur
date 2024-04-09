import "./globals.css";

export const metadata = {
  title: "Trakur",
  description: "A simple yet powerful Trello Clone!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f5f6f8]">{children}</body>
    </html>
  );
}
