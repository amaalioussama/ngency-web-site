// Global Modules
import Navbar from "@/modules/Global/Navbar";
import Footer from "@/modules/Global/Footer";

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
