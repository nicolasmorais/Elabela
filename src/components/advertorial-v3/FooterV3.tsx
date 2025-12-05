"use client";

export const FooterV3 = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Disclaimer Section */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">
              Aviso Importante
            </h3>
            <p className="text-sm">
              Este produto não substitui o parecer médico profissional. Sempre
              consulte um profissional da saúde para tratar de assuntos
              relativos à saúde.
            </p>
          </div>

          {/* Company Info Section */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">
              Informações da Empresa
            </h3>
            <div className="text-sm space-y-1">
              <p>
                <span className="font-medium text-gray-300">Empresa:</span>{" "}
                OneConversion Soluções Digitais
              </p>
              <p>
                <span className="font-medium text-gray-300">Endereço:</span>{" "}
                Av. Digital, 123, Sala 4, Aparecida de Goiania - GO
              </p>
              <p>
                <span className="font-medium text-gray-300">CNPJ:</span>{" "}
                60.357.932/0001-18
              </p>
              <p>
                <span className="font-medium text-gray-300">Contato:</span>{" "}
                suporte@oneconversion.pro
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            Todos os direitos reservados © 2024 - OneConversion Soluções Digitais
          </p>
        </div>
      </div>
    </footer>
  );
};