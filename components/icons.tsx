export function MenuIcon({ open = false }: { open?: boolean }) {
  return (
    <svg
      className="menu-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {open ? (
        <path d="M6 6 18 18M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 17h16" />
      )}
    </svg>
  );
}
