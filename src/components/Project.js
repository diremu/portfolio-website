function ProjectCard({ p }) {
  const cls = `card ${p.size} ${p.color}`;
  const inner = (
    <>
      <span className="status">{p.status}</span>
      <h3>{p.title}</h3>
      {p.big && <div className="big">{p.big}</div>}
      <p>{p.blurb}</p>
      <span className="stack">{p.stack}</span>
    </>
  );
  return p.href ? (
    <a className={cls} href={p.href}>{inner}</a>
  ) : (
    <article className={cls}>{inner}</article>
  );
}

export default ProjectCard