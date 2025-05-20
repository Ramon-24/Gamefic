import { Hero } from "./_components/Hero";
import { Inform } from "./_components/Informativo";
import { Config } from "./_components/Config";
import { Contato } from "./_components/Contato";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Home() {
  return (
    <main>
      <Hero/>
      <Inform/>
      <Config/>
      <Contato/>
    </main>
  );
}
