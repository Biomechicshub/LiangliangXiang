export type Publication = {
  title: string;
  authors: string; // Bold your name with **L. Xiang**
  venue: string;
  year: number;
  pdf?: string;
  doi?: string;
  code?: string;
  website?: string;
  highlight?: boolean; // Show a star badge
};

export const publications: Publication[] = [
  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    title:
      "Integrating personalized shape prediction, biomechanical modeling, and wearables for bone stress prediction in runners",
    authors: "**L. Xiang**, Y. Gu, K. Deng, Z. Gao, V. Shim, A. Wang, J. Fernandez",
    venue: "npj Digital Medicine",
    year: 2025,
    doi: "https://doi.org/10.1038/s41746-025-01662-z",
    code: "https://github.com/Biomechicshub/Bone_stressPred",
    highlight: true,
  },
  {
    title:
      "Explainable artificial intelligence for gait analysis: advances, pitfalls, and challenges — a systematic review",
    authors:
      "**L. Xiang**, Z. Gao, P. Yu, J. Fernandez, Y. Gu, R. Wang, E. M. Gutierrez-Farewik",
    venue: "Frontiers in Bioengineering and Biotechnology",
    year: 2025,
    doi: "https://doi.org/10.3389/fbioe.2025.1671344",
    highlight: true,
  },

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    title:
      "Integrating an LSTM framework for predicting ankle joint biomechanics during gait using inertial sensors",
    authors: "**L. Xiang**, Y. Gu, Z. Gao, P. Yu, V. Shim, A. Wang, J. Fernandez",
    venue: "Computers in Biology and Medicine",
    year: 2024,
    doi: "https://doi.org/10.1016/j.compbiomed.2024.108016",
    highlight: true,
  },
  {
    title:
      "A hybrid statistical morphometry free-form deformation approach to 3D personalized foot-ankle models",
    authors: "**L. Xiang**, Y. Gu, V. Shim, T. Yeung, A. Wang, J. Fernandez",
    venue: "Journal of Biomechanics",
    year: 2024,
    doi: "https://doi.org/10.1016/j.jbiomech.2024.112120",
  },
  {
    title:
      "Rethinking running biomechanics: a critical review of ground reaction forces, tibial bone loading, and the role of wearable sensors",
    authors: "**L. Xiang**, Z. Gao, A. Wang, V. Shim, G. Fekete, Y. Gu, J. Fernandez",
    venue: "Frontiers in Bioengineering and Biotechnology",
    year: 2024,
    doi: "https://doi.org/10.3389/fbioe.2024.1377383",
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    title:
      "Foot pronation prediction with inertial sensors during running: a preliminary application of data-driven approaches",
    authors: "**L. Xiang**, Y. Gu, A. Wang, V. Shim, Z. Gao, J. Fernandez",
    venue: "Journal of Human Kinetics",
    year: 2023,
    doi: "https://doi.org/10.5114/jhk/163059",
  },

  // ── 2022 ──────────────────────────────────────────────────────────────────
  {
    title:
      "Evaluating function in the hallux valgus foot following a 12-week minimalist footwear intervention: a pilot computational analysis",
    authors: "**L. Xiang**, Q. Mei, A. Wang, V. Shim, J. Fernandez, Y. Gu",
    venue: "Journal of Biomechanics",
    year: 2022,
    doi: "https://doi.org/10.1016/j.jbiomech.2022.110941",
  },
  {
    title:
      "Automatic classification of barefoot and shod populations based on foot metrics and plantar pressure patterns",
    authors: "**L. Xiang**, Y. Gu, Q. Mei, A. Wang, V. Shim, J. Fernandez",
    venue: "Frontiers in Bioengineering and Biotechnology",
    year: 2022,
    doi: "https://doi.org/10.3389/fbioe.2022.843204",
  },
  {
    title:
      "Recent machine learning progress in lower limb running biomechanics with wearable technology: a systematic review",
    authors: "**L. Xiang**, A. Wang, Y. Gu, L. Zhao, V. Shim, J. Fernandez",
    venue: "Frontiers in Neurorobotics",
    year: 2022,
    doi: "https://doi.org/10.3389/fnbot.2022.853032",
  },
  {
    title:
      "Gait biomechanics evaluation of the treatment effects for hallux valgus patients: a systematic review and meta-analysis",
    authors: "**L. Xiang**, Q. Mei, A. Wang, J. Fernandez, Y. Gu",
    venue: "Gait & Posture",
    year: 2022,
    doi: "https://doi.org/10.1016/j.gaitpost.2021.11.003",
  },
  {
    title:
      "Shock acceleration and attenuation during running with minimalist and maximalist shoes: a time- and frequency-domain analysis of tibial acceleration",
    authors: "**L. Xiang**, Y. Gu, M. Rong, Z. Gao, T. Yang, A. Wang, V. Shim, J. Fernandez",
    venue: "Bioengineering",
    year: 2022,
    doi: "https://doi.org/10.3390/bioengineering9010028",
  },
  {
    title:
      "Effect of foot pronation during distance running on the lower limb impact acceleration and dynamic stability",
    authors: "**L. Xiang**, Y. Gu, A. Wang, Q. Mei, P. Yu, V. Shim, J. Fernandez",
    venue: "Acta of Bioengineering and Biomechanics",
    year: 2022,
  },
  {
    title:
      "Population and age-based cardiorespiratory fitness level investigation and automatic prediction",
    authors: "**L. Xiang**, K. Deng, Q. Mei, Z. Gao, T. Yang, A. Wang, J. Fernandez, Y. Gu",
    venue: "Frontiers in Cardiovascular Medicine",
    year: 2022,
  },

  // ── 2020 ──────────────────────────────────────────────────────────────────
  {
    title: "A biomechanical assessment of the acute hallux abduction manipulation intervention",
    authors: "**L. Xiang**, Q. Mei, J. Fernandez, Y. Gu",
    venue: "Gait & Posture",
    year: 2020,
    doi: "https://doi.org/10.1016/j.gaitpost.2019.11.022",
  },
  {
    title:
      "Multi-segmental motion in foot during counter-movement jump with toe manipulation",
    authors: "**L. Xiang**, Q. Mei, D. Xu, J. Fernandez, Y. Gu",
    venue: "Applied Sciences",
    year: 2020,
  },

  // ── 2018 ──────────────────────────────────────────────────────────────────
  {
    title:
      "Minimalist shoes running intervention can alter the plantar loading distribution and deformation of hallux valgus: a pilot study",
    authors: "**L. Xiang**, Q. Mei, J. Fernandez, Y. Gu",
    venue: "Gait & Posture",
    year: 2018,
    doi: "https://doi.org/10.1016/j.gaitpost.2018.06.114",
  },
];
