export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Data-Driven Gait Biomechanics for Precision Rehabilitation",
    description:
      "PI-led Digital Futures / RISE project (2,000,000 SEK, 2025–2027) developing wearable-AI pipelines that translate real-world gait data into personalised rehabilitation targets for patients with neurological and musculoskeletal conditions.",
    tags: ["Precision Rehabilitation", "Wearable AI", "Gait Analysis", "Digital Futures"],
  },
  {
    title: "Tibia Digital Twin for Runners",
    description:
      "PI-led CIF grant project (614,000 SEK, 2026–2027) building a full pipeline from smartphone-based photogrammetric foot scanning to personalised finite-element tibial models combined with wearable-AI to predict bone stress and injury risk in recreational runners.",
    tags: ["Digital Twin", "Smartphone Scanning", "Running Injury", "Bone Stress", "CIF"],
    github: "https://github.com/Biomechicshub/Bone_stressPred",
  },
  {
    title: "Deep Learning for Bone Stress Prediction",
    description:
      "A domain-adaptation LSTM framework for real-time biomechanical inference of tibial bone stress from wearable sensor data, removing the need for laboratory-grade equipment. Published in npj Digital Medicine (2025).",
    tags: ["Deep Learning", "LSTM", "Bone Stress", "Wearables", "Open Source"],
    github: "https://github.com/Biomechicshub/Bone_stressPred",
  },
  {
    title: "Deep Reinforcement Learning for Muscle Redundancy",
    description:
      "A DRL framework that solves the muscle redundancy problem in real time, enabling continuous inference of individual muscle forces from a musculoskeletal model without the computational cost of static optimisation.",
    tags: ["Reinforcement Learning", "Musculoskeletal Modelling", "Muscle Synergies", "Open Source"],
    github: "https://github.com/Biomechicshub/DRL-with-MSK-for-MRS",
  },
  {
    title: "Statistical Shape Models of the Human Foot",
    description:
      "Open-access population-based statistical shape models of the foot and ankle, enabling personalised 3D foot-ankle modelling from low-cost scans. Dataset hosted on Zenodo, used in multiple downstream biomechanics studies.",
    tags: ["Statistical Shape Modelling", "Foot Biomechanics", "Open Data"],
    link: "https://doi.org/10.5281/zenodo.13297928",
  },
];
