export interface Topic {
  id: string
  name: string
}

export interface ExamModule {
  id: string
  name: string
  topics: Topic[]
}

export interface CardColors {
  /** Card background (soft pastel) */
  bg: string
  /** Accent for progress bars and checkboxes */
  accent: string
  /** Completed module background (slightly deeper pastel) */
  doneBg: string
  /** Subject code text color */
  codeColor: string
}

export interface Exam {
  id: string
  code: string
  subject: string
  date: string
  colors: CardColors
  modules: ExamModule[]
}

export const exams: Exam[] = [
  {
    id: 'BCSE205L',
    code: 'BCSE205L',
    subject: 'Computer Architecture and Organization',
    date: '2026-04-22T09:30:00',
    colors: {
      bg: '#ece7f8',
      accent: '#9f7aea',
      doneBg: '#d8cff4',
      codeColor: '#5b21b6',
    },
    modules: [
      {
        id: 'BCSE205L-M1',
        name: 'Module 1 — Digital Logic & Number Systems',
        topics: [
          { id: 'BCSE205L-M1-T1', name: 'Number Systems and Conversions' },
          { id: 'BCSE205L-M1-T2', name: 'Boolean Algebra and Logic Gates' },
          { id: 'BCSE205L-M1-T3', name: 'Combinational Circuit Design' },
          { id: 'BCSE205L-M1-T4', name: 'Sequential Circuits and Flip-Flops' },
          { id: 'BCSE205L-M1-T5', name: 'Registers and Counters' },
        ],
      },
      {
        id: 'BCSE205L-M2',
        name: 'Module 2 — CPU Architecture & Instruction Set',
        topics: [
          { id: 'BCSE205L-M2-T1', name: 'CPU Components and Data Path' },
          { id: 'BCSE205L-M2-T2', name: 'Instruction Set Architecture (ISA)' },
          { id: 'BCSE205L-M2-T3', name: 'Addressing Modes' },
          { id: 'BCSE205L-M2-T4', name: 'Instruction Execution Cycle' },
          { id: 'BCSE205L-M2-T5', name: 'Pipelining and Hazards' },
          { id: 'BCSE205L-M2-T6', name: 'Superscalar Architectures' },
        ],
      },
      {
        id: 'BCSE205L-M3',
        name: 'Module 3 — Memory & I/O Systems',
        topics: [
          { id: 'BCSE205L-M3-T1', name: 'Memory Hierarchy Overview' },
          { id: 'BCSE205L-M3-T2', name: 'Cache Memory and Mapping Techniques' },
          { id: 'BCSE205L-M3-T3', name: 'Virtual Memory and Paging' },
          { id: 'BCSE205L-M3-T4', name: 'I/O Organization and Techniques' },
          { id: 'BCSE205L-M3-T5', name: 'DMA and Interrupt Handling' },
        ],
      },
    ],
  },
  {
    id: 'BMAT202L',
    code: 'BMAT202L',
    subject: 'Probability and Statistics',
    date: '2026-04-26T09:30:00',
    colors: {
      bg: '#e4eef9',
      accent: '#3b82f6',
      doneBg: '#c6daf5',
      codeColor: '#1d4ed8',
    },
    modules: [
      {
        id: 'BMAT202L-M1',
        name: 'Module 1 — Probability Theory',
        topics: [
          { id: 'BMAT202L-M1-T1', name: 'Sample Space, Events & Axioms' },
          { id: 'BMAT202L-M1-T2', name: 'Conditional Probability & Independence' },
          { id: 'BMAT202L-M1-T3', name: "Bayes' Theorem" },
          { id: 'BMAT202L-M1-T4', name: 'Random Variables (Discrete & Continuous)' },
          { id: 'BMAT202L-M1-T5', name: 'Probability Distributions (Binomial, Poisson)' },
        ],
      },
      {
        id: 'BMAT202L-M2',
        name: 'Module 2 — Continuous Distributions & Expectation',
        topics: [
          { id: 'BMAT202L-M2-T1', name: 'Normal Distribution and Standard Normal' },
          { id: 'BMAT202L-M2-T2', name: 'Exponential and Gamma Distributions' },
          { id: 'BMAT202L-M2-T3', name: 'Mathematical Expectation and Variance' },
          { id: 'BMAT202L-M2-T4', name: 'Moment Generating Functions' },
          { id: 'BMAT202L-M2-T5', name: 'Chebyshev Inequality & LLN' },
          { id: 'BMAT202L-M2-T6', name: 'Central Limit Theorem' },
        ],
      },
      {
        id: 'BMAT202L-M3',
        name: 'Module 3 — Statistical Inference',
        topics: [
          { id: 'BMAT202L-M3-T1', name: 'Sampling Distributions (t, χ², F)' },
          { id: 'BMAT202L-M3-T2', name: 'Point Estimation and Properties' },
          { id: 'BMAT202L-M3-T3', name: 'Interval Estimation & Confidence Intervals' },
          { id: 'BMAT202L-M3-T4', name: 'Hypothesis Testing (One & Two Sample)' },
          { id: 'BMAT202L-M3-T5', name: 'Correlation and Regression Analysis' },
        ],
      },
    ],
  },
  {
    id: 'BMAT102L',
    code: 'BMAT102L',
    subject: 'Differential Equations and Transforms',
    date: '2026-04-28T09:30:00',
    colors: {
      bg: '#e5f5ed',
      accent: '#10b981',
      doneBg: '#c3e9d6',
      codeColor: '#065f46',
    },
    modules: [
      {
        id: 'BMAT102L-M1',
        name: 'Module 1 — Ordinary Differential Equations',
        topics: [
          { id: 'BMAT102L-M1-T1', name: 'First Order ODEs: Separable & Exact' },
          { id: 'BMAT102L-M1-T2', name: 'Linear First Order ODEs' },
          { id: 'BMAT102L-M1-T3', name: 'Higher Order Linear ODEs' },
          { id: 'BMAT102L-M1-T4', name: 'Method of Undetermined Coefficients' },
          { id: 'BMAT102L-M1-T5', name: 'Variation of Parameters' },
          { id: 'BMAT102L-M1-T6', name: 'Cauchy-Euler Equations' },
        ],
      },
      {
        id: 'BMAT102L-M2',
        name: 'Module 2 — Laplace Transforms',
        topics: [
          { id: 'BMAT102L-M2-T1', name: 'Definition and Properties' },
          { id: 'BMAT102L-M2-T2', name: 'Inverse Laplace Transform' },
          { id: 'BMAT102L-M2-T3', name: 'Convolution Theorem' },
          { id: 'BMAT102L-M2-T4', name: 'Unit Step and Dirac Delta Functions' },
          { id: 'BMAT102L-M2-T5', name: 'Solving ODEs via Laplace' },
        ],
      },
      {
        id: 'BMAT102L-M3',
        name: 'Module 3 — Fourier Series & Transforms',
        topics: [
          { id: 'BMAT102L-M3-T1', name: 'Fourier Series: Periodic Functions' },
          { id: 'BMAT102L-M3-T2', name: 'Half-Range Sine and Cosine Series' },
          { id: 'BMAT102L-M3-T3', name: 'Fourier Transform and Inverse' },
          { id: 'BMAT102L-M3-T4', name: "Parseval's Theorem" },
          { id: 'BMAT102L-M3-T5', name: 'Z-Transforms and Applications' },
        ],
      },
    ],
  },
  {
    id: 'BSSC101N',
    code: 'BSSC101N',
    subject: 'Essence of Traditional Knowledge',
    date: '2026-04-25T10:00:00',
    colors: {
      bg: '#fdf0e4',
      accent: '#f59e0b',
      doneBg: '#f9dfc7',
      codeColor: '#b45309',
    },
    modules: [
      {
        id: 'BSSC101N-M1',
        name: 'Module 1 — Foundations of Traditional Knowledge',
        topics: [
          { id: 'BSSC101N-M1-T1', name: 'Introduction to Indian Knowledge Systems' },
          { id: 'BSSC101N-M1-T2', name: 'Vedas and Upanishads Overview' },
          { id: 'BSSC101N-M1-T3', name: 'Contributions of Ancient Indian Scientists' },
          { id: 'BSSC101N-M1-T4', name: 'Mathematics in Ancient India' },
        ],
      },
      {
        id: 'BSSC101N-M2',
        name: 'Module 2 — Traditional Sciences',
        topics: [
          { id: 'BSSC101N-M2-T1', name: 'Ayurveda: Principles and Practices' },
          { id: 'BSSC101N-M2-T2', name: 'Yoga and Its Philosophical Foundations' },
          { id: 'BSSC101N-M2-T3', name: 'Traditional Water Management Systems' },
          { id: 'BSSC101N-M2-T4', name: 'Ancient Architecture and Vastu Shastra' },
          { id: 'BSSC101N-M2-T5', name: 'Metallurgy and Material Science in Antiquity' },
        ],
      },
      {
        id: 'BSSC101N-M3',
        name: 'Module 3 — IP & Preservation',
        topics: [
          { id: 'BSSC101N-M3-T1', name: 'Biodiversity and Ethnobotany' },
          { id: 'BSSC101N-M3-T2', name: 'Intellectual Property Rights for TK' },
          { id: 'BSSC101N-M3-T3', name: 'Biopiracy and Legal Protections' },
          { id: 'BSSC101N-M3-T4', name: 'Digital Documentation of TK' },
          { id: 'BSSC101N-M3-T5', name: 'Traditional Knowledge in Modern Applications' },
          { id: 'BSSC101N-M3-T6', name: 'UNESCO & International Frameworks' },
        ],
      },
    ],
  },
  {
    id: 'BSTS102P',
    code: 'BSTS102P',
    subject: 'Quantitative Skills Practice II',
    date: '2026-05-02T11:00:00',
    colors: {
      bg: '#fce8f1',
      accent: '#ec4899',
      doneBg: '#f8cee5',
      codeColor: '#9d174d',
    },
    modules: [
      {
        id: 'BSTS102P-M1',
        name: 'Module 1 — Numerical Aptitude',
        topics: [
          { id: 'BSTS102P-M1-T1', name: 'Percentages and Profit/Loss' },
          { id: 'BSTS102P-M1-T2', name: 'Ratio, Proportion and Variation' },
          { id: 'BSTS102P-M1-T3', name: 'Time, Speed and Distance' },
          { id: 'BSTS102P-M1-T4', name: 'Time and Work Problems' },
          { id: 'BSTS102P-M1-T5', name: 'Simple and Compound Interest' },
        ],
      },
      {
        id: 'BSTS102P-M2',
        name: 'Module 2 — Data Interpretation',
        topics: [
          { id: 'BSTS102P-M2-T1', name: 'Bar Graphs and Pie Charts' },
          { id: 'BSTS102P-M2-T2', name: 'Line Graphs and Tables' },
          { id: 'BSTS102P-M2-T3', name: 'Mixed Data Sets' },
          { id: 'BSTS102P-M2-T4', name: 'Caselets and Data Sufficiency' },
        ],
      },
      {
        id: 'BSTS102P-M3',
        name: 'Module 3 — Logical & Verbal Reasoning',
        topics: [
          { id: 'BSTS102P-M3-T1', name: 'Syllogisms and Logical Deductions' },
          { id: 'BSTS102P-M3-T2', name: 'Blood Relations and Direction Sense' },
          { id: 'BSTS102P-M3-T3', name: 'Number Series and Coding-Decoding' },
          { id: 'BSTS102P-M3-T4', name: 'Verbal Analogy and Para Jumbles' },
          { id: 'BSTS102P-M3-T5', name: 'Critical Reasoning and Arguments' },
          { id: 'BSTS102P-M3-T6', name: 'Reading Comprehension Strategies' },
        ],
      },
    ],
  },
  {
    id: 'BCSE304L',
    code: 'BCSE304L',
    subject: 'Theory of Computation',
    date: '2026-05-05T09:30:00',
    colors: {
      bg: '#e7ebf8',
      accent: '#6366f1',
      doneBg: '#cad2f2',
      codeColor: '#3730a3',
    },
    modules: [
      {
        id: 'BCSE304L-M1',
        name: 'Module 1 — Automata Theory',
        topics: [
          { id: 'BCSE304L-M1-T1', name: 'Finite Automata (DFA & NFA)' },
          { id: 'BCSE304L-M1-T2', name: 'NFA to DFA Conversion' },
          { id: 'BCSE304L-M1-T3', name: 'Regular Expressions' },
          { id: 'BCSE304L-M1-T4', name: 'Equivalence: FA and Regular Expressions' },
          { id: 'BCSE304L-M1-T5', name: 'Minimization of DFA' },
          { id: 'BCSE304L-M1-T6', name: 'Pumping Lemma for Regular Languages' },
        ],
      },
      {
        id: 'BCSE304L-M2',
        name: 'Module 2 — Context-Free Languages',
        topics: [
          { id: 'BCSE304L-M2-T1', name: 'Context-Free Grammars (CFG)' },
          { id: 'BCSE304L-M2-T2', name: 'Pushdown Automata (PDA)' },
          { id: 'BCSE304L-M2-T3', name: 'Equivalence of CFG and PDA' },
          { id: 'BCSE304L-M2-T4', name: 'Normal Forms: CNF and GNF' },
          { id: 'BCSE304L-M2-T5', name: 'Pumping Lemma for CFLs' },
        ],
      },
      {
        id: 'BCSE304L-M3',
        name: 'Module 3 — Turing Machines & Decidability',
        topics: [
          { id: 'BCSE304L-M3-T1', name: 'Turing Machine Definition and Examples' },
          { id: 'BCSE304L-M3-T2', name: 'Variants of Turing Machines' },
          { id: 'BCSE304L-M3-T3', name: 'Decidable and Undecidable Problems' },
          { id: 'BCSE304L-M3-T4', name: "Halting Problem & Rice's Theorem" },
          { id: 'BCSE304L-M3-T5', name: 'Complexity Classes: P, NP, NP-Complete' },
        ],
      },
    ],
  },
  {
    id: 'BCSE204L',
    code: 'BCSE204L',
    subject: 'Design and Analysis of Algorithms',
    date: '2026-05-07T09:30:00',
    colors: {
      bg: '#e2f5fb',
      accent: '#0ea5e9',
      doneBg: '#bce8f6',
      codeColor: '#0369a1',
    },
    modules: [
      {
        id: 'BCSE204L-M1',
        name: 'Module 1 — Algorithm Design Paradigms',
        topics: [
          { id: 'BCSE204L-M1-T1', name: 'Asymptotic Notations (O, Ω, Θ)' },
          { id: 'BCSE204L-M1-T2', name: 'Divide and Conquer (Merge Sort, Quick Sort)' },
          { id: 'BCSE204L-M1-T3', name: 'Recurrence Relations & Master Theorem' },
          { id: 'BCSE204L-M1-T4', name: 'Greedy Algorithms (Huffman, Kruskal, Prim)' },
          { id: 'BCSE204L-M1-T5', name: 'Activity Selection and Fractional Knapsack' },
        ],
      },
      {
        id: 'BCSE204L-M2',
        name: 'Module 2 — Dynamic Programming & Graphs',
        topics: [
          { id: 'BCSE204L-M2-T1', name: 'Dynamic Programming Fundamentals' },
          { id: 'BCSE204L-M2-T2', name: 'LCS, LIS, Matrix Chain Multiplication' },
          { id: 'BCSE204L-M2-T3', name: '0/1 Knapsack and Subset Sum' },
          { id: 'BCSE204L-M2-T4', name: 'Graph Traversals: BFS and DFS' },
          { id: 'BCSE204L-M2-T5', name: 'Shortest Path: Dijkstra and Bellman-Ford' },
          { id: 'BCSE204L-M2-T6', name: 'All-Pairs Shortest Path: Floyd-Warshall' },
        ],
      },
      {
        id: 'BCSE204L-M3',
        name: 'Module 3 — Advanced Topics',
        topics: [
          { id: 'BCSE204L-M3-T1', name: 'Backtracking: N-Queens, Subset Generation' },
          { id: 'BCSE204L-M3-T2', name: 'Branch and Bound' },
          { id: 'BCSE204L-M3-T3', name: 'String Matching: KMP and Rabin-Karp' },
          { id: 'BCSE204L-M3-T4', name: 'NP-Completeness Reductions' },
          { id: 'BCSE204L-M3-T5', name: 'Approximation Algorithms' },
        ],
      },
    ],
  },
  {
    id: 'BCLE212L',
    code: 'BCLE212L',
    subject: 'Natural Disaster Mitigation and Management',
    date: '2026-05-09T09:30:00',
    colors: {
      bg: '#fdf7e2',
      accent: '#d97706',
      doneBg: '#f9edbb',
      codeColor: '#92400e',
    },
    modules: [
      {
        id: 'BCLE212L-M1',
        name: 'Module 1 — Earthquake and Volcanic Hazards',
        topics: [
          { id: 'BCLE212L-M1-T1', name: 'Plate Tectonics and Seismicity' },
          { id: 'BCLE212L-M1-T2', name: 'Earthquake Measurement Scales' },
          { id: 'BCLE212L-M1-T3', name: 'Seismic Hazard Assessment' },
          { id: 'BCLE212L-M1-T4', name: 'Volcanic Eruptions and Risk Zones' },
          { id: 'BCLE212L-M1-T5', name: 'Tsunami Generation and Warning Systems' },
        ],
      },
      {
        id: 'BCLE212L-M2',
        name: 'Module 2 — Hydro-Meteorological Disasters',
        topics: [
          { id: 'BCLE212L-M2-T1', name: 'Tropical Cyclones and Storm Surges' },
          { id: 'BCLE212L-M2-T2', name: 'Flood Types and Flood Forecasting' },
          { id: 'BCLE212L-M2-T3', name: 'Droughts: Classification and Indicators' },
          { id: 'BCLE212L-M2-T4', name: 'Landslides and Mass Movements' },
          { id: 'BCLE212L-M2-T5', name: 'Climate Change and Disaster Linkages' },
          { id: 'BCLE212L-M2-T6', name: 'Early Warning Systems' },
        ],
      },
      {
        id: 'BCLE212L-M3',
        name: 'Module 3 — Disaster Risk Reduction',
        topics: [
          { id: 'BCLE212L-M3-T1', name: 'Sendai Framework and International Policies' },
          { id: 'BCLE212L-M3-T2', name: 'National Disaster Management Act (India)' },
          { id: 'BCLE212L-M3-T3', name: 'Disaster Risk Assessment and Mapping' },
          { id: 'BCLE212L-M3-T4', name: 'Emergency Response and Relief Operations' },
          { id: 'BCLE212L-M3-T5', name: 'Community-Based Disaster Risk Reduction' },
        ],
      },
    ],
  },
]
