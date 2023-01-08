export default function Index() {
  return (
    <main className="p-10 flex flex-col gap-10">
      <section className="bg-white/20 p-20 grid grid-cols-2 gap-10 place-content-center rounded-3xl items-center">
        <img
          src="images/shield.png"
          alt=""
          className="w-48 justify-self-center"
        />
        <h1 className="text-6xl font-semibold text-white/75">
          Track your expenses with safety using RemixExpenses!!
        </h1>
      </section>
      <section className="bg-white/20 p-20 grid grid-cols-2 gap-10 place-content-center rounded-3xl items-center">
        <h1 className="text-6xl font-semibold text-white/75">
          Download your data instantly using the raw option after login
        </h1>
        <img
          src="images/download.png"
          alt=""
          className="w-48 justify-self-center"
        />
      </section>
      <section className="bg-white/20 p-20 grid grid-cols-2 gap-10 place-content-center rounded-3xl items-center">
        <img
          src="images/analysis.png"
          alt=""
          className="w-48 justify-self-center"
        />
        <h1 className="text-6xl font-semibold text-white/75">
          Enjoy the benefits RemixExpenses can offer you! Track your expenses
          and visualize them using the intelligent analysis
        </h1>
      </section>
    </main>
  );
}
