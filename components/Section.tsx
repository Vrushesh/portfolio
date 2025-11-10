export default function Section({ title, children }:{ title: string; children: React.ReactNode }){
  return (
    <section className="container my-12 md:my-16">
      <h2>{title}</h2>
      <div className="mt-6 grid gap-6">{children}</div>
    </section>
  )
}
