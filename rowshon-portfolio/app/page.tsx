import Header from "./components/Header";
import profileData from "../content/profile.json";
import { client } from "../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Youtube, Facebook, Instagram, Linkedin, Mail, Award, Film, Heart } from "lucide-react";
import Image from "next/image";

// Sort helper: newest year first. Non-numeric years (e.g. "In Production") go last.
const yearValue = (y?: string | null) => {
  const n = parseInt(y ?? "", 10);
  return Number.isNaN(n) ? 0 : n;
};

export default async function Home() {
  // Load all three collections from TinaCMS
  const [filmsRes, activismRes, awardsRes] = await Promise.all([
    client.queries.filmsConnection(),
    client.queries.activismConnection(),
    client.queries.awardsConnection(),
  ]);

  const films = (filmsRes.data.filmsConnection.edges ?? [])
    .flatMap((e) => (e?.node ? [e.node] : []))
    .sort((a, b) => yearValue(b.year) - yearValue(a.year));

  const activism = (activismRes.data.activismConnection.edges ?? [])
    .flatMap((e) => (e?.node ? [e.node] : []))
    .sort((a, b) => yearValue(b.year) - yearValue(a.year));

  const awards = (awardsRes.data.awardsConnection.edges ?? [])
    .flatMap((e) => (e?.node ? [e.node] : []))
    .sort((a, b) => yearValue(b.year) - yearValue(a.year));

  return (
    <main className="min-h-screen">
      <Header email={profileData.email} />

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/20">
              International Emmy® Winner
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {profileData.name}
            </h1>
            <p className="text-lg text-amber-400 font-medium">
              {profileData.title}
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              {profileData.bio}
            </p>

            {/* Social Icons & Email CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a href={`mailto:${profileData.email}`} className="inline-flex items-center gap-2 px-5 py-3 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400 transition">
                <Mail className="w-5 h-5" />
                {profileData.email}
              </a>
              <div className="flex items-center gap-3 pl-2">
                <a href={profileData.socials.youtube} target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/50 hover:text-amber-400 transition">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href={profileData.socials.facebook} target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/50 hover:text-amber-400 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={profileData.socials.instagram} target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/50 hover:text-amber-400 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/50 hover:text-amber-400 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src={profileData.profileImage}
                alt={profileData.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Films Section (from TinaCMS: Films & Documentaries) */}
      {films.length > 0 && (
        <section id="films" className="scroll-mt-20 py-20 bg-slate-900/50 border-t border-slate-800/80 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Film className="w-6 h-6 text-amber-500" />
              <h2 className="text-3xl font-bold text-white">Selected Filmography</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {films.map((film) => (
                <div
                  key={film.id}
                  className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/40 transition"
                >
                  {film.poster && (
                    <div className="relative aspect-[3/2] w-full">
                      <Image
                        src={film.poster}
                        alt={film.title ?? ""}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
                      {[film.category, film.year].filter(Boolean).join(" • ")}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{film.title}</h3>
                    {film.role && <p className="text-sm text-amber-400/90">{film.role}</p>}
                    {film.synopsis && (
                      <div className="text-slate-400 text-sm space-y-3">
                        <TinaMarkdown content={film.synopsis} />
                      </div>
                    )}
                    {film.awards && film.awards.length > 0 && (
                      <ul className="text-xs text-amber-400/90 space-y-1 pt-2 border-t border-slate-900">
                        {film.awards.map((a, i) => (
                          <li key={i}>{a}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Community Activism Section (from TinaCMS: Activism) */}
      {activism.length > 0 && (
        <section id="activism" className="scroll-mt-20 py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-amber-500" />
            <h2 className="text-3xl font-bold text-white">Community & Housing Justice</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {activism.map((item) => (
              <article
                key={item.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden"
              >
                {item.image && (
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={item.image}
                      alt={item.title ?? ""}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8 space-y-3">
                  {item.year && (
                    <p className="text-amber-400 text-sm font-semibold">{item.year}</p>
                  )}
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  {item.description && (
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
                      {item.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Awards Section (from TinaCMS: Awards) */}
      {awards.length > 0 && (
        <section id="awards" className="scroll-mt-20 py-20 bg-slate-900/50 border-t border-slate-800/80 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-amber-500" />
              <h2 className="text-3xl font-bold text-white">Awards & Recognitions</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((a) => (
                <div
                  key={a.id}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-2"
                >
                  {a.badge && (
                    <div className="relative h-16 w-16 mb-2">
                      <Image
                        src={a.badge}
                        alt={a.title ?? ""}
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>
                  )}
                  {a.year && (
                    <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
                      {a.year}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{a.title}</h3>
                  {a.organization && (
                    <p className="text-slate-400 text-sm">{a.organization}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-slate-800 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-lg font-bold text-white">Rowshon Ara Sarker</p>
            <p className="text-sm text-slate-400">Email: <a href={`mailto:${profileData.email}`} className="text-amber-400 hover:underline">{profileData.email}</a></p>
          </div>
          <div className="flex gap-4">
            <a href={profileData.socials.youtube} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition"><Youtube className="w-5 h-5" /></a>
            <a href={profileData.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition"><Facebook className="w-5 h-5" /></a>
            <a href={profileData.socials.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition"><Instagram className="w-5 h-5" /></a>
            <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400 transition"><Linkedin className="w-5 h-5" /></a>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Rowshon Ara Sarker. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
