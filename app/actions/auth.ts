"use server";

import { PROVIDERS, signIn } from "@/auth";
import ROUTES from "@/constants/routes";

export type Provider = (typeof PROVIDERS)[number];

export async function authenticate(provider: Provider) {
  await signIn(provider, {
    redirectTo: ROUTES.HOME,
  });
}
