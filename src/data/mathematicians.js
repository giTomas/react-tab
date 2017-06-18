const mathematicians = [
  {
    "id": "alonzo-church",
    "name": "Alonzo Church",
    "wiki": "https://en.wikipedia.org/wiki/Alonzo_Church",
    "image": "https://upload.wikimedia.org/wikipedia/en/a/a6/Alonzo_Church.jpg",
    "text": [
      'Alonzo Church (June 14, 1903 – August 11, 1995) was an American mathematician and logician who made major contributions to mathematical logic and the foundations of theoretical computer science. He is best known for the lambda calculus, Church–Turing thesis, proving the undecidability of the Entscheidungsproblem, Frege–Church ontology, and the Church–Rosser theorem.',
      'The lambda calculus emerged in his 1936 paper showing the unsolvability of the Entscheidungsproblem. This result preceded Alan Turing\'s work on the halting problem, which also demonstrated the existence of a problem unsolvable by mechanical means. Church and Turing then showed that the lambda calculus and the Turing machine used in Turing\'s halting problem were equivalent in capabilities, and subsequently demonstrated a variety of alternative "mechanical processes for computation." This resulted in the Church–Turing thesis.',
      "The lambda calculus influenced the design of the LISP programming language and functional programming languages in general. The Church encoding is named in his honor."
    ],
  },
  {
    "id": "haskell-curry",
    "name": "Haskell Curry",
    "wiki": "https://en.wikipedia.org/wiki/Haskell_Curry",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/86/HaskellBCurry.jpg",
    "text": [
      "Haskell Brooks Curry (/ˈhæskəl ˈkɜːri/; September 12, 1900 – September 1, 1982) was an American mathematician and logician. Curry is best known for his work in combinatory logic; while the initial concept of combinatory logic was based on a single paper by Moses Schönfinkel, much of the development was done by Curry. Curry is also known for Curry's paradox and the Curry–Howard correspondence. There are three programming languages named after him, Haskell, Brook and Curry, as well as the concept of currying, a technique used for transforming functions in mathematics and computer science.",
      "The focus of Curry's work were attempts to show that combinatory logic could provide a foundation for mathematics. Towards the end of 1933, he learned of the Kleene–Rosser paradox from correspondence with John Rosser. The paradox, developed by Rosser and Stephen Kleene had proved the inconsistency of a number of related formal systems including one proposed by Alonzo Church (a system which had the lambda calculus as a consistent subsystem) and Curry's own system. However, unlike Church, Kleene, and Rosser, Curry did not give up on the foundational approach, saying that he did not want to \"run away from paradoxes.\"",
      "By working in the area of Combinatory Logic for his entire career, Curry essentially became the founder and biggest name in the field. Combinatory logic is the foundation for one style of functional programming language. The power and scope of combinatory logic is quite similar to that of the lambda calculus of Church, and the latter formalism has tended to predominate in recent decades.",
      "In 1947 Curry also described one of the first high-level programming languages and provided the first description of a procedure to convert a general arithmetic expression into a code for one-address computer.",
      "He taught at Harvard, Princeton, and from 1929 to 1966, at the Pennsylvania State University. In 1942, he published Curry's paradox. In 1966 he became professor of mathematics at the Universiteit van Amsterdam.",
      "Curry also wrote and taught mathematical logic more generally; his teaching in this area culminated in his 1963 Foundations of Mathematical Logic. His preferred philosophy of mathematics was formalism (cf. his 1951 book), following his mentor Hilbert, but his writings betray substantial philosophical curiosity and a very open mind about intuitionistic logic."
    ],
  },
 {
    "id": "alan-turing",
    "name": "Alan Turing",
    "wiki": "https://en.wikipedia.org/wiki/Alan_Turing",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg",
    "text": [
      "Alan Mathison Turing OBE FRS (/ˈtjʊərɪŋ/; 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst, philosopher and theoretical biologist.",
      "He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer. Turing is widely considered to be the father of theoretical computer science and artificial intelligence.",
      "In 1936, Turing published his paper \"On Computable Numbers, with an Application to the Entscheidungsproblem\" (1936). In this paper, Turing reformulated Kurt Gödel's 1931 results on the limits of proof and computation, replacing Gödel's universal arithmetic-based formal language with the formal and simple hypothetical devices that became known as Turing machines. The Entscheidungsproblem (decision problem) was originally posed by German mathematician David Hilbert in 1928. Turing proved that his \"universal computing machine\" would be capable of performing any conceivable mathematical computation if it were representable as an algorithm. He went on to prove that there was no solution to the decision problem by first showing that the halting problem for Turing machines is undecidable: It is not possible to decide algorithmically whether a Turing machine will ever halt.",
      "Although Turing's proof was published shortly after Alonzo Church's equivalent proof using his lambda calculus, Turing's approach is considerably more accessible and intuitive than Church's. It also included a notion of a 'Universal Machine' (now known as a universal Turing machine), with the idea that such a machine could perform the tasks of any other computation machine (as indeed could Church's lambda calculus). According to the Church–Turing thesis, Turing machines and the lambda calculus are capable of computing anything that is computable. John von Neumann acknowledged that the central concept of the modern computer was due to Turing's paper. To this day, Turing machines are a central object of study in theory of computation.",
      "From September 1936 to July 1938, Turing spent most of his time studying under Church at Princeton University. In addition to his purely mathematical work, he studied cryptology and also built three of four stages of an electro-mechanical binary multiplier. In June 1938, he obtained his PhD from Princeton; his dissertation, Systems of Logic Based on Ordinals, introduced the concept of ordinal logic and the notion of relative computing, where Turing machines are augmented with so-called oracles, allowing the study of problems that cannot be solved by Turing machines. John von Neumann wanted to hire him as his postdoctoral assistant, but he went back to England.",
      "When Turing returned to Cambridge, he attended lectures given in 1939 by Ludwig Wittgenstein about the foundations of mathematics.[47] Remarkably, the lectures have been reconstructed verbatim, including interjections from Turing and other students, from students' notes.[48] Turing and Wittgenstein argued and disagreed, with Turing defending formalism and Wittgenstein propounding his view that mathematics does not discover any absolute truths, but rather invents them."
    ],
  }
];

export default mathematicians;
