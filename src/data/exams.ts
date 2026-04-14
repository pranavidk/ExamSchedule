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
    id: 'BCSE204P',
    code: 'BCSE204P',
    subject: 'DAA Lab',
    date: '2026-04-16T09:40:00',
    colors: {
      bg: '#e0f7f4',
      accent: '#14b8a6',
      doneBg: '#b2ede8',
      codeColor: '#0d6e66',
    },
    modules: [
      {
        id: 'BCSE204P-M1',
        name: 'Module 1 — Greedy & Divide and Conquer',
        topics: [
          { id: 'BCSE204P-M1-T1', name: 'Fractional Knapsack (Greedy)' },
          { id: 'BCSE204P-M1-T2', name: 'Maximum Subarray — Divide & Conquer' },
          { id: 'BCSE204P-M1-T3', name: 'Karatsuba Multiplication' },
        ],
      },
      {
        id: 'BCSE204P-M2',
        name: 'Module 2 — Dynamic Programming & Backtracking',
        topics: [
          { id: 'BCSE204P-M2-T1', name: 'Assembly Line Scheduling (DP)' },
          { id: 'BCSE204P-M2-T2', name: 'Matrix Chain Multiplication (DP)' },
          { id: 'BCSE204P-M2-T3', name: 'Longest Common Subsequence (DP)' },
          { id: 'BCSE204P-M2-T4', name: '0-1 Knapsack (DP)' },
          { id: 'BCSE204P-M2-T5', name: 'TSP — Dynamic Programming' },
          { id: 'BCSE204P-M2-T6', name: 'N-Queens (Backtracking)' },
          { id: 'BCSE204P-M2-T7', name: 'Subset Sum (Backtracking)' },
          { id: 'BCSE204P-M2-T8', name: 'Graph Coloring (Backtracking)' },
        ],
      },
      {
        id: 'BCSE204P-M3',
        name: 'Module 3 — String Matching',
        topics: [
          { id: 'BCSE204P-M3-T1', name: 'Naïve String Matching' },
          { id: 'BCSE204P-M3-T2', name: 'KMP Algorithm' },
          { id: 'BCSE204P-M3-T3', name: 'Rabin-Karp Algorithm' },
          { id: 'BCSE204P-M3-T4', name: 'Suffix Trees (conceptual)' },
        ],
      },
      {
        id: 'BCSE204P-M4',
        name: 'Module 4 — Graph Algorithms',
        topics: [
          { id: 'BCSE204P-M4-T1', name: 'Bellman-Ford Algorithm' },
          { id: 'BCSE204P-M4-T2', name: 'Floyd-Warshall Algorithm' },
        ],
      },
      {
        id: 'BCSE204P-M5',
        name: 'Module 5 — Geometric Algorithms',
        topics: [
          { id: 'BCSE204P-M5-T1', name: 'Line Segment Intersection (Sweeping Line)' },
          { id: 'BCSE204P-M5-T2', name: 'Convex Hull — Graham\'s Scan' },
          { id: 'BCSE204P-M5-T3', name: 'Convex Hull — Jarvis March' },
        ],
      },
      {
        id: 'BCSE204P-M7',
        name: 'Module 7 — Approximation Algorithms',
        topics: [
          { id: 'BCSE204P-M7-T1', name: 'Vertex Cover Approximation' },
          { id: 'BCSE204P-M7-T2', name: 'Set Cover Approximation' },
          { id: 'BCSE204P-M7-T3', name: 'TSP Approximation (Travelling Salesman)' },
        ],
      },
    ],
  },
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
        name: 'Module 1 — Computer Architecture Basics',
        topics: [
          { id: 'BCSE205L-M1-T1', name: 'Functional components of computer' },
          { id: 'BCSE205L-M1-T2', name: 'Registers and register files' },
          { id: 'BCSE205L-M1-T3', name: 'IAS architecture' },
          { id: 'BCSE205L-M1-T4', name: 'Von Neumann architecture' },
          { id: 'BCSE205L-M1-T5', name: 'Harvard architecture' },
          { id: 'BCSE205L-M1-T6', name: 'CISC vs RISC' },
        ],
      },
      {
        id: 'BCSE205L-M2',
        name: 'Module 2 — Data Representation & Arithmetic',
        topics: [
          { id: 'BCSE205L-M2-T1', name: 'Fixed point arithmetic' },
          { id: 'BCSE205L-M2-T2', name: 'Booth multiplication' },
          { id: 'BCSE205L-M2-T3', name: 'Modified Booth algorithm' },
          { id: 'BCSE205L-M2-T4', name: 'Division algorithms' },
          { id: 'BCSE205L-M2-T5', name: 'Floating point arithmetic' },
          { id: 'BCSE205L-M2-T6', name: 'Character codes' },
        ],
      },
      {
        id: 'BCSE205L-M3',
        name: 'Module 3 — Instruction Sets & Control Unit',
        topics: [
          { id: 'BCSE205L-M3-T1', name: 'Instruction set architecture' },
          { id: 'BCSE205L-M3-T2', name: 'Instruction formats' },
          { id: 'BCSE205L-M3-T3', name: 'Addressing modes' },
          { id: 'BCSE205L-M3-T4', name: 'Instruction cycle' },
          { id: 'BCSE205L-M3-T5', name: 'ALU' },
          { id: 'BCSE205L-M3-T6', name: 'Hardwired control' },
          { id: 'BCSE205L-M3-T7', name: 'Microprogrammed control' },
          { id: 'BCSE205L-M3-T8', name: 'Performance metrics (MIPS, MFLOPS)' },
        ],
      },
      {
        id: 'BCSE205L-M4',
        name: 'Module 4 — Memory Systems',
        topics: [
          { id: 'BCSE205L-M4-T1', name: 'Memory hierarchy' },
          { id: 'BCSE205L-M4-T2', name: 'Cache memory' },
          { id: 'BCSE205L-M4-T3', name: 'Cache mapping' },
          { id: 'BCSE205L-M4-T4', name: 'Cache misses' },
          { id: 'BCSE205L-M4-T5', name: 'Memory interleaving' },
          { id: 'BCSE205L-M4-T6', name: 'RAM and ROM' },
          { id: 'BCSE205L-M4-T7', name: 'Memory design' },
        ],
      },
      {
        id: 'BCSE205L-M5',
        name: 'Module 5 — Interfacing & I/O',
        topics: [
          { id: 'BCSE205L-M5-T1', name: 'I/O fundamentals' },
          { id: 'BCSE205L-M5-T2', name: 'Programmed I/O' },
          { id: 'BCSE205L-M5-T3', name: 'Interrupt-driven I/O' },
          { id: 'BCSE205L-M5-T4', name: 'DMA' },
          { id: 'BCSE205L-M5-T5', name: 'Interrupt structure' },
          { id: 'BCSE205L-M5-T6', name: 'Bus systems' },
        ],
      },
      {
        id: 'BCSE205L-M6',
        name: 'Module 6 — Storage Systems',
        topics: [
          { id: 'BCSE205L-M6-T1', name: 'Disk structure' },
          { id: 'BCSE205L-M6-T2', name: 'SSD' },
          { id: 'BCSE205L-M6-T3', name: 'RAID' },
          { id: 'BCSE205L-M6-T4', name: 'Error detection' },
          { id: 'BCSE205L-M6-T5', name: 'Error correction' },
          { id: 'BCSE205L-M6-T6', name: 'I/O performance' },
        ],
      },
      {
        id: 'BCSE205L-M7',
        name: 'Module 7 — High Performance Processors',
        topics: [
          { id: 'BCSE205L-M7-T1', name: "Flynn's taxonomy" },
          { id: 'BCSE205L-M7-T2', name: 'Pipelining' },
          { id: 'BCSE205L-M7-T3', name: 'Pipeline hazards' },
          { id: 'BCSE205L-M7-T4', name: 'Superscalar architecture' },
          { id: 'BCSE205L-M7-T5', name: 'Parallel processing' },
          { id: 'BCSE205L-M7-T6', name: "Amdahl's law" },
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
        name: 'Module 1 — Basics of Statistics',
        topics: [
          { id: 'BMAT202L-M1-T1', name: 'Measures of central tendency' },
          { id: 'BMAT202L-M1-T2', name: 'Dispersion' },
          { id: 'BMAT202L-M1-T3', name: 'Moments' },
          { id: 'BMAT202L-M1-T4', name: 'Skewness' },
          { id: 'BMAT202L-M1-T5', name: 'Kurtosis' },
        ],
      },
      {
        id: 'BMAT202L-M2',
        name: 'Module 2 — Random Variables',
        topics: [
          { id: 'BMAT202L-M2-T1', name: 'PMF' },
          { id: 'BMAT202L-M2-T2', name: 'PDF' },
          { id: 'BMAT202L-M2-T3', name: 'Joint distributions' },
          { id: 'BMAT202L-M2-T4', name: 'Marginal distributions' },
          { id: 'BMAT202L-M2-T5', name: 'Conditional distributions' },
          { id: 'BMAT202L-M2-T6', name: 'Expectation' },
          { id: 'BMAT202L-M2-T7', name: 'Covariance' },
          { id: 'BMAT202L-M2-T8', name: 'MGF' },
        ],
      },
      {
        id: 'BMAT202L-M3',
        name: 'Module 3 — Correlation & Regression',
        topics: [
          { id: 'BMAT202L-M3-T1', name: 'Rank correlation' },
          { id: 'BMAT202L-M3-T2', name: 'Partial correlation' },
          { id: 'BMAT202L-M3-T3', name: 'Multiple correlation' },
          { id: 'BMAT202L-M3-T4', name: 'Regression analysis' },
        ],
      },
      {
        id: 'BMAT202L-M4',
        name: 'Module 4 — Distributions',
        topics: [
          { id: 'BMAT202L-M4-T1', name: 'Binomial distribution' },
          { id: 'BMAT202L-M4-T2', name: 'Poisson distribution' },
          { id: 'BMAT202L-M4-T3', name: 'Normal distribution' },
          { id: 'BMAT202L-M4-T4', name: 'Gamma distribution' },
          { id: 'BMAT202L-M4-T5', name: 'Exponential distribution' },
          { id: 'BMAT202L-M4-T6', name: 'Weibull distribution' },
        ],
      },
      {
        id: 'BMAT202L-M5',
        name: 'Module 5 — Hypothesis Testing I',
        topics: [
          { id: 'BMAT202L-M5-T1', name: 'Errors in testing' },
          { id: 'BMAT202L-M5-T2', name: 'Z test' },
          { id: 'BMAT202L-M5-T3', name: 'Proportion tests' },
          { id: 'BMAT202L-M5-T4', name: 'Mean comparison' },
        ],
      },
      {
        id: 'BMAT202L-M6',
        name: 'Module 6 — Hypothesis Testing II',
        topics: [
          { id: 'BMAT202L-M6-T1', name: 't-test' },
          { id: 'BMAT202L-M6-T2', name: 'F-test' },
          { id: 'BMAT202L-M6-T3', name: 'Chi-square test' },
          { id: 'BMAT202L-M6-T4', name: 'ANOVA' },
          { id: 'BMAT202L-M6-T5', name: 'Design of experiments' },
        ],
      },
      {
        id: 'BMAT202L-M7',
        name: 'Module 7 — Reliability',
        topics: [
          { id: 'BMAT202L-M7-T1', name: 'Hazard function' },
          { id: 'BMAT202L-M7-T2', name: 'Series systems' },
          { id: 'BMAT202L-M7-T3', name: 'Parallel systems' },
          { id: 'BMAT202L-M7-T4', name: 'Maintainability' },
          { id: 'BMAT202L-M7-T5', name: 'Availability' },
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
        name: 'Module 1 — Languages & Grammars',
        topics: [
          { id: 'BCSE304L-M1-T1', name: 'Languages and alphabets' },
          { id: 'BCSE304L-M1-T2', name: 'Strings and operations' },
          { id: 'BCSE304L-M1-T3', name: 'Computational models' },
          { id: 'BCSE304L-M1-T4', name: 'Basics of automata' },
        ],
      },
      {
        id: 'BCSE304L-M2',
        name: 'Module 2 — Finite Automata',
        topics: [
          { id: 'BCSE304L-M2-T1', name: 'DFA' },
          { id: 'BCSE304L-M2-T2', name: 'NFA' },
          { id: 'BCSE304L-M2-T3', name: 'ε-NFA' },
          { id: 'BCSE304L-M2-T4', name: 'NFA to DFA conversion' },
          { id: 'BCSE304L-M2-T5', name: 'Minimization of DFA' },
        ],
      },
      {
        id: 'BCSE304L-M3',
        name: 'Module 3 — Regular Expressions',
        topics: [
          { id: 'BCSE304L-M3-T1', name: 'Regular expressions' },
          { id: 'BCSE304L-M3-T2', name: 'FA to regex' },
          { id: 'BCSE304L-M3-T3', name: 'Regex to FA' },
          { id: 'BCSE304L-M3-T4', name: 'Closure properties' },
          { id: 'BCSE304L-M3-T5', name: 'Pumping lemma (regular)' },
        ],
      },
      {
        id: 'BCSE304L-M4',
        name: 'Module 4 — Context Free Grammars',
        topics: [
          { id: 'BCSE304L-M4-T1', name: 'CFG' },
          { id: 'BCSE304L-M4-T2', name: 'Parse trees' },
          { id: 'BCSE304L-M4-T3', name: 'Ambiguity' },
          { id: 'BCSE304L-M4-T4', name: 'CNF and GNF' },
          { id: 'BCSE304L-M4-T5', name: 'Pumping lemma (CFL)' },
        ],
      },
      {
        id: 'BCSE304L-M5',
        name: 'Module 5 — Pushdown Automata',
        topics: [
          { id: 'BCSE304L-M5-T1', name: 'PDA definition' },
          { id: 'BCSE304L-M5-T2', name: 'Languages of PDA' },
          { id: 'BCSE304L-M5-T3', name: 'NPDA vs DPDA' },
        ],
      },
      {
        id: 'BCSE304L-M6',
        name: 'Module 6 — Turing Machines',
        topics: [
          { id: 'BCSE304L-M6-T1', name: 'Turing machine model' },
          { id: 'BCSE304L-M6-T2', name: 'Multi-tape TM' },
          { id: 'BCSE304L-M6-T3', name: 'Universal TM' },
          { id: 'BCSE304L-M6-T4', name: 'Halting problem' },
          { id: 'BCSE304L-M6-T5', name: 'Church-Turing thesis' },
        ],
      },
      {
        id: 'BCSE304L-M7',
        name: 'Module 7 — Decidability',
        topics: [
          { id: 'BCSE304L-M7-T1', name: 'Recursive languages' },
          { id: 'BCSE304L-M7-T2', name: 'Recursively enumerable languages' },
          { id: 'BCSE304L-M7-T3', name: 'Chomsky hierarchy' },
          { id: 'BCSE304L-M7-T4', name: 'Undecidable problems' },
          { id: 'BCSE304L-M7-T5', name: 'Post correspondence problem' },
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
        name: 'Module 1 — Greedy & Divide and Conquer',
        topics: [
          { id: 'BCSE204L-M1-T1', name: 'Algorithm design stages' },
          { id: 'BCSE204L-M1-T2', name: 'Time complexity' },
          { id: 'BCSE204L-M1-T3', name: 'Proof of correctness' },
          { id: 'BCSE204L-M1-T4', name: 'Fractional Knapsack' },
          { id: 'BCSE204L-M1-T5', name: 'Huffman Coding' },
          { id: 'BCSE204L-M1-T6', name: 'Maximum Subarray' },
          { id: 'BCSE204L-M1-T7', name: 'Karatsuba Multiplication' },
        ],
      },
      {
        id: 'BCSE204L-M2',
        name: 'Module 2 — DP, Backtracking & Branch and Bound',
        topics: [
          { id: 'BCSE204L-M2-T1', name: 'Assembly Line Scheduling' },
          { id: 'BCSE204L-M2-T2', name: 'Matrix Chain Multiplication' },
          { id: 'BCSE204L-M2-T3', name: 'Longest Common Subsequence' },
          { id: 'BCSE204L-M2-T4', name: '0-1 Knapsack' },
          { id: 'BCSE204L-M2-T5', name: 'Travelling Salesman Problem' },
          { id: 'BCSE204L-M2-T6', name: 'N-Queens' },
          { id: 'BCSE204L-M2-T7', name: 'Subset Sum' },
          { id: 'BCSE204L-M2-T8', name: 'Graph Coloring' },
          { id: 'BCSE204L-M2-T9', name: 'Branch and Bound methods' },
        ],
      },
      {
        id: 'BCSE204L-M3',
        name: 'Module 3 — String Matching',
        topics: [
          { id: 'BCSE204L-M3-T1', name: 'Naive String Matching' },
          { id: 'BCSE204L-M3-T2', name: 'KMP Algorithm' },
          { id: 'BCSE204L-M3-T3', name: 'Rabin-Karp Algorithm' },
          { id: 'BCSE204L-M3-T4', name: 'Suffix Trees' },
        ],
      },
      {
        id: 'BCSE204L-M4',
        name: 'Module 4 — Graph Algorithms',
        topics: [
          { id: 'BCSE204L-M4-T1', name: 'Bellman-Ford' },
          { id: 'BCSE204L-M4-T2', name: 'Floyd-Warshall' },
          { id: 'BCSE204L-M4-T3', name: 'Ford-Fulkerson' },
          { id: 'BCSE204L-M4-T4', name: 'Edmond-Karp' },
          { id: 'BCSE204L-M4-T5', name: 'Push Relabel' },
          { id: 'BCSE204L-M4-T6', name: 'Maximum Matching' },
        ],
      },
      {
        id: 'BCSE204L-M5',
        name: 'Module 5 — Geometric Algorithms',
        topics: [
          { id: 'BCSE204L-M5-T1', name: 'Line Segment Intersection' },
          { id: 'BCSE204L-M5-T2', name: 'Sweep Line Technique' },
          { id: 'BCSE204L-M5-T3', name: 'Convex Hull' },
          { id: 'BCSE204L-M5-T4', name: 'Graham Scan' },
          { id: 'BCSE204L-M5-T5', name: 'Jarvis March' },
        ],
      },
      {
        id: 'BCSE204L-M6',
        name: 'Module 6 — Randomized Algorithms',
        topics: [
          { id: 'BCSE204L-M6-T1', name: 'Randomized Quick Sort' },
          { id: 'BCSE204L-M6-T2', name: 'Hiring Problem' },
          { id: 'BCSE204L-M6-T3', name: 'Minimum Cut' },
        ],
      },
      {
        id: 'BCSE204L-M7',
        name: 'Module 7 — Complexity & Approximation',
        topics: [
          { id: 'BCSE204L-M7-T1', name: 'Class P' },
          { id: 'BCSE204L-M7-T2', name: 'Class NP' },
          { id: 'BCSE204L-M7-T3', name: 'NP-Completeness' },
          { id: 'BCSE204L-M7-T4', name: 'SAT' },
          { id: 'BCSE204L-M7-T5', name: '3SAT' },
          { id: 'BCSE204L-M7-T6', name: 'Clique' },
          { id: 'BCSE204L-M7-T7', name: 'Vertex Cover' },
          { id: 'BCSE204L-M7-T8', name: 'Set Cover' },
          { id: 'BCSE204L-M7-T9', name: 'Travelling Salesman Approximation' },
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
