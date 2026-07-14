export default function Social() {
    return (
      <section className="px-6 py-32">
  
        <h2 className="mb-6 text-center text-5xl font-bold">
          Seguimi
        </h2>
  
  
        <p className="mx-auto mb-16 max-w-xl text-center text-gray-400">
          Contenuti su cinema, profumi e stile.
          Seguimi nel mio viaggio creativo.
        </p>
  
  
  
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
  
  
          <div className="group rounded-2xl border border-gray-800 p-8 transition hover:border-gray-500">
  
            <p className="text-sm text-gray-500">
              Instagram Reel
            </p>
  
            <h3 className="mt-4 text-2xl font-bold">
              Cinema e profumi
            </h3>
  
            <p className="mt-4 text-gray-400">
              Analisi di personaggi, film e fragranze associate.
            </p>
  
          </div>
  
  
  
          <div className="group rounded-2xl border border-gray-800 p-8 transition hover:border-gray-500">
  
            <p className="text-sm text-gray-500">
              TikTok
            </p>
  
            <h3 className="mt-4 text-2xl font-bold">
              Il mondo delle fragranze
            </h3>
  
            <p className="mt-4 text-gray-400">
              Recensioni rapide e curiosità sulla profumeria.
            </p>
  
          </div>
  
  
  
  
          <div className="group rounded-2xl border border-gray-800 p-8 transition hover:border-gray-500">
  
            <p className="text-sm text-gray-500">
              Lifestyle
            </p>
  
            <h3 className="mt-4 text-2xl font-bold">
              Stile e identità
            </h3>
  
            <p className="mt-4 text-gray-400">
              Outfit, eleganza e ispirazioni.
            </p>
  
          </div>
  
  
        </div>
  
  
  
        <div className="mt-16 flex justify-center gap-6">
  
  
          <a
            href="https://www.instagram.com/il.leviatano/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black"
          >
            Instagram
          </a>
  
  
          <a
            href="https://tiktok.com/@il_leviatano"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-8 py-3 transition hover:bg-white hover:text-black"
          >
            TikTok
          </a>
  
  
        </div>
  
  
      </section>
    );
  }