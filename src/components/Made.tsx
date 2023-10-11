import Image from "next/image";
export function Made() {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-semibold text-3xl mt-10 hover:underline ">
          Shows you might like
        </h2>
        <button className="font-semibold text-xl text-zinc-400 hover:text-zinc-100 hover:underline mt-10">
          Show all
        </button>
      </div>

      <div className="grid grid-cols-7 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            alt="capa album"
            src="/1.1.png"
            width={104}
            height={104}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            alt="capa album"
            src="/2.2.png"
            width={104}
            height={104}
          />
          <strong className="font-semibold"> Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </span>
        </a>{" "}
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            alt="capa album"
            src="/3.3.png"
            width={104}
            height={104}
          />
          <strong className="font-semibold"> Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </span>
        </a>{" "}
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            alt="capa album"
            src="/4.4.png"
            width={104}
            height={104}
          />
          <strong className="font-semibold"> Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </span>
        </a>{" "}
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            alt="capa album"
            src="/5.5.png"
            width={104}
            height={104}
          />
          <strong className="font-semibold"> Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            alt="capa album"
            src="/6.6.png"
            width={104}
            height={104}
          />
          <strong className="font-semibold"> Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </span>
        </a>{" "}
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <Image
            className="w-full"
            alt="capa album"
            src="/7.7.png"
            width={104}
            height={104}
          />
          <strong className="font-semibold"> Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">
            Wallows, COIN, girl in red and more
          </span>
        </a>
      </div>
    </>
  );
}
