const section2 = {
  title: "Section 2: Smartphone Need Assessment (SNA)",
  title_bn: "সেকশন ২ – স্মার্টফোনের প্রয়োজনীয়তা মূল্যায়ন (এসএনএ)",
  description: "Evaluates whether the child has a genuine practical need for a personal smartphone based on education, communication, safety, daily responsibilities, digital participation, and the surrounding environment.",
  desc_bn: "এই সেকশনটি মূল্যায়ন করে যে শিক্ষা, যোগাযোগ, নিরাপত্তা, দৈনন্দিন দায়িত্ব, ডিজিটাল অংশগ্রহণ এবং পারিপার্শ্বিক পরিবেশের ওপর ভিত্তি করে শিশুর একটি নিজস্ব স্মার্টফোনের প্রকৃত ব্যবহারিক প্রয়োজনীয়তা রয়েছে কিনা।",
  subdomains: [
    {
      name: "Domain A – Educational Need",
      name_bn: "ডোমেইন ক – শিক্ষাগত প্রয়োজনীয়তা",
      questions: [
        { id: "sna_q1", text: "My child's school regularly requires access to digital learning resources.", text_bn: "আমার শিশুর স্কুলের জন্য নিয়মিত ডিজিটাল শিক্ষার উপকরণ ব্যবহারের প্রয়োজন হয়।" },
        { id: "sna_q2", text: "My child frequently needs digital access for assignments, projects, or homework.", text_bn: "অ্যাসাইনমেন্ট, প্রজেক্ট বা বাড়ির কাজের জন্য আমার শিশুর প্রায়শই ডিজিটাল সুবিধার প্রয়োজন হয়।" },
        { id: "sna_q3", text: "My child needs timely access to school announcements or educational communication.", text_bn: "স্কুলের ঘোষণা বা শিক্ষাগত যোগাযোগের তথ্য সময়মতো পাওয়ার জন্য আমার শিশুর ডিজিটাল সুবিধা প্রয়োজন।" },
        { id: "sna_q4", text: "A smartphone would significantly improve my child's educational participation.", text_bn: "একটি স্মার্টফোন আমার শিশুর শিক্ষাগত অংশগ্রহণে উল্লেখযোগ্য উন্নতি ঘটাবে।" },
        { id: "sna_q5", text: "Without a smartphone, my child's education is noticeably affected.", text_bn: "স্মার্টফোন না থাকার কারণে আমার শিশুর শিক্ষা লক্ষণীয়ভাবে ক্ষতিগ্রস্ত হচ্ছে।" }
      ]
    },
    {
      name: "Domain B – Communication Need",
      name_bn: "ডোমেইন খ – যোগাযোগের প্রয়োজনীয়তা",
      questions: [
        { id: "sna_q6", text: "My child frequently needs to contact me while away from home.", text_bn: "ঘরের বাইরে থাকার সময় আমার শিশুর প্রায়শই আমার সাথে যোগাযোগ করার প্রয়োজন হয়।" },
        { id: "sna_q7", text: "I frequently need to contact my child during the day.", text_bn: "সারাদিনের মধ্যে আমার প্রায়শই শিশুর সাথে যোগাযোগ করার প্রয়োজন হয়।" },
        { id: "sna_q8", text: "Reliable communication is important in my child's daily routine.", text_bn: "আমার শিশুর দৈনন্দিন রুটিনে নির্ভরযোগ্য যোগাযোগ গুরুত্বপূর্ণ।" },
        { id: "sna_q9", text: "Delayed communication sometimes creates problems.", text_bn: "যোগাযোগে দেরি হলে মাঝে মাঝে সমস্যা তৈরি হয়।" },
        { id: "sna_q10", text: "A personal smartphone would improve communication compared to our current arrangements.", text_bn: "আমাদের বর্তমান ব্যবস্থার তুলনায় একটি নিজস্ব স্মার্টফোন যোগাযোগ ব্যবস্থার উন্নতি করবে।" }
      ]
    },
    {
      name: "Domain C – Safety & Mobility Need",
      name_bn: "ডোমেইন গ – নিরাপত্তা ও চলাচলের প্রয়োজনীয়তা",
      questions: [
        { id: "sna_q11", text: "My child regularly travels independently.", text_bn: "আমার শিশু নিয়মিত একা চলাফেরা/ভ্রমণ করে।" },
        { id: "sna_q12", text: "My child spends considerable time away from direct adult supervision.", text_bn: "আমার শিশু প্রাপ্তবয়স্কদের প্রত্যক্ষ তত্ত্বাবধানের বাইরে অনেকটাই সময় কাটায়।" },
        { id: "sna_q13", text: "A smartphone would improve my child's safety.", text_bn: "একটি স্মার্টফোন আমার শিশুর নিরাপত্তা বাড়াবে।" },
        { id: "sna_q14", text: "Emergency communication may occasionally be necessary.", text_bn: "মাঝে মাঝে জরুরি যোগাযোগের প্রয়োজন হতে পারে।" },
        { id: "sna_q15", text: "I would feel significantly more confident about my child's safety if they had a smartphone.", text_bn: "আমার শিশুর কাছে স্মার্টফোন থাকলে আমি তার নিরাপত্তা নিয়ে অনেক বেশি আশ্বস্ত বোধ করব।" }
      ]
    },
    {
      name: "Domain D – Availability of Alternatives (Reverse Scored)",
      name_bn: "ডোমেইন ঘ – বিকল্পের প্রাপ্যতা (বিপরীত স্কোর)",
      questions: [
        { id: "sna_q16", isReverse: true, text: "A shared family device adequately meets my child's needs.", text_bn: "পরিবারের যৌথ ডিভাইস ব্যবহারের সুবিধা আমার শিশুর প্রয়োজন সঠিকভাবে মেটায়।" },
        { id: "sna_q17", isReverse: true, text: "Existing communication methods are sufficient.", text_bn: "বিদ্যমান যোগাযোগ পদ্ধতিগুলোই যথেষ্ট।" },
        { id: "sna_q18", isReverse: true, text: "My child can currently manage daily activities without a personal smartphone.", text_bn: "আমার শিশু বর্তমানে নিজস্ব স্মার্টফোন ছাড়াই দৈনন্দিন কাজ পরিচালনা করতে পারে।" },
        { id: "sna_q19", isReverse: true, text: "Our family already has suitable alternatives available.", text_bn: "আমাদের পরিবারে ইতিমধ্যেই উপযুক্ত বিকল্প ব্যবস্থা রয়েছে।" },
        { id: "sna_q20", isReverse: true, text: "A personal smartphone would mostly duplicate facilities my child already has.", text_bn: "একটি নিজস্ব স্মার্টফোন দেওয়া হলে তা শিশুর ইতিমধ্যে বিদ্যমান সুবিধারই পুনরাবৃত্তি ঘটাবে।" }
      ]
    },
    {
      name: "Domain E – Practical Daily Need",
      name_bn: "ডোমেইন ঙ – দৈনন্দিন ব্যবহারিক প্রয়োজনীয়তা",
      questions: [
        { id: "sna_q21", text: "My child's daily schedule requires frequent coordination.", text_bn: "আমার শিশুর দৈনন্দিন সময়সূচীর জন্য ঘন ঘন সমন্বয় বা যোগাযোগের প্রয়োজন হয়।" },
        { id: "sna_q22", text: "My child participates in activities where smartphone access would be genuinely useful.", text_bn: "আমার শিশু এমন কর্মকাণ্ডে অংশগ্রহণ করে যেখানে স্মার্টফোন ব্যবহারের সুবিধা সত্যিই দরকারী।" },
        { id: "sna_q23", text: "My child's increasing independence makes digital communication important.", text_bn: "আমার শিশুর ক্রমবর্ধমান স্বাবলম্বিতা ডিজিটাল যোগাযোগকে গুরুত্বপূর্ণ করে তুলছে।" },
        { id: "sna_q24", text: "Managing daily responsibilities is becoming difficult without personal digital access.", text_bn: "নিজস্ব ডিজিটাল সুবিধা ছাড়া দৈনন্দিন দায়িত্বগুলো সামলানো কঠিন হয়ে পড়ছে।" },
        { id: "sna_q25", text: "A smartphone would help my child manage daily responsibilities more effectively.", text_bn: "একটি স্মার্টফোন আমার শিশুকে দৈনন্দিন দায়িত্ব আরও দক্ষতার সাথে পরিচালনা করতে সাহায্য করবে।" }
      ]
    },
    {
      name: "Domain F – Digital Participation Need",
      name_bn: "ডোমেইন চ – ডিজিটাল অংশগ্রহণের প্রয়োজনীয়তা",
      questions: [
        { id: "sna_q26", text: "Important school or activity-related communication increasingly takes place through digital platforms.", text_bn: "স্কুল বা অন্যান্য কার্যক্রম সম্পর্কিত গুরুত্বপূর্ণ যোগাযোগ ক্রমশ ডিজিটাল প্ল্যাটফর্মের মাধ্যমে সম্পন্ন হচ্ছে।" },
        { id: "sna_q27", text: "My child may miss important educational or extracurricular opportunities without appropriate digital access.", text_bn: "উপযুক্ত ডিজিটাল সুবিধা না থাকলে আমার শিশু গুরুত্বপূর্ণ শিক্ষাগত বা পাঠ্যক্রম বহির্ভূত সুযোগ মিস করতে পারে।" },
        { id: "sna_q28", text: "Learning responsible digital participation has become important for my child's stage of development.", text_bn: "দায়িত্বশীল ডিজিটাল ব্যবহার শেখা আমার শিশুর বর্তমান বিকাশমূলক পর্যায়ের জন্য গুরুত্বপূর্ণ হয়ে উঠেছে।" },
        { id: "sna_q29", text: "My child would benefit from gradually learning to use digital communication responsibly.", text_bn: "দায়িত্বশীলভাবে ডিজিটাল যোগাযোগ ব্যবহার করতে ধীরে ধীরে শেখাটা আমার শিশুর উপকারে আসবে।" },
        { id: "sna_q30", text: "Limited access to digital participation may reduce my child's ability to engage appropriately in age-relevant activities.", text_bn: "ডিজিটাল ব্যবহারে সীমাবদ্ধতা বয়সোপযোগী কার্যক্রমে শিশুর যথাযথ অংশগ্রহণের ক্ষমতা কমিয়ে দিতে পারে।" }
      ]
    },
    {
      name: "Domain G – Parent's Need Evaluation",
      name_bn: "ডোমেইন ছ – অভিভাবকের প্রয়োজনীয়তা মূল্যায়ন",
      questions: [
        { id: "sna_q31", text: "After careful consideration, I believe my child currently has a genuine need for a smartphone.", text_bn: "সতর্ক বিবেচনার পর, আমি বিশ্বাস করি যে আমার শিশুর বর্তমানে একটি স্মার্টফোনের প্রকৃত প্রয়োজনীয়তা রয়েছে।" },
        { id: "sna_q32", text: "The practical benefits outweigh the risks at this stage.", text_bn: "এই পর্যায়ে ব্যবহারিক সুবিধাগুলো ঝুঁকির চেয়ে বেশি।" },
        { id: "sna_q33", text: "Delaying smartphone access may negatively affect my child's daily functioning.", text_bn: "স্মার্টফোন ব্যবহারে বিলম্ব করা আমার শিশুর দৈনন্দিন কার্যক্রমে নেতিবাচক প্রভাব ফেলতে পারে।" },
        { id: "sna_q34", text: "My decision is based mainly on practical necessity.", text_bn: "আমার সিদ্ধান্ত মূলত ব্যবহারিক প্রয়োজনীয়তার ওপর ভিত্তি করে নেওয়া হয়েছে।" },
        { id: "sna_q35", text: "I believe now is the appropriate time to consider smartphone introduction.", text_bn: "আমি বিশ্বাস করি এখন স্মার্টফোন দেওয়ার কথা বিবেচনা করার উপযুক্ত সময়।" }
      ]
    }
  ]
};

const sectionExtra = {
  title: "EXTRA SECTION: Social Expectations & Influence Assessment (SEIA)",
  title_bn: "অতিরিক্ত সেকশন: সামাজিক প্রত্যাশা ও প্রভাব মূল্যায়ন (এসইআইএ)",
  description: "Helps parents recognize how much their decision may be influenced by peer pressure, social expectations, or Fear of Missing Out (FOMO).",
  desc_bn: "এই বিভাগটি অভিভাবকদের বুঝতে সাহায্য করে যে তাদের সিদ্ধান্ত কতটা সহপাঠীদের চাপ, সামাজিক প্রত্যাশা, বা পিছিয়ে পড়ার ভয় (FOMO) দ্বারা প্রভাবিত হতে পারে।",
  subdomains: [
    {
      name: "Domain A – Peer Influence",
      name_bn: "ডোমেইন ক – সহপাঠীদের প্রভাব",
      questions: [
        { id: "seia_q1", text: "My child often says that most of their friends already have smartphones.", text_bn: "আমার শিশু প্রায়ই বলে যে তার বেশিরভাগ বন্ধুর ইতিমধ্যেই স্মার্টফোন রয়েছে।" },
        { id: "seia_q2", text: "My child compares themselves with friends who own smartphones.", text_bn: "আমার শিশু স্মার্টফোনের মালিক বন্ধুদের সাথে নিজেকে তুলনা করে।" },
        { id: "seia_q3", text: "My child believes owning a smartphone is necessary to fit in socially.", text_bn: "আমার শিশু মনে করে সামাজিকভাবে মিশতে বা গ্রহণযোগ্য হতে স্মার্টফোনের মালিক হওয়া প্রয়োজন।" }
      ]
    },
    {
      name: "Domain B – Fear of Missing Out (FOMO)",
      name_bn: "ডোমেইন খ – পিছিয়ে পড়ার ভয় (ফোমো)",
      questions: [
        { id: "seia_q4", text: "My child worries about missing conversations or activities without a smartphone.", text_bn: "স্মার্টফোন না থাকার কারণে কোনো আলোচনা বা কার্যক্রম মিস করার কথা ভেবে আমার শিশু উদ্বিগ্ন থাকে।" },
        { id: "seia_q5", text: "My child feels left out when friends discuss online content or social media.", text_bn: "বন্ধুরা যখন অনলাইন কনটেন্ট বা সোশ্যাল মিডিয়া নিয়ে আলোচনা করে তখন আমার শিশু নিজেকে একা/বিচ্ছিন্ন বোধ করে।" },
        { id: "seia_q6", text: "My child becomes upset when they cannot participate in online trends or digital activities.", text_bn: "অনলাইন ট্রেন্ড বা ডিজিটাল কার্যক্রমে অংশ নিতে না পারলে আমার শিশু মন খারাপ করে।" }
      ]
    },
    {
      name: "Domain C – Parent Influence",
      name_bn: "ডোমেইন গ – অভিভাবকের ওপর প্রভাব",
      questions: [
        { id: "seia_q7", text: "I sometimes feel pressured by other parents to provide my child with a smartphone.", text_bn: "অন্যান্য অভিভাবকদের দেখে আমি মাঝেমধ্যে আমার শিশুকে স্মার্টফোন দেওয়ার মানসিক চাপ অনুভব করি।" },
        { id: "seia_q8", text: "I worry my child may be socially disadvantaged without a smartphone.", text_bn: "আমি চিন্তিত যে স্মার্টফোন না থাকলে আমার শিশু সামাজিকভাবে পিছিয়ে পড়তে পারে।" },
        { id: "seia_q9", text: "The decisions of other families influence my thinking about giving my child a smartphone.", text_bn: "অন্যান্য পরিবারের সিদ্ধান্তগুলো আমার শিশুকে স্মার্টফোন দেওয়ার চিন্তাভাবনাকে প্রভাবিত করে।" }
      ]
    },
    {
      name: "Domain D – Decision Reflection (Reverse Scored)",
      name_bn: "ডোমেইন ঘ – সিদ্ধান্তের পর্যালোচনা (বিপরীত স্কোর)",
      questions: [
        { id: "seia_q10", isReverse: true, text: "If none of my child's friends owned smartphones, I would still consider giving one based on genuine need.", text_bn: "আমার শিশুর কোনো বন্ধুরই স্মার্টফোন না থাকলেও, প্রকৃত প্রয়োজনীয়তার ভিত্তিতে আমি তাকে ফোন দেওয়ার কথা ভাবতাম।" },
        { id: "seia_q11", isReverse: true, text: "I can clearly separate practical necessity from social pressure when making this decision.", text_bn: "এই সিদ্ধান্ত নেওয়ার সময় আমি সামাজিক চাপ থেকে ব্যবহারিক প্রয়োজনকে স্পষ্টভাবে আলাদা করতে পারি।" },
        { id: "seia_q12", isReverse: true, text: "I believe my current decision is driven more by practical need than by social expectations.", text_bn: "আমি বিশ্বাস করি আমার বর্তমান সিদ্ধান্তটি সামাজিক প্রত্যাশার চেয়ে ব্যবহারিক প্রয়োজনীয়তা দ্বারাই বেশি চালিত।" }
      ]
    }
  ]
};

const section3Parent = {
  title: "Section 3: Child Readiness Assessment (CRA) - Parent Evaluation",
  title_bn: "সেকশন ৩: শিশুর প্রস্তুতি মূল্যায়ন (সিআরএ) - অভিভাবকের মূল্যায়ন",
  description: "Assesses the child's behavioral, emotional, and cognitive readiness for a smartphone across 11 key domains.",
  desc_bn: "১১টি মূল ডোমেইনের মাধ্যমে স্মার্টফোন ব্যবহারের জন্য শিশুর আচরণগত, আবেগীয় এবং জ্ঞানীয় প্রস্তুতি মূল্যায়ন করে।",
  subdomains: [
    {
      name: "Domain A – Responsibility & Self-Control",
      name_bn: "ডোমেইন ক – দায়িত্ববোধ ও আত্মনিয়ন্ত্রণ",
      questions: [
        { id: "cra_q1", text: "My child takes good care of their personal belongings.", text_bn: "আমার শিশু তার ব্যক্তিগত জিনিসপত্রের ভালো যত্ন নেয়।" },
        { id: "cra_q2", text: "My child can stop an enjoyable activity (like playing or watching TV) when asked, without major tantrums.", text_bn: "বলা হলে আমার শিশু বড় কোনো রাগ বা জেদ না করেই একটি আনন্দদায়ক কাজ (যেমন খেলা বা টিভি দেখা) বন্ধ করতে পারে।" },
        { id: "cra_q3", text: "My child completes daily tasks (like homework or chores) without constant reminders.", text_bn: "আমার শিশু বারবার মনে করিয়ে দেওয়া ছাড়াই দৈনন্দিন কাজ (যেমন বাড়ির কাজ বা গৃহস্থালির কাজ) সম্পন্ন করে।" },
        { id: "cra_q4", text: "My child accepts 'no' for an answer regarding screen time limits.", text_bn: "স্ক্রিন টাইম লিমিটের ক্ষেত্রে আমার শিশু 'না' বলাটা মেনে নেয়।" },
        { id: "cra_q5", text: "My child shows patience when they have to wait for something they want.", text_bn: "পছন্দের কোনো কিছুর জন্য অপেক্ষা করতে হলে আমার শিশু ধৈর্য প্রদর্শন করে।" }
      ]
    },
    {
      name: "Domain B – Rule Following & Honesty",
      name_bn: "ডোমেইন খ – নিয়মকানুন মানা ও সততা",
      questions: [
        { id: "cra_q6", text: "My child generally follows family rules without constant argument.", text_bn: "আমার শিশু সাধারণত নিয়মিত তর্ক না করেই পারিবারিক নিয়ম মেনে চলে।" },
        { id: "cra_q7", text: "My child tells the truth, even when they have made a mistake.", text_bn: "ভুল করলেও আমার শিশু সত্য কথা বলে।" },
        { id: "cra_q8", text: "My child respects boundaries set for other electronic devices (TV, tablet, gaming console).", text_bn: "আমার শিশু অন্যান্য ইলেকট্রনিক ডিভাইসের (টিভি, ট্যাবলেট, গেমিং কনসোল) জন্য নির্ধারিত নিয়ম ও সময়সীমা মেনে চলে।" },
        { id: "cra_q9", text: "My child is open about what they do and who they talk to.", text_bn: "আমার শিশু কী করে এবং কার সাথে কথা বলে সে বিষয়ে খোলামেলা।" },
        { id: "cra_q10", text: "My child accepts consequences when they break a rule.", text_bn: "নিয়ম ভাঙলে আমার শিশু তার পরিণতি/শাস্তি মেনে নেয়।" }
      ]
    },
    {
      name: "Domain C – Digital Literacy & Safety Awareness",
      name_bn: "ডোমেইন গ – ডিজিটাল জ্ঞান ও নিরাপত্তা সচেতনতা",
      questions: [
        { id: "cra_q11", text: "My child understands that not everything on the internet is true.", text_bn: "আমার শিশু বোঝে যে ইন্টারনেটের সবকিছু সত্যি নয়।" },
        { id: "cra_q12", text: "My child knows not to share personal information (name, address, school) online.", text_bn: "আমার শিশু জানে যে অনলাইনে ব্যক্তিগত তথ্য (নাম, ঠিকানা, স্কুল) শেয়ার করা উচিত নয়।" },
        { id: "cra_q13", text: "My child understands that online actions leave a permanent digital footprint.", text_bn: "আমার শিশু বোঝে যে অনলাইনে কোনো কিছু করলে তা স্থায়ী ডিজিটাল চিহ্ন রেখে যায়।" },
        { id: "cra_q14", text: "My child knows to come to an adult if they see something inappropriate online.", text_bn: "আমার শিশু জানে যে অনলাইনে অনুপযুক্ত কিছু দেখলে তা বড়দের জানাতে হবে।" },
        { id: "cra_q15", text: "My child understands the concept of online privacy.", text_bn: "আমার শিশুর অনলাইন প্রাইভেসি বা গোপনীয়তা সম্পর্কে ধারণা আছে।" }
      ]
    },
    {
      name: "Domain D – Social & Emotional Maturity",
      name_bn: "ডোমেইন ঘ – সামাজিক ও আবেগীয় পরিপক্কতা",
      questions: [
        { id: "cra_q16", text: "My child can handle conflicts with friends reasonably well.", text_bn: "আমার শিশু বন্ধুদের সাথে দ্বন্দ্ব বা মতবিরোধ যুক্তিসঙ্গতভাবে সামলাতে পারে।" },
        { id: "cra_q17", text: "My child does not easily give in to peer pressure.", text_bn: "আমার শিশু সহজে সহপাঠীদের বা বন্ধুদের চাপে প্রভাবিত হয় না।" },
        { id: "cra_q18", text: "My child shows empathy and kindness toward others.", text_bn: "আমার শিশু অন্যদের প্রতি সহানুভূতি ও দয়া প্রদর্শন করে।" },
        { id: "cra_q19", text: "My child recovers relatively quickly from minor disappointments.", text_bn: "আমার শিশু ছোটখাটো হতাশা থেকে তুলনামূলকভাবে দ্রুত সামলে ওঠে।" },
        { id: "cra_q20", text: "My child can communicate their feelings effectively without aggressive behavior.", text_bn: "আমার শিশু আক্রমণাত্মক আচরণ না করে তার অনুভূতিগুলো কার্যকরভাবে প্রকাশ করতে পারে।" }
      ]
    },
    {
      name: "Domain E – Offline Life Balance",
      name_bn: "ডোমেইন ঙ – অফলাইন জীবনের ভারসাম্য",
      questions: [
        { id: "cra_q21", text: "My child enjoys offline hobbies and activities (sports, reading, art, etc.).", text_bn: "আমার শিশু অফলাইন শখ এবং কার্যক্রমে (খেলাধুলা, বই পড়া, শিল্পকলা ইত্যাদি) আনন্দ পায়।" },
        { id: "cra_q22", text: "My child spends adequate time playing outdoors or doing physical activities.", text_bn: "আমার শিশু বাইরে খেলাধুলা বা শারীরিক কার্যকলাপে পর্যাপ্ত সময় ব্যয় করে।" },
        { id: "cra_q23", text: "My child easily engages in face-to-face conversations with family members.", text_bn: "আমার শিশু পরিবারের সদস্যদের সাথে স্বাচ্ছন্দ্যে সামনাসামনি কথা বলে।" },
        { id: "cra_q24", text: "My child sleeps well and maintains a healthy sleep schedule.", text_bn: "আমার শিশু পর্যাপ্ত ঘুমায় এবং ঘুমের একটি স্বাস্থ্যকর রুটিন বজায় রাখে।" },
        { id: "cra_q25", text: "My child's mood does not heavily depend on screen time access.", text_bn: "আমার শিশুর মেজাজ স্ক্রিন টাইম ব্যবহারের ওপর খুব বেশি নির্ভরশীল নয়।" }
      ]
    },
    {
      name: "Domain F – Critical Thinking & Media Consumption",
      name_bn: "ডোমেইন চ – বিশ্লেষণাত্মক চিন্তাভাবনা ও মিডিয়া ব্যবহার",
      questions: [
        { id: "cra_q26", text: "My child can distinguish between educational content and pure entertainment.", text_bn: "আমার শিশু শিক্ষামূলক বিষয়বস্তু এবং নিছক বিনোদনের মধ্যে পার্থক্য করতে পারে।" },
        { id: "cra_q27", text: "My child questions the intent behind advertisements or sponsored content.", text_bn: "আমার শিশু বিজ্ঞাপন বা স্পনসর করা কনটেন্টের উদ্দেশ্য সম্পর্কে প্রশ্ন করে/সচেতন থাকে।" },
        { id: "cra_q28", text: "My child is unlikely to blindly participate in dangerous online trends or challenges.", text_bn: "আমার শিশু চোখ বন্ধ করে বিপজ্জনক অনলাইন ট্রেন্ড বা চ্যালেঞ্জে অংশ নেওয়ার সম্ভাবনা কম।" },
        { id: "cra_q29", text: "My child selects age-appropriate content when using shared devices.", text_bn: "যৌথ ডিভাইস ব্যবহার করার সময় আমার শিশু নিজের বয়সের উপযোগী বিষয়বস্তু বেছে নেয়।" },
        { id: "cra_q30", text: "My child understands that people may present fake or altered versions of themselves online.", text_bn: "আমার শিশু বোঝে যে মানুষ অনলাইনে নিজেদের ভুয়া বা পরিবর্তিত রূপ উপস্থাপন করতে পারে।" }
      ]
    },
    {
      name: "Domain G – Independence & Problem Solving",
      name_bn: "ডোমেইন ছ – স্বনির্ভরতা ও সমস্যা সমাধান",
      questions: [
        { id: "cra_q31", text: "My child tries to solve minor problems before asking for help.", text_bn: "সাহায্য চাওয়ার আগে আমার শিশু ছোটখাটো সমস্যা নিজে সমাধানের চেষ্টা করে।" },
        { id: "cra_q32", text: "My child can navigate their daily routine with minimal supervision.", text_bn: "আমার শিশু ন্যূনতম নজরদারিতে তার দৈনন্দিন রুটিন পরিচালনা করতে পারে।" },
        { id: "cra_q33", text: "My child knows emergency contact numbers and procedures.", text_bn: "আমার শিশু জরুরি যোগাযোগের নম্বর এবং কী করতে হবে তা জানে।" },
        { id: "cra_q34", text: "My child shows good judgment in unfamiliar situations.", text_bn: "অপরিচিত পরিস্থিতিতে আমার শিশু সঠিক বিচারবুদ্ধির পরিচয় দেয়।" },
        { id: "cra_q35", text: "My child remembers to charge devices and keep track of important items.", text_bn: "আমার শিশু ডিভাইসে চার্জ দিতে এবং গুরুত্বপূর্ণ জিনিসগুলোর খেয়াল রাখতে মনে রাখে।" }
      ]
    },
    {
      name: "Domain H – Cyberbullying Awareness",
      name_bn: "ডোমেইন জ – সাইবার বুলিং সচেতনতা",
      questions: [
        { id: "cra_q36", text: "My child understands what cyberbullying means.", text_bn: "আমার শিশু সাইবার বুলিং কী তা বোঝে।" },
        { id: "cra_q37", text: "My child knows not to join in if others are being mean online.", text_bn: "আমার শিশু জানে যে অনলাইনে অন্যরা কারও প্রতি খারাপ আচরণ করলে তার সাথে যোগ দেওয়া উচিত নয়।" },
        { id: "cra_q38", text: "My child is likely to report to me if they witness or experience online bullying.", text_bn: "অনলাইনে কোনো বুলিং বা হয়রানি দেখলে বা অভিজ্ঞতার সম্মুখীন হলে আমার শিশু আমাকে জানাবে বলে আমার বিশ্বাস।" },
        { id: "cra_q39", text: "My child treats others with respect in text messages or online games.", text_bn: "টেক্সট মেসেজ বা অনলাইন গেমে আমার শিশু অন্যদের প্রতি সম্মানজনক আচরণ করে।" },
        { id: "cra_q40", text: "My child understands how written words online can hurt others.", text_bn: "আমার শিশু বোঝে যে অনলাইনে লেখা শব্দ বা মন্তব্য কীভাবে অন্যদের কষ্ট দিতে পারে।" }
      ]
    },
    {
      name: "Domain I – Vulnerability & Resilience",
      name_bn: "ডোমেইন ঝ – দুর্বলতা ও মানসিক দৃঢ়তা",
      questions: [
        { id: "cra_q41", text: "My child does not easily become anxious or stressed over social interactions.", text_bn: "সামাজিক মিথস্ক্রিয়ার কারণে আমার শিশু সহজে উদ্বিগ্ন বা মানসিক চাপে ভোগে না।" },
        { id: "cra_q42", text: "My child has a stable sense of self-esteem.", text_bn: "আমার শিশুর আত্মসম্মানবোধ স্থিতিশীল।" },
        { id: "cra_q43", text: "My child is not overly obsessed with appearance or social comparison.", text_bn: "আমার শিশু বাহ্যিক রূপ বা সামাজিক তুলনা নিয়ে অতিরিক্ত আচ্ছন্ন থাকে না।" },
        { id: "cra_q44", text: "My child can handle constructive criticism or minor rejections.", text_bn: "আমার শিশু গঠনমূলক সমালোচনা বা ছোটখাটো প্রত্যাখ্যান সামলাতে পারে।" },
        { id: "cra_q45", text: "My child is not overly influenced by 'likes' or external validation.", text_bn: "'লাইক' বা বাইরের মানুষের প্রশংসার দ্বারা আমার শিশু অতিরিক্ত প্রভাবিত হয় না।" }
      ]
    },
    {
      name: "Domain J – Financial Awareness",
      name_bn: "ডোমেইন ঞ – আর্থিক সচেতনতা",
      questions: [
        { id: "cra_q46", text: "My child understands that apps and in-game purchases cost real money.", text_bn: "আমার শিশু বোঝে যে অ্যাপস এবং গেমের ভেতরের কেনাকাটায় আসল টাকা খরচ হয়।" },
        { id: "cra_q47", text: "My child asks for permission before downloading even free apps.", text_bn: "ফ্রি অ্যাপ ডাউনলোড করার আগেও আমার শিশু অনুমতি নেয়।" },
        { id: "cra_q48", text: "My child understands the value of expensive items like a smartphone.", text_bn: "আমার শিশু স্মার্টফোনের মতো দামি জিনিসের মূল্য বোঝে।" },
        { id: "cra_q49", text: "My child handles their pocket money or allowance responsibly.", text_bn: "আমার শিশু তার হাতখরচ বা পকেট মানি দায়িত্বের সাথে পরিচালনা করে।" },
        { id: "cra_q50", text: "My child is aware of online scams or deceptive ads designed to take money.", text_bn: "অর্থ হাতিয়ে নেওয়ার উদ্দেশ্যে তৈরি অনলাইন স্ক্যাম বা প্রতারণামূলক বিজ্ঞাপন সম্পর্কে আমার শিশু সচেতন।" }
      ]
    },
    {
      name: "Domain K – Overall Readiness",
      name_bn: "ডোমেইন ট – সার্বিক প্রস্তুতি",
      questions: [
        { id: "cra_q51", text: "I feel confident my child is mature enough for a smartphone.", text_bn: "আমি নিশ্চিত বোধ করি যে আমার শিশু স্মার্টফোন ব্যবহারের জন্য যথেষ্ট পরিণত।" },
        { id: "cra_q52", text: "My child has proven they can handle smaller responsibilities successfully.", text_bn: "আমার শিশু প্রমাণ করেছে যে সে ছোট ছোট দায়িত্ব সফলভাবে পালন করতে পারে।" },
        { id: "cra_q53", text: "My child views a smartphone as a tool, not just a toy.", text_bn: "আমার শিশু স্মার্টফোনকে কেবল একটি খেলনা নয়, বরং একটি প্রয়োজনীয় উপকরণ হিসেবে দেখে।" },
        { id: "cra_q54", text: "My child understands that having a smartphone is a privilege, not a right.", text_bn: "আমার শিশু বোঝে যে স্মার্টফোন পাওয়া একটি বিশেষ সুবিধা, কোনো অধিকার নয়।" },
        { id: "cra_q55", text: "I believe my child is ready to handle the distractions a smartphone brings.", text_bn: "আমি বিশ্বাস করি স্মার্টফোন যে বিক্ষিপ্ততা বা মনোযোগ বিঘ্নিত করার মতো পরিস্থিতি তৈরি করে, আমার শিশু তা সামলাতে প্রস্তুত।" }
      ]
    }
  ]
};

const section3Child = {
  title: "Section 3b: Child Self-Assessment (CSA)",
  title_bn: "সেকশন ৩খ: শিশুর নিজস্ব মূল্যায়ন (সিএসএ)",
  description: "To be completed by the child with the parent reading out the questions. Helps gauge the child's own understanding of digital safety and responsibility.",
  desc_bn: "অভিভাবকের সহায়তায় শিশুকে এই অংশটি পূরণ করতে হবে। এটি ডিজিটাল নিরাপত্তা এবং দায়িত্ব সম্পর্কে শিশুর নিজস্ব বোঝাপড়া পরিমাপ করতে সাহায্য করে।",
  subdomains: [
    {
      name: "Domain A – Understanding Purpose",
      name_bn: "ডোমেইন ক – উদ্দেশ্য অনুধাবন",
      questions: [
        { id: "csa_q1", text: "I need a smartphone mainly for schoolwork and staying safe.", text_bn: "মূলত স্কুলের কাজ এবং নিরাপদে থাকার জন্যই আমার একটি স্মার্টফোন প্রয়োজন।" },
        { id: "csa_q2", text: "A smartphone is a tool to help me, not just a toy for playing games.", text_bn: "স্মার্টফোন আমাকে সাহায্য করার একটি উপকরণ, কেবল গেম খেলার খেলনা নয়।" },
        { id: "csa_q3", text: "I understand that having a smartphone is a big responsibility.", text_bn: "আমি বুঝতে পারি যে স্মার্টফোন থাকা একটি বড় দায়িত্ব।" },
        { id: "csa_q4", text: "I know that my parents will check my phone to keep me safe.", text_bn: "আমি জানি যে আমাকে নিরাপদে রাখতে বাবা-মা আমার ফোন চেক করবেন।" }
      ]
    },
    {
      name: "Domain B – Self-Regulation",
      name_bn: "ডোমেইন খ – আত্মনিয়ন্ত্রণ",
      questions: [
        { id: "csa_q5", text: "I can stop playing a game or watching a video when my parents tell me to.", text_bn: "বাবা-মা বললে আমি গেম খেলা বা ভিডিও দেখা বন্ধ করতে পারি।" },
        { id: "csa_q6", text: "I promise to finish my homework and chores before using a phone for fun.", text_bn: "আমি কথা দিচ্ছি যে ফোনে বিনোদনের আগে আমি আমার বাড়ির কাজ এবং অন্যান্য দায়িত্ব শেষ করব।" },
        { id: "csa_q7", text: "I know I should not use a phone during family meals or right before bed.", text_bn: "আমি জানি যে পরিবারের সাথে খাওয়ার সময় বা ঠিক ঘুমানোর আগে ফোন ব্যবহার করা উচিত নয়।" },
        { id: "csa_q8", text: "I can accept it without getting angry if my parents set screen time limits.", text_bn: "বাবা-মা স্ক্রিন টাইম লিমিট নির্ধারণ করে দিলে আমি রাগ না করে তা মেনে নিতে পারি।" }
      ]
    },
    {
      name: "Domain C – Online Safety",
      name_bn: "ডোমেইন গ – অনলাইন নিরাপত্তা",
      questions: [
        { id: "csa_q9", text: "I will never share my real name, address, or school name with strangers online.", text_bn: "আমি অনলাইনে অপরিচিত কারও সাথে আমার আসল নাম, ঠিকানা বা স্কুলের নাম শেয়ার করব না।" },
        { id: "csa_q10", text: "I will not send pictures of myself to people I don't know in real life.", text_bn: "বাস্তব জীবনে চিনি না এমন কাউকে আমি আমার নিজের ছবি পাঠাব না।" },
        { id: "csa_q11", text: "I know that not everyone online is who they say they are.", text_bn: "আমি জানি অনলাইনে সবাই যা দাবি করে তারা আসলে তা নয়।" },
        { id: "csa_q12", text: "If I see something online that scares me or makes me uncomfortable, I will tell an adult immediately.", text_bn: "অনলাইনে এমন কিছু দেখলে যা আমাকে ভয় দেখায় বা অস্বস্তিতে ফেলে, আমি সাথে সাথে বড়দের জানাব।" }
      ]
    },
    {
      name: "Domain D – Cyberbullying & Kindness",
      name_bn: "ডোমেইন ঘ – সাইবার বুলিং ও সদয় আচরণ",
      questions: [
        { id: "csa_q13", text: "I will always be polite and kind when sending messages to others.", text_bn: "অন্যদের মেসেজ পাঠানোর সময় আমি সবসময় ভদ্র ও সদয় থাকব।" },
        { id: "csa_q14", text: "I will never use a phone to tease, bully, or hurt someone's feelings.", text_bn: "আমি কাউকে উত্ত্যক্ত করতে, ভয় দেখাতে বা কারও মনে কষ্ট দিতে কখনও ফোন ব্যবহার করব না।" },
        { id: "csa_q15", text: "If someone is mean to me online, I will not respond and will tell my parents.", text_bn: "অনলাইনে কেউ আমার সাথে খারাপ ব্যবহার করলে আমি তার উত্তর দেব না এবং বাবা-মাকে জানাব।" },
        { id: "csa_q16", text: "I know it is wrong to join in if others are being mean to someone online.", text_bn: "আমি জানি অনলাইনে অন্যরা কারও সাথে খারাপ ব্যবহার করলে তাতে যোগ দেওয়া ঠিক নয়।" }
      ]
    },
    {
      name: "Domain E – Honesty & Trust",
      name_bn: "ডোমেইন ঙ – সততা ও বিশ্বাস",
      questions: [
        { id: "csa_q17", text: "I will tell my parents the truth if I make a mistake or break a rule on the phone.", text_bn: "ফোনে কোনো ভুল করলে বা নিয়ম ভাঙলে আমি বাবা-মাকে সত্যি কথা বলব।" },
        { id: "csa_q18", text: "I will only download apps or games if my parents say it is okay.", text_bn: "বাবা-মা অনুমতি দিলেই কেবল আমি অ্যাপ বা গেম ডাউনলোড করব।" },
        { id: "csa_q19", text: "I will not delete my message history or try to hide things I do on the phone.", text_bn: "আমি আমার মেসেজ হিস্ট্রি মুছব না বা ফোনে কী করছি তা লুকানোর চেষ্টা করব না।" },
        { id: "csa_q20", text: "I understand that breaking the rules means I might lose the privilege of having a phone.", text_bn: "আমি বুঝতে পারি যে নিয়ম ভাঙার মানে হলো ফোন ব্যবহারের সুবিধা বাতিল হয়ে যাওয়া।" }
      ]
    },
    {
      name: "Domain F – Device Care",
      name_bn: "ডোমেইন চ – ডিভাইসের যত্ন",
      questions: [
        { id: "csa_q21", text: "I will be careful not to drop, break, or lose the phone.", text_bn: "আমি খেয়াল রাখব যাতে ফোনটি হাত থেকে পড়ে না যায়, ভেঙে না যায় বা হারিয়ে না যায়।" },
        { id: "csa_q22", text: "I will remember to charge the phone so it is ready when I need it.", text_bn: "আমি মনে করে ফোনে চার্জ দেব যাতে প্রয়োজনের সময় এটি প্রস্তুত থাকে।" },
        { id: "csa_q23", text: "I will keep the phone away from water, food, and extreme heat.", text_bn: "আমি ফোনটিকে পানি, খাবার এবং অতিরিক্ত তাপ থেকে দূরে রাখব।" }
      ]
    },
    {
      name: "Domain G – Privacy Awareness",
      name_bn: "ডোমেইন ছ – গোপনীয়তা সম্পর্কে সচেতনতা",
      questions: [
        { id: "csa_q24", text: "I know I should not share my passwords with anyone except my parents.", text_bn: "আমি জানি যে বাবা-মা ছাড়া আমার পাসওয়ার্ড অন্য কারও সাথে শেয়ার করা উচিত নয়।" },
        { id: "csa_q25", text: "I understand that anything I post online might stay there forever.", text_bn: "আমি বুঝতে পারি যে অনলাইনে পোস্ট করা যেকোনো কিছু চিরকাল সেখানে থেকে যেতে পারে।" },
        { id: "csa_q26", text: "I will ask for permission before taking or sharing photos of other people.", text_bn: "অন্য মানুষের ছবি তোলার বা শেয়ার করার আগে আমি তাদের অনুমতি নেব।" }
      ]
    },
    {
      name: "Domain H – Digital Footprint",
      name_bn: "ডোমেইন জ – ডিজিটাল ফুটপ্রিন্ট (অনলাইন চিহ্ন)",
      questions: [
        { id: "csa_q27", text: "I know that my digital footprint is like a trail of my online activities.", text_bn: "আমি জানি যে আমার ডিজিটাল ফুটপ্রিন্ট হলো আমার অনলাইন কার্যকলাপের চিহ্নের মতো।" },
        { id: "csa_q28", text: "I want to make sure my digital footprint shows good things about me.", text_bn: "আমি নিশ্চিত করতে চাই যে আমার ডিজিটাল ফুটপ্রিন্ট আমার সম্পর্কে ভালো ধারণা দেয়।" },
        { id: "csa_q29", text: "I will think carefully before clicking 'send' or 'post'.", text_bn: "'সেন্ড' বা 'পোস্ট' বাটনে ক্লিক করার আগে আমি সাবধানে চিন্তা করব।" }
      ]
    },
    {
      name: "Domain I – Healthy Habits",
      name_bn: "ডোমেইন ঝ – স্বাস্থ্যকর অভ্যাস",
      questions: [
        { id: "csa_q30", text: "I understand that spending too much time on a screen is bad for my eyes and brain.", text_bn: "আমি বুঝতে পারি যে স্ক্রিনে অতিরিক্ত সময় ব্যয় করা আমার চোখ এবং মস্তিষ্কের জন্য ক্ষতিকর।" },
        { id: "csa_q31", text: "I promise to spend time playing outside, reading, or doing hobbies offline.", text_bn: "আমি কথা দিচ্ছি যে বাইরে খেলাধুলা, বই পড়া বা অফলাইনে শখের কাজ করে সময় কাটাব।" },
        { id: "csa_q32", text: "I will try my best to have a healthy balance between screen time and real life.", text_bn: "আমি স্ক্রিন টাইম এবং বাস্তব জীবনের মধ্যে একটি স্বাস্থ্যকর ভারসাম্য বজায় রাখার সর্বোচ্চ চেষ্টা করব।" },
        { id: "csa_q33", text: "I know it is important to talk to my family face-to-face every day.", text_bn: "আমি জানি প্রতিদিন আমার পরিবারের সাথে সামনাসামনি কথা বলাটা গুরুত্বপূর্ণ।" },
        { id: "csa_q34", text: "I will not let a smartphone get in the way of my sleep.", text_bn: "আমি স্মার্টফোনের কারণে আমার ঘুমের ব্যাঘাত ঘটতে দেব না।" },
        { id: "csa_q35", text: "I am ready to accept guidance from my parents on how to use a phone responsibly.", text_bn: "দায়িত্বের সাথে ফোন ব্যবহারের বিষয়ে আমি আমার বাবা-মায়ের নির্দেশনা মেনে নিতে প্রস্তুত।" }
      ]
    }
  ]
};

const section4 = {
  title: "Section 4: Parent Readiness Assessment (PRA)",
  title_bn: "সেকশন ৪: অভিভাবকের প্রস্তুতি মূল্যায়ন (পিআরএ)",
  description: "Evaluates the parent's readiness to guide, monitor, and set boundaries for the child's smartphone use.",
  desc_bn: "শিশুর স্মার্টফোন ব্যবহারের ক্ষেত্রে নির্দেশনা প্রদান, তদারকি এবং নিয়মকানুন নির্ধারণে অভিভাবকের প্রস্তুতি মূল্যায়ন করে।",
  subdomains: [
    {
      name: "Domain A – Digital Knowledge & Skills",
      name_bn: "ডোমেইন ক – ডিজিটাল জ্ঞান ও দক্ষতা",
      questions: [
        { id: "pra_q1", text: "I know how to set up parental controls on a smartphone.", text_bn: "আমি জানি কীভাবে একটি স্মার্টফোনে প্যারেন্টাল কন্ট্রোল সেট আপ করতে হয়।" },
        { id: "pra_q2", text: "I am familiar with the apps and social media platforms my child wants to use.", text_bn: "আমার শিশু যেসব অ্যাপস এবং সোশ্যাল মিডিয়া প্ল্যাটফর্ম ব্যবহার করতে চায়, আমি সেগুলোর সাথে পরিচিত।" },
        { id: "pra_q3", text: "I understand how location tracking and privacy settings work.", text_bn: "আমি বুঝতে পারি কীভাবে লোকেশন ট্র্যাকিং এবং প্রাইভেসি সেটিংস কাজ করে।" },
        { id: "pra_q4", text: "I stay updated on current digital trends and potential online risks.", text_bn: "আমি বর্তমান ডিজিটাল ট্রেন্ড এবং সম্ভাব্য অনলাইন ঝুঁকি সম্পর্কে আপডেট থাকি।" },
        { id: "pra_q5", text: "I feel confident in my ability to teach my child about digital safety.", text_bn: "ডিজিটাল নিরাপত্তা সম্পর্কে আমার শিশুকে শেখানোর বিষয়ে আমি আত্মবিশ্বাসী।" }
      ]
    },
    {
      name: "Domain B – Time Management & Availability",
      name_bn: "ডোমেইন খ – সময় ব্যবস্থাপনা ও প্রাপ্যতা",
      questions: [
        { id: "pra_q6", text: "I have the time to regularly monitor my child's smartphone activity.", text_bn: "আমার শিশুর স্মার্টফোন কার্যকলাপ নিয়মিত তদারকি করার মতো সময় আমার আছে।" },
        { id: "pra_q7", text: "I am available to discuss online experiences with my child frequently.", text_bn: "আমি প্রায়শই আমার শিশুর অনলাইন অভিজ্ঞতা নিয়ে আলোচনা করার জন্য সময় দিতে পারি।" },
        { id: "pra_q8", text: "I can consistently enforce screen time limits despite a busy schedule.", text_bn: "ব্যস্ততা থাকা সত্ত্বেও আমি নিয়মিতভাবে স্ক্রিন টাইম লিমিট কার্যকর করতে পারি।" },
        { id: "pra_q9", text: "I spend sufficient quality time with my child without screens involved.", text_bn: "আমি কোনো স্ক্রিন বা ডিভাইস ছাড়াই আমার শিশুর সাথে পর্যাপ্ত মানসম্পন্ন সময় কাটাই।" },
        { id: "pra_q10", text: "I am willing to invest the time needed to review apps before downloading.", text_bn: "ডাউনলোড করার আগে অ্যাপগুলো যাচাই-বাছাই করার জন্য প্রয়োজনীয় সময় দিতে আমি ইচ্ছুক।" }
      ]
    },
    {
      name: "Domain C – Communication & Trust",
      name_bn: "ডোমেইন গ – যোগাযোগ ও বিশ্বাস",
      questions: [
        { id: "pra_q11", text: "My child and I have open and honest conversations about technology.", text_bn: "আমার এবং আমার শিশুর মধ্যে প্রযুক্তি নিয়ে খোলামেলা ও সৎ আলোচনা হয়।" },
        { id: "pra_q12", text: "I encourage my child to ask questions without fear of immediate punishment.", text_bn: "আমি আমার শিশুকে তাৎক্ষণিক শাস্তির ভয় ছাড়াই প্রশ্ন করতে উৎসাহিত করি।" },
        { id: "pra_q13", text: "I listen to my child's perspective when setting digital rules.", text_bn: "ডিজিটাল নিয়মকানুন নির্ধারণের সময় আমি আমার শিশুর দৃষ্টিভঙ্গি শুনি।" },
        { id: "pra_q14", text: "If my child makes a mistake online, I focus on teaching rather than reacting with anger.", text_bn: "আমার শিশু অনলাইনে কোনো ভুল করলে, আমি রেগে যাওয়ার পরিবর্তে তাকে শেখানোর দিকে মনোযোগ দিই।" },
        { id: "pra_q15", text: "My child trusts me enough to tell me if something bad happens online.", text_bn: "অনলাইনে কোনো খারাপ কিছু ঘটলে আমাকে জানানোর মতো যথেষ্ট বিশ্বাস আমার শিশুর আমার প্রতি আছে।" }
      ]
    },
    {
      name: "Domain D – Boundary Setting & Consistency",
      name_bn: "ডোমেইন ঘ – নিয়ম নির্ধারণ ও ধারাবাহিকতা",
      questions: [
        { id: "pra_q16", text: "I am prepared to establish clear, written rules for smartphone use.", text_bn: "আমি স্মার্টফোন ব্যবহারের জন্য সুস্পষ্ট এবং লিখিত নিয়ম তৈরি করতে প্রস্তুত।" },
        { id: "pra_q17", text: "I will consistently enforce consequences if the rules are broken.", text_bn: "নিয়ম ভাঙলে আমি ধারাবাহিকভাবে পরিণতি বা শাস্তির ব্যবস্থা কার্যকর করব।" },
        { id: "pra_q18", text: "I can withstand my child's complaints when enforcing screen time limits.", text_bn: "স্ক্রিন টাইম লিমিট কার্যকর করার সময় আমি আমার শিশুর অভিযোগ বা জেদ সহ্য করতে পারি।" },
        { id: "pra_q19", text: "My co-parent/partner and I are united in our approach to digital rules.", text_bn: "ডিজিটাল নিয়মকানুনের ক্ষেত্রে আমি এবং আমার সঙ্গী (স্বামী/স্ত্রী) একমত।" },
        { id: "pra_q20", text: "I understand that giving a smartphone is not a one-time event, but an ongoing process of guidance.", text_bn: "আমি বুঝতে পারি যে স্মার্টফোন দেওয়া কেবল একটি এককালীন ঘটনা নয়, বরং এটি একটি চলমান নির্দেশনার প্রক্রিয়া।" }
      ]
    },
    {
      name: "Domain E – Role Modeling (Parent's Digital Habits)",
      name_bn: "ডোমেইন ঙ – আদর্শ স্থাপন (অভিভাবকের ডিজিটাল অভ্যাস)",
      questions: [
        { id: "pra_q21", text: "I model healthy smartphone habits for my child.", text_bn: "আমি আমার শিশুর সামনে স্বাস্থ্যকর স্মার্টফোন ব্যবহারের আদর্শ স্থাপন করি।" },
        { id: "pra_q22", text: "I put my phone away during family meals and conversations.", text_bn: "পরিবারের সাথে খাওয়া এবং কথা বলার সময় আমি আমার ফোন দূরে রাখি।" },
        { id: "pra_q23", text: "I do not use my phone while driving.", text_bn: "গাড়ি চালানোর সময় আমি ফোন ব্যবহার করি না।" },
        { id: "pra_q24", text: "I limit my own screen time before bed.", text_bn: "ঘুমানোর আগে আমি নিজের স্ক্রিন টাইমও সীমিত রাখি।" },
        { id: "pra_q25", text: "I ask before posting pictures of my child online.", text_bn: "আমার শিশুর ছবি অনলাইনে পোস্ট করার আগে আমি তার অনুমতি নিই।" }
      ]
    },
    {
      name: "Domain F – Financial Preparedness",
      name_bn: "ডোমেইন চ – আর্থিক প্রস্তুতি",
      questions: [
        { id: "pra_q26", text: "I am prepared for the ongoing costs of a smartphone plan.", text_bn: "আমি স্মার্টফোন ব্যবহারের চলমান খরচের জন্য প্রস্তুত।" },
        { id: "pra_q27", text: "I have discussed who pays for lost, broken, or upgraded phones.", text_bn: "ফোন হারিয়ে গেলে, ভেঙে গেলে বা নতুন ফোন কিনলে কে টাকা দেবে সে বিষয়ে আমি আলোচনা করেছি।" },
        { id: "pra_q28", text: "I know how to restrict unauthorized in-app purchases.", text_bn: "আমি জানি কীভাবে অননুমোদিত ইন-অ্যাপ কেনাকাটা সীমিত করতে হয়।" },
        { id: "pra_q29", text: "I am willing to invest in protective gear (case, screen protector).", text_bn: "আমি সুরক্ষামূলক সরঞ্জাম (কভার, স্ক্রিন প্রটেক্টর) কিনতে ইচ্ছুক।" },
        { id: "pra_q30", text: "I understand the potential costs of replacing a damaged device.", text_bn: "আমি একটি ক্ষতিগ্রস্ত ডিভাইস মেরামতের সম্ভাব্য খরচ সম্পর্কে অবগত আছি।" }
      ]
    },
    {
      name: "Domain G – Managing Emotional Impact",
      name_bn: "ডোমেইন ছ – আবেগীয় প্রভাব পরিচালনা",
      questions: [
        { id: "pra_q31", text: "I am ready to help my child navigate online drama or exclusion.", text_bn: "অনলাইনে কোনো দ্বন্দ্ব বা বঞ্চনার শিকার হলে আমার শিশুকে সাহায্য করতে আমি প্রস্তুত।" },
        { id: "pra_q32", text: "I can recognize signs of digital addiction or unhealthy attachment.", text_bn: "আমি ডিজিটাল আসক্তি বা অস্বাস্থ্যকর আসক্তির লক্ষণগুলো চিনতে পারি।" },
        { id: "pra_q33", text: "I am prepared to intervene if my child's mental health is negatively affected.", text_bn: "আমার শিশুর মানসিক স্বাস্থ্য নেতিবাচকভাবে প্রভাবিত হলে আমি হস্তক্ষেপ করতে প্রস্তুত।" },
        { id: "pra_q34", text: "I understand the connection between screen time and sleep quality.", text_bn: "আমি স্ক্রিন টাইম এবং ঘুমের গুণমানের মধ্যে সম্পর্ক বুঝতে পারি।" },
        { id: "pra_q35", text: "I will not hesitate to take the phone away temporarily if necessary for my child's well-being.", text_bn: "আমার শিশুর মঙ্গলের জন্য প্রয়োজনে সাময়িকভাবে ফোন কেড়ে নিতে আমি দ্বিধা করব না।" }
      ]
    },
    {
      name: "Domain H – Privacy & Security Management",
      name_bn: "ডোমেইন জ – গোপনীয়তা ও নিরাপত্তা ব্যবস্থাপনা",
      questions: [
        { id: "pra_q36", text: "I will regularly check my child's privacy settings on apps and social media.", text_bn: "আমি নিয়মিত আমার শিশুর অ্যাপস এবং সোশ্যাল মিডিয়ার প্রাইভেসি সেটিংস চেক করব।" },
        { id: "pra_q37", text: "I will require my child to share their passwords with me initially.", text_bn: "প্রাথমিকভাবে আমি আমার শিশুকে আমার সাথে তার পাসওয়ার্ড শেয়ার করতে বলব।" },
        { id: "pra_q38", text: "I understand the risks of sharing location data online.", text_bn: "আমি অনলাইনে লোকেশন ডেটা শেয়ার করার ঝুঁকি বুঝতে পারি।" },
        { id: "pra_q39", text: "I will educate my child about phishing, scams, and malicious links.", text_bn: "আমি আমার শিশুকে ফিশিং, স্ক্যাম এবং ক্ষতিকারক লিংক সম্পর্কে শিক্ষিত করব।" },
        { id: "pra_q40", text: "I will monitor the types of photos and videos my child shares.", text_bn: "আমার শিশু কী ধরনের ছবি এবং ভিডিও শেয়ার করে তা আমি তদারকি করব।" }
      ]
    },
    {
      name: "Domain I – School & Social Alignment",
      name_bn: "ডোমেইন ঝ – স্কুল ও সামাজিক সমন্বয়",
      questions: [
        { id: "pra_q41", text: "I know the school's policy on smartphone use.", text_bn: "আমি স্মার্টফোন ব্যবহার সম্পর্কিত স্কুলের নিয়মকানুন জানি।" },
        { id: "pra_q42", text: "I will ensure my child's phone use does not disrupt their education.", text_bn: "আমি নিশ্চিত করব যে আমার শিশুর ফোন ব্যবহার তার শিক্ষায় বাধা সৃষ্টি করবে না।" },
        { id: "pra_q43", text: "I will communicate with other parents about our digital rules when my child visits them.", text_bn: "আমার শিশু অন্য কারও বাসায় বেড়াতে গেলে আমি তাদের অভিভাবকদের সাথে আমাদের ডিজিটাল নিয়মকানুন নিয়ে যোগাযোগ করব।" },
        { id: "pra_q44", text: "I am prepared to enforce rules even if 'all their friends' are allowed to do something.", text_bn: "আমি নিয়মকানুন প্রয়োগ করতে প্রস্তুত, এমনকি যদি 'তার সব বন্ধুদের' কিছু করার অনুমতি দেওয়া হয় তবুও।" },
        { id: "pra_q45", text: "I believe my child's social life should involve a mix of online and offline activities.", text_bn: "আমি বিশ্বাস করি আমার শিশুর সামাজিক জীবনে অনলাইন এবং অফলাইন কার্যকলাপের মিশ্রণ থাকা উচিত।" }
      ]
    }
  ]
};

const section5 = {
  title: "Section 5: Environmental & Contextual Risk Assessment (ECRA)",
  title_bn: "সেকশন ৫: পারিপার্শ্বিক ও প্রাসঙ্গিক ঝুঁকি মূল্যায়ন (ইসিআরএ)",
  description: "Examines external factors like peer groups, school policies, and community environment that may influence smartphone usage.",
  desc_bn: "সহপাঠীদের প্রভাব, স্কুলের নিয়মকানুন এবং পারিপার্শ্বিক পরিবেশের মতো বাহ্যিক কারণগুলো পরীক্ষা করে যা স্মার্টফোন ব্যবহারকে প্রভাবিত করতে পারে।",
  subdomains: [
    {
      name: "Domain A – Peer Environment & Social Pressure",
      name_bn: "ডোমেইন ক – সহপাঠী পরিবেশ ও সামাজিক চাপ",
      questions: [
        { id: "ecra_q1", text: "Most of my child's close friends already own smartphones.", text_bn: "আমার শিশুর বেশিরভাগ ঘনিষ্ঠ বন্ধুর ইতিমধ্যেই স্মার্টফোন আছে।" },
        { id: "ecra_q2", text: "My child's friends generally exhibit responsible digital behavior.", text_bn: "আমার শিশুর বন্ধুরা সাধারণত দায়িত্বশীল ডিজিটাল আচরণ প্রদর্শন করে।" },
        { id: "ecra_q3", text: "There is significant peer pressure in my child's social circle to have specific apps or games.", text_bn: "আমার শিশুর বন্ধুমহলে নির্দিষ্ট কিছু অ্যাপ বা গেম থাকার জন্য উল্লেখযোগ্য চাপ রয়েছে।" },
        { id: "ecra_q4", text: "My child's friends respect rules set by parents regarding technology.", text_bn: "আমার শিশুর বন্ধুরা প্রযুক্তি সম্পর্কিত অভিভাবকদের নির্ধারণ করা নিয়মগুলোকে সম্মান করে।" },
        { id: "ecra_q5", text: "I know the parents of my child's friends and their stance on smartphone use.", text_bn: "আমি আমার শিশুর বন্ধুদের অভিভাবকদের চিনি এবং স্মার্টফোন ব্যবহারের বিষয়ে তাদের অবস্থান জানি।" }
      ]
    },
    {
      name: "Domain B – School Policy & Environment",
      name_bn: "ডোমেইন খ – স্কুলের নিয়মকানুন ও পরিবেশ",
      questions: [
        { id: "ecra_q6", text: "My child's school has clear, enforced rules regarding smartphone use during school hours.", text_bn: "আমার শিশুর স্কুলে স্কুল চলাকালীন স্মার্টফোন ব্যবহারের বিষয়ে সুস্পষ্ট এবং কার্যকর নিয়ম রয়েছে।" },
        { id: "ecra_q7", text: "The school effectively addresses issues of cyberbullying among students.", text_bn: "স্কুল কর্তৃপক্ষ শিক্ষার্থীদের মধ্যে সাইবার বুলিং সংক্রান্ত সমস্যাগুলো কার্যকরভাবে সমাধান করে।" },
        { id: "ecra_q8", text: "Teachers actively incorporate safe digital practices into the curriculum.", text_bn: "শিক্ষকরা সক্রিয়ভাবে পাঠ্যক্রমে নিরাপদ ডিজিটাল অনুশীলন অন্তর্ভুক্ত করেন।" },
        { id: "ecra_q9", text: "The school environment is generally safe from theft or damage to personal devices.", text_bn: "স্কুলের পরিবেশ সাধারণত ব্যক্তিগত ডিভাইস চুরি বা ক্ষতির হাত থেকে নিরাপদ।" },
        { id: "ecra_q10", text: "There are secure places (like lockers) for my child to store a phone during the day.", text_bn: "স্কুলে সারাদিন ফোন নিরাপদে রাখার জন্য জায়গা (যেমন লকার) রয়েছে।" }
      ]
    },
    {
      name: "Domain C – Community & Neighborhood Safety",
      name_bn: "ডোমেইন গ – সম্প্রদায় ও আশেপাশের নিরাপত্তা",
      questions: [
        { id: "ecra_q11", text: "Our neighborhood is generally safe for a child to carry a visible, valuable device.", text_bn: "দৃশ্যমান ও মূল্যবান ডিভাইস বহন করার জন্য আমাদের আশেপাশের এলাকাটি সাধারণত নিরাপদ।" },
        { id: "ecra_q12", text: "My child commutes through areas where having a phone increases their risk of theft.", text_bn: "আমার শিশু এমন এলাকার মধ্য দিয়ে যাতায়াত করে যেখানে ফোন সাথে থাকলে তার চুরির ঝুঁকি বেড়ে যায়।" },
        { id: "ecra_q13", text: "Having a smartphone would significantly improve my child's safety during their commute.", text_bn: "একটি স্মার্টফোন সাথে থাকলে যাতায়াতের সময় আমার শিশুর নিরাপত্তা উল্লেখযোগ্যভাবে উন্নত হবে।" },
        { id: "ecra_q14", text: "There are reliable adults nearby if my child faces trouble while commuting.", text_bn: "যাতায়াতের সময় আমার শিশু সমস্যায় পড়লে আশেপাশে নির্ভরযোগ্য প্রাপ্তবয়স্ক মানুষ পাওয়া যায়।" },
        { id: "ecra_q15", text: "My child knows safe routes and safe places to go in our community.", text_bn: "আমার শিশু আমাদের এলাকার নিরাপদ রাস্তা এবং নিরাপদ স্থানগুলো সম্পর্কে জানে।" }
      ]
    },
    {
      name: "Domain D – Family & Home Context",
      name_bn: "ডোমেইন ঘ – পরিবার ও বাড়ির পরিস্থিতি",
      questions: [
        { id: "ecra_q16", text: "Our home has a reliable internet connection with filtering/parental controls.", text_bn: "আমাদের বাড়িতে ফিল্টারিং/প্যারেন্টাল কন্ট্রোল যুক্ত নির্ভরযোগ্য ইন্টারনেট সংযোগ রয়েছে।" },
        { id: "ecra_q17", text: "There are quiet, screen-free areas in our home.", text_bn: "আমাদের বাড়িতে এমন শান্ত জায়গা রয়েছে যেখানে কোনো স্ক্রিন বা ডিভাইস নেই।" },
        { id: "ecra_q18", text: "Older siblings or family members model appropriate device use.", text_bn: "বড় ভাইবোন বা পরিবারের অন্যান্য সদস্যরা সঠিক ডিভাইস ব্যবহারের আদর্শ স্থাপন করে।" },
        { id: "ecra_q19", text: "The physical layout of our home allows for easy supervision of device use.", text_bn: "আমাদের বাড়ির কাঠামোগত ব্যবস্থা এমন যে ডিভাইস ব্যবহারের তদারকি করা সহজ।" },
        { id: "ecra_q20", text: "We have established 'tech-free' times (like meals or before bed) in our household.", text_bn: "আমাদের পরিবারে আমরা 'প্রযুক্তি-মুক্ত' সময় (যেমন খাওয়ার সময় বা ঘুমানোর আগে) নির্ধারণ করেছি।" }
      ]
    }
  ]
};


export const surveySections = [
  section2,
  sectionExtra,
  section3Parent,
  section3Child,
  section4,
  section5
];
