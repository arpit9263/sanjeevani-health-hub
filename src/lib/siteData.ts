export const hospitalInfo = {
  name: "Sanjeevani ICU & Hospital",
  shortName: "Sanjeevani",
  tagline: "Sehat, Suraksha aur Samarpan",
  established: "2019",
  address: "J.P. Heights, Near Court Yard Apartment, Shivaji Nagar, Kanpur Road, Jhansi",
  reception: "8353933203",
  emergency: "8353933203",
  whatsapp: "8353933203",
  email: "Info@sanjeevaniicuhospital.com",
  instagram: "https://www.instagram.com/sanjeevaniicuhospital?igsh=Y2dtZmVxODEzeWhq",
  mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=78.50%2C25.39%2C78.62%2C25.48&layer=mapnik",
  mapLink: "https://maps.google.com/?q=J.P.+Heights,+Near+Court+Yard+Apartment,+Shivaji+Nagar,+Kanpur+Road,+Jhansi",
};

export const siteDetails = {
  city: "Jhansi",
  region: "Bundelkhand",
  organizationType: "ICU & multi-specialty hospital",
  emergencyLabel: "24×7 Emergency",
  appointmentLabel: "Book Appointment",
  developedBy: "RewanTech Solution",
  developedByUrl: "https://rewantechsolutions.com/",
  copyrightName: "Sanjeevani ICU & Hospital",
  defaultMetaTitle: "Sanjeevani ICU & Hospital — Critical Care & Multi-Specialty Hospital in Jhansi",
  defaultMetaDescription:
    "Sanjeevani ICU & Hospital, Jhansi offers 24×7 emergency care, ICU support, specialist doctors, cashless insurance and multi-specialty treatment.",
};

export const stats = [
  { value: "15+", label: "Doctors", detail: "Experienced specialists and consultants" },
  { value: "49+", label: "Beds", detail: "ICU and hospital care capacity" },
  { value: "3 Lakh+", label: "Patients Treated", detail: "Trusted by families across Jhansi" },
  { value: "2019", label: "Established", detail: "Serving with dedication since 2019" },
];

export const leadershipDoctors = [
  {
    name: "Dr. Shubhdeep M.W. Richi",
    role: "Owner",
    qualification: "MBBS, MD, FCCS, CCIDS",
    specialty: "Anaesthesia & Consultant Critical Care",
  },
  {
    name: "Dr. Aparjita Mishra",
    role: "Owner – Smile Craft Orthodontic Center & Sanjeevani ICU & Hospital",
    qualification: "BDS, MDS",
    specialty: "Orthodontist",
  },
  {
    name: "Dr. Mandeep M.H. Madia",
    role: "Managing Director",
    qualification: "MD",
    specialty: "Anaesthesia & Critical Care (BHU)",
  },
  {
    name: "Dr. Shreya Sharma",
    role: "Consultant Critical Care",
    qualification: "MBBS, MD, PDCC (BHU)",
    specialty: "Critical Care",
  },
];

export const medicalExperts = [
  { name: "Dr. Mukut Niranjan", specialty: "Orthopedics" },
  { name: "Dr. Akansha Bhardwaj", specialty: "Obstetrics & Gynecology (OBS & Gyne)" },
  { name: "Dr. Dhananjay Saxena", specialty: "Gastro & Hepatobiliary Surgeon" },
  { name: "Dr. Mritunjay Saxena", specialty: "General Surgeon" },
  { name: "Dr. Niket Jain", specialty: "Urologist" },
  { name: "Dr. Sandeep Kumar Patel", specialty: "Urologist" },
  { name: "Dr. Yogesh Dwivedi", specialty: "Cardiologist" },
  { name: "Dr. Amanjeet Kindra", specialty: "Neurosurgeon" },
];

export const insurancePartners = [
  "Niva (Max) Bupa Health Insurance",
  "Aditya Birla Health Insurance",
  "Paramount TPA",
  "Future Generali Health Insurance",
  "Go Digit General Insurance",
  "SBI General Insurance",
];

export const services = [
  { title: "ICU & Critical Care", desc: "Round-the-clock intensive care support for serious and emergency conditions." },
  { title: "Anaesthesia", desc: "Safe anaesthesia care supported by experienced specialists." },
  { title: "Orthopedics", desc: "Care for bones, joints, fractures, injuries and orthopedic conditions." },
  { title: "Cardiology", desc: "Consultation and care for heart-related concerns." },
  { title: "Urology", desc: "Specialized care for urinary and kidney-related conditions." },
  { title: "Neurosurgery", desc: "Specialist support for neuro and spine-related surgical care." },
  { title: "Gastro & Hepatobiliary Surgery", desc: "Surgical care for digestive, liver and biliary conditions." },
  { title: "General Surgery", desc: "Surgical consultation and treatment for common surgical needs." },
  { title: "OBS & Gynecology", desc: "Women’s health, pregnancy and gynecological care." },
  { title: "Dentistry / Orthodontics", desc: "Dental and orthodontic care through specialist support." },
];

export const hospitalServices = [
  { title: "24×7 Emergency Help", desc: "Fast reception support for emergency cases, critical patients and urgent hospital admission guidance.", href: "/contact" },
  { title: "ICU Admission Support", desc: "Bed, oxygen, monitor and ICU-related admission guidance for families during critical situations.", href: "/services#icu-admission" },
  { title: "Diagnostics & Pathology", desc: "Pathology and diagnostic support for quicker clinical decisions and smoother treatment planning.", href: "/services#diagnostics" },
  { title: "In-house Pharmacy", desc: "Medicine availability support inside the hospital so families do not need to run outside frequently.", href: "/services#pharmacy" },
  { title: "Cashless Insurance / TPA", desc: "Ayushman, insurance and TPA desk guidance for eligible patients and cashless processing support.", href: "/services#insurance" },
  { title: "OPD Appointment Booking", desc: "Reception and WhatsApp-based appointment help for specialist consultation and follow-up visits.", href: "/contact" },
  { title: "Family Counselling", desc: "Clear patient updates, treatment guidance and family communication during admission and recovery.", href: "/services#family-counselling" },
  { title: "Reports & Documentation", desc: "Support for reports, discharge summary, billing and medical documentation queries.", href: "/services#reports" },
];

export const trustChips = ["24×7 Emergency", "ICU Support", "Cashless Insurance", "49+ Beds", "15+ Doctors"];

export const contactCards = [
  { label: "Emergency", value: hospitalInfo.emergency, sub: "24×7 emergency support" },
  { label: "Reception", value: hospitalInfo.reception, sub: "Appointments & OPD queries" },
  { label: "WhatsApp", value: hospitalInfo.whatsapp, sub: "Reports, insurance & quick queries" },
  { label: "Email", value: hospitalInfo.email, sub: "General information" },
];

export const hospitalHours = [
  ["Emergency & ICU", "24 × 7"],
  ["Reception", "24 × 7"],
  ["OPD Consultations", "By appointment"],
  ["Insurance Desk", "During billing hours"],
];

export const telHref = (phone: string) => `tel:+91${phone}`;
export const whatsappHref = (phone: string) => `https://wa.me/91${phone}`;
export const mailHref = (email: string) => `mailto:${email}`;
