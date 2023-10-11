import { Play } from "lucide-react";
import Image from "next/image";
export function Afternoon() {
  return (
    <>
      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
      <div className="grid grid-cols-3 gap-4 mt-4 ">
        <a
          href=""
          className="bg-white/5 rounded group flex items-center gap-4 overflow-h hover:bg-white/10 transition-colors   "
        >
          <Image alt="capa album" src="/1.png" width={104} height={104} />
          <strong>Anime</strong>
          <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible  ">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded group flex items-center gap-4 overflow-h hover:bg-white/10 transition-colors   "
        >
          <Image alt="capa album" src="/2.png" width={104} height={104} />
          <strong>Historias em Ingles com o Duolingo</strong>
          <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible  ">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded group flex items-center gap-4 overflow-h hover:bg-white/10 transition-colors   "
        >
          <Image alt="capa album" src="/3.png" width={104} height={104} />
          <strong>Amanda </strong>
          <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible  ">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded group flex items-center gap-4 overflow-h hover:bg-white/10 transition-colors   "
        >
          <Image alt="capa album" src="/4.png" width={104} height={104} />
          <strong>Good Vibes</strong>
          <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible  ">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded group flex items-center gap-4 overflow-h hover:bg-white/10 transition-colors   "
        >
          <Image alt="capa album" src="/5.png" width={104} height={104} />
          <strong>Liked Songs</strong>
          <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible  ">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded group flex items-center gap-4 overflow-h hover:bg-white/10 transition-colors   "
        >
          <Image alt="capa album" src="/6.png" width={104} height={104} />
          <strong>Rock</strong>
          <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible  ">
            <Play />
          </button>
        </a>
      </div>
    </>
  );
}
