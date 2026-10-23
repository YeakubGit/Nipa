import profileData from "../content/profile.json";
import { Youtube, Facebook, Instagram, Linkedin, Mail, Award, Film, Heart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-wider text-amber-500">
            ROWSHON ARA SARKER
          </a>
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#films" className="hover:text-amber-400 transition">Films</a>
            <a href="#activism" className="hover:text-amber-400 transition">Activism</a>
            <a href="#awards" className="hover:text-amber-400 transition">Awards</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={`mailto:${profileData.email}`} className="hidden sm:inline-flex px-4 py-2 text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition">
              Get in Touch
            </a>
          </div>
        </div>
      </header>

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

      {/* Featured Film Section */}
      <section id="films" className="py-20 bg-slate-900/50 border-t border-slate-800/80 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Film className="w-6 h-6 text-amber-500" />
            <h2 className="text-3xl font-bold text-white">Selected Filmography</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* All Alone */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">Short Film • 2024</span>
              <h3 className="text-2xl font-bold text-white">All Alone</h3>
              <p className="text-slate-400 text-sm">
                Short film documenting working-class isolation and immigrant resilience in NYC. Accrued 6 international festival selections worldwide.
              </p>
              <ul className="text-xs text-amber-400/90 space-y-1 pt-2 border-t border-slate-900">
                <li>🏆 Berlin Indie Film Festival – Best Script</li>
                <li>🏆 Roshani Int. Film Festival – Best Women Empowered Director</li>
              </ul>
            </div>

            {/* Amrao Pari */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">Documentary • 2004</span>
              <h3 className="text-2xl font-bold text-white">Amrao Pari (We Can)</h3>
              <p className="text-slate-400 text-sm">
                Groundbreaking documentary capturing the rights and struggles of underprivileged working-class children in Bangladesh.
              </p>
              <ul className="text-xs text-amber-400/90 space-y-1 pt-2 border-t border-slate-900">
                <li>🏆 International Emmy® Award 2004</li>
              </ul>
            </div>

            {/* Rodela */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">Feature Film • In Production</span>
              <h3 className="text-2xl font-bold text-white">Rodela</h3>
              <p className="text-slate-400 text-sm">
                Upcoming feature film inspired by true community organizing narratives and the courageous stories of immigrant workers.
              </p>
              <ul className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-900">
                <li>• Current Feature Project</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Activism Section */}
      <section id="activism" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-6 h-6 text-amber-500" />
          <h2 className="text-3xl font-bold text-white">Community & Housing Justice</h2>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">DRUM - Desis Rising Up & Moving</h3>
            <p className="text-amber-400 text-sm font-semibold">Bronx Community & Housing Justice Organizer</p>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Organizing South Asian and Indo-Caribbean low-income working-class communities in New York. Rowshon builds sustainable leadership among working-class immigrant women and families facing housing instability.
            </p>
          </div>
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
            <h4 className="text-lg font-bold text-white">Official NYC Proclamations (2022)</h4>
            <p className="text-slate-400 text-sm">
              Honored by NYC Council Member Amanda Farías (District 18) and Assembly Member Karines Reyes (District 87) for outstanding contributions to working-class women leadership and community development.
            </p>
          </div>
        </div>
      </section>

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