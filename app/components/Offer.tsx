"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Offer() {
  const [count, setCount] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Avaliação Gratuita: Apenas Para os Primeiros 20 Agendamentos
        </h2>
        <p className="text-xl mb-8">
          Garanta sua oportunidade de identificar a causa das suas dores com um
          atendimento exclusivo. Não deixe para depois!
        </p>
        <div className="mb-8">
          <span className="text-4xl font-bold">{count}</span>
          <span className="text-2xl"> vagas restantes</span>
        </div>
        <Button className="bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 animate-pulse">
          Reserve sua Avaliação Agora!
        </Button>
      </div>
    </section>
  );
}
