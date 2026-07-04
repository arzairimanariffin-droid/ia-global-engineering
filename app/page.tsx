export default function Home() {
  const services = [
    {
      title: "Electrical Installation",
      desc: "Pemasangan elektrik untuk bangunan domestik, komersial dan industri termasuk DB, kabel, isolator, lampu, soket kuasa dan sistem agihan.",
    },
    {
      title: "Fire Protection System",
      desc: "Servis, pemeriksaan dan penyelenggaraan sistem pencegah kebakaran seperti fire alarm, fire extinguisher, hose reel dan komponen berkaitan.",
    },
    {
      title: "Testing & Commissioning",
      desc: "Kerja pengujian seperti insulation resistance test, continuity test, earth test, functional test dan pemeriksaan keselamatan pepasangan.",
    },
    {
      title: "HT / LV Electrical Support",
      desc: "Sokongan kerja teknikal berkaitan sistem voltan rendah dan voltan tinggi termasuk bilik suis, feeder pillar, DB, kabel dan peralatan agihan.",
    },
    {
      title: "Facility Maintenance",
      desc: "Penyelenggaraan fasiliti bangunan secara berkala, pemeriksaan teknikal, tindakan pembaikan dan penyediaan laporan kerja.",
    },
    {
      title: "Genset & Temporary Power",
      desc: "Sokongan bekalan kuasa sementara, genset, DB sementara, feeder pillar dan keperluan elektrik untuk tapak kerja atau acara.",
    },
  ];

  const strengths = [
    "Technical site inspection before work execution",
    "Clear method statement and work planning",
    "Safety-focused working practice",
    "Proper testing, checking and reporting",
    "Responsive support for facility operation",
    "Practical engineering solution based on site condition",
  ];

  const workProcess = [
    {
      step: "01",
      title: "Site Assessment",
      desc: "Lawatan tapak, semakan keadaan sebenar dan pengumpulan maklumat teknikal.",
    },
    {
      step: "02",
      title: "Technical Proposal",
      desc: "Cadangan kerja, skop teknikal, kaedah pelaksanaan dan anggaran kos.",
    },
    {
      step: "03",
      title: "Work Execution",
      desc: "Pelaksanaan kerja mengikut keperluan tapak, keselamatan dan amalan teknikal yang baik.",
    },
    {
      step: "04",
      title: "Testing & Report",
      desc: "Pemeriksaan akhir, pengujian, pengesahan fungsi dan penyediaan laporan kerja.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="IA Global Engineering Logo"
              className="h-14 w-14 rounded-xl bg-white p-2 shadow-lg"
            />
            <div>
              <p className="text-base font-bold tracking-wide">
                IA Global Engineering
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                M&E Services
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#services" className="hover:text-orange-400">
              Services
            </a>
            <a href="#about" className="hover:text-orange-400">
              About
            </a>
            <a href="#process" className="hover:text-orange-400">
              Process
            </a>
            <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
          </nav>

          <a
            href="https://wa.me/+60 19-262 1497"
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Request Quotation
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-300">
              Mechanical & Electrical Engineering Services
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Professional Engineering Support for Building, Facility & Site
              Operations
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              IA Global Engineering menyediakan perkhidmatan kejuruteraan
              mekanikal dan elektrikal, penyelenggaraan fasiliti, sistem
              pencegah kebakaran, pengujian teknikal dan sokongan operasi tapak
              secara profesional.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/60192621494"
                className="rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                WhatsApp for Quotation
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
              >
                View Our Services
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-orange-400">M&E</p>
                <p className="mt-1 text-sm text-slate-400">
                  Engineering Works
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-400">T&C</p>
                <p className="mt-1 text-sm text-slate-400">
                  Testing & Checking
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-400">QSHE</p>
                <p className="mt-1 text-sm text-slate-400">
                  Safety Oriented
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6">
              <img
                src="/logo.png"
                alt="IA Global Engineering Logo"
                className="mx-auto w-48"
              />
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-[#0b1024] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Company Principle
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Quality. Safety. Integrity.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Kami memberi penekanan kepada kerja yang kemas, selamat,
                terancang dan mudah disemak melalui laporan teknikal yang jelas.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-bold text-orange-400">Professional</p>
                <p className="mt-2 text-sm text-slate-400">
                  Kerja dibuat secara teratur dan bertanggungjawab.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-bold text-orange-400">Reliable</p>
                <p className="mt-2 text-sm text-slate-400">
                  Sokongan teknikal untuk operasi tapak dan fasiliti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Comprehensive Mechanical & Electrical Services
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Kami menyediakan sokongan teknikal untuk kerja pemasangan,
              pemeriksaan, penyelenggaraan, pengujian dan operasi fasiliti
              bangunan.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white transition group-hover:bg-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              About IA Global
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Practical engineering solution with professional work discipline
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              IA Global Engineering memberi tumpuan kepada penyelesaian teknikal
              yang praktikal, selamat dan sesuai dengan keadaan sebenar di tapak.
              Setiap kerja dimulakan dengan pemeriksaan, perancangan dan
              cadangan kaedah kerja yang jelas.
            </p>
            <p>
              Dalam kerja M&E dan penyelenggaraan fasiliti, kepercayaan pelanggan
              dibina melalui disiplin kerja, dokumentasi yang baik, tindakan
              pantas dan komunikasi yang jelas. Itulah asas pendekatan kerja IA
              Global Engineering.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"
            >
              <div className="mb-4 h-2 w-12 rounded-full bg-orange-500" />
              <p className="font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="bg-[#0b1024] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Work Process
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Kaedah kerja yang teratur dari lawatan tapak hingga laporan akhir
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((item) => (
              <div
                key={item.step}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7"
              >
                <p className="text-4xl font-bold text-orange-400">
                  {item.step}
                </p>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                Engineering Support
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Supporting your facility operation with reliable technical
                service
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-300">
              Sesuai untuk bangunan komersial, fasiliti operasi, tapak kerja,
              acara, sistem elektrik, sistem pencegah kebakaran dan kerja
              penyelenggaraan berkala.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Get in touch with IA Global Engineering
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Hubungi kami untuk lawatan tapak, sebut harga, sokongan teknikal,
              kerja penyelenggaraan atau pertanyaan berkaitan perkhidmatan M&E.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Phone / WhatsApp
                </p>
                <p className="mt-2 text-xl font-bold">019-262 1494</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Email
                </p>
                <p className="mt-2 text-xl font-bold">
                  arzairiman.ariffin@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Location
                </p>
                <p className="mt-2 text-xl font-bold">Selangor, Malaysia</p>
              </div>
            </div>

            <a
              href="https://wa.me/60192621494"
              className="mt-8 block rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="IA Global Engineering Logo"
              className="h-12 w-12 rounded-lg bg-white p-1"
            />
            <div>
              <p className="font-bold">IA Global Engineering</p>
              <p className="text-sm text-slate-500">
                Mechanical & Electrical Engineering Services
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 IA Global Engineering. All rights reserved.
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/60192621494"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-orange-500 px-6 py-4 font-bold text-white shadow-2xl shadow-orange-500/30 transition hover:-translate-y-1 hover:bg-orange-600"
      >
        WhatsApp
      </a>
    </main>
  );
}