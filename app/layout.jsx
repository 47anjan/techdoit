import "./globals.css";
import { poppins } from "@/fonts/fonts";
import "aos/dist/aos.css"; // Import AOS CSS file

import AnimationProvider from "./AnimationProvider";

export const metadata = {
  title: "Techdoit",
  description: "Technology & IT Solutions - Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AnimationProvider>
          {/* <Header />
          {children}
          <Footer /> */}
          hello
        </AnimationProvider>
      </body>
    </html>
  );
}
