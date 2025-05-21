import { Hero } from "./_components/Hero";
import { Inform } from "./_components/Informativo";
import { Coment } from "./_components/Coment";
import { Contato } from "./_components/Contato";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Home() {
  return (
    <main>
      <Hero/>
      <Inform/>
      <Coment/>
      <Contato/>
    </main>
  );
}
