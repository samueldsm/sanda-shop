"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export const addProduct = async (formData: FormData) => {
  const content = formData.get("content");

  if (content === null) return;

  const supabase = createServerActionClient({ cookies });
  // revisar si el usuario realmene está autenticado
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user === null) return;

  await supabase.from("product").insert({ content, user_id: user.id });

  revalidatePath(`/?content=${content.toString()}`);
};
