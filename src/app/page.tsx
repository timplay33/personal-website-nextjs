import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Home } from "./Home";
import "./page.css";

export default function Page() {
  return (
    <main className="bg-background text-text flex flex-col">
      <Home />
    </main>
  );
}
