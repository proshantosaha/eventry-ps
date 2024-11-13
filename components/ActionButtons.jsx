import Link from "next/link";
import React from "react";

const ActionButtons = ({ fromDetails }) => {
  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails} && "flex-1`}>
      {/* <!-- bg-indigo-600 indicating Active --> */}
      <button className="w-full bg-indigo-600 hover:bg-indigo-800">
        Interested
      </button>

      {/* <!-- bg-green-600 indicating Active --> */}
      <Link
        href="/payment"
        className="w-full text-center bg-[#464849] py-2 px-2 rounded-md border
       border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:BG-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </Link>
    </div>
  );
};

export default ActionButtons;
