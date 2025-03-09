import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock } from "lucide-react";

export default function AppointmentForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          Preencha e Comece Sua Transformação
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Nome completo" required />
          </div>
          <div className="mb-4">
            <Input type="tel" placeholder="Telefone/WhatsApp" required />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="E-mail" required />
          </div>
          <div className="mb-6">
            <Textarea
              placeholder="Descrição breve do problema (opcional)"
              rows={4}
            />
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-16 rounded-full shadow-lg transition duration-300">
            Agendar Avaliação
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 flex items-center justify-center">
          <Lock className="mr-2" size={16} />
          Seus dados estão seguros e serão utilizados exclusivamente para
          agendamento.
        </p>
      </div>
    </section>
  );
}
