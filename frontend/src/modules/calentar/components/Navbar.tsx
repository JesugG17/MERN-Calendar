import { Calendar } from "../../ui/Icons"

export const Navbar = () => {
  return (
    <nav className="flex justify-between p-3 bg-red-primary mb-4">
        <div className="flex items-center gap-3">
            <Calendar />
            <strong className="text-lg text-white">Jesus Gastelum</strong>
        </div>
        <button className="flex items-center gap-2 border-2 px-2 py-1 rounded bg-black text-red-primary font-medium">
            <i className="fas fa-sign-out-alt"></i>
            Sign out
        </button>        
    </nav>
  )
}
