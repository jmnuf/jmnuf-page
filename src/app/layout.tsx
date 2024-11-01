import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "@jmnuf",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const foycon_classes =
    "col-span-1 h-full bg-purple-600 border-[6px] border-black";
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className="flex h-[100vh] w-full items-center justify-center bg-slate-300">
            <div className="grid h-1/2 max-h-[60%] w-3/4 min-w-[720px] grid-cols-8 gap-0">
              {/* foycon left */}
              <div
                className={`${foycon_classes} animate-slideInN200 rounded-l-[25px] border-r`}
              ></div>
              {/* -- Screen -- */}
              <div className="col-span-6 h-full border-4 border-black">
                <div className="flex h-full w-full border-8 border-slate-600 transition-[background-color] delay-150 duration-[1s]">
                  <div className="flex h-full w-full animate-[fadeIn_500ms_ease-in_1s_forwards] p-1 opacity-0">
                    {children}
                  </div>
                </div>
              </div>
              {/* foycon right */}
              <div
                className={`${foycon_classes} animate-[slideInN200_1.25s_ease-in-out_forwards] rounded-r-[25px] border-l delay-[1.5s]`}
              ></div>
            </div>
          </div>
        </TRPCReactProvider>
        <footer className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-slate-600 px-4 pb-1 pt-2 text-slate-100">
          <p>
            {"Uicons by "}
            <a href="https://www.flaticon.com/uicons">Flaticon</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
