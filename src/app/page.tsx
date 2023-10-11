import { Afternoon } from "@/components/Afternoon";
import { Footer } from "@/components/Footer";
import { Made } from "@/components/Made";
import { Sidebar } from "@/components/Sidebar";
import { Bell, ChevronLeft, ChevronRight, Users2 } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1  ">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-4 ">
              <button className="rounded-full bg-black/20 p-1 ">
                <ChevronLeft />
              </button>
              <button className="rounded-full bg-black/20 p-1">
                <ChevronRight />
              </button>
            </div>
            <div>
              <button className="flex gap-6 ">
                <Bell className="rounded-ful " />
                <Users2 className="rounded-full bg-black/20 " />
              </button>
            </div>
          </div>

          <Afternoon />
          <Made />
        </main>
      </div>
      <Footer />
    </div>
  );
}
