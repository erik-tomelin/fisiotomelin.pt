import Image from "next/image";

export default function Diagnosis() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 md:px-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          A Solução Começa com um Diagnóstico Preciso
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="lg:w-1/4 mb-8 md:mb-0">
            <Image
              src="/diagnostic-equipment.jpg"
              alt="Equipamento de análise postural"
              width={500}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 md:pl-8">
            <p className="text-lg mb-6">
              Com técnicas avançadas, Evandro utiliza o único equipamento de
              análise postural em Aveiro, complementando sua expertise para
              identificar e tratar a causa raiz da dor.
            </p>
            <ul className="list-disc list-inside text-green-700">
              <li>Diagnósticos rápidos e precisos</li>
              <li>Equipamento de última geração</li>
              <li>Resultados que complementam a experiência profissional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
