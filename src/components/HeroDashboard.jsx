import { motion } from 'framer-motion'
import { BatteryCharging, CheckCircle2, Clock3, Leaf, Zap } from 'lucide-react'
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const energyData = [
  { time: '12am', usage: 38 },
  { time: '3am', usage: 24 },
  { time: '6am', usage: 31 },
  { time: '9am', usage: 56 },
  { time: '12pm', usage: 48 },
  { time: '3pm', usage: 72 },
  { time: '6pm', usage: 61 },
  { time: '9pm', usage: 78 },
]

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-[610px] px-2 sm:px-5"
      aria-label="EchoBoost battery dashboard preview"
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-2 top-12 z-20 hidden h-12 w-12 items-center justify-center rounded-2xl border border-eb-green-400/30 bg-eb-navy-900/90 text-eb-green-400 shadow-eb-glow sm:flex"
      >
        <Leaf size={20} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -right-1 top-24 z-20 hidden h-14 w-14 items-center justify-center rounded-full border border-eb-emerald-400/30 bg-eb-navy-900/90 text-eb-emerald-400 shadow-eb-glow sm:flex"
      >
        <Zap size={22} fill="currentColor" />
      </motion.div>

      <div className="absolute inset-x-[12%] bottom-[7%] h-[18%] rounded-full bg-eb-green-400/15 blur-3xl" />

      <div className="relative">
        <div className="rounded-[1.35rem] border border-eb-green-400/20 bg-[#090f18] p-2 shadow-[0_35px_90px_rgba(0,0,0,0.62),0_0_50px_rgba(57,236,122,0.08)] sm:p-3">
          <div className="rounded-[0.9rem] border border-white/[0.07] bg-[linear-gradient(145deg,#0d1b2b,#08111d)] p-3 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-eb-green-400/10 text-eb-green-400">
                  <Zap size={16} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-bold text-eb-text">EchoBoost</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-eb-muted">Live energy</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-eb-green-400/20 bg-eb-green-400/[0.07] px-2.5 py-1 text-[10px] font-bold text-eb-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-eb-green-400 shadow-[0_0_8px_#65ff9a]" />
                Active
              </div>
            </div>

            <div className="grid grid-cols-[0.85fr_1.15fr] gap-2.5 sm:gap-4">
              <div className="flex flex-col items-center justify-center rounded-xl border border-white/[0.06] bg-eb-navy-950/70 px-2 py-4">
                <div
                  className="relative flex h-[118px] w-[118px] items-center justify-center rounded-full sm:h-[138px] sm:w-[138px]"
                  style={{
                    background:
                      'conic-gradient(#65ff9a 0deg 281deg, rgba(101,255,154,0.10) 281deg 360deg)',
                  }}
                >
                  <div className="absolute inset-[9px] rounded-full border border-white/[0.04] bg-eb-navy-950 shadow-inner" />
                  <div className="relative text-center">
                    <BatteryCharging className="mx-auto mb-1 text-eb-green-400" size={19} />
                    <p className="font-display text-3xl font-bold tracking-tight text-eb-text sm:text-4xl">78%</p>
                    <p className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-eb-muted">Battery</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-rows-[auto_1fr] gap-2.5 sm:gap-4">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="rounded-xl border border-white/[0.06] bg-eb-navy-950/70 p-3">
                    <Clock3 className="mb-2 text-eb-green-400" size={15} />
                    <p className="text-[9px] uppercase tracking-[0.12em] text-eb-muted">Remaining</p>
                    <p className="mt-1 text-sm font-bold text-eb-text sm:text-base">6h 24m</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-eb-navy-950/70 p-3">
                    <CheckCircle2 className="mb-2 text-eb-emerald-400" size={15} />
                    <p className="text-[9px] uppercase tracking-[0.12em] text-eb-muted">Status</p>
                    <p className="mt-1 text-sm font-bold text-eb-green-400 sm:text-base">Optimized</p>
                  </div>
                </div>

                <div className="min-h-[118px] rounded-xl border border-white/[0.06] bg-eb-navy-950/70 px-2 pb-1 pt-3 sm:min-h-[138px]">
                  <div className="mb-1 flex items-center justify-between px-2">
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-eb-muted">
                      Energy
                    </p>
                    <p className="font-mono text-[9px] text-eb-green-400">-18% today</p>
                  </div>
                  <div className="h-[95px] sm:h-[112px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={energyData} margin={{ top: 4, right: 3, left: -28, bottom: 0 }}>
                        <defs>
                          <linearGradient id="energyFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#65ff9a" stopOpacity={0.38} />
                            <stop offset="100%" stopColor="#65ff9a" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="time"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#91a49c', fontSize: 8 }}
                          interval={2}
                        />
                        <YAxis hide domain={[0, 100]} />
                        <Tooltip
                          contentStyle={{
                            background: '#07111f',
                            border: '1px solid rgba(101,255,154,0.2)',
                            borderRadius: '8px',
                            fontSize: '10px',
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="usage"
                          stroke="#65ff9a"
                          strokeWidth={2}
                          fill="url(#energyFill)"
                          activeDot={{ r: 3, fill: '#65ff9a', stroke: '#07111f', strokeWidth: 2 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-3 w-[88%] rounded-b-[50%] border-b border-eb-green-400/15 bg-gradient-to-b from-[#162638] to-[#080d13] shadow-[0_18px_24px_rgba(0,0,0,0.5)]" />
        <div className="mx-auto h-1.5 w-[42%] rounded-b-full bg-[#05080c]" />
      </div>
    </motion.div>
  )
}
