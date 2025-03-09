"use client";
import { Button } from "@/components/ui/button";
import { whatsAppRedirection } from "@/lib/utils";

export default function Hero() {
  const handleWhatsAppRequest = async () => {
    window.location.href = await whatsAppRedirection();
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-green-100 to-white">
      <div className="container mx-auto px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-800">
          Bem-estar em Movimento: Redescubra sua Qualidade de Vida
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 text-green-600">
          Com Evandro Tomelin, fisioterapeuta especializado, e técnicas
          avançadas, recupere a liberdade de viver sem dores.
        </h2>
        <Button
          onClick={handleWhatsAppRequest}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-16 rounded-full shadow-lg transition duration-300"
        >
          Marque sua Avaliação Agora!
        </Button>
      </div>
    </section>
  );
}
