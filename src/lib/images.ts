import consultationRoom from "@/assets/hospital/consultation-room.jpg";
import doctorConsultation from "@/assets/hospital/doctor-consultation.jpg";
import waitingHall from "@/assets/hospital/waiting-hall.jpg";
import doctorPatientIcu from "@/assets/hospital/doctor-patient-icu.jpg";
import familyConsultation from "@/assets/hospital/family-consultation.jpg";
import frontBuilding from "@/assets/hospital/front-building.jpg";
import headOffice from "@/assets/hospital/head-office.jpg";
import icuWard from "@/assets/hospital/icu-ward.jpg";
import icuCare from "@/assets/hospital/icu-care.jpg";
import pharmacy from "@/assets/hospital/pharmacy.jpg";
import nurseStation from "@/assets/hospital/nurse-station.jpg";
import operationTheatre from "@/assets/hospital/operation-theatre.jpg";
import oxygenSupport from "@/assets/hospital/oxygen-support.jpg";
import pathology from "@/assets/hospital/pathology.jpg";
import frontClose from "@/assets/hospital/front-close.jpg";
import ayushman from "@/assets/hospital/ayushman.jpg";
import icuBeds from "@/assets/hospital/icu-beds.jpg";
import monitorBeds from "@/assets/hospital/monitor-beds.jpg";
import icuRound from "@/assets/hospital/icu-round.jpg";

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
