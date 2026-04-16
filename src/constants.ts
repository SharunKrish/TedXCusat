export interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
}

const BLANK_PROFILE_PIC = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Quantum Computing Expert",
    image: BLANK_PROFILE_PIC,
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Sustainability Architect",
    image: BLANK_PROFILE_PIC,
  },
  {
    id: 3,
    name: "Aisha Rahmani",
    role: "AI Ethics Pioneer",
    image: BLANK_PROFILE_PIC,
  },
  {
    id: 4,
    name: "Dr. Julian Voss",
    role: "Marine Biologist",
    image: BLANK_PROFILE_PIC,
  },
  {
    id: 5,
    name: "Elena Rossi",
    role: "Mental Health Advocate",
    image: BLANK_PROFILE_PIC,
  },
  {
    id: 6,
    name: "Kevin Zhang",
    role: "Futurist & Author",
    image: BLANK_PROFILE_PIC,
  },
];
