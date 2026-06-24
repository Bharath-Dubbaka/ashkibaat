import Image from "next/image";

export default function FoundationPage() {
  return (
    <main>
      <section className="relative h-[500px]">
        <Image
          src="/images/IMG_0016_3_edited.jpg"
          fill
          alt="Foundation"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">The Ashwin Foundation</h1>

            <p className="text-xl mt-6">
              Transforming society through meaningful initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Initiatives
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="relative h-72">
              <Image
                src="/images/316918_edited_edited.jpg"
                fill
                alt="Eye Donation"
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Eye Donation</h3>

              <p className="text-gray-600 leading-relaxed">
                Ashwin believes that nothing is more beautiful in this world
                than the gift of sight. He made a difference by pledging his
                eyes and hopes to inspire countless others to do the same.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="relative h-72">
              <Image
                src="/images/132265.webp"
                fill
                alt="Blood Donation"
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Blood Donation</h3>

              <p className="text-gray-600 leading-relaxed">
                The need for blood is constant, and so is the need for
                donations. Every drop counts and a single donation can save
                multiple lives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
