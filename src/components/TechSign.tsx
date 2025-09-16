export default function TechSign({children}: {children: React.ReactNode}) {
  return (
    <span className="px-3 py-2 outline outline-1 outline-fuchsia-600 rounded-full text-sm flex items-center gap-2">
      {children}
    </span>
  )
}