import Link from "next/link";

const programmes = [
  { number: "01", title: "Aware Adolescent Girls Action for Justice", short: "AGAJ", text: "Safe village learning spaces where adolescent girls explore gender, health, education and rights—then grow into peer leaders in their communities.", theme: "plum" },
  { number: "02", title: "Himalayan Daughters Rise for Education", short: "HDR", text: "Fellowships, mentoring and leadership training help young women from remote villages continue their education and redefine what is possible.", theme: "gold" },
  { number: "03", title: "Nari Adalat", short: "AWAJ", text: "Women-led community justice spaces that offer legal literacy, support for survivors and collective pathways towards safety and self-reliance.", theme: "clay" },
  { number: "04", title: "Health & Wellbeing", short: "Care", text: "Community care, counselling, reproductive health support and stronger local systems for women, youth, elders and persons with disabilities.", theme: "green" },
  { number: "05", title: "Rights & Entitlements", short: "Rights", text: "Supporting communities to access social security, housing, livelihoods and the public systems they are entitled to use.", theme: "pine" },
  { number: "06", title: "Sustainable Agriculture, Forest & Land", short: "SAFAL", text: "Restoring soil, food security and ecological balance through organic farming, traditional knowledge and fairer local markets.", theme: "moss" },
  { number: "07", title: "Disaster Preparedness", short: "Ready", text: "Practical training, local-language resources and village plans that help high-risk communities prepare for floods and landslides.", theme: "sky" },
  { number: "08", title: "Livelihood Initiative", short: "Livelihood", text: "Skills, enterprise, financial literacy and collective strength for rural communities creating sustainable incomes.", theme: "rose" },
];

export default function ProgramsPage() {
  return <main className="programmes-page"><section className="programmes-hero"><p className="eyebrow">Our engagement</p><h1>Many ways to<br /><i>grow change.</i></h1><p>Our programmes are rooted in the everyday realities, knowledge and aspirations of rural communities across Kangra and Chamba.</p></section><section className="programmes-list" aria-label="Jagori Rural programmes">{programmes.map((programme) => <article className={`programme-card programme-card--${programme.theme}`} key={programme.short}><div><span>{programme.number}</span><p className="eyebrow">{programme.short}</p></div><h2>{programme.title}</h2><p>{programme.text}</p><Link href="/contact" aria-label={`Learn more about ${programme.title}`}>Learn more <span>↗</span></Link></article>)}</section></main>;
}
