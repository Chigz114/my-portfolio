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
      "Verilog/Vivado 日志：从 DDR3 帧缓冲到 VDMA、VTC、渲染管线的完整实现细节。",
    accent: "from-purple-500/20 via-indigo-500/20 to-slate-900/40",
    badge: "Graphics · tinyGPU",
  },
  stm32: {
    title: "STM32 自平衡小车",
    description:
      "8 篇 MP 教程覆盖 OLED、MPU6050、卡尔曼滤波、编码器、PWM、电机控制与 PID 调参。",
    accent: "from-emerald-400/20 via-cyan-400/20 to-slate-900/40",
    badge: "Robotics · Control",
  },
  "pcb-design": {
    title: "PCB Design 笔记",
    description: "高速 PCB 走线、阻抗控制与硬件栈笔记（持续补充中）。",
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
