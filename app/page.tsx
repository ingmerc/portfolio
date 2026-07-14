import Social from "@/components/Social";

export default function Home() {
  return (
    <main className="bg-black text-white">


      {/* HERO */}
      <section className="flex min-h-screen items-center justify-center px-6 text-center">

        <div className="max-w-5xl">

          <p className="mb-8 text-sm uppercase tracking-[0.5em] text-gray-400">
            Digital Creator • Fragrance Student
          </p>


          <h1 className="text-6xl font-bold leading-tight md:text-8xl">
            Cinema.
            <br />
            Profumi.
            <br />
            Stile.
          </h1>


          <p className="mx-auto mt-10 max-w-2xl text-xl text-gray-400">
            Racconto storie attraverso immagini, fragranze e dettagli.
            Un viaggio tra arte, identità e creatività.
          </p>


          <button className="mt-12 rounded-full border border-white px-10 py-4 transition hover:bg-white hover:text-black">
            Scopri il mio mondo
          </button>

        </div>

      </section>





      {/* CHI SONO */}
      <section className="mx-auto max-w-5xl px-6 py-32">

        <h2 className="text-5xl font-bold">
          Chi sono
        </h2>


        <p className="mt-8 text-lg leading-relaxed text-gray-400">

          Sono un creator digitale appassionato di cinema,
          profumeria e stile.

          <br /><br />

          Il cinema mi ha insegnato il valore delle immagini,
          la profumeria quello delle emozioni invisibili,
          lo stile quello dell'identità personale.

          <br /><br />

          Sto costruendo il mio percorso per diventare profumiere,
          studiando materie prime, accordi olfattivi
          e tecniche di composizione.

        </p>

      </section>






      {/* UNIVERSO */}
      <section className="px-6 py-20">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Il mio universo
        </h2>


        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">



          <div className="rounded-2xl border border-gray-800 p-8">

            <h3 className="text-3xl">
              🎬 Cinema
            </h3>


            <p className="mt-6 text-gray-400">
              Film, personaggi e mondi immaginari.
              Analizzo estetica, fotografia,
              simbolismo e storytelling.
            </p>

          </div>





          <div className="rounded-2xl border border-gray-800 p-8">

            <h3 className="text-3xl">
              🌿 Profumi
            </h3>


            <p className="mt-6 text-gray-400">
              Il linguaggio invisibile delle emozioni.
              Recensioni, materie prime,
              profumi di nicchia e percorso creativo.
            </p>

          </div>





          <div className="rounded-2xl border border-gray-800 p-8">

            <h3 className="text-3xl">
              🕴 Stile
            </h3>


            <p className="mt-6 text-gray-400">
              Eleganza, identità e dettagli.
              Lo stile come forma di comunicazione personale.
            </p>

          </div>



        </div>

      </section>







      {/* PERCORSO PROFUMIERE */}
      <section className="mx-auto max-w-5xl px-6 py-32">


        <h2 className="text-5xl font-bold">
          Alla ricerca dell'essenza
        </h2>



        <p className="mt-8 text-lg text-gray-400">

          La profumeria è un'arte fatta di memoria,
          emozioni e creatività.

          <br /><br />

          Sto studiando:

        </p>



        <ul className="mt-8 space-y-4 text-gray-300">

          <li>• Famiglie olfattive</li>
          <li>• Materie prime naturali e sintetiche</li>
          <li>• Piramide olfattiva</li>
          <li>• Creazione degli accordi</li>
          <li>• Tecniche di valutazione delle fragranze</li>

        </ul>


      </section>








      {/* ARTICOLI */}
      <section className="px-6 py-32">


        <h2 className="mb-16 text-center text-5xl font-bold">
          Ultimi contenuti
        </h2>



        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">



          <article className="rounded-2xl border border-gray-800 p-8">

            <p className="text-sm text-gray-500">
              Cinema + Profumi
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Il profumo di Hannibal Lecter            </h3>

          </article>




          <article className="rounded-2xl border border-gray-800 p-8">

            <p className="text-sm text-gray-500">
              Profumeria
            </p>

            <h3 className="mt-4 text-2xl font-bold">
            Che profumo indossare con questo caldo?
            </h3>

          </article>





          <article className="rounded-2xl border border-gray-800 p-8">

            <p className="text-sm text-gray-500">
              Stile
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              L'eleganza oltre
              l'apparenza
            </h3>

          </article>



        </div>


      </section>







      {/* SOCIAL */}
      <Social />






      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-6 py-12 text-center">


        <p className="text-gray-400">
          Cinema • Profumi • Stile
        </p>



        <div className="mt-8 flex justify-center gap-8">


          <a
            href="https://www.tiktok.com/@il_leviatano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            TikTok
          </a>



          <a
            href="https://www.instagram.com/TUO_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-white"
          >
            Instagram
          </a>



        </div>



        <p className="mt-8 text-sm text-gray-600">
          © 2026
        </p>


      </footer>


    </main>
  );
}