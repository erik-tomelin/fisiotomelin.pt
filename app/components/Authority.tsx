import Image from "next/image";

export default function Authority() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          Por Que Escolher Evandro Tomelin?
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="lg:w-1/4 h-1/4 mb-8 md:mb-0">
            <Image
              src="/evandro-with-patient.jpg"
              alt="Evandro Tomelin com paciente"
              width={500}
              height={300}
              className="rounded-xl shadow-lg"
              objectFit="cover"
            />
          </div>
          <div className="lg:w-1/2 h-1/4 md:pl-8">
            <p className="text-lg mb-6">
              Com anos de experiência, técnicas comprovadas e atendimento
              individualizado, Evandro é reconhecido como referência em
              fisioterapia postural na região de Aveiro.
            </p>
            {/* TODO - pedir a orde, dps fisioterapeutas de portugal */}
            {/*  */}
            {/* <div className="flex items-center mb-4">
              <Image
                src="/ordem-fisioterapeutas-logo.png"
                alt="Ordem dos Fisioterapeutas"
                width={100}
                height={100}
                className="mr-4"
              />
              <p className="text-sm text-gray-600">
                Membro da Ordem dos Fisioterapeutas de Portugal
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
