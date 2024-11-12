'use client'
import { supabaseClient } from '@/api/config'
import React, { useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa,} from '@supabase/auth-ui-shared'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter();
    useEffect(() => {
        const {
          data: { subscription },
        } = supabaseClient.auth.onAuthStateChange((event) => {
          if (event === "SIGNED_IN") {
            router.push("/");
          }
        });
    
        return () => subscription.unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      useEffect(()=>{
        const fetchSession = async () =>{
            const {
                data : {session} ,
            } = await supabaseClient.auth.getSession();
            if(!session){
                router.replace("/");
            }
        }
        fetchSession();
      },[])
  return (

  <div className='h-screen w-screen flex flex-col justify-center items-center bg-teal-950'>
    <p className='text-stone-100'>Welcome Please Sign In</p>
      <Auth supabaseClient={supabaseClient} appearance={{theme:ThemeSupa}}
      providers={['google']} 
      showLinks={false}
      redirectTo='https://localhost:3000/auth/callback/route.ts' />
  </div>)
}
