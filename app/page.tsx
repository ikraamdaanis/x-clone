export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <div className="relative flex h-full w-full max-w-screen-lg items-center">
        <header>Sidebar</header>
        <main className="flex">
          <section>Timeline</section>
          <section>Aside</section>
        </main>
      </div>
    </div>
  );
}
