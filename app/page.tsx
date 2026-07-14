import Social from "@/components/Social";

export default function Home() {
  return (
    <main className="bg-black text-white">


      {/* HERO */}
      <section className="flex min-h-screen items-center justify-center px-6 text-center">

        <div className="max-w-5xl">


          <p className="mb-8 text-sm uppercase tracking-[0.6em] text-gray-400">
            Il Leviatano
          </p>


          <h1 className="text-7xl font-bold uppercase leading-tight md:text-9xl">
            IL
            <br />
            LEVIATANO
          </h1>


          <p className="mt-10 text-2xl text-gray-300">
            Cinema • Profumi • Stile
          </p>



          <div className="mx-auto mt-10 max-w-2xl">

            <p className="text-xl text-gray-300">
              Ciao, sono Alessandro.
            </p>


            <p className="mt-6 text-lg leading-relaxed text-gray-400">

              Racconto storie attraverso immagini,
              fragranze e dettagli.

              <br /><br />

              Un viaggio tra cinema, profumeria e stile,
              alla ricerca dell'identità che si nasconde
              dietro ogni emozione.

            </p>


          </div>



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


          Sono Alessandro, la persona dietro Il Leviatano.


          <br /><br />


          Ho creato questo spazio per raccontare ciò
          che mi affascina da sempre: il cinema,
          il mondo delle fragranze e lo stile come
          forma di espressione.


          <br /><br />


          Sto costruendo il mio percorso per diventare
          profumiere, studiando materie prime,
          accordi olfattivi e tecniche di composizione.


          <br /><br />


          Il Leviatano nasce dall'idea che ogni film,
          ogni profumo e ogni dettaglio possano raccontare
          una parte della nostra identità.


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

              Il profumo di Hannibal Lecter

            </h3>


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

              L'eleganza oltre l'apparenza

            </h3>


          </article>



        </div>


      </section>









      {/* SOCIAL */}
      <Social />









      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-6 py-12 text-center">


        <p className="text-xl font-bold tracking-[0.3em] text-gray-300">
          IL LEVIATANO
        </p>



        <p className="mt-2 text-gray-600">
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
          © 2026 Il Leviatano
        </p>


      </footer>


    </main>
  );
}