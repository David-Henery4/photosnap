import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700", "500", "300", "400", "600"],
  variable: "--font-dmSans"
})

export {
  dmSans
}