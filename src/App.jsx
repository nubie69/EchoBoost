import { Heading } from './components/Heading'
import { Navbar } from './components/Navbar'
import { HeroDashboard } from './components/HeroDashboard'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <Navbar />
      <main
        id="home"
        className="relative min-h-[calc(100vh-5rem)] overflow-hidden"
      >
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute left-[8%] top-20 h-72 w-72 rounded-full bg-eb-green-400/[0.055] blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 right-[8%] h-80 w-80 rounded-full bg-eb-emerald-500/[0.07] blur-[120px]" />

        <section className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-eb-green-400/20 bg-eb-green-400/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-eb-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-eb-green-400 shadow-[0_0_8px_#65ff9a]" />
              Intelligent power management
            </div>
            <Heading as="h1" className="hero-heading max-w-xl text-5xl leading-[0.98] sm:text-6xl lg:text-[4.75rem]">
              Smarter Power. Longer Life.
            </Heading>
            <p className="mt-6 max-w-xl text-base leading-7 text-eb-muted sm:text-lg">
              Monitor, analyze, and optimize your device's power usage with ease.
            </p>

            <div id="get-started" className="mt-8 flex flex-wrap items-center gap-3 scroll-mt-24">
              <a
                href="#features"
                className="eb-button eb-button-primary px-6"
              >
                <span>Start Saving Now</span>
                <ArrowRight size={18} strokeWidth={2.25} />
              </a>
              <a
                href="#how-it-works"
                className="eb-button eb-button-secondary px-5"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-eb-green-400/10">
                  <Play size={12} fill="currentColor" />
                </span>
                <span>Learn More</span>
              </a>
            </div>

            <div className="mt-9 flex items-center gap-7 text-xs text-eb-muted">
              <div>
                <p className="font-display text-xl font-bold text-eb-text">18%</p>
                <p>Less energy</p>
              </div>
              <div className="h-8 w-px bg-white/[0.08]" />
              <div>
                <p className="font-display text-xl font-bold text-eb-text">24/7</p>
                <p>Live insights</p>
              </div>
            </div>
          </motion.div>

          <HeroDashboard />
        </section>

        <span id="features" className="block h-px scroll-mt-24" aria-hidden="true" />
        <span id="how-it-works" className="block h-px scroll-mt-24" aria-hidden="true" />
        <span id="faq" className="block h-px scroll-mt-24" aria-hidden="true" />
      </main>
    </>
  )
}

export default App
