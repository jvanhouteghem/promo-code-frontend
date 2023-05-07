import {CardHeader} from "@mui/material";
import {Header} from "@/app/layouts/header/header";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <body>{children}</body>
    </>
  )
}
