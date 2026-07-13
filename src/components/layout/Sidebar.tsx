import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils'

interface NavItem {
  to: string
  icon: string
  label: string
  badge?: string
  badgeColor?: string
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', icon: '⬡', label: 'Dashboard' },
  { to: '/prompts', icon: '◈', label: 'Prompt Library', badge: '10', badgeColor: 'bg-violet-500/20 text-violet-400' },
  { to: '/trending', icon: '↑', label: 'Trending', badge: 'HOT', badgeColor: 'bg-rose-500/20 text-rose-400' },
  { to: '/builder', icon: '◎', label: 'Project Builder', badge: 'AI', badgeColor: 'bg-cyan-500/20 text-cyan-400' },
  { to: '/workflows', icon: '⟳', label: 'Workflows', badge: '3', badgeColor: 'bg-amber-500/20 text-amber-400' },
  { to: '/context', icon: '⌥', label: 'Context Recovery' },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const location = useLocation()

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-60 z-40 flex flex-col',
          'bg-bg-surface border-r border-border',
          'transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : '-translate-x-full',
          'lg:translate-x-0 lg:static lg:z-auto'
        )}
      >
        {/* Logo */}
        <div className="h-14 flex items-center gap-3 px-5 border-b border-border">
          <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-white text-xs font-mono font-bold">
            AC
          </div>
          <div>
            <div className="text-sm font-display font-semibold text-text-primary leading-none">
              Agentic City
            </div>
            <div className="text-[10px] font-mono text-violet-400 mt-0.5">OS v0.1 BETA</div>
          </div>
        </div>

        {/* Status bar */}
        <div className="px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2 text-xs">
            <div className="glow-dot" />
            <span className="font-mono text-emerald-400">SYSTEM ACTIVE</span>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-mono text-text-muted">
            <span className="step-0">STEP 0</span>
            <span>→</span>
            <span className="text-violet-400">WOLF Protocol</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          <div className="pp-label mb-3 px-2">NAVIGATION</div>
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => onClose()}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group',
                  isActive
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated border border-transparent'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={cn(
                      'text-base w-5 text-center transition-colors',
                      isActive ? 'text-violet-400' : 'text-text-muted group-hover:text-text-secondary'
                    )}
                  >
                    {item.icon}
                  </span>
                  <span className="flex-1 font-body font-medium text-sm">{item.label}</span>
                  {item.badge && (
                    <span className={cn('text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded', item.badgeColor)}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-border space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-violet-900 border border-violet-500/40 flex items-center justify-center text-xs font-mono text-violet-300">
              B
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-body font-medium text-text-primary truncate">bartek.dev</div>
              <div className="text-[10px] font-mono text-text-muted">Builder Plan</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 6px rgba(52,211,153,0.8)' }} />
          </div>
        </div>
      </aside>
    </>
  )
}
