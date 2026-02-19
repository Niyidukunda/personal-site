export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Del IT+Web</p>
      </div>
    </footer>
  );
}