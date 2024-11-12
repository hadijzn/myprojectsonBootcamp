import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { get } from "http";
export const supabaseClient = createBrowserClient<Database> (
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
export const supabaseServerClient = (cookie : ReadonlyRequestCookies) => createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
        cookies :  {
            get(name:string){
                return cookie.get(name)?.value
            }
        }
    }
)
