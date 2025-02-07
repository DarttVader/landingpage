import Lora from "next/font/local";

const FontLora = Lora({
  src: "../../fonts/Lora/static/Lora-Regular.ttf",
  variable: "--lora-regular",
})

const SectionQuite = () => {
  return(
    <section className="w-full h-full justify-items-center bg-[#CBB19A]">
      <div className="flex w-full h-full justify-between"> 
        <div className="w-1/2">

        </div>     
        <div className="w-[70%]">
          <h1 className={`${FontLora.variable} font-lora text-[#714d35] text-4xl text-center`}>Sobre mim</h1>
          <h3 className={`${FontLora.variable} font-lora text-black`}> Sou Doutora <span className="text-[#714d35]">Rafaela Mazieiro</span>, médica especializada na área da dermatologia e 
            apaixonada pela saúde da pele. 
            Formada pela Universidade de Marília há 5 anos, ela aprofundou seus conhecimentos com a especialização em 
            dermatologia no Instituto Pele Saudável/BWS em São Paulo capital. Para expandir ainda mais sua expertise, concluiu uma 
            subespecialização em cirurgia dermatológica e oncologia cutânea na mesma instituição, além de participar de inúmeros 
            cursos e congressos. Com 5 anos de experiência prática e uma vasta formação contínua em procedimentos estéticos, 
            a Dra. Rafaela está sempre atualizada nas técnicas mais avançadas, oferecendo tratamentos personalizados que respeitam a 
            individualidade de cada paciente e visam resultados excepcionais.
          </h3>
        </div>
      </div>
    </section>
  );
}; 

export default SectionQuite;