import "./globals.css";

export const metadata = {
  title: "Property Website",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
