export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <img
  src="/logo.png"
  alt="IA Global Engineering Logo"
  className="w-44 mb-8 rounded-xl bg-white p-3"
/>
        <p className="text-orange-400 font-semibold mb-3">
          Mechanical & Electrical Engineering Services
        </p>

        <h1 className="text-4xl md:text-6xl font-bold">
          IA Global Engineering
        </h1>

        <p className="mt-6 text-slate-300 text-lg max-w-3xl">
          Menyediakan perkhidmatan kejuruteraan mekanikal dan elektrikal,
          penyelenggaraan fasiliti, sistem pencegah kebakaran, pengujian,
          pemeriksaan dan kerja-kerja teknikal secara profesional.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://wa.me/60192621494"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
          >
            WhatsApp Kami
          </a>

          <a
            href="#services"
            className="border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-slate-950"
          >
            Lihat Servis
          </a>
        </div>
      </section>

      <section id="services" className="bg-white text-slate-900 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Perkhidmatan Kami</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-3">
                Electrical Installation
              </h3>
              <p className="text-slate-600">
                Kerja pemasangan elektrik domestik, komersial dan industri.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-3">
                Fire Protection System
              </h3>
              <p className="text-slate-600">
                Servis, pemeriksaan dan penyelenggaraan sistem pencegah kebakaran.
              </p>
            </div>

            <div className="p-6 border rounded-2xl shadow-sm">
              <h3 className="font-bold text-xl mb-3">
                Facility Maintenance
              </h3>
              <p className="text-slate-600">
                Sokongan teknikal dan penyelenggaraan fasiliti bangunan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>

        <p className="text-slate-300">
          Untuk sebut harga, lawatan tapak atau pertanyaan teknikal, sila
          hubungi IA Global Engineering.
        </p>

        <div className="mt-6 text-slate-300 space-y-2">
          <p>Telefon: 019-262 1497</p>
          <p>Email: iaglobal.eng@gmail.com</p>
          <p>Lokasi: Selangor, Malaysia</p>
        </div>
      </section>
    </main>
  );
}