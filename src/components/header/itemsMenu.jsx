const itemsMenu = [
  {
    key: "1",
    label: "Início",
    link: "início",
  },
  {
    key: "2",
    label: "Sobre",
    link: "sobre",
  },
  {
    key: "3",
    label: "Soluções",
    link: "soluções",
  },
  {
    type: "divider",
  },
  {
    key: "4",
    label: "Catálogo",
    link: "soluções",
    children: [
      {
        key: "5",
        label: "Distanciamento inteligente",
        link: "distanciamento-inteligente",
      },
      {
        key: "6",
        label: "Identificação de máscaras e Controle de temperatura corporal",
        link: "identificação-mascaras-e-controle-temperatura-corporal",
      },
      {
        key: "7",
        label: "Skin Cancer",
        link: "skin-cancer",
      },
      {
        key: "8",
        label: "Inteligência artificial na saúde",
        link: "ia-saúde",
      },
      {
        key: "9",
        label: "Business Intelligence",
        link: "business-intelligence",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "10",
    label: "Desafios",
    link: "desafios",
  },
  {
    key: "11",
    label: "Contato",
    link: "contato",
  },
];

export default itemsMenu;
