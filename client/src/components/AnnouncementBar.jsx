import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const closed = localStorage.getItem("announcementClosed");
    if (!closed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("announcementClosed", "true");
  };

  if (!visible) return null;

  return (
    <div className="sticky top-16 w-full bg-gray-600 text-white text-sm px-4 py-2 flex items-center justify-between z-30 shadow-md">
      <p className="font-medium flex-1 text-center sm:text-left truncate">
        🎉 Welcome! Get 20% off on your first course. Learn from here to clear your concept from our best content
      </p>
      <button
        onClick={handleClose}
        className="ml-2 p-1 rounded hover:bg-blue-700 transition"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
