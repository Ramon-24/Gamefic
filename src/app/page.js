import { Hero } from "./_components/Hero";
import { Inform } from "./_components/Informativo";
import { Config } from "./_components/Config";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Home() {
  return (
    <main>
      <Hero/>
      <Inform/>
      <Config/>
    </main>
  );
}
