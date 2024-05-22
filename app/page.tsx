export default function Page() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-start">
      <div className="flex h-8 w-full items-center justify-between bg-gray-200">
        <div className="w-60 pl-6 text-sm">
          <a
            href=" https://www.linkedin.com/in/adilet-aldazharbekov/"
            className="text-gray-950 hover:text-gray-500"
            target="_blank"
          >
            Aldazharbekov Adilet
          </a>
        </div>
        <div className="flex grow items-center justify-end gap-6 pr-6 text-sm">
          <a href="/home" className="text-gray-500 hover:text-gray-950">
            Test
          </a>
          <a href="/login" className="text-gray-500 hover:text-gray-950">
            Войти
          </a>
          <a
            href="https://cash-delta.vercel.app/"
            className="text-gray-500 hover:text-gray-950"
            target="_blank"
          >
            AFinA
          </a>
        </div>
      </div>
      <div className="flex w-full flex-grow-[1] flex-col items-center justify-center text-2xl">
        New project
      </div>
      <div className="flex w-full">
        <div className="min-w-[40px] flex-grow-[1] cursor-pointer bg-blue-200 text-center duration-500 ease-out hover:flex-grow-[4]">
          1
        </div>
        <div className="min-w-[40px] flex-grow-[1] cursor-pointer bg-blue-400 text-center duration-500 ease-out hover:flex-grow-[4]">
          2
        </div>
        <div className="min-w-[40px] flex-grow-[1] cursor-pointer bg-blue-600  text-center duration-500 ease-out hover:flex-grow-[4]">
          3
        </div>
        <div className="min-w-[40px] flex-grow-[1] cursor-pointer bg-blue-800 text-center duration-500 ease-out hover:flex-grow-[4]">
          4
        </div>
        <div className="min-w-[40px] flex-grow-[1] cursor-pointer bg-sky-1000 text-center duration-500 ease-out hover:flex-grow-[4]">
          5
        </div>
      </div>
    </main>
  );
}
