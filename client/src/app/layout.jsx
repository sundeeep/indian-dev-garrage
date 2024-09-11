import "./globals.css";
import Provider from "./Provider";

export const metadata = {
  title: "Indian Dev Garrage",
  description: "Indian Cloud IDE for the indian developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
