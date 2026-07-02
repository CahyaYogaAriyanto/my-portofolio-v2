import { useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Terminal,
  Boxes,
  FileText,
  ThumbsDown,
  RotateCcw,
  ThumbsUp,
} from "lucide-react";
import myPhoto from "../assets/logo-hero.png";

const BottomDock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "/Home";
  const isSkills = location.pathname === "/skills";

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <nav
        aria-label="Quick navigation"
        className="
          flex items-center gap-2
          rounded-3xl bg-black/75 px-4 py-3
          backdrop-blur-xl
          shadow-lg
        "
      >
        {/* Home */}
        <DockButton
          active={isHome}
          aria-label="Home"
          onClick={() => navigate("/")}
        >
          <Home size={18} />
        </DockButton>

        {/* Terminal */}
        <DockButton aria-label="Terminal">
          <Terminal size={18} />
        </DockButton>

        {/* Skills / Projects */}
        <DockButton
          active={isSkills}
          aria-label="Skills"
          onClick={() => navigate("/skills")}
        >
          <Boxes size={18} />
        </DockButton>

        {/* Avatar */}
        <img
          src={myPhoto}
          alt="Avatar"
          className="
            w-11 h-11 rounded-full object-cover object-top
            border-2 border-cyan-400
            mx-1
          "
          style={{ filter: "grayscale(20%)" }}
        />

        {/* Resume */}
        <DockButton aria-label="Resume">
          <FileText size={18} />
        </DockButton>

        {/* Thumbs down */}
        <DockButton aria-label="Feedback">
          <ThumbsUp size={18} />
        </DockButton>

        {/* Contact */}
        <DockButton aria-label="Contact">
          <button >EG</button> 
        </DockButton>
      </nav>
    </div>
  );
};

/* ── Small helper for dock buttons ── */
interface DockButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}
const DockButton = ({ active, children, ...props }: DockButtonProps) => (
  <button
    {...props}
    className={`
      w-11 h-11 rounded-full flex items-center justify-center
      transition-colors duration-200
      ${active ? "bg-white text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"}
    `}
  >
    {children}
  </button>
);

export default BottomDock;
