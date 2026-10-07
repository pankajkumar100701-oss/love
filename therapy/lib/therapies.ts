export type Category = "talk" | "evidence" | "holistic";

export const categories: Record<Category, { label: string; blurb: string }> = {
  talk: {
    label: "Talk Therapy",
    blurb: "One-to-one, couples, family and group sessions built around conversation.",
  },
  evidence: {
    label: "Evidence-Based",
    blurb: "Structured, research-backed methods for anxiety, trauma, mood and more.",
  },
  holistic: {
    label: "Holistic & Spiritual",
    blurb: "Hypnosis, regression and energy work for the mind, body and soul.",
  },
};

export type Therapy = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  summary: string;
  overview: string[];
  helpsWith: string[];
  expect: { title: string; text: string }[];
  duration: string;
  price: string;
  format: string;
  faqs: { q: string; a: string }[];
};

export const therapies: Therapy[] = [
  {
    slug: "individual-therapy",
    name: "Individual Therapy",
    category: "talk",
    tagline: "A private space that is entirely yours.",
    summary:
      "Confidential one-to-one sessions for adults working through stress, anxiety, low mood, life transitions or simply feeling stuck.",
    overview: [
      "Individual therapy is a collaborative relationship between you and your therapist. Together we explore what is weighing on you, notice the patterns that keep you stuck, and build practical ways forward.",
      "Sessions are paced around you. Some people come for a few weeks to get through a specific crisis; others stay longer to understand themselves more deeply.",
    ],
    helpsWith: ["Anxiety & stress", "Depression & low mood", "Low self-esteem", "Burnout", "Life transitions", "Bereavement", "Divorce & separation", "Anger"],
    expect: [
      { title: "Free consultation", text: "A 15-minute call to see whether we are a good fit." },
      { title: "Assessment", text: "The first session explores your history, goals and what you hope will change." },
      { title: "Ongoing work", text: "Weekly or fortnightly sessions with gentle tools you can use between them." },
    ],
    duration: "50 minutes",
    price: "₹2,500 per session",
    format: "In person or online",
    faqs: [
      { q: "How many sessions will I need?", a: "Many people notice a shift within 6–12 sessions. We review progress together regularly." },
      { q: "Is everything I say confidential?", a: "Yes, with the narrow legal exception of a serious risk of harm to you or someone else." },
    ],
  },
  {
    slug: "couples-therapy",
    name: "Couples Therapy",
    category: "talk",
    tagline: "Find your way back to each other.",
    summary:
      "Support for partners facing conflict, distance, trust issues or big decisions, whether you want to reconnect or part with care.",
    overview: [
      "Couples therapy gives both partners an equal voice in a neutral room. We slow down the arguments that keep repeating and uncover the needs underneath them.",
      "We draw on the Gottman Method and Emotionally Focused Therapy (EFT) to rebuild communication, intimacy and trust.",
    ],
    helpsWith: ["Communication breakdown", "Infidelity & trust", "Pre-marital counselling", "Intimacy issues", "Parenting disagreements", "Conscious separation"],
    expect: [
      { title: "Joint session", text: "We meet together to understand the relationship's story." },
      { title: "Individual check-ins", text: "One session with each partner to hear each perspective privately." },
      { title: "Shared goals", text: "We agree a focus and practise new ways of talking and listening." },
    ],
    duration: "75 minutes",
    price: "₹3,500 per session",
    format: "In person or online",
    faqs: [
      { q: "What if my partner won't come?", a: "You can start on your own. Changes in one partner often shift the whole relationship." },
      { q: "Will you take sides?", a: "No. The relationship itself is the client." },
    ],
  },
  {
    slug: "family-therapy",
    name: "Family Therapy",
    category: "talk",
    tagline: "Healing that includes everyone.",
    summary:
      "Sessions that help families communicate, resolve conflict and support each other through change, illness or loss.",
    overview: [
      "Family therapy looks at the family as a system. Instead of blaming one person, we look at the patterns between people and how everyone can contribute to change.",
      "It is especially helpful during transitions such as a new baby, blended families, a diagnosis or the loss of a loved one.",
    ],
    helpsWith: ["Parent–child conflict", "Blended families", "Sibling rivalry", "Coping with illness", "Family grief", "Generational patterns"],
    expect: [
      { title: "Family meeting", text: "Everyone gets a chance to share what feels hard right now." },
      { title: "Mapping patterns", text: "We look at roles, rules and communication styles at home." },
      { title: "Practising change", text: "Small experiments at home, reviewed in the next session." },
    ],
    duration: "75 minutes",
    price: "₹4,000 per session",
    format: "In person preferred",
    faqs: [
      { q: "Does everyone need to attend every session?", a: "Not always. We decide together who is most helpful in the room each time." },
    ],
  },
  {
    slug: "child-teen-therapy",
    name: "Child & Teen Therapy",
    category: "talk",
    tagline: "Helping young minds feel heard.",
    summary:
      "Age-appropriate support using play, art and conversation for children (5+) and teenagers navigating big feelings.",
    overview: [
      "Young people often can't put their struggles into words. We use play, drawing, games and talk to help them express themselves and build coping skills.",
      "Parents are partners in the process, with regular review sessions so you know how to support your child at home.",
    ],
    helpsWith: ["School anxiety", "Exam stress", "Bullying", "Anger & behaviour", "Self-harm", "Screen & social media pressure", "Parental separation", "Low confidence"],
    expect: [
      { title: "Parent intake", text: "We meet parents first to understand the concerns and background." },
      { title: "Building trust", text: "Early sessions focus on helping your child feel safe and relaxed." },
      { title: "Parent reviews", text: "Every 4–6 sessions we check in together on progress." },
    ],
    duration: "45 minutes",
    price: "₹2,200 per session",
    format: "In person or online (teens)",
    faqs: [
      { q: "Will you tell me what my child says?", a: "We share themes and any safety concerns, while protecting the trust your child needs to open up." },
    ],
  },
  {
    slug: "group-therapy",
    name: "Group Therapy",
    category: "talk",
    tagline: "You are not the only one.",
    summary:
      "Small, facilitated groups where people with shared experiences support one another and learn together.",
    overview: [
      "There is real healing in hearing someone else describe exactly what you have been feeling. Our groups are small (6–8 people), confidential and guided by a trained facilitator.",
      "Current groups include grief support, social anxiety, and a women's circle for stress and self-worth.",
    ],
    helpsWith: ["Grief & loss", "Social anxiety", "Loneliness", "Addiction recovery", "New parents", "Self-worth"],
    expect: [
      { title: "Pre-group chat", text: "A short call to make sure the group fits your needs." },
      { title: "Weekly circle", text: "A fixed 8-week programme with the same members each week." },
      { title: "Shared tools", text: "Each session combines discussion with a practical skill." },
    ],
    duration: "90 minutes, 8 weeks",
    price: "₹8,000 for the programme",
    format: "In person",
    faqs: [
      { q: "Do I have to talk?", a: "Never. Many people just listen for the first few weeks." },
    ],
  },
  {
    slug: "cbt",
    name: "Cognitive Behavioural Therapy (CBT)",
    category: "evidence",
    tagline: "Change the thoughts that hold you back.",
    summary:
      "A practical, goal-focused therapy that helps you spot unhelpful thinking patterns and change how you respond.",
    overview: [
      "CBT is built on the idea that our thoughts, feelings, body sensations and actions are connected. Unhelpful thoughts can trap us in vicious cycles, and CBT teaches you how to break them.",
      "It is one of the most researched therapies in the world and is recommended for anxiety disorders, depression, OCD, insomnia and more.",
    ],
    helpsWith: ["Generalised anxiety", "Panic attacks", "Depression", "OCD", "Phobias", "Insomnia", "Health anxiety"],
    expect: [
      { title: "Formulation", text: "We map how your thoughts, feelings and behaviours keep the problem going." },
      { title: "Skills", text: "You learn techniques like thought records and behavioural experiments." },
      { title: "Homework", text: "Short practice between sessions so change carries into daily life." },
    ],
    duration: "50 minutes, usually 8–16 sessions",
    price: "₹2,500 per session",
    format: "In person or online",
    faqs: [
      { q: "Is CBT just positive thinking?", a: "No. It's about balanced, realistic thinking and testing beliefs against evidence." },
    ],
  },
  {
    slug: "dbt",
    name: "Dialectical Behaviour Therapy (DBT)",
    category: "evidence",
    tagline: "Skills for when emotions feel too big.",
    summary:
      "A skills-based approach for intense emotions, impulsive behaviour and turbulent relationships.",
    overview: [
      "DBT balances acceptance and change. You learn to accept yourself as you are while building skills to change what isn't working.",
      "The four core skill areas are mindfulness, distress tolerance, emotion regulation and interpersonal effectiveness.",
    ],
    helpsWith: ["Emotional dysregulation", "Self-harm", "Borderline personality traits", "Impulsivity", "Relationship conflict", "Chronic suicidal feelings"],
    expect: [
      { title: "Commitment", text: "We agree on goals and a safety plan together." },
      { title: "Skills modules", text: "Structured learning across the four DBT skill areas." },
      { title: "Diary cards", text: "Daily tracking helps us see what is changing." },
    ],
    duration: "60 minutes",
    price: "₹2,800 per session",
    format: "In person or online",
    faqs: [
      { q: "Is DBT only for borderline personality disorder?", a: "It was developed for BPD but now helps anyone who struggles with very intense emotions." },
    ],
  },
  {
    slug: "emdr",
    name: "EMDR Therapy",
    category: "evidence",
    tagline: "Let painful memories finally settle.",
    summary:
      "Eye Movement Desensitisation and Reprocessing helps the brain reprocess traumatic memories so they lose their emotional charge.",
    overview: [
      "When something overwhelming happens, the memory can get 'stuck' and keep triggering fear, shame or panic. EMDR uses bilateral stimulation (eye movements, taps or tones) while you briefly recall the memory.",
      "You don't need to describe every detail of what happened. EMDR is recommended by the WHO for post-traumatic stress.",
    ],
    helpsWith: ["PTSD", "Childhood trauma", "Accidents", "Birth trauma", "Phobias", "Performance anxiety", "Disturbing memories"],
    expect: [
      { title: "History & resourcing", text: "We build calm, safe-place skills before touching difficult memories." },
      { title: "Reprocessing", text: "Short sets of bilateral stimulation while you notice what comes up." },
      { title: "Closure", text: "Every session ends with grounding, so you leave feeling settled." },
    ],
    duration: "60–90 minutes",
    price: "₹3,200 per session",
    format: "In person or online",
    faqs: [
      { q: "Will I lose control during EMDR?", a: "No. You are fully awake and can stop at any time with a simple hand signal." },
    ],
  },
  {
    slug: "act",
    name: "Acceptance & Commitment Therapy (ACT)",
    category: "evidence",
    tagline: "Make room for feelings, move toward what matters.",
    summary:
      "A mindfulness-based therapy that helps you stop struggling with difficult thoughts and live by your values.",
    overview: [
      "ACT doesn't try to get rid of painful thoughts. It changes your relationship with them so they have less power over your choices.",
      "We clarify what truly matters to you and take small, committed steps in that direction.",
    ],
    helpsWith: ["Chronic pain", "Anxiety", "Perfectionism", "Burnout", "Lack of direction", "Long-term illness"],
    expect: [
      { title: "Values work", text: "Discover what you want your life to stand for." },
      { title: "Defusion", text: "Learn to unhook from sticky thoughts." },
      { title: "Committed action", text: "Small, values-led steps between sessions." },
    ],
    duration: "50 minutes",
    price: "₹2,500 per session",
    format: "In person or online",
    faqs: [
      { q: "How is ACT different from CBT?", a: "CBT challenges thoughts; ACT changes how you relate to them." },
    ],
  },
  {
    slug: "psychodynamic-therapy",
    name: "Psychodynamic Therapy",
    category: "evidence",
    tagline: "Understand the roots, not just the symptoms.",
    summary:
      "An in-depth, exploratory therapy that looks at how early experiences and unconscious patterns shape your life today.",
    overview: [
      "Psychodynamic therapy is open-ended and reflective. We explore recurring themes in your relationships, emotions and choices, often tracing them back to childhood.",
      "Insight into these patterns frees you to respond differently, and the benefits tend to keep growing after therapy ends.",
    ],
    helpsWith: ["Recurring relationship patterns", "Long-standing depression", "Identity questions", "Emotional numbness", "Attachment issues"],
    expect: [
      { title: "Open conversation", text: "You bring whatever is on your mind; there is no fixed agenda." },
      { title: "Noticing patterns", text: "We reflect on themes as they emerge, including in the therapy relationship." },
      { title: "Deep change", text: "Typically longer-term, from several months to a year or more." },
    ],
    duration: "50 minutes",
    price: "₹2,500 per session",
    format: "In person or online",
    faqs: [
      { q: "Is it like the old psychoanalysis on a couch?", a: "It grew out of that tradition but is face-to-face, warm and conversational." },
    ],
  },
  {
    slug: "mindfulness-therapy",
    name: "Mindfulness-Based Therapy (MBCT)",
    category: "evidence",
    tagline: "Come back to the present moment.",
    summary:
      "Combines meditation practice with cognitive therapy to prevent relapse of depression and reduce stress.",
    overview: [
      "Mindfulness-Based Cognitive Therapy teaches you to notice thoughts and feelings without getting swept away by them.",
      "Offered as one-to-one sessions or as an 8-week course with guided audio practices for home.",
    ],
    helpsWith: ["Recurring depression", "Stress", "Rumination", "Overthinking", "Sleep problems"],
    expect: [
      { title: "Guided practice", text: "Body scans, breathing and mindful movement in session." },
      { title: "Reflection", text: "We explore what you noticed and how it applies to daily life." },
      { title: "Home practice", text: "10–20 minutes a day with recorded meditations." },
    ],
    duration: "60 minutes",
    price: "₹2,200 per session",
    format: "In person or online",
    faqs: [
      { q: "I can't stop my thoughts. Can I still do this?", a: "Absolutely. Mindfulness isn't about emptying the mind, it's about noticing it." },
    ],
  },
  {
    slug: "grief-counselling",
    name: "Grief & Bereavement Counselling",
    category: "evidence",
    tagline: "Carry the love, ease the weight.",
    summary:
      "Gentle support after the death of a loved one, a pregnancy loss, or any loss that has turned your world upside down.",
    overview: [
      "Grief has no timetable. Counselling offers a space to speak about the person you lost, process complicated feelings like guilt or anger, and find ways to continue the bond.",
      "We also support anticipatory grief, pet loss, and losses that others may not recognise.",
    ],
    helpsWith: ["Loss of a loved one", "Pregnancy & infant loss", "Sudden or traumatic death", "Pet loss", "Anticipatory grief", "Complicated grief"],
    expect: [
      { title: "Telling the story", text: "Space to share memories, at your own pace." },
      { title: "Processing", text: "Working through difficult emotions without judgement." },
      { title: "Continuing bonds", text: "Finding meaningful ways to honour the person you lost." },
    ],
    duration: "50 minutes",
    price: "₹2,200 per session",
    format: "In person or online",
    faqs: [
      { q: "Is it too soon / too late to come?", a: "There is no right time. Come whenever it feels needed." },
    ],
  },
  {
    slug: "hypnotherapy",
    name: "Hypnotherapy",
    category: "holistic",
    tagline: "Reach the subconscious, change the habit.",
    summary:
      "Guided deep relaxation that helps you access the subconscious mind to change habits, ease anxiety and build confidence.",
    overview: [
      "Hypnosis is a natural, focused state, a bit like being absorbed in a good book. In this relaxed state the mind is more open to positive suggestion.",
      "You remain aware and in control throughout. Nobody can make you do anything against your will.",
    ],
    helpsWith: ["Quitting smoking", "Weight management", "Phobias", "Confidence", "Exam & interview nerves", "Sleep", "Nail biting"],
    expect: [
      { title: "Consultation", text: "We explore the habit or issue and set a clear goal." },
      { title: "Induction", text: "Guided relaxation into a calm, focused state." },
      { title: "Recording", text: "You may receive a personalised audio to reinforce the work at home." },
    ],
    duration: "60 minutes (stop smoking: 2 hours)",
    price: "₹3,000 per session · Stop smoking ₹7,500",
    format: "In person or online",
    faqs: [
      { q: "What if I can't be hypnotised?", a: "Most people can. If you can daydream, you can experience hypnosis." },
    ],
  },
  {
    slug: "past-life-regression",
    name: "Past Life Regression",
    category: "holistic",
    tagline: "Explore the stories your soul remembers.",
    summary:
      "A deep hypnotic journey that follows present-day feelings back to their source, whether in childhood or a past life.",
    overview: [
      "Some fears, relationship patterns or physical sensations seem to have no explanation in this life. Regression therapy follows the energy or feeling backwards to where it began.",
      "Sessions often begin with current-life regression into childhood and may then move further back. Whatever comes up is explored with care and gently resolved.",
      "A non-therapeutic 'Past Life Journey' is also available for those who are simply curious.",
    ],
    helpsWith: ["Unexplained fears & phobias", "Recurring relationship patterns", "Feeling stuck", "Spiritual curiosity", "Sense of purpose"],
    expect: [
      { title: "Pre-session talk", text: "We discuss what you'd like to explore and set an intention." },
      { title: "Regression", text: "Guided hypnosis to follow feelings back to their origin." },
      { title: "Integration", text: "We discuss insights and how to carry them into daily life." },
    ],
    duration: "2–2.5 hours",
    price: "₹8,000 · Past Life Journey ₹6,500",
    format: "In person",
    faqs: [
      { q: "Do I have to believe in past lives?", a: "No. Many people find the experience meaningful as metaphor, whatever their beliefs." },
    ],
  },
  {
    slug: "between-lives-regression",
    name: "Between Lives Spiritual Regression",
    category: "holistic",
    tagline: "A deep journey into the space between.",
    summary:
      "An extended, very deep hypnosis session exploring the soul's experience between lifetimes, purpose and guidance.",
    overview: [
      "Between Lives Regression goes beyond past life work into the spiritual realm between incarnations. Many people describe meeting guides, loved ones and gaining clarity on their life's purpose.",
      "We recommend at least one past life regression session beforehand to become familiar with deep hypnosis.",
    ],
    helpsWith: ["Life purpose", "Spiritual growth", "Grief & connection", "Major life decisions", "Self-understanding"],
    expect: [
      { title: "Preparation", text: "A preliminary session and questionnaire about what you wish to explore." },
      { title: "Deep journey", text: "A long, unhurried hypnosis session through a past life and beyond." },
      { title: "Recording", text: "You receive an audio recording to revisit afterwards." },
    ],
    duration: "2.5–3 hours",
    price: "₹14,000",
    format: "In person",
    faqs: [
      { q: "Is this suitable for everyone?", a: "It isn't recommended during acute mental health crises or for some conditions. We'll discuss this in consultation." },
    ],
  },
  {
    slug: "reiki",
    name: "Reiki Healing",
    category: "holistic",
    tagline: "Gentle energy for deep rest.",
    summary:
      "A Japanese energy-healing practice (Usui tradition) using light touch to promote deep relaxation and balance.",
    overview: [
      "Reiki means 'universal life force energy'. You rest fully clothed while the practitioner places hands lightly on or just above the body.",
      "Most people experience a profound sense of calm. Reiki works well alongside talk therapy and conventional medical care, never as a replacement.",
    ],
    helpsWith: ["Stress & tension", "Sleep problems", "Emotional overwhelm", "Recovery support", "Chakra balancing", "General wellbeing"],
    expect: [
      { title: "Settling in", text: "A short chat about how you feel and anything to focus on." },
      { title: "Treatment", text: "Rest on a treatment couch with soft music while energy flows." },
      { title: "Grounding", text: "Water, a few minutes to come back, and a chance to share." },
    ],
    duration: "60 minutes",
    price: "₹2,000 · 10% off blocks of 6",
    format: "In person or distance",
    faqs: [
      { q: "Do I need to believe in Reiki for it to work?", a: "No. Simply come with an open mind and allow yourself to rest." },
    ],
  },
  {
    slug: "spiritual-guidance",
    name: "Spiritual Life Guidance",
    category: "holistic",
    tagline: "Clarity when the path feels uncertain.",
    summary:
      "Intuitive sessions using oracle cards and channelling to bring insight, reassurance and direction.",
    overview: [
      "Spiritual guidance sessions offer a reflective space for questions about love, work, purpose or a decision you're facing.",
      "Oracle cards serve as a mirror for intuition. The aim is empowerment, helping you trust your own inner knowing.",
    ],
    helpsWith: ["Big decisions", "Feeling disconnected", "Spiritual awakening", "Purpose & direction"],
    expect: [
      { title: "Intention", text: "We begin by focusing on your question." },
      { title: "Reading", text: "Cards and intuitive insights are shared and explored." },
      { title: "Reflection", text: "We talk through what resonates and next steps." },
    ],
    duration: "60 minutes",
    price: "₹2,000",
    format: "In person or online",
    faqs: [
      { q: "Is this fortune telling?", a: "No. It is a reflective, empowering practice, not a prediction of fixed outcomes." },
    ],
  },
  {
    slug: "art-therapy",
    name: "Art & Expressive Therapy",
    category: "holistic",
    tagline: "When words aren't enough.",
    summary:
      "Using drawing, painting, clay and movement to express and process feelings, with no artistic skill needed.",
    overview: [
      "Creative expression can reach feelings that are hard to talk about. The focus is on the process, not on making something beautiful.",
      "Art therapy is especially helpful for children, trauma survivors and anyone who feels stuck in words.",
    ],
    helpsWith: ["Trauma", "Grief", "Self-expression", "Anxiety", "Children & teens", "Neurodivergence"],
    expect: [
      { title: "Invitation", text: "A gentle prompt or free creation with a range of materials." },
      { title: "Creating", text: "Time to make, without judgement or instruction." },
      { title: "Reflecting", text: "If you wish, we talk about what you made and what it holds." },
    ],
    duration: "60 minutes",
    price: "₹2,500 per session",
    format: "In person",
    faqs: [
      { q: "I can't draw. Is that a problem?", a: "Not at all. Stick figures and scribbles are welcome." },
    ],
  },
];

export function getTherapy(slug: string) {
  return therapies.find((t) => t.slug === slug);
}
