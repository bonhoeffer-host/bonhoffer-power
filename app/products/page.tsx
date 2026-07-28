"use client";
import Image from "next/image";
import Link from "next/link";

const allImages = [
  "/BON-DG35Kw (2).jpg",
  "/BON-DG35Kw (3).jpg",
  "/BON-DG35Kw (4).jpg",
  "/BON-DG35Kw (5).jpg",
  "/BON-DG35Kw (6).jpg",
  "/BON-DG35Kw.jpg",
];

// Cycle images across all generators
function cycleImg(index: number) {
  return allImages[index % allImages.length];
}

const allProducts = [
  // ── STANDARD 1-PHASE GENERATORS (8) ──
  {
    img: cycleImg(0),
    name: "BON-DG-11KW-1P",
    tag: "11 kW",
    phase: "1-Phase",
    series: "Standard",
    desc: "11 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 12Kva / 12Kw",
      "Rated (Kva / Kw) :- 11Kva / 11Kw",
      "Phase :- 1-phase",
      "Power Factor :- 1",
      "Volt :- 110/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 55",
      "Engine :- Faw 4DW81-23D",
      "Alternator :- 1st All QYI184ES",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(1),
    name: "BON-DG-17KW-1P",
    tag: "17 kW",
    phase: "1-Phase",
    series: "Standard",
    desc: "17 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 19Kva / 19Kw",
      "Rated (Kva / Kw) :- 17Kva / 17Kw",
      "Phase :- 1-phase",
      "Power Factor :- 1",
      "Volt :- 110/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 84",
      "Engine :- Faw 4DW92-35D",
      "Alternator :- 1st All QYI184F",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(2),
    name: "BON-DG-20KW-1P",
    tag: "20 kW",
    phase: "1-Phase",
    series: "Standard",
    desc: "20 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 28Kva / 22Kw",
      "Rated (Kva / Kw) :- 25Kva / 20Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Volt :- 110/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 100",
      "Engine :- Faw 4DW92-39D",
      "Alternator :- 1st All QYI184H",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(3),
    name: "BON-DG-25KW-1P",
    tag: "25 kW",
    phase: "1-Phase",
    series: "Standard",
    desc: "25 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 35Kva / 28Kw",
      "Rated (Kva / Kw) :- 31Kva / 25Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Volt :- 110/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 125",
      "Engine :- Faw 4DX22-50D",
      "Alternator :- 1st All QYI224C",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-160A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(4),
    name: "BON-DG-30KW-1P",
    tag: "30 kW",
    phase: "1-Phase",
    series: "Standard",
    desc: "30 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 41Kva / 33Kw",
      "Rated (Kva / Kw) :- 38Kva / 30Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Volt :- 110/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 150",
      "Engine :- Faw 4DX21-53D",
      "Alternator :- 1st All QYI224D",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-160A",
      "Aspiration :- Natural",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(5),
    name: "BON-DG-36KW-1P",
    tag: "36 kW",
    phase: "1-Phase",
    series: "Standard",
    desc: "36 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 50Kva / 40Kw",
      "Rated (Kva / Kw) :- 45Kva / 36Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Volt :- 110/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 180",
      "Engine :- Faw 4DX22-65D",
      "Alternator :- 1st All QYI224FS",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-250A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(0),
    name: "BON-DG-40KW-1P",
    tag: "40 kW",
    phase: "1-Phase",
    series: "Standard",
    desc: "40 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 55Kva / 44Kw",
      "Rated (Kva / Kw) :- 50Kva / 40Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Volt :- 110/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 200",
      "Engine :- Faw 4DX22-65D",
      "Alternator :- 1st All QYI224FS",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-250A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(1),
    name: "BON-DG-55KW-1P",
    tag: "55 kW",
    phase: "1-Phase",
    series: "Standard",
    desc: "55 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 76Kva / 61Kw",
      "Rated (Kva / Kw) :- 69Kva / 55Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Volt :- 110/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 275",
      "Engine :- Faw 4110/125Z-09D",
      "Alternator :- 1st All QYI2246M",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-250A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },

  // ── STANDARD 3-PHASE GENERATORS (8) ──
  {
    img: cycleImg(2),
    name: "BON-DG-11KW-3P",
    tag: "11 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "11 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 15Kva / 12Kw",
      "Rated (Kva / Kw) :- 14KVA / 11KW",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 380V/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 18",
      "Engine :- Faw 4DW81-23D",
      "Alternator :- 1st All QYI164D",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(3),
    name: "BON-DG-17KW-3P",
    tag: "17 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "17 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 23Kva / 19Kw",
      "Rated (Kva / Kw) :- 21KVA / 17KW",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 380V/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 29",
      "Engine :- Faw 4DW91-29D",
      "Alternator :- 1st All QYI184ES",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(4),
    name: "BON-DG-20KW-3P",
    tag: "20 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "20 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 28Kva / 22Kw",
      "Rated (Kva / Kw) :- 25KVA / 20KW",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 380V/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 33",
      "Engine :- Faw 4DW92-35D",
      "Alternator :- 1st All QYI184FS",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(5),
    name: "BON-DG-25KW-3P",
    tag: "25 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "25 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 34Kva / 28Kw",
      "Rated (Kva / Kw) :- 31KVA / 25KW",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 380V/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 43",
      "Engine :- Faw 4DX21-45D",
      "Alternator :- 1st All QYI184G",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(0),
    name: "BON-DG-30KW-3P",
    tag: "30 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "30 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 41Kva / 33Kw",
      "Rated (Kva / Kw) :- 38KVA / 30KW",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 380V/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 50",
      "Engine :- Faw 4DX22-50D",
      "Alternator :- 1st All QYI184H",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(1),
    name: "BON-DG-36KW-3P",
    tag: "36 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "36 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 50Kva / 40Kw",
      "Rated (Kva / Kw) :- 45KVA / 36KW",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 380V/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 61",
      "Engine :- Faw 4DX22-65D",
      "Alternator :- 1st All QYI224DS",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(2),
    name: "BON-DG-40KW-3P",
    tag: "40 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "40 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 55Kva / 44Kw",
      "Rated (Kva / Kw) :- 50KVA / 40KW",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 380V/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 67",
      "Engine :- Faw 4DX22-65D",
      "Alternator :- 1st All QYI224D",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(3),
    name: "BON-DG-55KW-3P",
    tag: "55 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "55 kW Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 76Kva / 61Kw",
      "Rated (Kva / Kw) :- 69KVA / 55KW",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 380V/220V",
      "Frequency :- 50 HZ",
      "Current (A) :- 93",
      "Engine :- Faw 4110/125Z-09D",
      "Alternator :- 1st All QYI224F",
      "Controller :- Deepsea DSE4520",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },

  // ── HIGH-POWER CUMMINS GENERATORS (3) ──
  {
    img: cycleImg(4),
    name: "BON-DG-116KW-3P",
    tag: "116 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "116 kW High-Power Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 145 Kva / 116 Kw",
      "Rated (Kva / Kw) :- 131 Kva / 105 Kw",
      "Phase :- 3-Phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 60 Hz",
      "Current (A) :- 220",
      "Engine :- CUMMINS 6BTA5.9-G2",
      "Alternator :- LA274G90",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- ATS-250A / Suyang ATS-160A",
      "Aspiration :- After-cooled, Turbo-charged",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(5),
    name: "BON-DG-130KW-3P",
    tag: "130 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "130 kW High-Power Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 163 Kva / 130 Kw",
      "Rated (Kva / Kw) :- 148 Kva / 118 Kw",
      "Phase :- 3-Phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 60 Hz",
      "Current (A) :- 248",
      "Engine :- CUMMINS 6BTAA5.9-G2",
      "Alternator :- LA274G100",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- ATS-250A / Suyang ATS-160A",
      "Aspiration :- After-cooled, Turbo-charged",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(0),
    name: "BON-DG-150KW-3P",
    tag: "150 kW",
    phase: "3-Phase",
    series: "Standard",
    desc: "150 kW High-Power Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 188 Kva / 150 Kw",
      "Rated (Kva / Kw) :- 170 Kva / 136 Kw",
      "Phase :- 3-Phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 60 Hz",
      "Current (A) :- 285",
      "Engine :- CUMMINS 6BTAA5.9-G2",
      "Alternator :- LA274H",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- ATS-400A",
      "Aspiration :- After-cooled, Turbo-charged",
      "Governor :- Electronic",
    ],
  },

  // ── AQUAMAX 1-PHASE (115/230V) (8) ──
  {
    img: cycleImg(1),
    name: "BDGW11-1P230-AquamaX",
    model: "BON-DG-11KW-1P",
    tag: "11 kW",
    phase: "1-Phase",
    series: "AquamaX",
    desc: "11 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 12 Kva / 12 Kw",
      "Rated (Kva / Kw) :- 11 Kva / 11 Kw",
      "Phase :- 1-phase",
      "Power Factor :- 1",
      "Voltage :- 115/230V",
      "Frequency :- 50 Hz",
      "Current (A) :- 55",
      "Engine :- FAW 4DW81-23D",
      "Alternator :- QYI184ES",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(2),
    name: "BDGW17-1P230-AquamaX",
    model: "BON-DG-17KW-1P",
    tag: "17 kW",
    phase: "1-Phase",
    series: "AquamaX",
    desc: "17 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 19 Kva / 19 Kw",
      "Rated (Kva / Kw) :- 17 Kva / 17 Kw",
      "Phase :- 1-phase",
      "Power Factor :- 1",
      "Voltage :- 115/230V",
      "Frequency :- 50 Hz",
      "Current (A) :- 84",
      "Engine :- FAW 4DW92-35D",
      "Alternator :- QYI184F",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(3),
    name: "BDGW20-1P230-AquamaX",
    model: "BON-DG-20KW-1P",
    tag: "20 kW",
    phase: "1-Phase",
    series: "AquamaX",
    desc: "20 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 28 Kva / 22 Kw",
      "Rated (Kva / Kw) :- 25 Kva / 20 Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Voltage :- 115/230V",
      "Frequency :- 50 Hz",
      "Current (A) :- 100",
      "Engine :- FAW 4DW92-39D",
      "Alternator :- QYI184H",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(4),
    name: "BDGW25-1P230-AquamaX",
    model: "BON-DG-25KW-1P",
    tag: "25 kW",
    phase: "1-Phase",
    series: "AquamaX",
    desc: "25 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 35 Kva / 28 Kw",
      "Rated (Kva / Kw) :- 31 Kva / 25 Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Voltage :- 115/230V",
      "Frequency :- 50 Hz",
      "Current (A) :- 125",
      "Engine :- FAW 4DX22-50D",
      "Alternator :- QYI224C",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-160A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(5),
    name: "BDGW30-1P230-AquamaX",
    model: "BON-DG-30KW-1P",
    tag: "30 kW",
    phase: "1-Phase",
    series: "AquamaX",
    desc: "30 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 41 Kva / 33 Kw",
      "Rated (Kva / Kw) :- 38 Kva / 30 Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Voltage :- 115/230V",
      "Frequency :- 50 Hz",
      "Current (A) :- 150",
      "Engine :- FAW 4DX21-53D",
      "Alternator :- QYI224D",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-160A",
      "Aspiration :- Natural",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(0),
    name: "BDGW36-1P230-AquamaX",
    model: "BON-DG-36KW-1P",
    tag: "36 kW",
    phase: "1-Phase",
    series: "AquamaX",
    desc: "36 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 50 Kva / 40 Kw",
      "Rated (Kva / Kw) :- 45 Kva / 36 Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Voltage :- 115/230V",
      "Frequency :- 50 Hz",
      "Current (A) :- 180",
      "Engine :- FAW 4DX22-65D",
      "Alternator :- QYI224FS",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-250A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(1),
    name: "BDGW40-1P230-AquamaX",
    model: "BON-DG-40KW-1P",
    tag: "40 kW",
    phase: "1-Phase",
    series: "AquamaX",
    desc: "40 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 55 Kva / 44 Kw",
      "Rated (Kva / Kw) :- 50 Kva / 40 Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Voltage :- 115/230V",
      "Frequency :- 50 Hz",
      "Current (A) :- 250",
      "Engine :- FAW 4DX22-65D",
      "Alternator :- QYI224FS",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-250A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(2),
    name: "BDGW55-1P230-AquamaX",
    model: "BON-DG-55KW-1P",
    tag: "55 kW",
    phase: "1-Phase",
    series: "AquamaX",
    desc: "55 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 75.6 Kva / 60.5 Kw",
      "Rated (Kva / Kw) :- 68.8 Kva / 55 Kw",
      "Phase :- 1-phase",
      "Power Factor :- 0.8",
      "Voltage :- 115/230V",
      "Frequency :- 50 Hz",
      "Current (A) :- 344",
      "Engine :- FAW 4110/125Z-09D",
      "Alternator :- QYI224GM",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-400A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },

  // ── AQUAMAX 3-PHASE (220/127V) (9) ──
  {
    img: cycleImg(3),
    name: "BDGV11-3P220-AquamaX",
    model: "BON-DG-11KW-3P",
    tag: "11 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "11 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 15 Kva / 12 Kw",
      "Rated (Kva / Kw) :- 14 Kva / 11 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/127V",
      "Frequency :- 50 Hz",
      "Current (A) :- 39",
      "Engine :- FAW 4DW81-23D",
      "Alternator :- QYI164D",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(4),
    name: "BDGV17-3P220-AquamaX",
    model: "BON-DG-17KW-3P",
    tag: "17 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "17 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 23 Kva / 19 Kw",
      "Rated (Kva / Kw) :- 21 Kva / 17 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/127V",
      "Frequency :- 50 Hz",
      "Current (A) :- 61",
      "Engine :- FAW 4DW91-29D",
      "Alternator :- QYI184ES",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(5),
    name: "BDGV20-3P220-AquamaX",
    model: "BON-DG-20KW-3P",
    tag: "20 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "20 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 27.5 Kva / 22 Kw",
      "Rated (Kva / Kw) :- 25 Kva / 20 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/127V",
      "Frequency :- 50 Hz",
      "Current (A) :- 72",
      "Engine :- FAW 4DW92-35D",
      "Alternator :- QYI184FS",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(0),
    name: "BDGV25-3P220-AquamaX",
    model: "BON-DG-25KW-3P",
    tag: "25 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "25 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 34 Kva / 28 Kw",
      "Rated (Kva / Kw) :- 31 Kva / 25 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/127V",
      "Frequency :- 50 Hz",
      "Current (A) :- 90",
      "Engine :- FAW 4DX21-45D",
      "Alternator :- QYI184G",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(1),
    name: "BDGV30-3P220-AquamaX",
    model: "BON-DG-30KW-3P",
    tag: "30 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "30 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 41.3 Kva / 33 Kw",
      "Rated (Kva / Kw) :- 37.5 Kva / 30 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/127V",
      "Frequency :- 50 Hz",
      "Current (A) :- 108",
      "Engine :- FAW 4DX22-50D",
      "Alternator :- QYI184H",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-125A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(2),
    name: "BDGV36-3P220-AquamaX",
    model: "BON-DG-36KW-3P",
    tag: "36 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "36 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 50 Kva / 40 Kw",
      "Rated (Kva / Kw) :- 45 Kva / 36 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/127V",
      "Frequency :- 50 Hz",
      "Current (A) :- 130",
      "Engine :- FAW 4DX22-65D",
      "Alternator :- QYI224DS",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-160A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(3),
    name: "BDGW40-3P220-AquamaX",
    model: "BON-DG-40KW-3P",
    tag: "40 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "40 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 55 Kva / 44 Kw",
      "Rated (Kva / Kw) :- 50 Kva / 40 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/127V",
      "Frequency :- 50 Hz",
      "Current (A) :- 144",
      "Engine :- FAW 4DX22-65D",
      "Alternator :- QYI224D",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-160A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(4),
    name: "BDGW55-3P220-AquamaX",
    model: "BON-DG-55KW-3P",
    tag: "55 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "55 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 75.6 Kva / 60.5 Kw",
      "Rated (Kva / Kw) :- 68.8 Kva / 55 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/127V",
      "Frequency :- 50 Hz",
      "Current (A) :- 198",
      "Engine :- FAW 4110/125Z-09D",
      "Alternator :- QYI224F",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-250A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(5),
    name: "BDGW116-3P220-AquamaX",
    model: "BON-DG-116KW-3P",
    tag: "116 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "116 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 145 Kva / 116 Kw",
      "Rated (Kva / Kw) :- 131 Kva / 105 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/127V",
      "Frequency :- 60 Hz",
      "Current (A) :- 380",
      "Engine :- CUMMINS 6BTA5.9-G2",
      "Alternator :- LA274G90",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- ATS-400A",
      "Aspiration :- After-cooled, Turbo-charged",
      "Governor :- Electronic",
    ],
  },

  // ── AQUAMAX 3-PHASE (220/380V) (9) ──
  {
    img: cycleImg(0),
    name: "BDGW11-3P380-AquamaX",
    model: "BON-DG-11KW-3P",
    tag: "11 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "11 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 15 Kva / 12 Kw",
      "Rated (Kva / Kw) :- 14 Kva / 11 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 50 Hz",
      "Current (A) :- 21",
      "Engine :- FAW 4DW81-23D",
      "Alternator :- QYI164D",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(1),
    name: "BDGW17-3P380-AquamaX",
    model: "BON-DG-17KW-3P",
    tag: "17 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "17 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 23 Kva / 19 Kw",
      "Rated (Kva / Kw) :- 21 Kva / 17 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 50 Hz",
      "Current (A) :- 32",
      "Engine :- FAW 4DW91-29D",
      "Alternator :- QYI184ES",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(2),
    name: "BDGW20-3P380-AquamaX",
    model: "BON-DG-20KW-3P",
    tag: "20 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "20 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 27.5 Kva / 22 Kw",
      "Rated (Kva / Kw) :- 25 Kva / 20 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 50 Hz",
      "Current (A) :- 42",
      "Engine :- FAW 4DW92-35D",
      "Alternator :- QYI184FS",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(3),
    name: "BDGW25-3P380-AquamaX",
    model: "BON-DG-25KW-3P",
    tag: "25 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "25 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 34 Kva / 28 Kw",
      "Rated (Kva / Kw) :- 31 Kva / 25 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 50 Hz",
      "Current (A) :- 48",
      "Engine :- FAW 4DX21-45D",
      "Alternator :- QYI184G",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-63A",
      "Aspiration :- Natural",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(4),
    name: "BDGW30-3P380-AquamaX",
    model: "BON-DG-30KW-3P",
    tag: "30 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "30 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 41.3 Kva / 33 Kw",
      "Rated (Kva / Kw) :- 37.5 Kva / 30 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 50 Hz",
      "Current (A) :- 63",
      "Engine :- FAW 4DX22-50D",
      "Alternator :- QYI184H",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Mechanical",
    ],
  },
  {
    img: cycleImg(5),
    name: "BDGW36-3P380-AquamaX",
    model: "BON-DG-36KW-3P",
    tag: "36 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "36 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 50 Kva / 40 Kw",
      "Rated (Kva / Kw) :- 45 Kva / 36 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 50 Hz",
      "Current (A) :- 72",
      "Engine :- FAW 4DX22-65D",
      "Alternator :- QYI224DS",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(0),
    name: "BDGW40-3P380-AquamaX",
    model: "BON-DG-40KW-3P",
    tag: "40 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "40 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 55 Kva / 44 Kw",
      "Rated (Kva / Kw) :- 50 Kva / 40 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 50 Hz",
      "Current (A) :- 84",
      "Engine :- FAW 4DX22-65D",
      "Alternator :- QYI224D",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-100A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(1),
    name: "BDGW55-3P380-AquamaX",
    model: "BON-DG-55KW-3P",
    tag: "55 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "55 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 75.6 Kva / 60.5 Kw",
      "Rated (Kva / Kw) :- 68.8 Kva / 55 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 50 Hz",
      "Current (A) :- 115",
      "Engine :- FAW 4110/125Z-09D",
      "Alternator :- QYI224F",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- Suyang ATS-125A",
      "Aspiration :- Turbo",
      "Governor :- Electronic",
    ],
  },
  {
    img: cycleImg(2),
    name: "BDGW130-3P380-AquamaX",
    model: "BON-DG-130KW-3P",
    tag: "130 kW",
    phase: "3-Phase",
    series: "AquamaX",
    desc: "130 kW AquamaX Silent Diesel Generator",
    highlights: [
      "Standby (Kva / Kw) :- 163 Kva / 130 Kw",
      "Rated (Kva / Kw) :- 148 Kva / 118 Kw",
      "Phase :- 3-phase",
      "Power Factor :- 0.8",
      "Voltage :- 220/380V",
      "Frequency :- 60 Hz",
      "Current (A) :- 230",
      "Engine :- CUMMINS 6BTAA5.9-G2",
      "Alternator :- LA274G100",
      "Controller :- Deep Sea DSE6120 MKIII + DSE890 MKII",
      "ATS :- ATS-250A",
      "Aspiration :- After-cooled, Turbo-charged",
      "Governor :- Electronic",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/bonhoeffer_logo.webp"
                alt="Bonhoeffer Power"
                width={160}
                height={36}
                className="object-contain hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
            <ul className="hidden md:flex items-center gap-6">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className={`text-slate-700 font-semibold text-sm hover:text-primary transition-colors relative py-1 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all ${l.label === "Products"
                        ? "text-primary after:w-full"
                        : ""
                      }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* ── HERO BANNER ── */}
        <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-lime-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
              ⚡ Our Complete Range
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Silent Diesel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-lime-300 to-white">
                Generator Range
              </span>
            </h1>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-lime-400 rounded-full mx-auto mb-5" />
            <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
              Explore our full catalog of {allProducts.length} high-performance, fuel-efficient silent diesel generators — engineered for homes, businesses, construction sites, and industrial facilities.
            </p>
          </div>
        </section>

        {/* ── PRODUCT COUNT BAR ── */}
        <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">
              Complete Catalog
            </span>

          </div>
        </section>

        {/* ── PRODUCT GRID ── */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {allProducts.map((g, idx) => (
                <div
                  key={g.name + idx}
                  className={`bg-white rounded-3xl border overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group flex flex-col shadow-sm ${g.series === "AquamaX"
                      ? "border-teal-200/80 hover:border-teal-400/60"
                      : "border-slate-200/80 hover:border-primary/50"
                    }`}
                >
                  {/* Image — edge-to-edge */}
                  <div className="relative h-56 w-full overflow-hidden border-b border-slate-100">
                    <Image
                      src={g.img}
                      alt={g.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw"
                    />
                    {/* Phase badge */}
                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full z-10">
                      {g.phase}
                    </span>
                    {/* kW badge */}
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary-hover text-white text-xs font-black px-3 py-1 rounded-full shadow-md z-10">
                      {g.tag}
                    </span>
                    {/* AquamaX series badge */}
                    {g.series === "AquamaX" && (
                      <span className="absolute bottom-3 left-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-full z-10 tracking-wider uppercase shadow-lg">
                        ⚡ AquamaX
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                        {g.name}
                      </h3>
                      <p className="text-[11px] text-primary font-bold bg-primary-pale/80 px-2 py-0.5 rounded-md inline-block mb-3">
                        {g.desc}
                      </p>
                      <ul className="space-y-1 text-[11px] text-slate-600 mb-5">
                        {g.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            <span className="leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full text-center bg-slate-900 hover:bg-primary text-white text-xs font-bold py-3 rounded-xl transition-all shadow-md group-hover:shadow-lg"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white text-center relative overflow-hidden border-t border-slate-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/25 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-lime-400 font-bold text-xs px-5 py-2 rounded-full uppercase tracking-widest mb-6">
              ⚡ GET IN TOUCH
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
              Need Help Choosing the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-lime-300 to-white">
                Right Generator?
              </span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Our experts will help you find the perfect model for your power requirements and application.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-hover text-white font-extrabold px-9 py-4 rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 text-base"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <Image
            src="/bonhoeffer_logo.webp"
            alt="Bonhoeffer Power"
            width={130}
            height={30}
            className="object-contain brightness-0 invert"
          />
          <p>© 2025 Bonhoeffer Power. All rights reserved.</p>
          <p>Silent Diesel Generators – Power You Can Trust.</p>
        </div>
      </footer>
    </>
  );
}
