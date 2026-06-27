import consultationRoom from "@/assets/hospital/consultation-room.webp";
import doctorConsultation from "@/assets/hospital/doctor-consultation.webp";
import waitingHall from "@/assets/hospital/waiting-hall.webp";
import doctorPatientIcu from "@/assets/hospital/doctor-patient-icu.webp";
import familyConsultation from "@/assets/hospital/family-consultation.webp";
import frontBuilding from "@/assets/hospital/front-building.webp";
import headOffice from "@/assets/hospital/head-office.webp";
import icuWard from "@/assets/hospital/icu-ward.webp";
import icuCare from "@/assets/hospital/icu-care.webp";
import pharmacy from "@/assets/hospital/pharmacy.webp";
import nurseStation from "@/assets/hospital/nurse-station.webp";
import operationTheatre from "@/assets/hospital/operation-theatre.webp";
import oxygenSupport from "@/assets/hospital/oxygen-support.webp";
import pathology from "@/assets/hospital/pathology.webp";
import frontClose from "@/assets/hospital/front-close.webp";
import ayushman from "@/assets/hospital/ayushman.webp";
import icuBeds from "@/assets/hospital/icu-beds.webp";
import monitorBeds from "@/assets/hospital/monitor-beds.webp";
import icuRound from "@/assets/hospital/icu-round.webp";

import drShubhdeep from "@/assets/doctors/shubhdeep.webp";
import drAparjita from "@/assets/doctors/aparjita.webp";
import drMandeep from "@/assets/doctors/mandeep.webp";
import drShreya from "@/assets/doctors/shreya.webp";
import drMukut from "@/assets/doctors/mukut.webp";
import drAkansha from "@/assets/doctors/akansha.webp";
import drDhananjay from "@/assets/doctors/dhananjay.webp";
import drMritunjay from "@/assets/doctors/mritunjay.webp";
import drNiket from "@/assets/doctors/niket.webp";
import drSandeep from "@/assets/doctors/sandeep.webp";
import drYogesh from "@/assets/doctors/yogesh.webp";
import drAmanjeet from "@/assets/doctors/amanjeet.webp";

export const hospitalImages = {
  consultationRoom,
  doctorConsultation,
  waitingHall,
  doctorPatientIcu,
  familyConsultation,
  frontBuilding,
  headOffice,
  icuWard,
  icuCare,
  pharmacy,
  nurseStation,
  operationTheatre,
  oxygenSupport,
  pathology,
  frontClose,
  ayushman,
  icuBeds,
  monitorBeds,
  icuRound,
};

export const galleryImages = [
  { src: icuWard, label: "ICU & critical care ward", tag: "Critical Care", span: "lg:col-span-2 lg:row-span-2" },
  { src: operationTheatre, label: "Modern operation theatre", tag: "Surgery" },
  { src: doctorPatientIcu, label: "Doctor beside patient", tag: "Patient Care" },
  { src: familyConsultation, label: "Family consultation", tag: "Counselling" },
  { src: nurseStation, label: "Nursing care", tag: "Care Team" },
  { src: waitingHall, label: "Patient waiting lounge", tag: "Comfort", span: "lg:col-span-2" },
  { src: pharmacy, label: "In-house pharmacy", tag: "Pharmacy" },
  { src: pathology, label: "Pathology & diagnostics", tag: "Diagnostics" },
  { src: oxygenSupport, label: "Oxygen and monitoring support", tag: "ICU Support" },
  { src: frontBuilding, label: "Hospital front view", tag: "Location", span: "lg:col-span-2" },
  { src: headOffice, label: "Consultation office", tag: "Doctors" },
];

export const doctorImages = {
  "Dr. Shubhdeep M.W. Richi": drShubhdeep,
  "Dr. Aparjita Mishra": drAparjita,
  "Dr. Mandeep M.H. Madia": drMandeep,
  "Dr. Shreya Sharma": drShreya,
  "Dr. Mukut Niranjan": drMukut,
  "Dr. Akansha Bhardwaj": drAkansha,
  "Dr. Dhananjay Saxena": drDhananjay,
  "Dr. Mritunjay Saxena": drMritunjay,
  "Dr. Niket Jain": drNiket,
  "Dr. Sandeep Kumar Patel": drSandeep,
  "Dr. Yogesh Dwivedi": drYogesh,
  "Dr. Amanjeet Kindra": drAmanjeet,
};
