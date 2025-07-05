import { MoveRight  } from "lucide-react"


const Proyectos = () => {

    const imagenes = import.meta.glob('../assets/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

    const proyectos = [
  {
    id: 1,
    imagen: "../assets/especialshopi.png",
    titulo: "Especial Shopi",
    descripcion: "Página web e-commerce especializada en la venta de productos de ropa y accesorios.",
    tecnologias: ["HTML", "React-Vite", "Tailwind CSS", "JavaScript"],
    link: "https://especial-shopi-i5o5.vercel.app/"
  },
  {
    id: 2,
    imagen: "../assets/magicaljourney.png",
    titulo: "Magical Journey",
    descripcion: "Página web landing page sobre agencia de viajes",
    tecnologias: ["HTML", "React-Vite", "TailwindCSS",] ,
    link: "https://magical-journey-6r5y7djbx-kennygis-projects.vercel.app/"
  },
  {
    id: 3,
    imagen: "../assets/TicketShow.png",
    titulo: "Ticket",
    descripcion: "Página web e-commerce para venta de Tickets para conciertos musicales",
    tecnologias: ["HTML", "React-Vite", "Tailwind CSS", "Redux", "PostgreSQL", "Express", "Sequelize", "NodeJS","Firebase" ],
    link: "https://ticket-show.netlify.app/profile"
  },
  {
    id: 4,
    imagen: "../assets/LiberaApp.png",
    titulo: "LiberaApp (En desarrollo)",
    descripcion: "Aplicación para charlar con ia, meditación, relajación",
    tecnologias: ["React Native", "Expo", "NativewindCSS"],
    link: ""
  },
  {
    id: 5,
    imagen: "../assets/ZaldoApp1.png",
    titulo: "Zaldo App (En desarrollo)",
    descripcion: "Aplicación para Android, iOS para recarga de servicios celulares,Streaming",
    tecnologias: ["React Native", "Expo", "NativewindCSS"],
    link: ""
  }
];

  return (
    <div id="proyectos" className="mt-14 px-4 md:mt-20">
      <h1 className="text-center mt-6 font-bold text-2xl">Proyectos realizados y en proceso</h1>
      <div className="flex overflow-x-auto gap-6 pb-4">
    {proyectos.map((proyecto) => (

        <div 
        key={proyecto.id}
        className="min-w-[340px] max-w-[300px] bg-white rounded-2xl mt-10 shadow-xl pb-6">
        <img src={imagenes[proyecto.imagen]} 
        className="h-46 w-full object-contain rounded-t-2xl transition-transform duration-300 transform hover:scale-160"
        />
        <h2 className="mt-4 font-extrabold ml-6">{proyecto.titulo}</h2>
        <p className="m-4 text-md mt-2 text-gray-700 text-justify">{proyecto.descripcion}</p>


        <a 
        href={proyecto.link}
        target="_blank"
        rel="nooperner noreferrer"
        className="ml-6 mt-4 text-[#1269FF] font-semibold flex gap-2 items-center"> Ver Proyecto 
            <MoveRight className="h-6"/>
        </a>
        
    </div>
    ))}
    </div>
    </div>

  )
}

export default Proyectos
