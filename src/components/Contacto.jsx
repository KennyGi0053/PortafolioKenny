import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

import email from "../assets/email.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gk7qbcr",
        "template_jo1hlw9", 
        e.target,
        "ywAUMh7eqt4RtTBzY"    
      )
      .then(() => {
        toast.success("✅ Mensaje enviado correctamente");
        e.target.reset();
      })
      .catch((error) => {
       console.error("EmailJS Error:", error?.text || error);

        toast.error("❌ Ocurrió un error al enviar");
      });
  };

  return (
    <div id="contacto" className="mt-10">
      <h1 className="text-center text-2xl font-bold">Contacto</h1>
      <div className="mt-6 max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md md:flex md:gap-20 md:items-start md:w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:w-1/2"
        >
          <p className="text-lg mb-4 font-bold text-center md:text-left">
            Envíame un mensaje y desarrollemos tu proyecto juntos
          </p>

          <input
  type="text"
  name="title"
  placeholder="Asunto"
  required
  className="p-2 border border-gray-600 rounded-lg"
/>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="p-2 border border-gray-600 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            required
            className="p-2 border border-gray-600 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            required
            className="p-2 border border-gray-600 rounded-lg h-32 resize-none"
          />

          <button
            type="submit"
            className="bg-[#1269FF] text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>
        </form>

        <div className="mt-10 md:mt-0">
          <h2 className="text-center font-bold text-lg">Información de Contacto</h2>

          <div className="flex flex-row mt-6">
            <img src={email} alt="email icon" className="h-6 mt-4" />
            <div className="flex-col pl-6">
              <p className="text-lg font-medium">Email</p>
              <p className="text-gray-700">kennyperezr@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-row mt-6">
            <img src={phone} alt="phone icon" className="h-6 mt-4" />
            <div className="flex-col pl-6">
              <p className="text-lg font-medium">Teléfono</p>
              <p className="text-gray-700">+58 414 235-14-57</p>
            </div>
          </div>

          <div className="flex flex-row mt-6">
            <img src={location} alt="location icon" className="h-6 mt-4" />
            <div className="flex-col pl-6">
              <p className="text-lg font-medium">Ubicación</p>
              <p className="text-gray-700">Caracas, Venezuela</p>
            </div>
          </div>

          <div className="flex flex-row mt-12">
            <div className="pl-6">
              <p className="text-lg font-medium">Sígueme en</p>
              <div className="flex gap-4">
                <img src={github} alt="github icon" className="h-6 mt-4" />
                <img src={linkedin} alt="linkedin icon" className="h-6 mt-4" />
                <img src={instagram} alt="instagram icon" className="h-6 mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;