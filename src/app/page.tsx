import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#19161a] to-[#0b0b0b]">
        <div className="container flex flex-1 flex-col items-center justify-center gap-16 px-4 py-16 ">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-100 sm:text-[5rem]">
              Sophon<span className="text-[#8887cd]">ify</span>
            </h1>
            <div className="text-3xl font-thin text-white/50">
              Empower everything with AI.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-black  p-5  hover:bg-white/10"
              href="https://composal.ai"
              target="_blank"
            >
              <h3 className="text-2xl font-bold text-[#dddddd]">Composal AI</h3>
              <div className="text-lg text-white/50">
                Composal is a powerful AI platform that allows you to build your
                own AI chatbots and virtual assistants.
              </div>
            </Link>
            <div className="flex max-w-xs flex-col gap-4 rounded-xl  border border-white/10 p-5 text-white ">
              <h3 className="text-2xl font-bold text-[#dddddd]">
                More AI stuff...
              </h3>
              <div className="text-lg text-white/50">
                Sophonify is going to build more fun and useful AI tools, please
                stay tuned!
              </div>
            </div>
          </div>
        </div>
        <a
          href="http://beian.miit.gov.cn/"
          className="p-4 text-xs text-[#666666]"
        >
          苏州智子光年科技有限公司 @苏ICP备2023031059号
        </a>
      </main>
    </>
  );
}
