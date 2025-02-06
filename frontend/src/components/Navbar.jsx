import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, Send } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-base-100/95 backdrop-blur-md border-b border-base-300 fixed w-full top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-all">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center  hover:rotate-0 transition-all">
            <Send className="size-8 text-secondary animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold ">
              ChatterBox
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            {/* <Link
              to={"/settings"}
              className="btn btn-ghost btn-circle hover:bg-base-200"
            >
              <Settings className="size-5" />
            </Link> */}

            {authUser && (
              <>
                {/* <Link 
                  to={"/profile"} 
                  // className="btn btn-ghost hover:bg-base-200 gap-2 rounded-2xl"
                  className="flex items-center gap-2 rounded-2xl"
                >
                  <img 
                    src={authUser.profilePic || "/avatar.png"} 
                    className="size-8 rounded-xl object-cover"
                    alt="profile"
                  />
                  <span className="hidden sm:inline font-medium">{authUser.fullName}</span>
                </Link> */}

                <button 
                  onClick={logout}
                  className="btn btn-error btn-outline btn-sm rounded-xl gap-2"
                >
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
