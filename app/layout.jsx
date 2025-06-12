import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthProvider from "./components/AuthProvider";

export const metadata = {
  title: "Property Website",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />

          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
