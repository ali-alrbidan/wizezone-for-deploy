export default function AboutPage() {
  return (
    <main className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* ================= Hero ================= */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Wise Zone
          </h1>
          <p className="text-[#A7ADC2] text-xl leading-relaxed">
            We are a consulting and training firm dedicated to empowering
            organizations through clarity, expertise, and practical development.
          </p>
        </section>

        {/* ================= Who We Are ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">
              Who We Are
            </h2>
            <p className="text-[#A7ADC2] leading-relaxed mb-5">
              Wise Zone partners with organizations seeking clarity, capability
              development, and sustainable improvement in an increasingly
              complex environment.
            </p>
            <p className="text-[#A7ADC2] leading-relaxed">
              Through expert-led consulting and training, we help leaders and
              teams address real challenges with confidence and direction.
            </p>
          </div>

          <div
            className="
              bg-[#FFFFFF1A]
              border border-[#575DBF]
              rounded-3xl
              p-12
              backdrop-blur-md
            "
          >
            <p className="text-white font-semibold mb-4 text-lg">Our Role</p>
            <p className="text-[#A7ADC2] leading-relaxed">
              We help organizations move from uncertainty to clarity, and from
              intention to effective action — through consulting and training
              that respects context, people, and purpose.
            </p>
          </div>
        </section>

        {/* ================= Our Philosophy ================= */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-white mb-4">
              Our Philosophy
            </h2>
            <p className="text-[#A7ADC2] text-lg">
              The principles that guide how we think, advise, and train.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clarity Before Action",
                text: "Effective decisions begin with a clear understanding of challenges and context.",
              },
              {
                title: "People-Centered Development",
                text: "Sustainable change happens when people are enabled, not instructed.",
              },
              {
                title: "Practical Over Theoretical",
                text: "Knowledge has value only when it can be applied in real situations.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group
                  bg-[#FFFFFF1A]
                  border border-[#575DBF]
                  rounded-3xl
                  p-8
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-[#FF6A00]/60
                  hover:-translate-y-[2px]
                "
              >
                <h3 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <span
                  className="
                    block
                    w-8 h-[2px]
                    bg-[#FF6A00]
                    mb-4
                    transition-all duration-300
                    group-hover:w-16
                  "
                ></span>

                <p className="text-[#A7ADC2] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= Our Approach ================= */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Our Approach
          </h2>
          <p className="text-[#A7ADC2] text-lg leading-relaxed">
            Our work begins with understanding context, continues through
            tailored guidance, and focuses on creating impact that extends well
            beyond engagement timelines.
          </p>
        </section>

        {/* ================= Why It Matters ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">
              Why It Matters
            </h2>
            <p className="text-[#A7ADC2] leading-relaxed mb-5">
              Organizations don’t need more information. They need clarity,
              alignment, and the ability to act with confidence.
            </p>
            <p className="text-[#A7ADC2] leading-relaxed">
              Our role is to bridge the gap between insight and execution
              through consulting and training that creates lasting value.
            </p>
          </div>

          <div
            className="
              bg-gradient-to-br from-[#1E1E4B] to-[#151538]
              border border-[#575DBF]/50
              rounded-3xl
              p-12
            "
          >
            <p className="text-white font-semibold text-lg mb-3">
              Our Commitment
            </p>
            <p className="text-[#A7ADC2] leading-relaxed">
              We commit to thoughtful engagement, honest guidance, and
              partnerships built on trust, credibility, and long-term impact.
            </p>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Let’s Start with a Conversation
          </h2>
          <p className="text-[#A7ADC2] text-lg mb-10">
            If you’d like to learn more about how we think and work, we’d be
            glad to connect.
          </p>

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              px-10 py-5
              rounded-2xl
              bg-[#FF6A00]
              text-white
              text-lg
              font-semibold
              transition-all duration-300
              hover:bg-[#ff7d33]
            "
          >
            Contact Us
          </a>
        </section>
      </div>
    </main>
  );
}
