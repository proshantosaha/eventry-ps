"use server";

import EmailTemplate from "@/components/payments/EmailTemplate";
import {
  createUser,
  foundUserByCredentials,
  getEventById,
  updateGoing,
  updateInterest,
} from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);

  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");

    const found = await foundUserByCredentials(credential);
    return found;
  } catch (error) {
    throw error;
  }
}

async function addInterestedEvent(eventId, authId) {
  try {
    await updateInterest(eventId, authId);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
}

async function addGoingEvent(eventId, user) {
  try {
    await updateGoing(eventId, user?.id);
    await sendEmail(eventId, user);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
  redirect("/");
}

async function sendEmail(eventId, user) {
  try {
    const event = await getEventById(eventId);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const message = `dear ${user.name}, your have been successfully registerd ,${event?.name}`;

    const sent = await resend.emails.send({
      form: "noreply@noreply.proshanto.io",
      to: user?.email,
      subject: "SuccessFully Registerd for the event",
      react: EmailTemplate({ message }),
    });
  } catch (error) {
    throw error;
  }
}

export {
  registerUser,
  performLogin,
  addInterestedEvent,
  addGoingEvent,
  sendEmail,
};
