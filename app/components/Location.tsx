import { Clock, MapPin, Phone } from "lucide-react";

export default function Location() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          Estamos em Aveiro, Perto de Você
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="lg:w-1/2 mb-8 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24304.54321234567!2d-8.6537!3d40.6405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM4JzI1LjgiTiA4wrAzOScxMy4yIlc!5e0!3m2!1spt-PT!2spt!4v1625000000000!5m2!1spt-PT!2spt"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <div className="lg:w-1/2 md:pl-8">
            <div className="flex items-center mb-4">
              <MapPin className="text-green-600 mr-2" size={24} />
              <p>Rua Tv. de São Sebastião 2, 2530-154 Lourinhã, Portugal</p>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="text-green-600 mr-2" size={24} />
              <a
                href="https://api.whatsapp.com/send?phone=351911587398&text=Ol%C3%A1%2C%20quero%20agendar%20uma%20consulta%20com%20o%20fisioterapeuta%20Evandro%20Tomelin.%20%0A%0APode%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F%20Obrigado(a)!"
                className="text-green-600 hover:underline"
              >
                Clique aqui para conversar diretamente
              </a>
            </div>
            <div className="flex items-center">
              <Clock className="text-green-600 mr-2" size={24} />
              <p>Segunda a sexta, das 9h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
