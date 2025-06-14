"use client";
import { FaBookmark, FaCross } from "react-icons/fa";
import bookmarkProperty from "../actions/bookmarkProperty";
import checkBookmarkStatus from "../actions/checkBookmarkStatus";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    checkBookmarkStatus(property._id).then((res) => {
      if (res.error) toast.error(res.error);
      if (res.isBookmarked) setIsBookmarked(res.isBookmarked);
      setLoading(false);
    });
  }, [property._id, userId, checkBookmarkStatus]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to be signed in to save");
      return;
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error("res.error");
      setIsBookmarked(res.isBookmarked);
      toast.success(res.message);
    });
  };

  return isBookmarked ? (
    <button
      onClick={handleClick}
      className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaCross className="fas fa-bookmark mr-2" /> Remove Saved
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
    >
      <FaBookmark className="fas fa-bookmark mr-2" /> Save Property
    </button>
  );
};

export default BookmarkButton;
