import { Menu, School } from "lucide-react";
import React, { useEffect } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { Input } from "./ui/input";

const Navbar = () => {
  const location = useLocation();
  
  const showSearchAndExplore =
    location.pathname === "/" || location.pathname.startsWith("/course");

  const [searchQuery, setSearchQuery] = React.useState("");

  const { user } = useSelector((store) => store.auth);
  const [logoutUser, { data, isSuccess }] = useLogoutUserMutation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "User log out");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <div className="h-16 dark:bg-[#020817] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <Link to="/">
            <h1 className="hidden md:block font-extrabold text-2xl text-blue-600">
              Learnova
            </h1>
          </Link>
        </div>

        
        {showSearchAndExplore && (
          <div className="flex items-center gap-4 mb-2">
            <Button
              onClick={() => navigate(`/course/search?query`)}
              className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200"
            >
              Explore Courses
            </Button>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim())
                  navigate(`/course/search?query=${searchQuery}`);
              }}
              className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"
            >
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="border-none focus-visible:ring-0 px-4 py-2 w-56"
              />
              <Button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2"
              >
                Search
              </Button>
            </form>
          </div>
        )}

        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={user?.photoUrl || "https://github.com/shadcn.png"}
                    alt={user?.name || "user"}
                  />
                  <AvatarFallback>
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="my-learning">My learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="profile">Edit Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                {user?.role === "instructor" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/admin/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button variant="outline" onClick={() => navigate("/login")}>
                Signup
              </Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <h1 className="font-extrabold text-2xl dark:text-white">Learnova</h1>
        <MobileNavbar user={user} />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({ user }) => {
  const location = useLocation();
  const showSearchAndExplore =
    location.pathname === "/" || location.pathname.startsWith("/course");

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/course/search?query=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>
            <Link to="/">Learnova</Link>
          </SheetTitle>
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2" />

        
        {showSearchAndExplore && (
          <>
            <form
              onSubmit={searchHandler}
              className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden my-4"
            >
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="border-none focus-visible:ring-0 px-4 py-2 w-full"
              />
              <Button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-full"
              >
                Search
              </Button>
            </form>

            <Link
              to="/course/search"
              className="text-blue-600 dark:text-white font-medium mb-4"
              onClick={() => navigate("/course/search")}
            >
              Explore Courses
            </Link>
          </>
        )}

        <nav className="flex flex-col space-y-4">
          <Link to="/my-learning">My Learning</Link>
          <Link to="/profile">Edit Profile</Link>
          <p onClick={() => console.log("logout")}>Log out</p>
        </nav>

        {user?.role === "instructor" && (
          <SheetFooter className="flex flex-col gap-2 mt-6">
            <SheetClose asChild>
              <Button
                type="submit"
                onClick={() => navigate("/admin/dashboard")}
              >
                Dashboard
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button type="submit" onClick={() => navigate("/admin/course")}>
                Courses
              </Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
