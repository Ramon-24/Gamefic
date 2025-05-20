import { Hero } from "./_components/Hero";
import { Inform } from "./_components/Informativo";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Home() {
  return (
    <main>
      <Hero/>
      <Inform/>
      {/* <h1>A Gamefic tá online!!!!</h1>
      <i class="bi bi-hand-thumbs-up"></i>
      <i class="bi bi-palette"></i>
      <i class="bi bi-journal-text"></i>
      <i class="bi bi-puzzle"></i> */}
    </main>
  );
}
