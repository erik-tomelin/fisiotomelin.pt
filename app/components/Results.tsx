'use client';
import { Button } from "@/components/ui/button";
import { whatsAppRedirection } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

export default function Results() {
  const handleWhatsAppRequest = async () => {
    window.location.href = await whatsAppRedirection();
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          Livre-se das Dores e Redescubra o Prazer de se Mover
        </h2>
        <p className="text-lg mb-8 text-center">
          Seja dores nas costas, ombros ou articulações, o foco está em
          encontrar a causa do problema e oferecer um tratamento definitivo,
          devolvendo sua mobilidade e bem-estar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            "Elimine dores crônicas e evite recorrências",
            "Melhore sua postura e qualidade de vida",
            "Recupere sua confiança e liberdade de movimento",
          ].map((benefit, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="text-green-500 mr-4" size={24} />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-16 rounded-full shadow-lg transition duration-300"
            onClick={handleWhatsAppRequest}
          >
            Descubra como podemos ajudar você!
          </Button>
        </div>
      </div>
    </section>
  );
}
