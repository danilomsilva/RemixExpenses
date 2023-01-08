const Pricing = () => {
  return (
    <main className="p-10 flex gap-2  justify-center">
      <card className="bg-white rounded-lg p-10 text-center gap-5 flex flex-col w-fit px-20">
        <h1 className="text-3xl font-semibold">Basic</h1>
        <h2 className="text-6xl">$ 19.99</h2>
        <p>* Description</p>
        <p>* Description</p>
        <p>* Description</p>
        <div className="bg-blue-400/75 rounded-full text-white p-5">Select</div>
      </card>
      <card className="bg-white rounded-lg p-10 text-center gap-5 flex flex-col w-fit px-20">
        <h1 className="text-3xl font-semibold">Basic</h1>
        <h2 className="text-6xl">$ 39.99</h2>
        <p>* Description</p>
        <p>* Description</p>
        <p>* Description</p>
        <div className="bg-blue-500/75 rounded-full text-white p-5">Select</div>
      </card>
      <card className="bg-white rounded-lg p-10 text-center gap-5 flex flex-col w-fit px-20">
        <h1 className="text-3xl font-semibold">Basic</h1>
        <h2 className="text-6xl">$ 59.99</h2>
        <p>* Description</p>
        <p>* Description</p>
        <p>* Description</p>
        <div className="bg-blue-600/75 rounded-full text-white p-5">Select</div>
      </card>
    </main>
  );
};

export default Pricing;
