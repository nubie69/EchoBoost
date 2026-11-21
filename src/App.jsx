import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main
        id="home"
        className="mx-auto min-h-[calc(100vh-5rem)] max-w-6xl scroll-mt-24 px-6 py-10 sm:px-10 sm:py-14"
      >
        <section
          id="features"
          className="grid scroll-mt-24 gap-6 lg:grid-cols-[1.15fr_0.85fr]"
          aria-label="EchoBoost visual identity"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <Heading as="h1" className="max-w-xl text-5xl sm:text-6xl">
              Growth, amplified.
            </Heading>
            <p className="mt-5 max-w-xl text-base leading-7 text-eb-muted sm:text-lg">
              A high-energy visual system built around organic growth and instantaneous momentum.
            </p>

            <Card id="get-started" className="mt-8 scroll-mt-24 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Button withIcon>Primary action</Button>
                <Button variant="secondary" withIcon>Secondary action</Button>
                <Button variant="ghost">Ghost action</Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <Card
              id="how-it-works"
              className="flex h-full min-h-72 scroll-mt-24 flex-col justify-between p-6 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <Logo markOnly />
                <Zap className="text-eb-green-400" size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-eb-green-400">
                  Brand mark
                </p>
                <Heading as="h2" className="mt-3 text-2xl sm:text-3xl">
                  Leaf + lightning
                </Heading>
              </div>
            </Card>
          </motion.div>
        </section>
        <span id="faq" className="block h-px scroll-mt-24" aria-hidden="true" />
      </main>
    </>
  )
}

export default App
