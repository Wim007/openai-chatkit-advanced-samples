import clsx from "clsx";

import { ChatKitPanel } from "./ChatKitPanel";
import { ColorScheme } from "../hooks/useColorScheme";
import { useFacts } from "../hooks/useFacts";

export default function Home({
  scheme,
  handleThemeChange,
}: {
  scheme: ColorScheme;
  handleThemeChange: (scheme: ColorScheme) => void;
}) {
  const { refresh, performAction } = useFacts();

  const containerClass = clsx(
    "min-h-screen w-full bg-gradient-to-br from-indigo-950 via-purple-800 to-blue-800 text-slate-100 transition-colors duration-500",
    scheme === "dark" ? "brightness-110" : "brightness-100"
  );

  return (
    <div className={containerClass}>
      <div className="mx-auto flex min-h-screen w-full items-center justify-center px-4 py-6 sm:px-6">
        <div className="relative flex h-[calc(100vh-3rem)] w-full max-w-[430px] flex-col overflow-hidden rounded-[32px] bg-white/85 text-slate-900 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.6)] ring-1 ring-white/30 backdrop-blur dark:bg-slate-950/80 dark:text-slate-50 dark:ring-slate-900/40">
          <div className="absolute inset-x-6 top-0 h-24 bg-gradient-to-b from-white/20 via-white/10 to-transparent blur-3xl" aria-hidden />

          <header className="relative z-10 flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-400 to-blue-400 text-lg font-semibold text-white shadow-md ring-2 ring-white/60">
                M
              </div>
              <div className="space-y-0.5">
                <p className="text-xs uppercase tracking-wide text-indigo-400 dark:text-indigo-300">
                  online / ik luister
                </p>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  Matti
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-full border border-indigo-100/60 bg-indigo-500/10 px-3.5 py-2 text-sm font-semibold text-indigo-800 shadow-sm backdrop-blur transition hover:bg-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 dark:border-indigo-400/40 dark:text-indigo-100 dark:hover:bg-indigo-500/25">
                SOS
              </button>
              <button className="rounded-full border border-white/50 bg-white/10 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800/70">
                Info
              </button>
            </div>
          </header>

          <main className="relative z-10 flex flex-1 flex-col px-5 pb-5">
            <div className="flex-1 overflow-hidden rounded-2xl bg-gradient-to-b from-indigo-50/70 via-white/60 to-white/80 p-2 shadow-inner ring-1 ring-white/40 backdrop-blur-sm dark:from-slate-900/60 dark:via-slate-900/40 dark:to-slate-950/60 dark:ring-slate-800/60">
              <ChatKitPanel
                theme={scheme}
                onWidgetAction={performAction}
                onResponseEnd={refresh}
                onThemeRequest={handleThemeChange}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
