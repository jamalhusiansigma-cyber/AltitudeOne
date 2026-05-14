import cessna from "@/assets/plane-cessna.jpg";
import piper from "@/assets/plane-piper.jpg";
import beech from "@/assets/plane-beech.jpg";

export type Aircraft = {
  id: string;
  name: string;
  year: number;
  hours: number;
  location: string;
  marketPrice: number;
  ourPrice: number;
  image: string;
  story: string;
};

export const inventory: Aircraft[] = [
  {
    id: "n4421-cessna-172",
    name: "Cessna 172 Skyhawk",
    year: 1978,
    hours: 4280,
    location: "Boise, ID",
    marketPrice: 92000,
    ourPrice: 64500,
    image: cessna,
    story: "Flown for 41 years by Captain Harold Jensen, USAF (ret.). Logbooks complete.",
  },
  {
    id: "n8812-piper-cherokee",
    name: "Piper Cherokee 140",
    year: 1971,
    hours: 5910,
    location: "Asheville, NC",
    marketPrice: 78000,
    ourPrice: 52000,
    image: piper,
    story: "Owned by Eleanor Briggs, charter pilot and instructor for three generations of pilots.",
  },
  {
    id: "n2207-beech-bonanza",
    name: "Beechcraft Bonanza V35",
    year: 1984,
    hours: 3120,
    location: "Tulsa, OK",
    marketPrice: 165000,
    ourPrice: 118500,
    image: beech,
    story: "Hangared its entire life. Last flown by Dr. Marcus Lee, a country physician and weekend aviator.",
  },
];
