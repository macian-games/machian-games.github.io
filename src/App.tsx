import { motion, useReducedMotion } from 'framer-motion';

type Project = {
  title: string;
  tags: string[];
  phrase: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: 'YOU&MIRROR',
    tags: ['1인칭', '공포', '거울 미로'],
    phrase: '거울 미로에서 움직임이 다른 존재를 찾는 1인칭 공포 게임.',
    accent: '#B8D5E5',
  },
  {
    title: 'MahjongDefence',
    tags: ['7+1 마작', '타워 디펜스', '패 조합'],
    phrase: '7장 손패와 한 장의 쯔모로 진행하는 마작 타워 디펜스 게임.',
    accent: '#D4B77A',
  },
  {
    title: 'Invitation of the Red Moon',
    tags: ['추리', '카드 연결', '재설계 중'],
    phrase: '단서 카드를 연결해 사건을 추리하는 게임.',
    accent: '#C06A64',
  },
];

function App() {
  const shouldReduceMotion: boolean | null = useReducedMotion();

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-white selection:text-black">
      <header id="top" className="relative flex min-h-screen flex-col justify-between px-6 py-8 sm:px-10 lg:px-16">
        <nav className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted">
          <a className="transition-colors hover:text-white" href="#top">
            Macian
          </a>
          <a className="transition-colors hover:text-white" href="#projects">
            Projects
          </a>
        </nav>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
          className="my-auto max-w-5xl py-24"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-muted">Independent game studio</p>
          <h1 className="text-6xl font-semibold tracking-[-0.055em] text-white sm:text-8xl lg:text-[9rem]">
            Macian
          </h1>
        </motion.div>

        <a
          className="w-fit text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-white"
          href="#projects"
        >
          프로젝트 보기 ↓
        </a>
      </header>

      <main id="projects" className="border-t border-white/10">
        {projects.map((project: Project, index: number) => (
          <ProjectSection key={project.title} project={project} index={index} />
        ))}
      </main>

      <footer className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted">Contact</p>
            <a
              className="text-xl text-white underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-white"
              href="mailto:contact@macian.kr"
            >
              contact@macian.kr
            </a>
          </div>

          <div className="text-xs uppercase tracking-[0.18em] text-muted">
            <span>© {new Date().getFullYear()} Macian</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

type ProjectSectionProps = {
  project: Project;
  index: number;
};

function ProjectSection({ project, index }: ProjectSectionProps) {
  return (
    <section className="flex min-h-[75vh] items-center border-b border-white/10 px-6 py-24 sm:px-10 lg:px-16">
      <article className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.45fr)] lg:items-end">
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs tabular-nums text-muted">{String(index + 1).padStart(2, '0')}</span>
            <span className="h-px w-12" style={{ backgroundColor: project.accent }} aria-hidden="true" />
          </div>

          <h2 className="break-words text-4xl font-medium tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            {project.title}
          </h2>
        </div>

        <div>
          <ul className="mb-6 flex flex-wrap gap-x-5 gap-y-2" aria-label={`${project.title} 태그`}>
            {project.tags.map((tag: string) => (
              <li key={tag} className="text-xs font-medium tracking-[0.08em]" style={{ color: project.accent }}>
                {tag}
              </li>
            ))}
          </ul>
          <p className="max-w-xl text-base leading-8 text-[#B8B8B8] sm:text-lg">{project.phrase}</p>
        </div>
      </article>
    </section>
  );
}

export default App;
