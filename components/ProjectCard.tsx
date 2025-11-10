export interface Project {
  title: string;
  period?: string;
  summary: string;
  stack: string[];
  links?: { label: string; href: string }[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {project.period && <span className="badge">{project.period}</span>}
      </div>
      <p className="mt-3 text-white/80">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="badge text-white/70">{s}</span>
        ))}
      </div>
      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} className="btn" target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      )}
    </div>
  );
}
