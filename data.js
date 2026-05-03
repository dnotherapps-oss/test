// WhatDentist Data File
// Add new practices to this array — averages and nearby-practice links recalculate automatically
// ============================================================

const practices = [
  {
    id:1, slug:"dental-wellness-mill-hill", name:"Dental Wellness Mill Hill", area:"Mill Hill",
    address:"46 The Broadway, London NW7 3LH", phone:"020 7123 9308",
    website:"dentalwellnessmillhill.co.uk", rating:5.0, reviews:555,
    type:"private", featured:false, finance:true, openWeekends:true,
    lat:51.6189, lng:-0.2476,
    tags:["private","invisalign","implants","finance","weekend"],
    hours:"Mon 8am–8pm | Tue 8am–7pm | Wed 8:45am–6pm | Thu 8:45am–6pm | Fri 8am–5pm | Sat 8:45am–3pm | Sun 8:45am–2pm",
    checkupPrice:45, hygienePrice:67, fillingPrice:165, whiteningPrice:340, bondingPrice:250, invisalignPrice:3695, implantPrice:null,
    pricing:{
      "Consultations":[{name:"Comprehensive Examination",price:"£45"},{name:"Emergency Appointment",price:"£45"},{name:"Invisalign Consultation",price:"Free"},{name:"Implant Consultation",price:"Free"}],
      "Hygiene":[{name:"Hygiene Gold Package (25 min)",price:"£67"},{name:"Hygiene Diamond Package (30 min)",price:"£98"},{name:"Hygiene Platinum Package (60 min)",price:"£190"},{name:"Scale and Polish (with dentist)",price:"£85"}],
      "Fillings":[{name:"White Composite Filling",price:"from £165"}],
      "Root Canal":[{name:"Root Canal (front)",price:"from £645"},{name:"Root Canal (molar)",price:"from £745"}],
      "Crowns & Veneers":[{name:"Crown (porcelain)",price:"from £700"},{name:"Veneer",price:"from £775"}],
      "Cosmetic":[{name:"Composite Bonding",price:"from £250"},{name:"Invisalign",price:"from £3,695"},{name:"Teeth Whitening (home kit)",price:"£340"}],
      "Implants":[{name:"Dental Implant",price:"Price on consultation"}]
    }
  },
  {
    id:2, slug:"ecladent-dental-care-mill-hill", name:"Ecladent Dental Care", area:"Mill Hill",
    address:"53 Brockenhurst Gardens, Mill Hill, NW7 2JY", phone:"0208 959 9392",
    website:"ecladent.co.uk", rating:4.7, reviews:382,
    type:"private", featured:false, finance:false, openWeekends:false,
    lat:51.6175, lng:-0.2501,
    tags:["private","invisalign","implants","aesthetics"],
    hours:"Mon 9am–5pm | Tue 9am–5pm | Wed 9am–5pm | Thu 9am–5pm | Fri 9am–5pm | Sat Closed | Sun Closed",
    checkupPrice:65, hygienePrice:25, fillingPrice:100, whiteningPrice:350, bondingPrice:null, invisalignPrice:1500, implantPrice:1600,
    pricing:{
      "Consultations":[{name:"Dental Check-up",price:"£65"},{name:"New Patient Appointment",price:"£150"},{name:"Emergency",price:"£105"}],
      "Hygiene":[{name:"Hygienist",price:"£80"},{name:"Air Flow Polish",price:"£25"}],
      "Fillings":[{name:"White Filling (small)",price:"£100"},{name:"White Filling (medium)",price:"£105"},{name:"White Filling (large)",price:"£250"}],
      "Root Canal":[{name:"Root Canal + Filling",price:"£900"}],
      "Crowns & Veneers":[{name:"Crown (zirconia porcelain)",price:"£950"},{name:"Porcelain Veneers",price:"£695"}],
      "Cosmetic":[{name:"Tooth Whitening (in surgery)",price:"£190–£350"},{name:"Invisalign",price:"£1,500–£4,500"}],
      "Implants":[{name:"Dental Implant",price:"£1,600"},{name:"Implant Crown",price:"£1,250"}]
    }
  },
  {
    id:3, slug:"goodwyn-dental-practice-mill-hill", name:"Goodwyn Dental Practice", area:"Mill Hill",
    address:"51 Goodwyn Ave, London NW7 3RJ", phone:"020 8959 1908",
    website:"goodwyndentalpractice.co.uk", rating:4.8, reviews:90,
    type:"both", featured:false, finance:true, openWeekends:true,
    lat:51.6162, lng:-0.2489,
    tags:["private","nhs","invisalign","implants","finance","weekend"],
    hours:"Mon 9am–5pm | Tue 9am–5pm | Wed 9am–5pm | Thu 9am–5pm | Fri 9am–5pm | Sat 9am–5pm | Sun Closed",
    checkupPrice:65, hygienePrice:35, fillingPrice:50, whiteningPrice:395, bondingPrice:280, invisalignPrice:2500, implantPrice:2900,
    pricing:{
      "Consultations":[{name:"Examination (Adult)",price:"£65"},{name:"Examination (Child)",price:"£45"},{name:"Emergency Appointment",price:"£75"}],
      "Hygiene":[{name:"Hygienist Session (30 min)",price:"£75"},{name:"Airflow",price:"£35"}],
      "Fillings":[{name:"Amalgam Filling",price:"£50"},{name:"Composite Filling",price:"£135"},{name:"Composite Bonding",price:"£280"}],
      "Root Canal":[{name:"Root Canal",price:"from £745"}],
      "Crowns & Veneers":[{name:"All Ceramic Crown",price:"£995"},{name:"Veneer Ceramic",price:"£925"}],
      "Cosmetic":[{name:"Invisalign",price:"from £2,500"},{name:"Tooth Whitening",price:"from £395"}],
      "Implants":[{name:"Implant + Crown",price:"from £2,900"}]
    }
  },
  {
    id:4, slug:"nova-dental-care-east-finchley", name:"Nova Dental Care", area:"East Finchley",
    address:"260 East End Road, East Finchley, N2 8AU", phone:"020 8365 2365",
    website:"novadentalcare.co.uk", rating:4.6, reviews:180,
    type:"private", featured:false, finance:false, openWeekends:false,
    lat:51.5882, lng:-0.1657,
    tags:["private","invisalign","implants","laser"],
    hours:"Mon 9am–5pm | Tue 9am–5pm | Wed 9am–5pm | Thu 9am–5pm | Fri 9am–5pm | Sat Closed | Sun Closed",
    checkupPrice:60, hygienePrice:65, fillingPrice:180, whiteningPrice:700, bondingPrice:400, invisalignPrice:2500, implantPrice:2500,
    pricing:{
      "Consultations":[{name:"Initial Examination",price:"£80"},{name:"Routine Examination",price:"£60"},{name:"Emergency Visit",price:"£75"}],
      "Hygiene":[{name:"Scaling and Polish",price:"£90"},{name:"Airflow Treatment",price:"£65"}],
      "Fillings":[{name:"Composite Filling (posterior)",price:"£180–£280"},{name:"Composite Bonding (each)",price:"£400"}],
      "Root Canal":[{name:"Root Canal Treatment",price:"£600"},{name:"Root Canal Molar",price:"£900"}],
      "Crowns & Veneers":[{name:"Ceramic Crown",price:"£750"},{name:"Zirconia Crown",price:"£895"},{name:"Veneers",price:"£800"}],
      "Cosmetic":[{name:"Invisalign",price:"from £2,500"},{name:"Enlighten Whitening",price:"£700"}],
      "Implants":[{name:"Implant",price:"from £2,500"}]
    }
  },
  {
    id:5, slug:"tigga-smile-northwood", name:"Tigga Smile", area:"Northwood",
    address:"Ground Floor, Argyle House, Joel Street, Northwood HA6 1NW", phone:"01923 829759",
    website:"tiggasmile.co.uk", rating:5.0, reviews:35,
    type:"private", featured:false, finance:false, openWeekends:true,
    lat:51.6067, lng:-0.4234,
    tags:["private","invisalign","implants","weekend"],
    hours:"Mon 9am–5:30pm | Tue Closed | Wed 9am–5:30pm | Thu 9am–5:30pm | Fri 9am–5:30pm | Sat 10am–2pm | Sun Closed",
    checkupPrice:50, hygienePrice:65, fillingPrice:125, whiteningPrice:595, bondingPrice:250, invisalignPrice:3000, implantPrice:2250,
    pricing:{
      "Consultations":[{name:"Consultation Fee",price:"£50"},{name:"Emergency Fee",price:"£50"}],
      "Hygiene":[{name:"Scale & Polish",price:"from £65"}],
      "Fillings":[{name:"Fillings (White)",price:"from £125"}],
      "Root Canal":[{name:"Root Canal",price:"from £395"}],
      "Crowns & Veneers":[{name:"Crown",price:"from £695"},{name:"Veneer",price:"from £695"}],
      "Cosmetic":[{name:"Composite Bonding",price:"from £250"},{name:"Clear Braces",price:"from £3,000"},{name:"Enlighten Whitening",price:"£595"}],
      "Implants":[{name:"Implant (excluding crown)",price:"£1,250"},{name:"Implant (including crown)",price:"from £2,250"}]
    }
  },
  {
    id:6, slug:"broadway-dental-studio-mill-hill", name:"Broadway Dental Studio", area:"Mill Hill",
    address:"First Floor, 36-38 Broadway House, The Broadway, NW7 3LJ", phone:"020 8959 2497",
    website:"broadwaydentalstudio.co.uk", rating:4.9, reviews:356,
    type:"both", featured:false, finance:false, openWeekends:true,
    lat:51.6198, lng:-0.2461,
    tags:["private","nhs","invisalign","insurance","weekend"],
    hours:"Mon 8:30am–8pm | Tue 8:30am–5:30pm | Wed 8:30am–5:30pm | Thu 8:30am–8pm | Fri 8:30am–5:30pm | Sat 9am–2pm | Sun Closed",
    checkupPrice:68, hygienePrice:85, fillingPrice:100, whiteningPrice:null, bondingPrice:null, invisalignPrice:875, implantPrice:1450,
    pricing:{
      "Consultations":[{name:"Adult Examination",price:"£68"},{name:"Child Examination",price:"£33"},{name:"Emergency",price:"£75"},{name:"Invisalign Consultation",price:"Free"}],
      "Hygiene":[{name:"Hygienist Scale and Polish",price:"from £85"},{name:"Airflow Scale and Polish",price:"£150"},{name:"Weekend Hygienist",price:"£85"}],
      "Fillings":[{name:"Composite Filling",price:"£100–£165"}],
      "Root Canal":[{name:"Root Canal Incisor",price:"from £500"},{name:"Root Canal Premolar",price:"£600"},{name:"Root Canal Molar",price:"£865"}],
      "Crowns & Veneers":[{name:"Zirconia/E-Max Crown",price:"£895"},{name:"Veneers",price:"from £850"}],
      "Cosmetic":[{name:"Invisalign/Toscan",price:"from £875"}],
      "Implants":[{name:"Dental Implants",price:"from £1,450"}]
    }
  },
  {
    id:7, slug:"glow-dentistry-mill-hill", name:"Glow Dentistry", area:"Mill Hill",
    address:"23 Daws Lane, London NW7 4SD", phone:"020 8906 7676",
    website:"glowdentistry.co.uk", rating:4.9, reviews:98,
    type:"private", featured:false, finance:false, openWeekends:true,
    lat:51.6155, lng:-0.2512,
    tags:["private","invisalign","implants","specialist","weekend"],
    hours:"Mon 8:30am–6:30pm | Tue 8:30am–7:30pm | Wed 8:30am–7:30pm | Thu 8:30am–8pm | Fri 9am–5pm | Sat 10am–4pm | Sun Closed",
    checkupPrice:85, hygienePrice:75, fillingPrice:295, whiteningPrice:675, bondingPrice:395, invisalignPrice:1800, implantPrice:2600,
    pricing:{
      "Consultations":[{name:"New Patient Examination",price:"£85"},{name:"Existing Patient Examination",price:"£75"},{name:"Emergency (inc X-ray)",price:"£150"},{name:"Cosmetic Consultation",price:"Free"}],
      "Hygiene":[{name:"Hygiene Session",price:"from £75"},{name:"Air Flow Hygiene",price:"from £165"}],
      "Fillings":[{name:"White Composite Filling",price:"from £295"}],
      "Root Canal":[{name:"Root Canal Incisor (specialist)",price:"£900–£1,200"},{name:"Root Canal Molar (specialist)",price:"£1,300–£1,650"}],
      "Crowns & Veneers":[{name:"Ceramic Crown",price:"from £1,395"},{name:"Smile Makeover",price:"from £1,295/tooth"}],
      "Cosmetic":[{name:"Cosmetic Bonding",price:"from £395"},{name:"Invisalign Minor",price:"from £1,800"},{name:"Invisalign Complex",price:"from £4,300"},{name:"Enlighten Whitening",price:"£675"}],
      "Implants":[{name:"Nobel Biocare Implant (specialist)",price:"£2,600"}]
    }
  },
  {
    id:8, slug:"the-tooth-sanctuary-colindale", name:"The Tooth Sanctuary", area:"Colindale",
    address:"3A Sheaveshill Ave, London NW9 6SH", phone:"020 8205 6690",
    website:"thetoothsanctuary.co.uk", rating:4.8, reviews:290,
    type:"both", featured:false, finance:false, openWeekends:false,
    lat:51.5953, lng:-0.2534,
    tags:["private","nhs","invisalign","implants"],
    hours:"Mon 9am–5pm | Tue 9am–5pm | Wed 9am–5pm | Thu 9am–5pm | Fri 9am–5pm | Sat Closed | Sun Closed",
    checkupPrice:45, hygienePrice:75, fillingPrice:null, whiteningPrice:null, bondingPrice:null, invisalignPrice:1500, implantPrice:2500,
    pricing:{
      "Consultations":[{name:"Dental Examination",price:"£45"},{name:"Orthodontic Assessment",price:"from £125"},{name:"Implant Assessment",price:"from £65"}],
      "Hygiene":[{name:"Hygiene Appointment (30 min)",price:"£75"}],
      "Root Canal":[{name:"Root Canal Treatment",price:"from £350"}],
      "Crowns & Veneers":[{name:"Crowns",price:"from £500"},{name:"Inlay/Onlay",price:"from £500"}],
      "Cosmetic":[{name:"Invisalign Braces",price:"from £1,500"}],
      "Implants":[{name:"Implants + Abutment + Crown",price:"from £2,500"}]
    }
  },
  {
    id:9, slug:"colindale-dental-colindale", name:"Colindale Dental", area:"Colindale",
    address:"49-51 Colindale Ave, London NW9 5EP", phone:"020 8205 5636",
    website:"colindaledental.co.uk", rating:4.7, reviews:629,
    type:"both", featured:false, finance:false, openWeekends:true,
    photo:"/images/colindale-dental-colindale.jpg",
    lat:51.5963, lng:-0.2496,
    tags:["private","nhs","weekend"],
    hours:"Mon 9am–6pm | Tue 9am–6pm | Wed 9am–7pm | Thu 9am–7pm | Fri 9am–6pm | Sat 8:30am–3pm | Sun Closed",
    checkupPrice:55, hygienePrice:65, fillingPrice:80, whiteningPrice:375, bondingPrice:null, invisalignPrice:4000, implantPrice:1995,
    pricing:{
      "Consultations":[{name:"Patient Consultation",price:"from £55"}],
      "Hygiene":[{name:"Hygiene (30 min)",price:"from £65"},{name:"Hygiene (60 min)",price:"from £125"}],
      "Fillings":[{name:"White Fillings",price:"from £80"}],
      "Root Canal":[{name:"Root Canal Treatment",price:"from £350"}],
      "Crowns & Veneers":[{name:"Crowns",price:"from £550"}],
      "Cosmetic":[{name:"Boutique Home Whitening",price:"from £375"},{name:"Enlighten Whitening",price:"from £675"},{name:"Invisalign",price:"from £4,000"}],
      "Implants":[{name:"Implants + Abutment + Crown",price:"from £2,690"}]
    }
  },
  {
    id:10, slug:"north-finchley-dental-north-finchley", name:"North Finchley Dental", area:"North Finchley",
    address:"1st Floor, 787 High Road, London N12 8JX", phone:"020 8445 5954",
    website:"northfinchleydental.co.uk", rating:4.9, reviews:79,
    type:"private", featured:false, finance:false, openWeekends:true,
    lat:51.6098, lng:-0.1782,
    tags:["private","whitening","weekend"],
    hours:"Mon 9am–5:30pm | Tue 9am–9pm | Wed 9am–5:30pm | Thu 9am–5:30pm | Fri 9am–5:30pm | Sat 9am–1pm | Sun Closed",
    checkupPrice:55, hygienePrice:75, fillingPrice:85, whiteningPrice:395, bondingPrice:null, invisalignPrice:null, implantPrice:2300,
    pricing:{
      "Consultations":[{name:"Examination",price:"£55"},{name:"Emergency",price:"£50"}],
      "Hygiene":[{name:"Hygienist (30 min)",price:"£75"}],
      "Fillings":[{name:"Filling (small)",price:"£85"},{name:"Filling (large)",price:"£125"}],
      "Root Canal":[{name:"Root Canal Incisor",price:"£350"},{name:"Root Canal Molar",price:"£550"}],
      "Crowns & Veneers":[{name:"Crowns",price:"from £650"}],
      "Cosmetic":[{name:"Zoom Whitening",price:"£395"},{name:"Whitening + Trays",price:"£495"}],
      "Implants":[{name:"Implants including Crown",price:"from £2,300"}]
    }
  },
  {
    id:11, slug:"smile-cliniq-finchley", name:"Smile Cliniq", area:"Finchley",
    address:"138 Ballards Lane, Church End, London N3 2PA", phone:"020 8343 1133",
    website:"smilecliniq.com", rating:4.7, reviews:367,
    type:"private", featured:false, finance:true, openWeekends:true,
    lat:51.5997, lng:-0.1927,
    tags:["private","invisalign","implants","finance","awards","weekend"],
    hours:"Mon 8am–8pm | Tue 8am–6pm | Wed 8am–5pm | Thu 8am–6pm | Fri 8am–6pm | Sat 8am–6pm | Sun Closed",
    checkupPrice:75, hygienePrice:110, fillingPrice:220, whiteningPrice:650, bondingPrice:280, invisalignPrice:1795, implantPrice:2000,
    pricing:{
      "Consultations":[{name:"New Patient Evaluation",price:"£75"},{name:"Emergency",price:"£85"},{name:"Virtual Consultation",price:"Free"}],
      "Hygiene":[{name:"Simple Hygiene",price:"£110"},{name:"Extended Hygiene",price:"£150"}],
      "Fillings":[{name:"Small Composite Filling",price:"from £220"},{name:"Large Composite Filling",price:"from £295"}],
      "Root Canal":[{name:"Root Canal (per canal)",price:"£300"},{name:"Root Canal Molar",price:"£750"}],
      "Crowns & Veneers":[{name:"Emax Crown",price:"£750"},{name:"Zirconia Crown",price:"£850"},{name:"Porcelain Veneer",price:"£850"},{name:"SmileFast 6 Teeth Veneers",price:"£3,000"}],
      "Cosmetic":[{name:"Composite Bonding",price:"£280"},{name:"Invisalign i7",price:"£1,795"},{name:"Full Invisalign",price:"£3,500"},{name:"Enlighten Whitening",price:"£650"}],
      "Implants":[{name:"Single Implant with Crown",price:"£2,000"}]
    }
  },
  {
    id:12, slug:"beaufort-dental-clinic-colindale", name:"Beaufort Dental Clinic", area:"Colindale",
    address:"10 Boulevard Drive, Beaufort Park, London NW9 5QF", phone:"020 8205 0090",
    website:"beaufortdentalclinic.com", rating:4.3, reviews:165,
    type:"both", featured:false, finance:true, openWeekends:true,
    lat:51.5972, lng:-0.2478,
    tags:["private","nhs","invisalign","implants","finance","weekend"],
    hours:"Mon 9am–5:30pm | Tue 9am–5:30pm | Wed 9am–5:30pm | Thu 9am–5:30pm | Fri 9am–5:30pm | Sat 9am–3pm | Sun Closed",
    checkupPrice:38.50, hygienePrice:88, fillingPrice:127, whiteningPrice:399, bondingPrice:192, invisalignPrice:3080, implantPrice:null,
    pricing:{
      "Consultations":[{name:"New Patient Examination (inc 2 X-rays)",price:"£55"},{name:"Routine Examination",price:"£38.50"},{name:"Emergency",price:"£55"}],
      "Hygiene":[{name:"Hygiene 45 min",price:"£88"},{name:"Hygiene with Airflow",price:"£132"}],
      "Fillings":[{name:"Composite Filling (small)",price:"£127"},{name:"Composite Bonding (per tooth)",price:"£192"}],
      "Root Canal":[{name:"Root Canal Incisor",price:"£466"},{name:"Root Canal Molar",price:"£720"}],
      "Crowns & Veneers":[{name:"Zirconia Crown",price:"£720"},{name:"Layered E-max Crown",price:"£906"}],
      "Cosmetic":[{name:"Invisalign (single arch)",price:"£3,080"},{name:"Invisalign (both arches)",price:"£3,850"},{name:"Home Zoom Whitening",price:"£399"}]
    }
  },
  {
    id:13, slug:"3one-one-dental-care-north-finchley", name:"3one one Dental Care", area:"North Finchley",
    address:"311 Ballards Lane, North Finchley, N12 8LY", phone:"020 8445 2722",
    website:"311dental.co.uk", rating:5.0, reviews:247,
    type:"private", featured:false, finance:false, openWeekends:false,
    lat:51.6089, lng:-0.1801,
    tags:["private","children"],
    hours:"Mon 9am–5pm | Tue 9am–5pm | Wed 9am–5pm | Thu 9am–5pm | Fri 9am–5pm | Sat Closed | Sun Closed",
    checkupPrice:81, hygienePrice:81, fillingPrice:100, whiteningPrice:375, bondingPrice:null, invisalignPrice:null, implantPrice:2400,
    pricing:{
      "Consultations":[{name:"New Patient Consultation (inc X-rays)",price:"£150"},{name:"Routine Examination",price:"£81"},{name:"Children's Examination",price:"£41"}],
      "Hygiene":[{name:"Hygienist Standard",price:"£81"},{name:"Hygienist Extended",price:"£122"}],
      "Fillings":[{name:"Fillings",price:"from £100"}],
      "Root Canal":[{name:"Root Treatment",price:"from £595"}],
      "Crowns & Veneers":[{name:"Crowns",price:"from £900"},{name:"Veneers",price:"from £900"}],
      "Cosmetic":[{name:"Tooth Whitening",price:"from £375"}],
      "Implants":[{name:"Implants including Crown",price:"from £2,400"}]
    }
  },
  {
    id:14, slug:"nether-street-dental-practice-finchley", name:"Nether Street Dental Practice", area:"Finchley",
    address:"393 Nether Street, London N3 1QG", phone:"",
    website:"netherdental.co.uk", rating:4.7, reviews:143,
    type:"both", featured:false, finance:false, openWeekends:false,
    lat:51.5967, lng:-0.1889,
    tags:["private","nhs","invisalign","insurance"],
    hours:"Mon 9am–5pm | Tue 9am–5pm | Wed 8:30am–5pm | Thu 9am–5pm | Fri 9am–5pm | Sat Closed | Sun Closed",
    checkupPrice:51.50, hygienePrice:77.5, fillingPrice:155, whiteningPrice:null, bondingPrice:199, invisalignPrice:1900, implantPrice:2600,
    pricing:{
      "Consultations":[{name:"New Patient Assessment",price:"£65"},{name:"Routine Check Up",price:"£51.50"},{name:"Emergency",price:"£75"}],
      "Hygiene":[{name:"Hygiene Therapy (25 min)",price:"£77.50"},{name:"Hygiene with Air Polish",price:"£110"}],
      "Fillings":[{name:"Small Composite Filling",price:"£155"},{name:"Large Composite Filling",price:"from £215"}],
      "Root Canal":[{name:"Root Canal Incisor",price:"£295"},{name:"Root Canal Molar",price:"£435"}],
      "Crowns & Veneers":[{name:"Zirconia Crown",price:"£750"},{name:"Porcelain Veneers",price:"£575"}],
      "Cosmetic":[{name:"Composite Bonding",price:"£199/tooth"},{name:"Clear Aligners",price:"from £1,900/arch"}],
      "Implants":[{name:"Implant & Crown",price:"£2,600"}]
    }
  },
  {
    id:15, slug:"approach-dentistry-hendon", name:"Approach Dentistry", area:"Hendon",
    address:"5 The Approach, London NW4 2HS", phone:"020 8202 9767",
    website:"approachdentistry.co.uk", rating:4.8, reviews:298,
    type:"both", featured:false, finance:false, openWeekends:false,
    lat:51.5868, lng:-0.2312,
    tags:["private","nhs","invisalign","implants"],
    hours:"Mon 8:30am–5pm | Tue 8:30am–5pm | Wed 8:30am–5pm | Thu 8:30am–5pm | Fri 8:30am–5pm | Sat Closed | Sun Closed",
    checkupPrice:50, hygienePrice:25, fillingPrice:125, whiteningPrice:400, bondingPrice:200, invisalignPrice:3000, implantPrice:2790,
    pricing:{
      "Consultations":[{name:"New Patient Exam (inc radiographs)",price:"£70"},{name:"Exam",price:"£50"},{name:"Child Exam",price:"£40"}],
      "Hygiene":[{name:"Hygiene New Patient",price:"£90"},{name:"Hygiene Maintenance",price:"£75"},{name:"Airflow Stain Removal",price:"£25"}],
      "Fillings":[{name:"Composite (small)",price:"£125"},{name:"Composite (large)",price:"£300"}],
      "Root Canal":[{name:"Root Canal Single Canal",price:"£395"},{name:"Root Canal Multi Canal",price:"£495"}],
      "Crowns & Veneers":[{name:"Zirconia Crown",price:"£695"},{name:"Porcelain Veneers",price:"£695"}],
      "Cosmetic":[{name:"Composite Bonding",price:"from £200/tooth"},{name:"Teeth Whitening",price:"£400"},{name:"Adult Aligners",price:"£3,000"}],
      "Implants":[{name:"Implant and Crown",price:"from £2,790"}]
    }
  },
  {
    id:16, slug:"smile-clinic-group-colindale", name:"Smile Clinic Group", area:"Colindale",
    address:"263 Edgware Road, London NW9 6NB", phone:"020 8205 7744",
    website:"smileclinicgroup.com", rating:4.7, reviews:469,
    type:"both", featured:false, finance:true, openWeekends:false,
    lat:51.5941, lng:-0.2468,
    tags:["private","nhs","invisalign","implants","finance","multi-location"],
    hours:"Mon 8:30am–5pm | Tue 8:30am–5pm | Wed 8:30am–5pm | Thu 8:30am–5pm | Fri 8:30am–5pm | Sat Closed | Sun Closed",
    checkupPrice:75, hygienePrice:80, fillingPrice:140, whiteningPrice:695, bondingPrice:290, invisalignPrice:1790, implantPrice:2910,
    pricing:{
      "Consultations":[{name:"New Patient Exam",price:"from £75"},{name:"Recall Exam",price:"from £65"},{name:"Child Exam (under 16)",price:"from £35"},{name:"Emergency",price:"from £75"}],
      "Hygiene":[{name:"Scale and Polish (30 min)",price:"from £80"},{name:"Scale and Polish (60 min)",price:"from £160"},{name:"Periodontal Treatment",price:"from £180"}],
      "Fillings":[{name:"Composite Filling (small)",price:"from £140"},{name:"Composite Filling (large)",price:"from £210"}],
      "Root Canal":[{name:"Incisor (general dentist)",price:"from £350"},{name:"Molar (general dentist)",price:"from £585"},{name:"Specialist Endodontist",price:"from £1,127.50"}],
      "Crowns & Veneers":[{name:"All Porcelain Crown",price:"from £695"},{name:"Porcelain Veneer",price:"from £810"}],
      "Cosmetic":[{name:"Composite Bonding (single tooth)",price:"from £290"},{name:"Invisalign Express (dual arch)",price:"from £1,790"},{name:"Invisalign Comprehensive",price:"from £4,180"},{name:"Enlighten Whitening",price:"from £695"}],
      "Implants":[{name:"Single Tooth Implant",price:"from £2,910"},{name:"All on 4 (single arch)",price:"from £18,695"}]
    }
  },
  {
    id:17, slug:"woodhouse-implants-aesthetics-north-finchley", name:"Woodhouse Implants & Aesthetics", area:"North Finchley",
    address:"229A Woodhouse Road, London N12 9BD", phone:"020 8368 9229",
    website:"woodhousedental.co.uk", rating:4.8, reviews:173,
    type:"private", featured:false, finance:false, openWeekends:false,
    lat:51.6078, lng:-0.1795,
    tags:["private","implants","specialist","aesthetics"],
    hours:"Mon 9am–1pm, 2–6pm | Tue 9am–1pm, 2–6pm | Wed 9am–1pm, 2–6pm | Thu 9am–1pm, 2–6pm | Fri 9am–1pm, 2–6pm | Sat Closed | Sun Closed",
    checkupPrice:65, hygienePrice:90, fillingPrice:150, whiteningPrice:595, bondingPrice:275, invisalignPrice:3000, implantPrice:3000,
    pricing:{
      "Consultations":[{name:"Regular Patient Examination",price:"£65"},{name:"New Patient Examination",price:"£85"},{name:"Child Examination",price:"£25"},{name:"Emergency Assessment",price:"£70"}],
      "Hygiene":[{name:"Hygiene Maintenance",price:"£90"},{name:"Periodontal Hygiene",price:"£360"}],
      "Fillings":[{name:"Composite Fillings",price:"from £150"}],
      "Root Canal":[{name:"Incisor RCT",price:"from £520"},{name:"Molar RCT",price:"from £795"}],
      "Crowns & Veneers":[{name:"Crown",price:"from £800"},{name:"Porcelain Veneer",price:"from £500"}],
      "Cosmetic":[{name:"Composite Bonding",price:"from £275"},{name:"Aligners",price:"from £3,000"},{name:"Zoom Whitening",price:"£595"}],
      "Implants":[{name:"Single Dental Implant",price:"from £3,000"},{name:"Implant Bridge",price:"from £4,500"}],
      "Facial Aesthetics":[{name:"Anti-Wrinkle 1 Area",price:"£175"},{name:"Anti-Wrinkle 3 Areas",price:"£275"},{name:"Dermal Filler",price:"from £210/ml"}]
    }
  },
  {
    id:18, slug:"110-total-dentistry-finchley", name:"110 Total Dentistry", area:"Finchley",
    address:"110-112 Ballards Lane, Church End, London N3 2DN", phone:"020 7998 7657",
    website:"110totaldentistry.co.uk", rating:4.9, reviews:74,
    type:"private", featured:false, finance:false, openWeekends:false,
    lat:51.5990, lng:-0.1935,
    tags:["private","invisalign","implants"],
    hours:"Mon 9am–6pm | Tue 9am–6pm | Wed 9am–6pm | Thu 9am–6pm | Fri 9am–6pm | Sat Closed | Sun Closed",
    checkupPrice:45, hygienePrice:75, fillingPrice:110, whiteningPrice:290, bondingPrice:null, invisalignPrice:1700, implantPrice:1900,
    pricing:{
      "Consultations":[{name:"New Patient Exam",price:"£75"},{name:"New Child Exam (under 16)",price:"Free"},{name:"Routine Examination",price:"£45"},{name:"X-rays",price:"£10"}],
      "Hygiene":[{name:"Hygiene",price:"£75"},{name:"Diamond Clean",price:"£95"}],
      "Fillings":[{name:"Resin/Composite Filling",price:"from £110"}],
      "Root Canal":[{name:"Root Canal Treatment",price:"£290/canal"}],
      "Crowns & Veneers":[{name:"Porcelain Crowns",price:"from £490"}],
      "Cosmetic":[{name:"Invisible Braces",price:"from £1,700"},{name:"Whitening (in surgery)",price:"from £390"},{name:"Whitening (home kit)",price:"from £290"}],
      "Implants":[{name:"Implants (excluding crown)",price:"from £1,900"}]
    }
  },
  {
    id:19, slug:"care-dental-smile-edgware", name:"Care Dental Smile", area:"Edgware",
    address:"2 Stag Lane, Burnt Oak, Edgware HA8 5JY", phone:"020 8951 0003",
    website:"caredentalsmile.com", rating:4.8, reviews:253,
    type:"both", featured:false, finance:true, openWeekends:true,
    lat:51.6012, lng:-0.2687,
    tags:["private","nhs","implants","finance","weekend"],
    hours:"Mon 9am–6pm | Tue 9am–6pm | Wed 9am–6pm | Thu 9am–6pm | Fri 9am–5pm | Sat 9am–3pm | Sun Closed",
    checkupPrice:40, hygienePrice:60, fillingPrice:80, whiteningPrice:350, bondingPrice:null, invisalignPrice:null, implantPrice:1800,
    pricing:{
      "Consultations":[{name:"New Patient Consultation (inc radiographs)",price:"£50"},{name:"Regular Check Up (inc scale & polish)",price:"£40"},{name:"Emergency (inc radiographs)",price:"£50"}],
      "Hygiene":[{name:"Hygiene Appointment (30 min)",price:"£60"}],
      "Fillings":[{name:"Tooth Coloured Filling",price:"£80–£180"}],
      "Root Canal":[{name:"Root Canal (per root)",price:"from £150"}],
      "Crowns & Veneers":[{name:"Full Ceramic Crown",price:"from £400"},{name:"Porcelain Veneer",price:"from £350"}],
      "Cosmetic":[{name:"Tooth Whitening",price:"from £350"}],
      "Implants":[{name:"Implants",price:"from £1,800"}]
    }
  },
  {
    id:20, slug:"smile-nw-dental-practice-temple-fortune", name:"Smile NW Dental Practice", area:"Temple Fortune",
    address:"17 Hallswelle Parade, Finchley Road, London NW11 0DL", phone:"020 8458 2333",
    website:"smile-nw.co.uk", rating:4.9, reviews:189,
    type:"private", featured:false, finance:true, openWeekends:true,
    lat:51.5793, lng:-0.1965,
    tags:["private","invisalign","implants","finance","weekend"],
    hours:"Mon 9am–6pm | Tue 9am–6pm | Wed 9am–6pm | Thu 9am–6pm | Fri 9am–6pm | Sat 9am–2pm | Sun Closed",
    checkupPrice:95, hygienePrice:75, fillingPrice:250, whiteningPrice:650, bondingPrice:null, invisalignPrice:3799, implantPrice:3000,
    pricing:{
      "Consultations":[{name:"Adult Examination",price:"£95"},{name:"New Patient Examination",price:"£95"},{name:"Child Examination (under 16)",price:"£75"},{name:"Implant Consultation",price:"£180"}],
      "Hygiene":[{name:"Adult Hygiene inc Airflow (45 min)",price:"£135"},{name:"Child Hygiene (30 min)",price:"£75"}],
      "Fillings":[{name:"Composite Filling",price:"from £250"}],
      "Root Canal":[{name:"Anterior",price:"£850"},{name:"Premolar",price:"£1,200"},{name:"Molar",price:"£1,200"}],
      "Crowns & Veneers":[{name:"Porcelain Crown",price:"£1,300"},{name:"Veneer",price:"£850"}],
      "Cosmetic":[{name:"Invisalign",price:"from £3,799"},{name:"Enlighten Whitening",price:"£650"}],
      "Implants":[{name:"Implant",price:"£3,000"}],
      "Facial Aesthetics":[{name:"Botox One Area",price:"from £194"},{name:"Lip Filler",price:"from £125"},{name:"Cheeks Filler",price:"from £350"}]
    }
  },
  {
    id:21, slug:"covent-garden-dental-practice-central-london", name:"Covent Garden Dental Practice", area:"Central London",
    address:"61G Odhams Walk, London WC2H 9SD", phone:"020 7836 9161",
    website:"cgdp.com", rating:4.8, reviews:208,
    type:"private", featured:false, finance:false, openWeekends:true,
    lat:51.5138, lng:-0.1234,
    tags:["private","invisalign","implants","awards","weekend"],
    hours:"Mon 8am–6pm | Tue 8am–6pm | Wed 8am–6pm | Thu 8am–6pm | Fri 8am–6pm | Sat 9am–4pm | Sun Closed",
    checkupPrice:65, hygienePrice:119, fillingPrice:149, whiteningPrice:430, bondingPrice:null, invisalignPrice:null, implantPrice:3600,
    pricing:{
      "Consultations":[{name:"New Patient Consultation (inc X-rays)",price:"£120"},{name:"Routine Check-up",price:"£65"},{name:"Urgent Consultation (new patient)",price:"£120"},{name:"Urgent Consultation (regular)",price:"£85"}],
      "Hygiene":[{name:"Deep Cleaning inc Diamond Polish",price:"£119"}],
      "Fillings":[{name:"Bonded Filling (small)",price:"from £149"},{name:"Bonded Filling (large)",price:"from £279"}],
      "Crowns & Veneers":[{name:"Crowns, Bridges & Veneers",price:"from £945"}],
      "Cosmetic":[{name:"Tooth Whitening",price:"from £430"},{name:"Facial Aesthetic Treatment",price:"from £250"}],
      "Implants":[{name:"Implant (single back tooth)",price:"£3,600"},{name:"Implant (single front tooth)",price:"£3,850"}],
      "Extractions":[{name:"Extractions",price:"from £249"}]
    }
  },
  {
    id:22, slug:"pall-mall-dental-london-central-london", name:"Pall Mall Dental London", area:"Central London",
    address:"15 Pall Mall, London SW1Y 5LU", phone:"020 7766 7150",
    website:"pallmalldental.co.uk", rating:4.8, reviews:235,
    type:"private", featured:false, finance:true, openWeekends:false,
    lat:51.5073, lng:-0.1353,
    tags:["private","invisalign","implants","finance"],
    hours:"Mon 8:30am–5:30pm | Tue 8:30am–5:30pm | Wed 8:30am–5:30pm | Thu 8:30am–5:30pm | Fri 8:30am–5:30pm | Sat Closed | Sun Closed",
    checkupPrice:60, hygienePrice:95, fillingPrice:190, whiteningPrice:460, bondingPrice:null, invisalignPrice:1900, implantPrice:3400,
    pricing:{
      "Consultations":[{name:"New Patient Exam (inc 2 X-rays)",price:"£80"},{name:"Routine Exam (inc 2 X-rays)",price:"£60"},{name:"Child Exam (inc 2 X-rays)",price:"£30"},{name:"Emergency",price:"£130"}],
      "Hygiene":[{name:"Quick Smile (20 min)",price:"£95"},{name:"Super Clean",price:"£105"},{name:"Ultra Clean",price:"£155"}],
      "Fillings":[{name:"Composite Filling (small)",price:"£190"},{name:"Composite Bonding",price:"£190–£550"}],
      "Root Canal":[{name:"Anterior",price:"£710"},{name:"Pre-Molar",price:"£780"},{name:"Molar",price:"£885"}],
      "Crowns & Veneers":[{name:"Full Ceramic Crown",price:"from £995"},{name:"Porcelain Veneers",price:"from £1,100"}],
      "Cosmetic":[{name:"Invisalign",price:"from £1,900–£6,250"},{name:"Home Whitening Kit",price:"£460"},{name:"In-Office Laser Whitening",price:"£630"}],
      "Implants":[{name:"Dental Implant and Crown",price:"£3,400"},{name:"Same Day Teeth (per jaw)",price:"£17,545"}],
      "Facial Aesthetics":[{name:"Anti-Wrinkle 1 Area",price:"£250"},{name:"Anti-Wrinkle 3 Areas",price:"£350"}]
    }
  },
  {
    id:23, slug:"centre-point-dental-central-london", name:"Centre Point Dental", area:"Central London",
    address:"Flat 4, 132 Charing Cross Road, London WC2H 0LA", phone:"020 7836 9259",
    website:"centrepointdental.co.uk", rating:4.8, reviews:213,
    type:"private", featured:false, finance:true, openWeekends:false,
    lat:51.5152, lng:-0.1283,
    tags:["private","invisalign","implants","finance"],
    hours:"Mon 8:45am–5:45pm | Tue 8:45am–5:45pm | Wed 8:45am–5:45pm | Thu 8:45am–5:45pm | Fri 8:45am–5:45pm | Sat Closed | Sun Closed",
    checkupPrice:99, hygienePrice:83, fillingPrice:95, whiteningPrice:750, bondingPrice:null, invisalignPrice:1500, implantPrice:1500,
    pricing:{
      "Consultations":[{name:"New Patient Consultation (inc 2 radiographs)",price:"£99"},{name:"Additional Radiographs",price:"£10 each"}],
      "Hygiene":[{name:"Hygiene Session (30 min)",price:"£83"},{name:"Hygiene Session (60 min)",price:"£150"}],
      "Fillings":[{name:"White Fillings",price:"from £95"}],
      "Root Canal":[{name:"Endodontics/Root Canal",price:"from £399"}],
      "Crowns & Veneers":[{name:"Crowns",price:"from £650"}],
      "Cosmetic":[{name:"Invisalign",price:"from £1,500"},{name:"Zoom Whitening (inc home kit)",price:"£750"},{name:"Enlighten Whitening",price:"£850"}],
      "Implants":[{name:"Dental Implants",price:"from £1,500"}]
    }
  },
  {
    id:24, slug:"piccadilly-dental-central-london", name:"Piccadilly Dental", area:"Central London",
    address:"72 Shaftesbury Avenue, London W1D 6NA", phone:"020 7437 0154",
    website:"piccadillydental.co.uk", rating:4.7, reviews:76,
    type:"private", featured:false, finance:true, openWeekends:false,
    lat:51.5132, lng:-0.1306,
    tags:["private","invisalign","implants","finance"],
    hours:"Mon 10am–5pm | Tue 10am–5pm | Wed 10am–5pm | Thu 10am–5pm | Fri 10am–5pm | Sat Closed | Sun Closed",
    checkupPrice:70, hygienePrice:95, fillingPrice:180, whiteningPrice:399, bondingPrice:250, invisalignPrice:1900, implantPrice:null,
    pricing:{
      "Consultations":[{name:"New Exam",price:"£80"},{name:"Routine Exam",price:"£70"},{name:"Emergency",price:"£99"}],
      "Hygiene":[{name:"Hygiene (45 min)",price:"from £95"},{name:"Hygiene (60 min)",price:"from £150"},{name:"Airflow",price:"from £120"}],
      "Fillings":[{name:"Composite Small",price:"from £180"},{name:"Composite Large",price:"from £300"}],
      "Root Canal":[{name:"Anterior",price:"from £450"},{name:"Premolars",price:"from £550"},{name:"Molars",price:"from £700"}],
      "Crowns & Veneers":[{name:"Ceramic Crown",price:"from £750"},{name:"Porcelain Veneers",price:"from £800"},{name:"Composite Bonding",price:"from £250"}],
      "Cosmetic":[{name:"Invisalign",price:"from £1,900"},{name:"Home Whitening",price:"from £399"},{name:"In Practice Whitening",price:"from £600"}]
    }
  },
  {
    id:25, slug:"wimpole-street-dental-clinic-marylebone", name:"Wimpole Street Dental Clinic", area:"Marylebone",
    address:"38 Queen Anne Street, London W1G 8HZ", phone:"020 3769 9697",
    website:"wimpolestreetdental.clinic", rating:4.9, reviews:313,
    type:"private", featured:false, finance:false, openWeekends:false,
    lat:51.5183, lng:-0.1478,
    tags:["private","invisalign","implants","specialist","premium"],
    hours:"Mon 9am–6pm | Tue 9am–6pm | Wed 9am–6pm | Thu 9am–6pm | Fri 9am–5:30pm | Sat Closed | Sun Closed",
    checkupPrice:150, hygienePrice:150, fillingPrice:250, whiteningPrice:550, bondingPrice:390, invisalignPrice:2500, implantPrice:2200,
    pricing:{
      "Consultations":[{name:"New Patient Consultation (inc X-rays)",price:"£240"},{name:"Existing Patient Consultation",price:"£150"},{name:"Child Consultation (up to 14)",price:"£150"}],
      "Hygiene":[{name:"Dental Hygiene with GBT",price:"£190"},{name:"Dental Hygiene for Children",price:"£150"},{name:"Hygiene under Local Anaesthetic",price:"£250"}],
      "Fillings":[{name:"Composite Filling",price:"from £250"},{name:"Composite Veneer",price:"£600"}],
      "Root Canal":[{name:"Front Tooth (Incisor/Canine)",price:"£1,250"},{name:"Premolar",price:"£1,300"},{name:"Molar",price:"£1,500"},{name:"Specialist Endodontist",price:"from £1,127.50"}],
      "Crowns & Veneers":[{name:"Crown",price:"from £1,600"},{name:"Veneer",price:"from £1,700"},{name:"Inlay/Onlay",price:"£1,600"}],
      "Cosmetic":[{name:"Composite Bonding",price:"from £390"},{name:"Invisalign i7",price:"from £2,500"},{name:"Invisalign Full (unlimited)",price:"from £5,995"},{name:"Lingual Hidden Braces (both arches)",price:"from £9,995"},{name:"In-office Whitening",price:"£550"},{name:"Zoom Whitening inc Home Kit",price:"£950"}],
      "Implants":[{name:"Implant Placement (per implant)",price:"£2,200"},{name:"All-on-4 Fixed Teeth",price:"from £15,000"},{name:"Bone Graft",price:"£1,200"}],
      "Extractions":[{name:"Simple Extraction",price:"£400"},{name:"Wisdom Tooth (upper jaw)",price:"£700"},{name:"Wisdom Tooth with Nerve",price:"£1,000"}],
      "Facial Aesthetics":[{name:"Anti-Wrinkle Injection",price:"from £295"},{name:"Dermal Fillers",price:"from £350"},{name:"Profhilo",price:"from £350"}]
    }
  }
];

// ============================================================
// AUTO-CALCULATED LONDON AVERAGES
// These update automatically as you add more practices above
// ============================================================

function formatPrice(n) {
  if (n == null || Number.isNaN(Number(n))) return '—';
  const num = Number(n);
  const formatted = num % 1 === 0
    ? num.toLocaleString('en-GB')
    : num.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return '£' + formatted;
}

function calcAverages() {
  const fields = ['checkupPrice','hygienePrice','fillingPrice','bondingPrice','invisalignPrice','implantPrice','whiteningPrice'];
  const labels = {
    checkupPrice:    {label:'Check-up',         key:'checkup'},
    hygienePrice:    {label:'Hygiene',          key:'hygiene'},
    fillingPrice:    {label:'Filling',          key:'filling'},
    bondingPrice:    {label:'Composite Bonding',key:'bonding'},
    invisalignPrice: {label:'Invisalign',       key:'invisalign'},
    implantPrice:    {label:'Implant',          key:'implant'},
    whiteningPrice:  {label:'Whitening',        key:'whitening'},
  };

  const avgs = {};
  fields.forEach(field => {
    const vals = practices.map(p => p[field]).filter(v => v != null && v > 0);
    if (vals.length === 0) return;
    const avg = Math.round(vals.reduce((a,b) => a+b, 0) / vals.length);
    const min = Math.min(...vals);
    const max = Math.max(...vals);

    avgs[labels[field].key] = {
      label:  labels[field].label,
      avg:    avg,
      avgFmt: formatPrice(avg),
      min:    formatPrice(min),
      max:    formatPrice(max),
      count:  vals.length,
    };
  });
  return avgs;
}

const londonAverages = calcAverages();
const practiceCount = practices.length;
