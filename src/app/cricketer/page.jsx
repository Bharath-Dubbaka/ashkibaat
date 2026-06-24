import Image from "next/image";

export default function CricketerPage() {
  return (
    <main>
      <section className="bg-black text-white py-28 text-center">
        <h1 className="text-6xl font-bold">Ravichandran Ashwin</h1>

        <p className="mt-6 text-xl">The Journey of a Cricketing Genius</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* <span className="text-teal-600 font-bold">PHASE ONE</span> */}

            <h2 className="text-4xl font-bold mt-3 mb-6 text-teal-600">
              Early Beginnings and IPL Rise
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Ravichandran Ashwin’s journey in cricket began in the bustling
              streets of Chennai, where his passion for the game was ignited.
              His early days were marked by hard work and innovation, leading
              him to develop the now-iconic carrom ball.
            </p>

            <p className="text-gray-600 leading-relaxed mt-6">
              Ashwin’s big break came with Chennai Super Kings in the IPL, where
              his match-winning performances and tactical brilliance announced
              his arrival on the national stage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/RVFront.jpg" width={400} height={400} alt="" />
            {/* <Image src="/images/RVoneEdit.jpg" width={400} height={400} alt="" /> */}
            <Image src="/images/RVtwo.jpg" width={400} height={400} alt="" />
            {/* <Image src="/images/RVthree.jpg" width={400} height={400} alt="" /> */}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <Image src="/images/RVFront.jpg" width={400} height={400} alt="" />
            {/* <Image src="/images/RVoneEdit.jpg" width={400} height={400} alt="" /> */}
            <Image src="/images/RVtwo.jpg" width={400} height={400} alt="" />
            {/* <Image src="/images/RVthree.jpg" width={400} height={400} alt="" /> */}
          </div>

          <div>

            <h2 className="text-4xl font-bold mt-3 mb-6 text-teal-600">
              International Debut & Test Dominance
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Ashwin’s international career took off with his debut in 2010,
              marking the beginning of a new era for Indian spin bowling.
            </p>

            <p className="text-gray-600 leading-relaxed mt-6">
              Known for his tactical brilliance and relentless pursuit of
              excellence, Ashwin became the fastest Indian to numerous wicket
              milestones and established himself as one of the greatest spinners
              of his generation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
