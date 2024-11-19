"use client";

import { addInterestedEvent } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

const ActionButtons = ({
  eventId,
  fromDetails,
  interestedUserIds,
  goingUserIds,
}) => {
  const { auth } = useAuth();
  const router = useRouter();
  const isInterested = interestedUserIds?.find((id) => id === auth?.id);
  const isGoing = goingUserIds?.find((id) => id === auth?.id);

  const [interested, setInterested] = useState(isInterested);
  const [going, setGoing] = useState(isGoing);

  const [isPending, startTransition] = useTransition();

  async function toggleInterest() {
    if (auth) {
      addInterestedEvent(eventId, auth?.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  }

  const markGoing = () => {
    if (auth) {
      router.push(`/payment/${eventId}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      {/* <!-- bg-indigo-600 indicating Active --> */}
      <button
        onClick={() =>
          startTransition(() => {
            toggleInterest();
          })
        }
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested
      </button>

      {/* <!-- bg-green-600 indicating Active --> */}
      <button
        disabled={auth && going}
        onClick={markGoing}
        className="w-full text-center bg-[#464849] py-2 px-2 rounded-md border
       border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:BG-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </button>
    </div>
  );
};

export default ActionButtons;
