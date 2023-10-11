import {
  AlignJustifyIcon,
  ArrowRight,
  Home as HomeIcon,
  Library,
  Plus,
  Search,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-80 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3  text-sm font-semibold text-zinc-300 hover:text-zinc-50  "
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-50 "
        >
          <Search />
          Search
        </a>
        <div>
          <a
            href=""
            className="flex items-center gap-3 text-sm font-semibold  text-zinc-300 hover:text-zinc-50 "
          >
            <Library />
            Your Library
            <Plus className="ml-20 h-5 rounded-full hover:bg-slate-900 " />
            <ArrowRight className="h-5 rounded-full hover:bg-slate-900 " />
          </a>
        </div>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-600 flex flex-col gap-3">
        <div className="flex items-center justify-center gap-4 text-sm ">
          <a href="">
            <button className="rounded-full bg-zinc-400/20 w-20 overflow-h hover:bg-white/10 transition-colors  h-7">
              Playlists
            </button>
          </a>
          <a href="">
            <button className="rounded-full bg-zinc-400/20 w-20 overflow-h hover:bg-white/10 transition-colors  h-7">
              Podcasts
            </button>
          </a>
          <a href="">
            <button className="rounded-full bg-zinc-400/20 w-20 overflow-h hover:bg-white/10 transition-colors  h-7">
              Artists
            </button>
          </a>
        </div>
        <div className="mt-3 mb-3 flex justify-between">
          <a
            href=""
            className=" items-center text-sm font-semibold text-zinc-300 hover:text-zinc-50 "
          >
            <Search className="w-5" />
          </a>
          <a
            href=""
            className="flex items-center text-sm font-semibold text-zinc-300 hover:text-zinc-50  "
          >
            Recents
            <AlignJustifyIcon className="ml-2" />
          </a>
        </div>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Music English Amanda
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Amanda
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Good Vibes
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Rock
        </a>
      </nav>
    </aside>
  );
}
