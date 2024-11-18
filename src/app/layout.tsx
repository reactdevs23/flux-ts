import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "FLUX.1",
  description: "FLUX.1: Revolutionary AI Image Generation",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={` antialiased bg-primary min-h-screen font-sf text-black`}
      >
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
