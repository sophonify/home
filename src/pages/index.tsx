import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Sophonify - Empower everything with AI</title>
        <meta name="description" content="Empower everything with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2b2138] to-[#060607]">
        <div className="container flex flex-1 flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Sophon<span className="text-[hsl(280,100%,70%)]">ify</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-black p-5 text-white hover:bg-white/10"
              href="https://composal.ai"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Composal AI</h3>
              <div className="text-lg text-gray-400">
                Composal is a powerful AI platform that allows you to build your
                own AI chatbots and virtual assistants.
              </div>
            </Link>
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-black p-5 text-white hover:bg-white/10">
              <h3 className="text-2xl font-bold">More AI stuff...</h3>
              <div className="text-lg text-gray-400">
                Sophonify is going to build more fun and useful AI tools, please
                stay tuned!
              </div>
            </div>
          </div>
        </div>
        <a
          href="http://beian.miit.gov.cn/"
          className="p-2 text-xs text-gray-200"
        >
          苏ICP备2023031059号
        </a>
      </main>
    </>
  );
}
