import Image from "next/image";

const topics = [
  {
    title: "Cricket Life Lessons",
    image: "/images/RVFront.jpg",
    description:
      "Ashwin shares insights from his career, emphasizing resilience, adaptability, and discipline as foundations for success. He highlights how the challenges he faced on the field have shaped his approach to life and personal growth.",
  },
  {
    title: "Journey to Success",
    image: "/images/RVone.jpg",
    description:
      "He reflects on his journey to the top, discussing the challenges he faced and how overcoming obstacles strengthened his resolve to succeed.",
  },
  {
    title: "Handling Pressure",
    image: "/images/RVtwo.jpg",
    description:
      "Ashwin provides insights on how to stay calm, focused, and maintain clarity under intense pressure, skills that are essential for high-stakes environments.",
  },
  {
    title: "Communication Skills",
    image: "/images/RVFront.jpg",
    description:
      "Emphasizing the power of effective communication, he discusses how clear messaging fosters understanding and strengthens team dynamics.",
  },
  {
    title: "Team & Leadership",
    image: "/images/RVFront.jpg",
    description:
      "Ashwin speaks about building unity and inspiring others, detailing how true leadership lies in empowering teammates and creating a collaborative environment.",
  },
  {
    title: "People Management",
    image: "/images/RVone.jpg",
    description:
      "He shares his approach to managing relationships within a team, fostering trust and cohesion to achieve collective goals.",
  },
  {
    title: "Spotting Talent",
    image: "/images/RVtwo.jpg",
    description:
      "Ashwin highlights the art of recognizing potential in others and nurturing talent, a skill essential for creating a legacy and contributing to future success.",
  },
  {
    title: "Winning Strategies",
    image: "/images/RVFront.jpg",
    description:
      "He outlines his approach to strategic planning and execution, emphasizing how thorough preparation and adaptability lead to consistent success.",
  },
];

export default function CorporatePage() {
  return (
    <main className="bg-white">
      <section className="relative h-[500px]">
        <Image
          src="/images/377133_edited_edited.jpg"
          fill
          alt="Corporate"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl font-bold mb-6">A Multi-Faceted Icon</h1>

            <p className="text-xl leading-relaxed">
              Ravi Ashwin is more than just a cricketing legend; he is a youth
              icon, an eloquent speaker, and a dedicated mentor who transcends
              his sports background to inspire and lead.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="uppercase text-teal-600 font-semibold">Connect</p>

          <h2 className="text-4xl font-bold mt-3">Inspiring Leadership</h2>

          <p className="max-w-4xl mx-auto mt-6 text-gray-600">
            Ashwin’s journey from cricket to the corporate world has made him a
            sought-after speaker on various topics. He draws on his personal
            experiences to engage with audiences of all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topics.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  fill
                  alt={item.title}
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Connect with Ashwin</h2>

        <p className="max-w-3xl mx-auto text-lg">
          Connect with Ashwin to learn more about his approach and how he can
          inspire and lead your organization to new heights.
        </p>
      </section>
    </main>
  );
}
