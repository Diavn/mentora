import React from "react";
import { Landmark, Users, BookOpen, Award, Lightbulb, MapPin, Globe } from "lucide-react";

export default function MentoraHubsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100 font-inter">
      <header className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-indigo-700 dark:text-indigo-400">Mentora Study Hubs</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
          Building a national network of <strong>34 Study Hubs</strong> across Vietnam – providing open learning spaces, mentoring, and AI–STEM education programs. Mentora is designed as a scalable and sustainable model bridging Vietnam and the United States.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Vision & Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <Landmark className="w-8 h-8 text-indigo-600 mb-3"/>
            <h3 className="font-semibold mb-2">Educational Equity</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Each Hub creates access for students in underserved provinces, closing the gap between rural and urban learning opportunities.</p>
          </div>
          <div className="rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <Users className="w-8 h-8 text-emerald-600 mb-3"/>
            <h3 className="font-semibold mb-2">Mentorship</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Local mentors and trained educators guide students, while connecting them with global mentor networks in AI and STEM.</p>
          </div>
          <div className="rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <Lightbulb className="w-8 h-8 text-amber-500 mb-3"/>
            <h3 className="font-semibold mb-2">Innovation Labs</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Hubs include maker-spaces and STEM labs to foster creativity, problem solving, and AI-driven projects for learners.</p>
          </div>
          <div className="rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <BookOpen className="w-8 h-8 text-purple-600 mb-3"/>
            <h3 className="font-semibold mb-2">Curriculum</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Study Hubs deliver bilingual AI–STEM curricula, preparing students for scholarships, Olympiads, and global opportunities.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Roadmap 2025–2035</h2>
        <ul className="space-y-4 list-disc pl-6 text-sm text-slate-600 dark:text-slate-300">
          <li><strong>2025–2026:</strong> Launch 5 pilot Hubs in key provinces, train 50+ local mentors.</li>
          <li><strong>2027–2029:</strong> Expand to 15 provinces, standardize franchise model, partner with schools & NGOs.</li>
          <li><strong>2030–2035:</strong> Full 34-Hub network, integrate AI–STEM summer camps and U.S.–Vietnam exchanges.</li>
        </ul>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Scholarships & Partnerships</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <Award className="w-8 h-8 text-rose-600 mb-3"/>
            <h3 className="font-semibold mb-2">MEI Foundation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Scholarship programs for talented students in Vietnam, with a goal of 500 scholarships awarded by 2035.</p>
          </div>
          <div className="rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <Globe className="w-8 h-8 text-cyan-600 mb-3"/>
            <h3 className="font-semibold mb-2">Global Partnerships</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Collaborations with universities, accelerators, and corporate CSR programs to ensure financial sustainability.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © Mentora Study Hubs – Dẫn đường tư duy, gieo mầm tương lai
      </footer>
    </div>
  );
}
