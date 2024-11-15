import Navbar from "@/components/Navbar";
import "./globals.css";
import { dbConnect } from "@/services/mongo";

export const metadata = {
  title: "Eventry App",
  description: "",
};

export default async function RootLayout({ children }) {
  await dbConnect();

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
