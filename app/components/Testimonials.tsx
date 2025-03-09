
const testimonials = [
  {
    name: "Ana S.",
    location: "Aveiro",
    text: "Minha dor nas costas desapareceu depois de anos. Evandro foi incrível em descobrir a causa do problema.",
  },
  {
    name: "João M.",
    location: "Ílhavo",
    text: "Com o diagnóstico preciso, o tratamento foi rápido e eficaz. Minha postura melhorou muito.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-800">
          Histórias de Sucesso que Inspiram
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-green-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-lg italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
