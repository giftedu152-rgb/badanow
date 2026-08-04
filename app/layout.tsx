import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"바다나우 | 부산 해양 관광 정보",description:"부산 5개 해수욕장의 해양 정보와 활동별 추천"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
