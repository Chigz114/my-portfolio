export type CategoryInfo = {
  title: string
  description: string
  accent: string
  badge?: string
  note?: React.ReactNode
}

export const CATEGORY_DETAILS: Record<string, CategoryInfo> = {
  fpga: {
    title: "FPGA tinyGPU",
    description:
      "Verilog/Vivado devlog covering DDR3 frame buffers, VDMA/VTC integration, and a custom scanline renderer.",
    accent: "from-purple-500/20 via-indigo-500/20 to-slate-900/40",
    badge: "Graphics · tinyGPU",
  },
  stm32: {
    title: "STM32 Self-Balancing Robot",
    description:
      "Eight-part tutorial series covering OLED, MPU6050, Kalman filter, encoders, PWM, motor drivers, and PID tuning.",
    accent: "from-emerald-400/20 via-cyan-400/20 to-slate-900/40",
    badge: "Robotics · Control",
  },
  "pcb-design": {
    title: "PCB Design Notes",
    description: "High-speed routing, impedance control, and hardware stack notes (ongoing).",
    accent: "from-amber-400/20 via-orange-400/20 to-slate-900/40",
    badge: "Hardware · SI",
  },
}

export function formatCategoryKey(category: string) {
  return category.toLowerCase()
}

export function getCategoryInfo(category: string): CategoryInfo {
  const key = formatCategoryKey(category)
  const fallbackTitle = category
    .split(/[-\s]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    CATEGORY_DETAILS[key] ?? {
      title: fallbackTitle,
      description: "Project logs and notes in this category.",
      accent: "from-zinc-200/20 via-zinc-400/10 to-slate-900/40",
      badge: "Blog Series",
    }
  )
}
