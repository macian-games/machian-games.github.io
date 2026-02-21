import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-background min-h-[300vh] text-primary selection:bg-white selection:text-black">

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 1. Hero Section */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="z-10 text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-widest uppercase mb-6 drop-shadow-2xl">
            Macian
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          >
            <p className="font-sans text-muted tracking-widest uppercase text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
              빛이 닿지 않는 곳에서,<br className="md:hidden" /> 생존의 서사를 빚습니다.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#444]">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#444] to-transparent"
          />
        </motion.div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 2. Main Project: My Bonnie Lies */}
      {/* ──────────────────────────────────────────────────────────── */}
      <ProjectBonnie />

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 3. Sub Project: BadLord */}
      {/* ──────────────────────────────────────────────────────────── */}
      <ProjectBadLord />

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 4. Contact & Footer */}
      {/* ──────────────────────────────────────────────────────────── */}
      <ContactFooter />

    </div>
  );
}

function ProjectBonnie() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [100, 0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[150vh] bg-surface z-20">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6 sm:px-12 md:px-24">

        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="w-full max-w-5xl"
        >
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Survival', 'Narrative', '1920s North Sea'].map((tag, i) => (
              <span key={i} className="text-[10px] md:text-xs tracking-[0.2em] font-sans uppercase text-[#666] border border-[#333] px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif tracking-tight text-center leading-tight mb-8">
            My Bonnie Lies
          </h2>

          <motion.p
            style={{ opacity: textOpacity }}
            className="font-sans text-center text-muted md:text-lg lg:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            부러진 아내의 다리, 차가운 북해.<br />
            함께 탈출하거나, 홀로 살아남거나.
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}

function ProjectBadLord() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const sectionOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);

  return (
    <section ref={ref} className="relative h-[120vh] bg-[#020202] z-30">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <motion.div
          style={{ opacity: sectionOpacity, scale }}
          className="text-center w-full max-w-4xl"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Pillaging', 'Line Defense', 'Rogue Lord'].map((tag, i) => (
              <span key={i} className="text-[10px] md:text-xs tracking-[0.2em] font-sans uppercase text-[#822] border border-[#411] px-3 py-1 rounded-full bg-[#100000]">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-5xl md:text-8xl font-serif tracking-tighter text-white mb-6" style={{ textShadow: '0 0 20px rgba(150, 0, 0, 0.3)' }}>
            BadLord
          </h2>

          <p className="font-sans text-[#aaa] text-sm md:text-lg tracking-widest uppercase max-w-xl mx-auto">
            명예는 버려라.<br />
            이제부터 탐욕스러운 도적 영주의 시대다.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactFooter() {
  return (
    <section className="relative h-screen bg-black flex flex-col items-center justify-center z-40 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-wide">
          새로운 투쟁에 동참하시겠습니까?
        </h2>

        <div className="mt-12 flex flex-col items-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:contact@macian.kr"
            className="px-8 py-3 bg-white text-black font-sans uppercase tracking-[0.2em] text-sm md:text-base font-bold transition-colors hover:bg-gray-200"
          >
            Get In Touch
          </motion.a>

          <div className="flex gap-6 mt-8 font-sans text-xs uppercase tracking-widest text-muted">
            <a href="https://github.com/macian-games" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 text-center text-[10px] text-[#333] tracking-widest font-sans uppercase">
        © {new Date().getFullYear()} Macian Studio. All rights reserved.
      </div>
    </section>
  );
}

export default App;
