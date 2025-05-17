import "./globals.css";


export const metadata = {
  title: "Gamefic",
icons: {
  // icon: "./favicon.ico", 
  icon: "/logoGamefic.png", 
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
