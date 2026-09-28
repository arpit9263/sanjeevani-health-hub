export type SearchEntry = {
  title: string;
  desc: string;
  href: string;
  category: string;
};

export const searchIndex: SearchEntry[] = [
  // Specialties
  { title: "Critical Care & ICU", desc: "24×7 ventilator support and multi-bed ICU", href: "/specialties#icu", category: "Specialty" },
  { title: "Cardiology", desc: "Heart screenings, diagnostics and advanced cardiac treatments", href: "/specialties#cardiology", category: "Specialty" },
  { title: "Neurology & Neurosurgery", desc: "Stroke, epilepsy and neurological disorders", href: "/specialties#neuro", category: "Specialty" },
  { title: "Orthopedics & Spine", desc: "Joint replacements, sports injuries, spine surgery", href: "/specialties#ortho", category: "Specialty" },
  { title: "Mother & Child", desc: "Obstetrics, neonatology and pediatrics", href: "/specialties#mch", category: "Specialty" },
  { title: "Oncology", desc: "Cancer care: medical, surgical and radiation", href: "/specialties#onco", category: "Specialty" },
  { title: "Renal Sciences", desc: "Dialysis, transplant and nephrology", href: "/specialties#renal", category: "Specialty" },
  { title: "Diagnostics & Imaging", desc: "3T MRI, 128-slice CT, pathology", href: "/specialties#diagnostics", category: "Specialty" },

  // Services
  { title: "24×7 Emergency", desc: "Trauma and emergency response team", href: "/services", category: "Service" },
  { title: "Tele-consultation", desc: "Online doctor consultations", href: "/contact", category: "Service" },
  { title: "Health Packages", desc: "Preventive health check-ups", href: "/services", category: "Service" },
  { title: "Home Care", desc: "Nursing and physio at home", href: "/services", category: "Service" },
  { title: "Ambulance: 108", desc: "Round-the-clock ambulance service", href: "tel:108", category: "Emergency" },

  // Pages
  { title: "About Sanjeevani", desc: "Two decades of trusted care", href: "/about", category: "Page" },
  { title: "Leadership Team", desc: "Board, advisors and clinical heads", href: "/about#leadership", category: "Page" },
  { title: "Careers", desc: "Clinical and non-clinical opportunities", href: "/careers", category: "Page" },
  { title: "Insurance & TPA Network", desc: "80+ empanelled insurers", href: "/services#insurance", category: "Page" },
  { title: "Gallery", desc: "Hospital tour and patient stories", href: "/gallery", category: "Page" },
  { title: "Contact & Helpline", desc: "Book appointment, branch directory", href: "/contact", category: "Page" },
  { title: "Sanjeevani Foundation (CSR)", desc: "Health camps and community outreach", href: "/about#csr", category: "Page" },

  // Conditions
  { title: "Diabetes Care", desc: "Endocrinology and lifestyle programs", href: "/services", category: "Condition" },
  { title: "Hypertension", desc: "Blood pressure management", href: "/services", category: "Condition" },
  { title: "Cancer Screening", desc: "Early detection programs", href: "/services", category: "Condition" },
  { title: "Stroke", desc: "24×7 stroke unit & thrombolysis", href: "/services", category: "Condition" },
  { title: "Knee Replacement", desc: "Robotic-assisted joint replacement", href: "/services", category: "Condition" },
];
