'use client'

import useThemeStore from "./store/theme.store";

export default function Home() {

  const theme = useThemeStore((state) => state.theme)
  const toggelTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <div>
      <div className={`flex items-center justify-center font-sans  ${theme === 'light' ? 'bg-yellow-200 text-zinc-700' : 'bg-black text-white'} `}>
        <h1>
          Current Theme: {theme}
        </h1>

      </div>
      <button className="mt-10 text-center px-4 py-4 rounded-2xl block bg-zinc-600" onClick={toggelTheme}> toogle theme:{theme} </button>
    </div>
  );
}
