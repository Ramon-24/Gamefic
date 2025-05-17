import "./globals.css";


export const metadata = {
  title: "Gamefic",
icons: { 
  icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>

        {children}
      </body>
    </html>
  );
}
