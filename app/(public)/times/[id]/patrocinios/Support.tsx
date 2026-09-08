import Link from "next/link";
import { FaHandshake } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";
import image from "@/image/onza.jpg";
import image2 from "@/image/acai.jpg";
import image3 from "@/image/fabiacroche.jpg";
import image4 from "@/image/sostech.jpg";
import image5 from "@/image/rain.png";
import image6 from "@/image/tocedor.png";

export function Support() {
  return (
    <div className="p-2 mb-14 flex flex-col gap-1">
      <p className="text-sm">
        Ajude e veja quem apoia o <strong>A.E Milan F.C</strong>
      </p>
      <section className="flex ring-2 ring-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-md p-1">
        <img
          className="w-28"
          src="https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=29damq0k&dl=1"
          alt="Banner Várzea"
        />
        <div>
          <h2 className="text-2xl text-amber-200 font-semibold uppercase font-roboto">
            Apoie o Clube
          </h2>
          <p className="text-[12px]">
            Sejam um sócio-torcedor e mostre ainda mais apoio ao seu clube
            favorito e concorra a recompensas.
          </p>
          <button className="text-[#e3e3e4] text-[15px] border border-green-600 font-semibold bg-linear-to-r from-[#02530f] via-[#29d423] to-[#02530f] p-2 rounded-md flex items-center gap-1">
            <FaHandshake className="text-2xl" /> Ser Sócio torcedor
          </button>
        </div>
      </section>
      
      <p>Patrocinadores</p>

      <section className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-1 rounded-sm p-1 border border-[#05a347ce] bg-linear-to-r from-green-950 to-green-500 bg-clip-border">
          <div className="flex items-center gap-1">
            <Image className="w-8 rounded-full" src={image} alt="Onza Foto" />
            <p className="shadow font-semibold">OnzaFit - Academia</p>
            
          </div>
          {/* <button className="bg-[#02530f] p-1 rounded-md text-amber-200 border flex items-center border-green-400">
          Conhecer
        </button> */}
          <Link href='/profile2'><MdDoubleArrow className="text-black" />{" "}</Link>
        </div>

        <div className="flex items-center justify-between gap-1 rounded-sm p-1 border border-[#05a347ce] bg-linear-to-r from-green-950 to-green-500 bg-clip-border">
          <div className="flex items-center gap-1">
            <Image className="w-8 rounded-full" src={image2} alt="Onza Foto" />
            <p className="shadow font-semibold">Açaí com Chocolate</p>
          </div>
          <MdDoubleArrow className="text-black" />{" "}
        </div>

        <div className="flex items-center justify-between gap-1 rounded-sm p-1 border border-[#05a347ce] bg-linear-to-r from-green-950 to-green-500 bg-clip-border">
          <div className="flex items-center gap-1">
            <Image className="w-8 rounded-full" src={image3} alt="Onza Foto" />
            <p className="shadow font-semibold">Fabia Crochê</p>
          </div>
          <MdDoubleArrow className="text-black" />{" "}
        </div>

        <div className="flex items-center justify-between gap-1 rounded-sm p-1 border border-[#05a347ce] bg-linear-to-r from-green-950 to-green-500 bg-clip-border">
          <div className="flex items-center gap-1">
            <Image className="w-8 rounded-full" src={image4} alt="Onza Foto" />
            <p className="shadow font-semibold">SOS Tech</p>
          </div>
          <MdDoubleArrow className="text-black" />{" "}
        </div>
      </section>
      <p className="text-gray-400 text-center">Planos sócio torcedor</p>
      <div className="flex gap-1 justify-center">
        <div className="flex items-center p-1 border rounded-md">
          <Image className="w-12" src={image6} alt="Rain" />
          <div>
            <p>Plano Pro</p>
            <p className="flex items-center gap-1 text-green-400 font-semibold">R$ 23,50 <span className="text-[10px] font-medium">/Mês</span></p>
          </div>
        </div>

        <div className="flex items-center p-1 border rounded-md">
          <Image className="w-12" src={image5} alt="Rain" />
          <div>
            <p>Plano Fanático</p>
            <p className="flex items-center gap-1 text-green-400 font-semibold">R$ 49,90 <span className="text-[10px] font-medium">/Mês</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
