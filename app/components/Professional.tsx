import { IconLookup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
export default function Professional() {
  const icon: IconLookup = { prefix: "fas", iconName: "award-simple" };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          Evandro Tomelin: Fisioterapeuta Reconhecido
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="lg:w-1/4 mb-8 md:mb-0">
            <Image
              src="/evandro-profile.jpg"
              alt="Evandro Tomelin"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 md:pl-8">
            <p className="text-lg mb-6">
              Evandro Tomelin combina conhecimento técnico, atendimento
              humanizado e métodos personalizados para aliviar dores e melhorar
              sua qualidade de vida. Sua abordagem vai além dos sintomas,
              tratando a causa real do problema.
            </p>
            <ul className="list-disc list-inside text-green-700">
              <li>
                Membro da Ordem dos Fisioterapeutas de Portugal (Cédula nº
                12758)
              </li>
              <li>
                Especialista em reabilitação postural e prevenção de dores
                crônicas
              </li>
              <li>
                Resultados comprovados com mais de 1000 pacientes satisfeitos
              </li>
            </ul>
            <div className="mt-6">
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
