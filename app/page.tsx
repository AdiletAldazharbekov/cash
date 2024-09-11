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
            Linkedin
          </a>
        </div>
        <div className="flex grow items-center justify-end gap-6 pr-6 text-sm">
          <a href="/login" className="text-gray-500 hover:text-gray-950">
            Войти
          </a>
        </div>
      </div>
      <div className="flex w-full flex-grow-[1] flex-col items-center justify-center text-2xl">
        My project
      </div>
    </main>
  );
}
