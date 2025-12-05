"use client";

export const FooterV3 = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="bg-gray-900 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-xs text-gray-400 space-y-3">
          <p>
            Este produto não substitui o parecer médico profissional. Sempre
            consulte um profissional da saúde para tratar de assuntos relativos
            à saúde.
          </p>
          <div className="space-y-1">
            <p>
              Empresa: OneConversion Soluções Digitais - Av. Digital, 123, Sala
              4, Aparecida de Goiania - GO
            </p>
            <p>CNPJ: 60.357.932/0001-18</p>
            <p>Contato: suporte@oneconversion.pro</p>
          </div>
          <p>Todos os direitos reservados © 2024</p>
        </div>
      </div>
    </footer>
  );
};