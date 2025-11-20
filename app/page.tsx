import Section from "@/components/Section";
import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "WIP - this website",
    period: "2025",
    summary:
      "Long overdue personal website that shares a bit about me and what I am working on. May expand in the future to share other thoughts.",
    stack: ["React, Hosted with Vercel"],
    links: [
      { label: "GitHub", href: "https://github.com/" },
    ],
  },
  {
    title: "Card Games with Sockets",
    period: "2025",
    summary:
      "Multiplayer games live on sockets, wanted to implement a fun game that people can play for free",
    stack: ["React"],
  },
  {
    title: "Messing around with .NET",
    period: "2025",
    summary:
      "Someone asked me what .NET does and I thought let me show you?",
    stack: [".NET, C#"],
  },
];

export default function Page() {
  return (
    <main>
      <header className="container pt-16 pb-10">
        <div className="card p-8">
          <p className="text-sm text-white/60">Software Engineer</p>
          <h1 className="mt-2">Vrushesh Patel</h1>
          <p className="mt-4 text-white/80 max-w-3xl">
            Systems & infrastructure engineer focused on Azure Stack HCI, Kubernetes operators,
            and GPU virtualization. I like clean APIs, robust tests, and shipping pragmatic features.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href="mailto:vrusheshp+personalsite@gmail.com">Email</a>
            <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="/Vrushesh_Patel_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </header>

      <Section title="Projects">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </Section>

      <Section title="Skills">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-6"><h3>Core</h3><p className="mt-2 text-white/80">Go, Python, C#, TypeScript</p></div>
          <div className="card p-6"><h3>Infra</h3><p className="mt-2 text-white/80">Azure, Kubernetes, Hyper‑V, CI/CD</p></div>
          <div className="card p-6"><h3>Extras</h3><p className="mt-2 text-white/80">PowerShell, Bash, SQL, Git</p></div>
        </div>
      </Section>

      <footer className="container my-16 text-white/50">
        © {new Date().getFullYear()} Vrushesh Patel
      </footer>
    </main>
  );
}
