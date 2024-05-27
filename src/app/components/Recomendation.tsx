import React from "react";

interface ContactInfo {
  logo: string;
  text: string;
}

const Recomendation: React.FC = () => {
  const contact_info: ContactInfo[] = [
    { logo: "mail", text: "codeaprogram@gmail.com" },
    { logo: "logo-whatsapp", text: "123 456 780" },
    {
      logo: "location",
      text: "demo location",
    },
  ];

  const recommendedItems = [
    { name: 'Samir Lopez', recommendation: 'Trabajar un poco mas rapido y eficientemente' },
    { name: 'Josue Portilla', recommendation: 'Dejar el vicio y el League of Leyends por su bien' },
    { name: 'Adrian Valverde', recommendation: 'Salir de la casa, divertirse y dejar de ofuscarse tanto' },
    { name: 'Kevin Sibaja', recommendation: 'Compartir los codigos, no ser agarrados por algo existe el github' },
    { name: 'Diego Castro', recommendation: 'Socializar con los compañeros y despedirse al salir' },
    { name: 'Yosh Escorcia', recommendation:  'Invitar a las pedas y salir mas seguido de la casa.' },
  ];

  return (
    <section id="recomendation" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Recommended <span className="text-purple-500">Partners</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">The best computer partners</p>

        <div className="mt-10 max-w-4xl mx-auto grid gap-6 lg:grid-cols-2">
          {recommendedItems.map((item, index) => (
            <div key={index} className="bg-blue-900 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-gray-200">{item.recommendation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recomendation;
