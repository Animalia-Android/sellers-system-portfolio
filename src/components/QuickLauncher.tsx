import { useEffect, useMemo, useRef, useState } from 'react';

type AppItem = {
  title: string;
  url: string;
  icon?: string;
  tags?: string[];
  hotkey?: string;
};

export default function QuickLauncher({ apps }: { apps: AppItem[] }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  // Double-Shift to open
  useEffect(() => {
    let presses: number[] = [];
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        const now = Date.now();
        presses = [...presses.filter((t) => now - t < 500), now];
        if (presses.length >= 2) {
          setOpen(true);
          setTimeout(() => searchRef.current?.focus(), 0);
          presses = [];
        }
      }
      if (open && e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const list = useMemo(() => {
    const k = q.toLowerCase();
    return apps.filter((a) =>
      (a.title + ' ' + (a.tags || []).join(' ')).toLowerCase().includes(k)
    );
  }, [apps, q]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.6)',
        backdropFilter: 'blur(6px)',
        display: 'grid',
        placeItems: 'center',
        zIndex: 9999,
      }}
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(960px,92vw)',
          borderRadius: 16,
          border: '1px solid var(--border)',
          background: 'var(--card)',
          padding: 12,
        }}
      >
        <input
          ref={searchRef}
          placeholder="Quick Launch… (Esc to close)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 12px',
            border: '1px solid var(--border)',
            borderRadius: 10,
            background: 'var(--bg)',
            color: 'var(--ink)',
            marginBottom: 10,
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))',
            gap: 10,
          }}
        >
          {list.map((a) => (
            <a
              key={a.title}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: 12,
                border: '1px solid var(--border)',
                borderRadius: 14,
                background: 'var(--bg)',
                color: 'var(--ink)',
              }}
            >
              <strong style={{ display: 'block' }}>{a.title}</strong>
              {a.tags?.length ? (
                <small style={{ opacity: 0.7 }}>{a.tags.join(' · ')}</small>
              ) : null}
            </a>
          ))}
        </div>
        <div style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
          Tip: double-tap <kbd>Shift</kbd> anywhere to open.
        </div>
      </div>
    </div>
  );
}
