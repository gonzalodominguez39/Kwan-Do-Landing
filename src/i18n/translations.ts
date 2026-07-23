export type Language = "es" | "en" | "pt";

export const translations = {
  es: {
    // ── NavBar ──
    nav: {
      home: "Inicio",
      pillars: "Principios",
      gallery: "Galería",
      schedule: "Horarios",
      contact: "Contacto",
      cta: "Consultar",
    },

    // ── Hero ──
    hero: {
      badge: "Escuela Oficial de Taekwondo",
      titleLine1: "Escuela de",
      titleLine2: "Taekwondo",
      titleLine3: "Kwan-Do",
      subtitle: "Formamos personas mediante la disciplina, el respeto y la superación constante. Clases para niños, adolescentes y adultos.",
      btnDownload: "Descargá la Teoría",
      btnSchedule: "Ver Horarios",
      stat1Title: "Disciplina",
      stat1Text: "Autocontrol y constancia en cada entrenamiento.",
      stat2Title: "Respeto",
      stat2Text: "Valores y compañerismo como base del arte marcial.",
      stat3Title: "Superación",
      stat3Text: "Cada cinturón es un logro ganado con esfuerzo.",
    },

    // ── About ──
    about: {
      badge: "ITF Philosophy",
      title1: "La filosofía",
      title2: "Kwan-Do",
      p1: "En Kwan-Do no solo enseñamos una técnica de combate; forjamos el carácter. Nuestra base en el Taekwondo ITF se centra en cinco pilares fundamentales.",
      p2: "Cada movimiento es una expresión de disciplina y crecimiento. El arte marcial como camino de vida.",
      flipCardDescription: "Forjamos campeones desde adentro. Técnica, disciplina y espíritu ITF en cada entrenamiento.",
      flipCardLocation: "Argentina",
      flipCardBtnSeeInfo: "Ver info →",
      flipCardBtnSeeLogo: "← Ver logo",
    },

    // ── Features ──
    features: {
      whyLabel: "¿POR QUÉ ELEGIR",
      whyTitle: "KWAN-DO?",
      reasons: [
        "Clases para niños desde los 4 años",
        "Clases para adolescentes y adultos",
        "Instructores certificados",
        "Preparación para competencias",
        "Exámenes de graduación",
        "Ambiente familiar y profesional",
      ],
      benefitsLabel: "Entrenamiento integral",
      benefitsTitle: "BENEFICIOS DEL TAEKWONDO",
      benefitsSubtitle: "Fuerza, enfoque y confianza en una práctica que se construye clase a clase.",
      benefit1: "Defensa Personal",
      benefit2: "Condición Física",
      benefit3: "Concentración y Enfoque",
      benefit4: "Confianza y Autoestima",
      benefit5: "Compañerismo y Respeto",
      benefit6: "Competencia Deportiva",
    },

    // ── Downloads ──
    downloads: {
      label: "Material oficial",
      title1: "Descargá la",
      title2: "Teoría",
      subtitle: "Accedé de forma gratuita al material teórico oficial de KWAN-DO para complementar tu entrenamiento.",
      doc1Title: "Cartilla de Escuelas KWAN-DO",
      doc1Desc: "Cartilla oficial con información de todas las escuelas que conforman la organización KWAN-DO.",
      doc1Badge: "Escuelas",
      doc2Title: "Teoría del Taekwon-Do",
      doc2Desc: "Material teórico oficial del Taekwon-Do ITF. Fundamentos, historia, filosofía y principios del arte marcial.",
      doc2Badge: "Teoría",
      downloadBtn: "Descargar PDF",
      footerNote: "Material de uso libre para alumnos y escuelas KWAN-DO",
    },

    // ── Pillars ──
    pillars: {
      badge: "Filosofía ITF",
      title1: "Los 5 Principios",
      title2: "del Taekwondo",
      subtitle: "Seleccioná un principio para conocer su significado y su lugar en el camino del Kwan-Do.",
      hintDesktop: "Seleccioná un principio para expandirlo",
      hintMobile: "Tocá un principio para expandirlo",
      closeBtnLabel: "Cerrar",
      items: [
        {
          name: "Cortesía",
          description: "El respeto hacia el instructor, los compañeros y uno mismo es la puerta de entrada al camino marcial. Sin cortesía no hay aprendizaje verdadero.",
        },
        {
          name: "Integridad",
          description: "Actuar con honestidad dentro y fuera del dojang. La integridad es la diferencia entre saber pelear y ser un verdadero artista marcial.",
        },
        {
          name: "Perseverancia",
          description: "Cada caída es parte del entrenamiento. Levantarse siempre, superar los límites y nunca abandonar ante la adversidad.",
        },
        {
          name: "Autocontrol",
          description: "La fuerza más difícil de dominar es la propia. El autocontrol en el combate y en la vida define al verdadero practicante.",
        },
        {
          name: "Espíritu Indomable",
          description: "Un espíritu que no puede ser doblegado. Frente a la injusticia, la duda o el dolor, el verdadero guerrero permanece de pie.",
        },
      ],
    },

    // ── Gallery ──
    gallery: {
      badge: "Momentos Kwan-Do",
      title: "Galería",
      subtitle: "Entrenamientos, encuentros y escenas reales del camino dentro del dojang.",
      ariaZoom: "Ver imagen de la galería en grande",
      ariaClose: "Cerrar imagen",
    },

    // ── TaekwondoKickScroll ──
    kickScroll: {
      loading: "Cargando secuencia",
      phases: [
        {
          eyebrow: "Fase 01",
          label: "Preparación",
          title: ["La fase de", "Preparación"],
          body: "El taekwondista inicia la flexión de rodilla elevando la pierna de ataque. La mirada firme en el objetivo establece la línea de fuerza y el equilibrio inicial.",
        },
        {
          eyebrow: "Fase 02",
          label: "Pivoteo",
          title: ["Pivoteo de", "Base y Cadera"],
          body: "El pie de apoyo rota 180 grados. Esta rotación transfiere la energía desde el suelo hasta el torso superior, alineando mecánicamente la cadera para la máxima potencia.",
        },
        {
          eyebrow: "Fase 03",
          label: "Impacto",
          title: ["Yop Chagi", "Línea Perfecta"],
          body: "Extensión total. El impacto se proyecta a través del balkal, el borde externo del pie. Hombro, cadera y talón forman una línea recta de transferencia de energía cinética.",
        },
        {
          eyebrow: "Fase 04",
          label: "Recuperación",
          title: ["Equilibrio y", "Guardia Final"],
          body: "La pierna Extendida en su totalidad, manteniendo el control del cuerpo.",
        },
      ],
    },

    // ── Benefits (Sections) ──
    benefits: {
      label: "POTENCIAL ILIMITADO",
      title1: "Beneficios del",
      title2: "Entrenamiento",
      card1Title: "Defensa Personal",
      card1Text: "Técnicas efectivas y realistas para situaciones críticas, aumentando tu seguridad.",
      card2Title: "Confianza",
      card2Text: "Supera tus límites y desarrolla una mentalidad de ganador inquebrantable.",
      card3Title: "Estado Físico",
      card3Text: "Mejora fuerza, flexibilidad y resistencia cardiovascular de alto nivel.",
    },

    // ── Schedule (Sections) ──
    schedule: {
      label: "ORGANIZA TU TIEMPO",
      title: "Horarios Semanales",
      subtitle: "Entrenamientos diseñados para adaptarse a tu rutina diaria",
      colTime: "Horario",
      colDays: "Días",
      colClass: "Clase",
      dayLabel: "Días",
      classLabel: "Clase",
      note: "⚡ Clases especiales los sábados: 9:00 - 11:00 (Consulta disponibilidad)",
      schedule1Days: "Lunes / Miércoles / Viernes",
      schedule1Class: "Infantiles / Cadetes",
      schedule2Days: "Lunes / Miércoles / Viernes",
      schedule2Class: "Adultos",
      legend1: "Infantiles / Cadetes",
      legend2: "Adultos",
    },

    // ── Contact ──
    contact: {
      title: "Ponte en Contacto",
      namePlaceholder: "Nombre",
      messagePlaceholder: "Tu consulta",
      submitBtn: "Contactar",
      locationTitle: "Nuestra Sede",
      locationAddress: "Av. Marcial 1234, CABA",
      whatsappMessage: "Hola, quisiera consultar sobre clases y horarios.",
      whatsappName: "Sin nombre",
      whatsappNoMsg: "Sin mensaje",
    },

    // ── ConsultaModal ──
    modal: {
      eyebrow: "Escribinos",
      title: "Hacé tu consulta",
      ariaClose: "Cerrar",
      nameLabel: "Tu nombre",
      namePlaceholder: "Ej: Juan García",
      messageLabel: "Tu mensaje",
      messagePlaceholder: "Contanos qué querés saber...",
      submitBtn: "Enviar por WhatsApp",
      hint: "Al hacer clic serás redirigido a WhatsApp con tu mensaje listo para enviar.",
      whatsappIntro: "Hola KWAN-DO! Soy",
      whatsappDefault: "un interesado",
      whatsappDefaultMsg: "Quisiera consultar sobre clases y horarios.",
    },

    // ── Footer ──
    footer: {
      description: "Formamos personas íntegras a través del Taekwon-Do ITF, promoviendo disciplina, respeto y superación.",
      navTitle: "Navegación",
      usefulTitle: "Enlaces útiles",
      followTitle: "Síguenos",
      schoolsLabel: "Escuelas que conforman",
      pillars: ["Disciplina", "Respeto", "Integridad", "Perseverancia", "Autocontrol", "Espíritu indomable"],
      copyright: "Todos los derechos reservados.",
      navLinks: [
        { label: "Inicio", href: "#home" },
        { label: "Nosotros", href: "#about" },
        { label: "Principios", href: "#pillars" },
        { label: "Galería", href: "#gallery" },
        { label: "Horarios", href: "#schedule" },
        { label: "Contacto", href: "#contact" },
      ],
      usefulLinks: [
        { label: "Técnica Yop Chagi", href: "#kick-animation" },
        { label: "Presidente & Dirección Técnica", href: "#training-benefits" },
        { label: "Consultar horarios", href: "#schedule" },
        { label: "Únete ahora", href: "#contact" },
      ],
    },

    // ── WhatsApp floating button ──
    whatsappBtn: "Consultar por WhatsApp",
  },

  en: {
    nav: {
      home: "Home",
      pillars: "Principles",
      gallery: "Gallery",
      schedule: "Schedule",
      contact: "Contact",
      cta: "Inquire",
    },

    hero: {
      badge: "Official Taekwondo School",
      titleLine1: "School of",
      titleLine2: "Taekwondo",
      titleLine3: "Kwan-Do",
      subtitle: "We build people through discipline, respect, and constant self-improvement. Classes for children, teenagers, and adults.",
      btnDownload: "Download Theory",
      btnSchedule: "View Schedule",
      stat1Title: "Discipline",
      stat1Text: "Self-control and consistency in every training session.",
      stat2Title: "Respect",
      stat2Text: "Values and camaraderie as the foundation of the martial art.",
      stat3Title: "Improvement",
      stat3Text: "Every belt is an achievement earned through effort.",
    },

    about: {
      badge: "ITF Philosophy",
      title1: "The Philosophy",
      title2: "Kwan-Do",
      p1: "At Kwan-Do we don't just teach a combat technique; we forge character. Our foundation in ITF Taekwondo centers on five fundamental pillars.",
      p2: "Every movement is an expression of discipline and growth. The martial art as a way of life.",
      flipCardDescription: "We forge champions from within. Technique, discipline and ITF spirit in every training session.",
      flipCardLocation: "Argentina",
      flipCardBtnSeeInfo: "See info →",
      flipCardBtnSeeLogo: "← See logo",
    },

    features: {
      whyLabel: "WHY CHOOSE",
      whyTitle: "KWAN-DO?",
      reasons: [
        "Classes for children from age 4",
        "Classes for teenagers and adults",
        "Certified instructors",
        "Competition preparation",
        "Graduation exams",
        "Family and professional environment",
      ],
      benefitsLabel: "Comprehensive training",
      benefitsTitle: "TAEKWONDO BENEFITS",
      benefitsSubtitle: "Strength, focus and confidence built class by class.",
      benefit1: "Self-Defense",
      benefit2: "Physical Fitness",
      benefit3: "Concentration & Focus",
      benefit4: "Confidence & Self-Esteem",
      benefit5: "Camaraderie & Respect",
      benefit6: "Sports Competition",
    },

    downloads: {
      label: "Official material",
      title1: "Download the",
      title2: "Theory",
      subtitle: "Access KWAN-DO's official theoretical material for free to complement your training.",
      doc1Title: "KWAN-DO Schools Booklet",
      doc1Desc: "Official booklet with information about all the schools that make up the KWAN-DO organization.",
      doc1Badge: "Schools",
      doc2Title: "Taekwon-Do Theory",
      doc2Desc: "Official theoretical material of ITF Taekwon-Do. Fundamentals, history, philosophy and principles of the martial art.",
      doc2Badge: "Theory",
      downloadBtn: "Download PDF",
      footerNote: "Free material for KWAN-DO students and schools",
    },

    pillars: {
      badge: "ITF Philosophy",
      title1: "The 5 Principles",
      title2: "of Taekwondo",
      subtitle: "Select a principle to learn its meaning and its place on the Kwan-Do path.",
      hintDesktop: "Select a principle to expand it",
      hintMobile: "Tap a principle to expand it",
      closeBtnLabel: "Close",
      items: [
        {
          name: "Courtesy",
          description: "Respect toward the instructor, fellow students, and oneself is the gateway to the martial path. Without courtesy there is no true learning.",
        },
        {
          name: "Integrity",
          description: "Acting with honesty inside and outside the dojang. Integrity is the difference between knowing how to fight and being a true martial artist.",
        },
        {
          name: "Perseverance",
          description: "Every fall is part of training. Always get up, overcome limits, and never give up in the face of adversity.",
        },
        {
          name: "Self-Control",
          description: "The hardest force to master is one's own. Self-control in combat and in life defines the true practitioner.",
        },
        {
          name: "Indomitable Spirit",
          description: "A spirit that cannot be broken. Facing injustice, doubt or pain, the true warrior remains standing.",
        },
      ],
    },

    gallery: {
      badge: "Kwan-Do Moments",
      title: "Gallery",
      subtitle: "Training sessions, encounters, and real scenes from the journey inside the dojang.",
      ariaZoom: "View gallery image in full size",
      ariaClose: "Close image",
    },

    kickScroll: {
      loading: "Loading sequence",
      phases: [
        {
          eyebrow: "Phase 01",
          label: "Preparation",
          title: ["The phase of", "Preparation"],
          body: "The taekwondist initiates the knee bend by lifting the attacking leg. The steady gaze at the target establishes the line of force and initial balance.",
        },
        {
          eyebrow: "Phase 02",
          label: "Pivoting",
          title: ["Pivoting of", "Base & Hip"],
          body: "The supporting foot rotates 180 degrees. This rotation transfers energy from the ground to the upper torso, mechanically aligning the hip for maximum power.",
        },
        {
          eyebrow: "Phase 03",
          label: "Impact",
          title: ["Yop Chagi", "Perfect Line"],
          body: "Full extension. The impact is projected through the balkal, the outer edge of the foot. Shoulder, hip and heel form a straight line of kinetic energy transfer.",
        },
        {
          eyebrow: "Phase 04",
          label: "Recovery",
          title: ["Balance &", "Final Guard"],
          body: "The leg is retracted with control following the same entry vector, maintaining dynamic balance and returning to guard without losing stability.",
        },
      ],
    },

    benefits: {
      label: "UNLIMITED POTENTIAL",
      title1: "Training",
      title2: "Benefits",
      card1Title: "Self-Defense",
      card1Text: "Effective and realistic techniques for critical situations, increasing your safety.",
      card2Title: "Confidence",
      card2Text: "Overcome your limits and develop an unbreakable winner mindset.",
      card3Title: "Physical Fitness",
      card3Text: "Improve strength, flexibility and high-level cardiovascular endurance.",
    },

    schedule: {
      label: "ORGANIZE YOUR TIME",
      title: "Weekly Schedule",
      subtitle: "Training sessions designed to fit into your daily routine",
      colTime: "Time",
      colDays: "Days",
      colClass: "Class",
      dayLabel: "Days",
      classLabel: "Class",
      note: "⚡ Special classes on Saturdays: 9:00 - 11:00 (Check availability)",
      schedule1Days: "Monday / Wednesday / Friday",
      schedule1Class: "Kids / Cadets",
      schedule2Days: "Monday / Wednesday / Friday",
      schedule2Class: "Adults",
      legend1: "Kids / Cadets",
      legend2: "Adults",
    },

    contact: {
      title: "Get in Touch",
      namePlaceholder: "Name",
      messagePlaceholder: "Your inquiry",
      submitBtn: "Contact",
      locationTitle: "Our Location",
      locationAddress: "Av. Marcial 1234, CABA",
      whatsappMessage: "Hi, I'd like to inquire about classes and schedule.",
      whatsappName: "No name",
      whatsappNoMsg: "No message",
    },

    modal: {
      eyebrow: "Write to us",
      title: "Send your inquiry",
      ariaClose: "Close",
      nameLabel: "Your name",
      namePlaceholder: "Ex: John Smith",
      messageLabel: "Your message",
      messagePlaceholder: "Tell us what you'd like to know...",
      submitBtn: "Send via WhatsApp",
      hint: "Clicking will redirect you to WhatsApp with your message ready to send.",
      whatsappIntro: "Hi KWAN-DO! I'm",
      whatsappDefault: "an interested person",
      whatsappDefaultMsg: "I'd like to inquire about classes and schedule.",
    },

    footer: {
      description: "We build complete individuals through ITF Taekwon-Do, promoting discipline, respect and self-improvement.",
      navTitle: "Navigation",
      usefulTitle: "Useful Links",
      followTitle: "Follow Us",
      schoolsLabel: "Schools that make up",
      pillars: ["Discipline", "Respect", "Integrity", "Perseverance", "Self-Control", "Indomitable Spirit"],
      copyright: "All rights reserved.",
      navLinks: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Principles", href: "#pillars" },
        { label: "Gallery", href: "#gallery" },
        { label: "Schedule", href: "#schedule" },
        { label: "Contact", href: "#contact" },
      ],
      usefulLinks: [
        { label: "Yop Chagi Technique", href: "#kick-animation" },
        { label: "Training benefits", href: "#training-benefits" },
        { label: "Check schedule", href: "#schedule" },
        { label: "Join now", href: "#contact" },
      ],
    },

    whatsappBtn: "Inquire via WhatsApp",
  },

  pt: {
    nav: {
      home: "Início",
      pillars: "Princípios",
      gallery: "Galeria",
      schedule: "Horários",
      contact: "Contato",
      cta: "Consultar",
    },

    hero: {
      badge: "Escola Oficial de Taekwondo",
      titleLine1: "Escola de",
      titleLine2: "Taekwondo",
      titleLine3: "Kwan-Do",
      subtitle: "Formamos pessoas por meio da disciplina, do respeito e da superação constante. Aulas para crianças, adolescentes e adultos.",
      btnDownload: "Baixar a Teoria",
      btnSchedule: "Ver Horários",
      stat1Title: "Disciplina",
      stat1Text: "Autocontrole e constância em cada treino.",
      stat2Title: "Respeito",
      stat2Text: "Valores e companheirismo como base da arte marcial.",
      stat3Title: "Superação",
      stat3Text: "Cada faixa é uma conquista obtida com esforço.",
    },

    about: {
      badge: "ITF Philosophy",
      title1: "A filosofia",
      title2: "Kwan-Do",
      p1: "No Kwan-Do não apenas ensinamos uma técnica de combate; forjamos o caráter. Nossa base no Taekwondo ITF se concentra em cinco pilares fundamentais.",
      p2: "Cada movimento é uma expressão de disciplina e crescimento. A arte marcial como caminho de vida.",
      flipCardDescription: "Forjamos campeões por dentro. Técnica, disciplina e espírito ITF em cada treino.",
      flipCardLocation: "Argentina",
      flipCardBtnSeeInfo: "Ver info →",
      flipCardBtnSeeLogo: "← Ver logo",
    },

    features: {
      whyLabel: "POR QUE ESCOLHER",
      whyTitle: "KWAN-DO?",
      reasons: [
        "Aulas para crianças a partir dos 4 anos",
        "Aulas para adolescentes e adultos",
        "Instrutores certificados",
        "Preparação para competições",
        "Exames de graduação",
        "Ambiente familiar e profissional",
      ],
      benefitsLabel: "Treinamento integral",
      benefitsTitle: "BENEFÍCIOS DO TAEKWONDO",
      benefitsSubtitle: "Força, foco e confiança em uma prática construída aula a aula.",
      benefit1: "Defesa Pessoal",
      benefit2: "Condicionamento Físico",
      benefit3: "Concentração e Foco",
      benefit4: "Confiança e Autoestima",
      benefit5: "Companheirismo e Respeito",
      benefit6: "Competição Esportiva",
    },

    downloads: {
      label: "Material oficial",
      title1: "Baixe a",
      title2: "Teoria",
      subtitle: "Acesse gratuitamente o material teórico oficial do KWAN-DO para complementar seu treinamento.",
      doc1Title: "Cartilha das Escolas KWAN-DO",
      doc1Desc: "Cartilha oficial com informações de todas as escolas que fazem parte da organização KWAN-DO.",
      doc1Badge: "Escolas",
      doc2Title: "Teoria do Taekwon-Do",
      doc2Desc: "Material teórico oficial do Taekwon-Do ITF. Fundamentos, história, filosofia e princípios da arte marcial.",
      doc2Badge: "Teoria",
      downloadBtn: "Baixar PDF",
      footerNote: "Material de uso livre para alunos e escolas KWAN-DO",
    },

    pillars: {
      badge: "Filosofia ITF",
      title1: "Os 5 Princípios",
      title2: "do Taekwondo",
      subtitle: "Selecione um princípio para conhecer seu significado e seu lugar no caminho do Kwan-Do.",
      hintDesktop: "Selecione um princípio para expandi-lo",
      hintMobile: "Toque em um princípio para expandi-lo",
      closeBtnLabel: "Fechar",
      items: [
        {
          name: "Cortesia",
          description: "O respeito ao instrutor, aos colegas e a si mesmo é a porta de entrada para o caminho marcial. Sem cortesia não há aprendizado verdadeiro.",
        },
        {
          name: "Integridade",
          description: "Agir com honestidade dentro e fora do dojang. A integridade é a diferença entre saber lutar e ser um verdadeiro artista marcial.",
        },
        {
          name: "Perseverança",
          description: "Cada queda é parte do treinamento. Levantar sempre, superar limites e nunca desistir diante da adversidade.",
        },
        {
          name: "Autocontrole",
          description: "A força mais difícil de dominar é a própria. O autocontrole no combate e na vida define o verdadeiro praticante.",
        },
        {
          name: "Espírito Indomável",
          description: "Um espírito que não pode ser dobrado. Diante da injustiça, da dúvida ou da dor, o verdadeiro guerreiro permanece de pé.",
        },
      ],
    },

    gallery: {
      badge: "Momentos Kwan-Do",
      title: "Galeria",
      subtitle: "Treinos, encontros e cenas reais do caminho dentro do dojang.",
      ariaZoom: "Ver imagem da galeria em tamanho completo",
      ariaClose: "Fechar imagem",
    },

    kickScroll: {
      loading: "Carregando sequência",
      phases: [
        {
          eyebrow: "Fase 01",
          label: "Preparação",
          title: ["A fase de", "Preparação"],
          body: "O taekwondista inicia a flexão do joelho elevando a perna de ataque. O olhar firme no objetivo estabelece a linha de força e o equilíbrio inicial.",
        },
        {
          eyebrow: "Fase 02",
          label: "Pivotamento",
          title: ["Pivotamento de", "Base e Quadril"],
          body: "O pé de apoio gira 180 graus. Essa rotação transfere energia do chão ao tronco superior, alinhando mecanicamente o quadril para máxima potência.",
        },
        {
          eyebrow: "Fase 03",
          label: "Impacto",
          title: ["Yop Chagi", "Linha Perfeita"],
          body: "Extensão total. O impacto é projetado pelo balkal, a borda externa do pé. Ombro, quadril e calcanhar formam uma linha reta de transferência de energia cinética.",
        },
        {
          eyebrow: "Fase 04",
          label: "Recuperação",
          title: ["Equilíbrio e", "Guarda Final"],
          body: "A perna é recolhida com controle seguindo o mesmo vetor de entrada, mantendo o equilíbrio dinâmico e retornando à guarda sem perder a estabilidade.",
        },
      ],
    },

    benefits: {
      label: "POTENCIAL ILIMITADO",
      title1: "Benefícios do",
      title2: "Treinamento",
      card1Title: "Defesa Pessoal",
      card1Text: "Técnicas eficazes e realistas para situações críticas, aumentando sua segurança.",
      card2Title: "Confiança",
      card2Text: "Supere seus limites e desenvolva uma mentalidade vencedora inabalável.",
      card3Title: "Condicionamento Físico",
      card3Text: "Melhore força, flexibilidade e resistência cardiovascular de alto nível.",
    },

    schedule: {
      label: "ORGANIZE SEU TEMPO",
      title: "Horários Semanais",
      subtitle: "Treinos projetados para se adaptar à sua rotina diária",
      colTime: "Horário",
      colDays: "Dias",
      colClass: "Aula",
      dayLabel: "Dias",
      classLabel: "Aula",
      note: "⚡ Aulas especiais aos sábados: 9:00 - 11:00 (Consulte disponibilidade)",
      schedule1Days: "Segunda / Quarta / Sexta",
      schedule1Class: "Infantis / Cadetes",
      schedule2Days: "Segunda / Quarta / Sexta",
      schedule2Class: "Adultos",
      legend1: "Infantis / Cadetes",
      legend2: "Adultos",
    },

    contact: {
      title: "Entre em Contato",
      namePlaceholder: "Nome",
      messagePlaceholder: "Sua consulta",
      submitBtn: "Contatar",
      locationTitle: "Nossa Sede",
      locationAddress: "Av. Marcial 1234, CABA",
      whatsappMessage: "Olá, gostaria de consultar sobre aulas e horários.",
      whatsappName: "Sem nome",
      whatsappNoMsg: "Sem mensagem",
    },

    modal: {
      eyebrow: "Escreva para nós",
      title: "Faça sua consulta",
      ariaClose: "Fechar",
      nameLabel: "Seu nome",
      namePlaceholder: "Ex: João Silva",
      messageLabel: "Sua mensagem",
      messagePlaceholder: "Conte-nos o que você quer saber...",
      submitBtn: "Enviar pelo WhatsApp",
      hint: "Ao clicar você será redirecionado ao WhatsApp com sua mensagem pronta para enviar.",
      whatsappIntro: "Olá KWAN-DO! Sou",
      whatsappDefault: "um interessado",
      whatsappDefaultMsg: "Gostaria de consultar sobre aulas e horários.",
    },

    footer: {
      description: "Formamos pessoas íntegras por meio do Taekwon-Do ITF, promovendo disciplina, respeito e superação.",
      navTitle: "Navegação",
      usefulTitle: "Links Úteis",
      followTitle: "Siga-nos",
      schoolsLabel: "Escolas que fazem parte",
      pillars: ["Disciplina", "Respeito", "Integridade", "Perseverança", "Autocontrole", "Espírito Indomável"],
      copyright: "Todos os direitos reservados.",
      navLinks: [
        { label: "Início", href: "#home" },
        { label: "Sobre nós", href: "#about" },
        { label: "Princípios", href: "#pillars" },
        { label: "Galeria", href: "#gallery" },
        { label: "Horários", href: "#schedule" },
        { label: "Contato", href: "#contact" },
      ],
      usefulLinks: [
        { label: "Técnica Yop Chagi", href: "#kick-animation" },
        { label: "Benefícios do treinamento", href: "#training-benefits" },
        { label: "Consultar horários", href: "#schedule" },
        { label: "Junte-se agora", href: "#contact" },
      ],
    },

    whatsappBtn: "Consultar pelo WhatsApp",
  },
} as const;

export type Translations = typeof translations.es;
