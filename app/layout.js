import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Eventry App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Navbar />
        <main class="py-8">{children}</main>
      </body>
    </html>
  );
}
