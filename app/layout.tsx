import "./globals.css";
import Header from "@/components/header/header";
import HeaderBackground from "@/components/header/headerBackground";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
