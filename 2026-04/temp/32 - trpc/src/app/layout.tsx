import "./globals.css";
import { TrpcProvider } from "@/utils/trpc-provider";

export const metadata = {
  title: "tRPC App",
  description: "Example tRPC + Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TrpcProvider>{children}</TrpcProvider>
      </body>
    </html>
  );
}