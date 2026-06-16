/* =========================================================
   CRIA FRAMES — Interaction Layer v3
   ========================================================= */

const DB = {
    proposals: 'cria_proposals_v1',
    portfolio:  'cria_portfolio_v1',
    admin:      'cria_admin_v1',
    intro:      'cria_intro_v1',
    lang:       'cria_lang_v1',
};
const PWD = 'cria2026';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

function load(key)    { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; } }
function save(key, v) { localStorage.setItem(key, JSON.stringify(v)); }


/* =========================================================
   COUNTRIES & LANGUAGES
   ========================================================= */
const COUNTRIES = [
    { flag:'🇺🇸', name:'United States',       lang:'en'  },
    { flag:'🇬🇧', name:'United Kingdom',       lang:'en'  },
    { flag:'🇧🇷', name:'Brasil',               lang:'pt'  },
    { flag:'🇯🇵', name:'日本 (Japan)',          lang:'ja'  },
    { flag:'🇰🇷', name:'한국 (South Korea)',    lang:'ko'  },
    { flag:'🇨🇳', name:'中国 (China)',          lang:'zh'  },
    { flag:'🇫🇷', name:'France',               lang:'fr'  },
    { flag:'🇩🇪', name:'Deutschland',          lang:'de'  },
    { flag:'🇮🇳', name:'India',                lang:'hi'  },
    { flag:'🇨🇦', name:'Canada',               lang:'en'  },
    { flag:'🇦🇺', name:'Australia',            lang:'en'  },
    { flag:'🇲🇽', name:'México',               lang:'es'  },
    { flag:'🇪🇸', name:'España',               lang:'es'  },
    { flag:'🇮🇹', name:'Italia',               lang:'it'  },
    { flag:'🇳🇱', name:'Nederland',            lang:'nl'  },
    { flag:'🇷🇺', name:'Россия (Russia)',       lang:'ru'  },
    { flag:'🇸🇪', name:'Sverige',              lang:'sv'  },
    { flag:'🇩🇰', name:'Danmark',              lang:'da'  },
    { flag:'🇳🇴', name:'Norge',                lang:'no'  },
    { flag:'🇧🇪', name:'Belgique / België',    lang:'fr'  },
    { flag:'🇨🇭', name:'Schweiz / Suisse',     lang:'de'  },
    { flag:'🇦🇹', name:'Österreich',           lang:'de'  },
    { flag:'🇵🇱', name:'Polska',               lang:'pl'  },
    { flag:'🇦🇷', name:'Argentina',            lang:'es'  },
    { flag:'🇨🇴', name:'Colombia',             lang:'es'  },
    { flag:'🇨🇱', name:'Chile',                lang:'es'  },
    { flag:'🇦🇪', name:'الإمارات (UAE)',        lang:'ar'  },
    { flag:'🇸🇦', name:'السعودية (Saudi)',      lang:'ar'  },
    { flag:'🇮🇱', name:'Israel',               lang:'en'  },
    { flag:'🇹🇷', name:'Türkiye',              lang:'tr'  },
    { flag:'🇳🇿', name:'New Zealand',          lang:'en'  },
    { flag:'🇸🇬', name:'Singapore',            lang:'en'  },
    { flag:'🇭🇰', name:'香港 (Hong Kong)',      lang:'zh'  },
    { flag:'🇹🇼', name:'台灣 (Taiwan)',         lang:'zh'  },
    { flag:'🇹🇭', name:'ประเทศไทย (Thailand)', lang:'th'  },
    { flag:'🇮🇩', name:'Indonesia',            lang:'id'  },
    { flag:'🇲🇾', name:'Malaysia',             lang:'ms'  },
    { flag:'🇿🇦', name:'South Africa',         lang:'en'  },
    { flag:'🇵🇹', name:'Portugal',             lang:'pt'  },
    { flag:'🇮🇪', name:'Ireland',              lang:'en'  },
    { flag:'🇫🇮', name:'Suomi (Finland)',       lang:'fi'  },
    { flag:'🇨🇿', name:'Česká republika',       lang:'cs'  },
    { flag:'🇭🇺', name:'Magyarország',          lang:'hu'  },
    { flag:'🇬🇷', name:'Ελλάδα (Greece)',       lang:'el'  },
    { flag:'🇺🇦', name:'Україна (Ukraine)',     lang:'uk'  },
    { flag:'🇻🇳', name:'Việt Nam',             lang:'vi'  },
    { flag:'🇵🇭', name:'Philippines',          lang:'en'  },
    { flag:'🇪🇬', name:'مصر (Egypt)',           lang:'ar'  },
    { flag:'🇳🇬', name:'Nigeria',              lang:'en'  },
    { flag:'🇵🇪', name:'Perú',                 lang:'es'  },
];

/* =========================================================
   TRANSLATIONS
   ========================================================= */
const T = {
    pt: {
        'nav.home':'Início','nav.about':'Sobre','nav.capabilities':'Capacidades',
        'nav.portfolio':'Portfólio','nav.contact':'Propostas',
        'hero.eyebrow':'A PRIMEIRA PRODUTORA DE IA DE GOIÁS · GOIÂNIA · BRASIL',
        'hero.line1':'NÓS','hero.line2':'CRIAMOS','hero.line3':'O IMPOSSÍVEL',
        'cria.c':'riação','cria.r':'evolucionária','cria.i.pre':'com ','cria.i':'nteligência','cria.a':'rtificial',
        'cria.word.c':'Criação','cria.word.r':'Revolucionária','cria.word.i':'com Inteligência','cria.word.a':'Artificial',
        'hero.desc':'Somos a <strong>CRIA Frames</strong> — a primeira produtora de Inteligência Artificial de Goiás. Especializada em <em>IA generativa</em>, transformamos ideias em imagens, filmes e narrativas com qualidade cinematográfica, em uma fração do tempo e do custo.',
        'hero.btn.portfolio':'Ver Portfólio','hero.btn.contact':'Enviar Proposta',
        'metric.days':'dias úteis<br>por projeto','metric.realism':'realismo<br>cinematográfico','metric.possibilities':'possibilidades<br>criativas',
        'mq.commercials':'COMERCIAIS','mq.photo':'FOTOGRAFIA HIPER-REAL','mq.posters':'PÔSTERES',
        'mq.shorts':'CURTAS','mq.adfilms':'FILMES PUBLICITÁRIOS','mq.features':'LONGA-METRAGENS','mq.clips':'VIDEOCLIPES',
        'about.tag':'02 · NOSSA HISTÓRIA','about.title':'A ideia esperou o seu tempo.',
        'about.lead':'A <strong>CRIA</strong> nasceu em <mark>2023</mark>, quando a inteligência artificial começava a sussurrar promessas de um novo cinema. Vimos antes — mas a tecnologia ainda não estava madura o suficiente para entregar a qualidade que sonhávamos.',
        'about.p1':'Esperamos. Estudamos. Acompanhamos cada salto, cada modelo, cada nova ferramenta. E <mark>hoje</mark>, em 2026, a tecnologia finalmente alcançou nossa ambição.',
        'about.p2':'Existem hoje <em>mais ferramentas do que o suficiente</em> para criarmos algo verdadeiramente lindo e cinematográfico para o seu negócio. Não falamos mais de promessa — falamos de execução. A luz, enfim, se acendeu.',
        'tl.2023':'<strong>A faísca.</strong> A ideia da CRIA é concebida. As ferramentas ainda não entregam a qualidade cinematográfica exigida.',
        'tl.2024':'<strong>O estudo.</strong> Cada modelo, cada release. Construímos repertório técnico e estético profundo.',
        'tl.2025':'<strong>O ponto de virada.</strong> Modelos generativos atingem fidelidade fotográfica e coerência temporal real.',
        'tl.2026':'<strong>A luz se acende.</strong> A CRIA Frames é lançada. Cinema feito de inteligência, entregue em dias.',
        'cap.tag':'03 · DO QUE SOMOS CAPAZES',
        'cap.title':'Tudo que a câmera pode —<br>e o que ela <em>não</em> pode.',
        'cap.sub':'Da fotografia mais íntima ao épico impossível. O nosso limite é a imaginação do roteiro.',
        'cap.1.title':'Imagens hiper-realistas','cap.1.desc':'Conceitos visuais impossíveis de fotografar com fidelidade indistinguível do real.',
        'cap.2.title':'Pôsteres & Key Art','cap.2.desc':'Cartazes de cinema, capas de campanha e identidades visuais com direção de arte de alto nível.',
        'cap.3.title':'Fotografia 100% realista','cap.3.desc':'Ensaios, produtos e locações que nunca existiram — com qualidade de equipamento profissional.',
        'cap.4.title':'Comerciais & VTs','cap.4.desc':'Filmes publicitários com narrativa, ritmo e identidade cinematográfica de alto padrão.',
        'cap.5.title':'Filmes publicitários','cap.5.desc':'Branded films, conteúdo institucional e campanhas com produção visual de altíssimo nível.',
        'cap.6.title':'Curtas & Longa-metragens','cap.6.desc':'Sim — fazemos cinema. Roteiros originais ou adaptações, curta ou longa, com estética autoral.',
        'cap.footer.text':'Tem uma ideia que parecia impossível?','cap.footer.btn':'Conte para nós',
        'port.tag':'04 · PORTFÓLIO','port.title':'Frames que contam histórias.',
        'port.sub':'Uma seleção dos nossos trabalhos. Cada filme, um experimento; cada experimento, uma descoberta.',
        'port.empty':'Nosso showreel está sendo finalizado.<br>Em breve, os primeiros frames.',
        'contact.tag':'05 · ENVIE SUA PROPOSTA','contact.title':'Clientes, parceiros<br>e ideias bem-vindos.',
        'contact.sub':'Lemos cada mensagem com atenção e respondemos em até 48 horas úteis.',
        'form.name':'Nome completo *','form.company':'Empresa / Marca','form.email':'E-mail *',
        'form.phone':'Telefone / WhatsApp','form.type':'Tipo de projeto *',
        'form.type.select':'Selecione...','form.type.commercial':'Comercial / VT',
        'form.type.adfilm':'Filme publicitário','form.type.photo':'Fotografia / Imagem',
        'form.type.poster':'Pôster / Key Art','form.type.short':'Curta-metragem',
        'form.type.feature':'Longa-metragem','form.type.agency':'Parceria / Agência','form.type.other':'Outro',
        'form.message':'Descreva sua ideia *','form.submit':'Enviar proposta',
        'form.note':'Suas informações são lidas apenas pela equipe CRIA.',
        'form.ok.title':'Recebemos sua proposta.','form.ok.body':'Nossa equipe entrará em contato em breve. Obrigado por confiar na CRIA.',
        'footer.tagline':'Cinema feito de inteligência.<br>Goiânia · Brasil · 2026',
        'footer.nav':'Navegação','footer.contact':'Contato',
        'lang.confirm':'Entrar no site ›',
    },

    en: {
        'nav.home':'Home','nav.about':'About','nav.capabilities':'Capabilities',
        'nav.portfolio':'Portfolio','nav.contact':'Contact',
        'hero.eyebrow':'THE FIRST AI PRODUCTION STUDIO OF GOIÁS · BRAZIL',
        'hero.line1':'WE','hero.line2':'CREATE','hero.line3':'THE IMPOSSIBLE',
        'cria.c':'reative','cria.r':'evolutionary','cria.i.pre':'with ','cria.i':'ntelligence','cria.a':'rtificial',
        'cria.word.c':'Creative','cria.word.r':'Revolutionary','cria.word.i':'with Intelligence','cria.word.a':'Artificial',
        'hero.desc':'We are <strong>CRIA Frames</strong> — the first Artificial Intelligence production studio in Goiás. Specializing in <em>generative AI</em>, we transform ideas into images, films, and narratives with cinematic quality, in a fraction of the time and cost.',
        'hero.btn.portfolio':'View Portfolio','hero.btn.contact':'Send Proposal',
        'metric.days':'business days<br>per project','metric.realism':'cinematic<br>realism','metric.possibilities':'creative<br>possibilities',
        'mq.commercials':'COMMERCIALS','mq.photo':'HYPER-REAL PHOTOGRAPHY','mq.posters':'POSTERS',
        'mq.shorts':'SHORT FILMS','mq.adfilms':'ADVERTISING FILMS','mq.features':'FEATURE FILMS','mq.clips':'MUSIC VIDEOS',
        'about.tag':'02 · OUR STORY','about.title':'The idea waited for its time.',
        'about.lead':'<strong>CRIA</strong> was born in <mark>2023</mark>, when artificial intelligence was beginning to whisper promises of a new cinema. We saw it early — but the technology was not yet mature enough to deliver the quality we dreamed of.',
        'about.p1':'We waited. We studied. We followed every leap, every model, every new tool. And <mark>today</mark>, in 2026, the technology has finally caught up with our ambition.',
        'about.p2':'There are now <em>more than enough tools</em> to create something truly beautiful and cinematic for your business. We no longer speak of promise — we speak of execution. The light has finally turned on.',
        'tl.2023':'<strong>The spark.</strong> The CRIA concept is born. Tools still cannot deliver the required cinematic quality.',
        'tl.2024':'<strong>The study.</strong> Every model, every release. We built deep technical and aesthetic expertise.',
        'tl.2025':'<strong>The turning point.</strong> Generative models reach photographic fidelity and real temporal coherence.',
        'tl.2026':'<strong>The light turns on.</strong> CRIA Frames launches. Cinema made of intelligence, delivered in days.',
        'cap.tag':'03 · WHAT WE CAN DO',
        'cap.title':'Everything a camera can —<br>and what it <em>cannot</em>.',
        'cap.sub':'From the most intimate photography to the impossible epic. Our only limit is the screenplay\'s imagination.',
        'cap.1.title':'Hyper-realistic Images','cap.1.desc':'Visual concepts impossible to photograph, with fidelity indistinguishable from reality.',
        'cap.2.title':'Posters & Key Art','cap.2.desc':'Movie posters, campaign covers and visual identities with top-level art direction.',
        'cap.3.title':'100% Realistic Photography','cap.3.desc':'Portraits, products and locations that never existed — with professional equipment quality.',
        'cap.4.title':'Commercials & Ads','cap.4.desc':'Advertising films with narrative, rhythm and high-standard cinematic identity.',
        'cap.5.title':'Advertising Films','cap.5.desc':'Branded films, institutional content and campaigns with the highest visual production standards.',
        'cap.6.title':'Short & Feature Films','cap.6.desc':'Yes — we make cinema. Original scripts or adaptations, short or feature, with authorial aesthetics.',
        'cap.footer.text':'Have an idea that seemed impossible?','cap.footer.btn':'Tell us about it',
        'port.tag':'04 · PORTFOLIO','port.title':'Frames that tell stories.',
        'port.sub':'A selection of our work. Each film, an experiment; each experiment, a discovery.',
        'port.empty':'Our showreel is being finalized.<br>Coming soon: the first frames.',
        'contact.tag':'05 · SEND YOUR PROPOSAL','contact.title':'Clients, partners<br>and ideas welcome.',
        'contact.sub':'We read every message carefully and respond within 48 business hours.',
        'form.name':'Full name *','form.company':'Company / Brand','form.email':'E-mail *',
        'form.phone':'Phone / WhatsApp','form.type':'Project type *',
        'form.type.select':'Select...','form.type.commercial':'Commercial / Ad',
        'form.type.adfilm':'Advertising film','form.type.photo':'Photography / Image',
        'form.type.poster':'Poster / Key Art','form.type.short':'Short film',
        'form.type.feature':'Feature film','form.type.agency':'Partnership / Agency','form.type.other':'Other',
        'form.message':'Describe your idea *','form.submit':'Send proposal',
        'form.note':'Your information is read only by the CRIA team.',
        'form.ok.title':'We received your proposal.','form.ok.body':'Our team will be in touch soon. Thank you for trusting CRIA.',
        'footer.tagline':'Cinema made of intelligence.<br>Goiânia · Brazil · 2026',
        'footer.nav':'Navigation','footer.contact':'Contact',
        'lang.confirm':'Enter the site ›',
    },

    es: {
        'nav.home':'Inicio','nav.about':'Sobre nosotros','nav.capabilities':'Capacidades',
        'nav.portfolio':'Portafolio','nav.contact':'Propuestas',
        'hero.eyebrow':'EL PRIMER ESTUDIO DE IA DE GOIÁS · BRASIL',
        'hero.line1':'NOSOTROS','hero.line2':'CREAMOS','hero.line3':'LO IMPOSIBLE',
        'cria.c':'reación','cria.r':'evolucionaria','cria.i.pre':'con ','cria.i':'nteligencia','cria.a':'rtificial',
        'cria.word.c':'Creación','cria.word.r':'Revolucionaria','cria.word.i':'con Inteligencia','cria.word.a':'Artificial',
        'hero.desc':'Somos <strong>CRIA Frames</strong> — el primer estudio de producción audiovisual con Inteligencia Artificial de Goiás. Especializados en <em>IA generativa</em>, transformamos ideas en imágenes, películas y narrativas con calidad cinematográfica, en una fracción del tiempo y el costo.',
        'hero.btn.portfolio':'Ver Portafolio','hero.btn.contact':'Enviar Propuesta',
        'metric.days':'días hábiles<br>por proyecto','metric.realism':'realismo<br>cinematográfico','metric.possibilities':'posibilidades<br>creativas',
        'mq.commercials':'COMERCIALES','mq.photo':'FOTOGRAFÍA HÍPER-REAL','mq.posters':'PÓSTERS',
        'mq.shorts':'CORTOMETRAJES','mq.adfilms':'PELÍCULAS PUBLICITARIAS','mq.features':'LARGOMETRAJES','mq.clips':'VIDEOCLIPS',
        'about.tag':'02 · NUESTRA HISTORIA','about.title':'La idea esperó su momento.',
        'about.lead':'<strong>CRIA</strong> nació en <mark>2023</mark>, cuando la inteligencia artificial comenzaba a susurrar promesas de un nuevo cine. Lo vimos antes — pero la tecnología aún no era suficientemente madura para entregar la calidad que soñábamos.',
        'about.p1':'Esperamos. Estudiamos. Seguimos cada salto, cada modelo, cada nueva herramienta. Y <mark>hoy</mark>, en 2026, la tecnología finalmente alcanzó nuestra ambición.',
        'about.p2':'Existen hoy <em>más herramientas que suficientes</em> para crear algo verdaderamente hermoso y cinematográfico para tu negocio. Ya no hablamos de promesa — hablamos de ejecución. La luz, por fin, se encendió.',
        'tl.2023':'<strong>La chispa.</strong> Nace la idea de CRIA. Las herramientas aún no entregan la calidad cinematográfica requerida.',
        'tl.2024':'<strong>El estudio.</strong> Cada modelo, cada lanzamiento. Construimos repertorio técnico y estético profundo.',
        'tl.2025':'<strong>El punto de inflexión.</strong> Los modelos generativos alcanzan fidelidad fotográfica y coherencia temporal real.',
        'tl.2026':'<strong>La luz se enciende.</strong> CRIA Frames es lanzada. Cine hecho de inteligencia, entregado en días.',
        'cap.tag':'03 · LO QUE PODEMOS HACER',
        'cap.title':'Todo lo que la cámara puede —<br>y lo que <em>no</em> puede.',
        'cap.sub':'Desde la fotografía más íntima hasta el épico imposible. Nuestro límite es la imaginación del guión.',
        'cap.1.title':'Imágenes hiper-realistas','cap.1.desc':'Conceptos visuales imposibles de fotografiar con fidelidad indistinguible de la realidad.',
        'cap.2.title':'Pósters & Key Art','cap.2.desc':'Carteles de cine, portadas de campaña e identidades visuales con dirección de arte de alto nivel.',
        'cap.3.title':'Fotografía 100% realista','cap.3.desc':'Retratos, productos y locaciones que nunca existieron — con calidad de equipo profesional.',
        'cap.4.title':'Comerciales & Spots','cap.4.desc':'Películas publicitarias con narrativa, ritmo e identidad cinematográfica de alto estándar.',
        'cap.5.title':'Películas publicitarias','cap.5.desc':'Branded films, contenido institucional y campañas con producción visual de altísimo nivel.',
        'cap.6.title':'Corto & Largometrajes','cap.6.desc':'Sí — hacemos cine. Guiones originales o adaptaciones, corto o largo, con estética autoral.',
        'cap.footer.text':'¿Tienes una idea que parecía imposible?','cap.footer.btn':'Cuéntanos',
        'port.tag':'04 · PORTAFOLIO','port.title':'Frames que cuentan historias.',
        'port.sub':'Una selección de nuestros trabajos. Cada película, un experimento; cada experimento, un descubrimiento.',
        'port.empty':'Nuestro showreel está siendo finalizado.<br>Próximamente, los primeros frames.',
        'contact.tag':'05 · ENVÍA TU PROPUESTA','contact.title':'Clientes, socios<br>e ideas son bienvenidos.',
        'contact.sub':'Leemos cada mensaje con atención y respondemos en hasta 48 horas hábiles.',
        'form.name':'Nombre completo *','form.company':'Empresa / Marca','form.email':'Correo electrónico *',
        'form.phone':'Teléfono / WhatsApp','form.type':'Tipo de proyecto *',
        'form.type.select':'Seleccionar...','form.type.commercial':'Comercial / Spot',
        'form.type.adfilm':'Película publicitaria','form.type.photo':'Fotografía / Imagen',
        'form.type.poster':'Póster / Key Art','form.type.short':'Cortometraje',
        'form.type.feature':'Largometraje','form.type.agency':'Asociación / Agencia','form.type.other':'Otro',
        'form.message':'Describe tu idea *','form.submit':'Enviar propuesta',
        'form.note':'Tu información es leída solo por el equipo de CRIA.',
        'form.ok.title':'Recibimos tu propuesta.','form.ok.body':'Nuestro equipo se pondrá en contacto pronto. Gracias por confiar en CRIA.',
        'footer.tagline':'Cine hecho de inteligencia.<br>Goiânia · Brasil · 2026',
        'footer.nav':'Navegación','footer.contact':'Contacto',
        'lang.confirm':'Entrar al sitio ›',
    },

    fr: {
        'nav.home':'Accueil','nav.about':'À propos','nav.capabilities':'Capacités',
        'nav.portfolio':'Portfolio','nav.contact':'Propositions',
        'hero.eyebrow':'LE PREMIER STUDIO IA DE GOIÁS · BRÉSIL',
        'hero.line1':'NOUS','hero.line2':'CRÉONS','hero.line3':'L\'IMPOSSIBLE',
        'cria.c':'réation','cria.r':'évolutionnaire','cria.i.pre':'avec ','cria.i':'ntelligence','cria.a':'rtificielle',
        'cria.word.c':'Création','cria.word.r':'Révolutionnaire','cria.word.i':'avec Intelligence','cria.word.a':'Artificielle',
        'hero.desc':'Nous sommes <strong>CRIA Frames</strong> — le premier studio de production audiovisuelle par IA de Goiás. Spécialisés en <em>IA générative</em>, nous transformons des idées en images, films et récits d\'une qualité cinématographique, en une fraction du temps et du coût.',
        'hero.btn.portfolio':'Voir le Portfolio','hero.btn.contact':'Envoyer une Proposition',
        'metric.days':'jours ouvrés<br>par projet','metric.realism':'réalisme<br>cinématographique','metric.possibilities':'possibilités<br>créatives',
        'mq.commercials':'PUBLICITÉS','mq.photo':'PHOTOGRAPHIE HYPER-RÉELLE','mq.posters':'AFFICHES',
        'mq.shorts':'COURTS MÉTRAGES','mq.adfilms':'FILMS PUBLICITAIRES','mq.features':'LONGS MÉTRAGES','mq.clips':'CLIPS VIDÉO',
        'about.tag':'02 · NOTRE HISTOIRE','about.title':'L\'idée a attendu son heure.',
        'about.lead':'<strong>CRIA</strong> est née en <mark>2023</mark>, quand l\'intelligence artificielle commençait à chuchoter des promesses d\'un nouveau cinéma. Nous l\'avons vu venir — mais la technologie n\'était pas encore assez mature pour livrer la qualité dont nous rêvions.',
        'about.p1':'Nous avons attendu. Étudié. Suivi chaque bond, chaque modèle, chaque nouvel outil. Et <mark>aujourd\'hui</mark>, en 2026, la technologie a enfin rejoint notre ambition.',
        'about.p2':'Il existe aujourd\'hui <em>plus qu\'assez d\'outils</em> pour créer quelque chose de magnifique et cinématographique pour votre entreprise. Nous ne parlons plus de promesse — nous parlons d\'exécution. La lumière s\'est enfin allumée.',
        'tl.2023':'<strong>L\'étincelle.</strong> L\'idée de CRIA naît. Les outils ne livrent pas encore la qualité cinématographique requise.',
        'tl.2024':'<strong>L\'étude.</strong> Chaque modèle, chaque version. Nous avons construit un répertoire technique et esthétique profond.',
        'tl.2025':'<strong>Le tournant.</strong> Les modèles génératifs atteignent la fidélité photographique et la cohérence temporelle réelle.',
        'tl.2026':'<strong>La lumière s\'allume.</strong> CRIA Frames est lancée. Du cinéma fait d\'intelligence, livré en jours.',
        'cap.tag':'03 · CE QUE NOUS FAISONS',
        'cap.title':'Tout ce que la caméra peut —<br>et ce qu\'elle <em>ne</em> peut pas.',
        'cap.sub':'De la photographie la plus intime à l\'épique impossible. Notre seule limite est l\'imagination du scénario.',
        'cap.1.title':'Images hyper-réalistes','cap.1.desc':'Concepts visuels impossibles à photographier, avec une fidélité indiscernable de la réalité.',
        'cap.2.title':'Affiches & Key Art','cap.2.desc':'Affiches de cinéma, couvertures de campagne et identités visuelles avec une direction artistique de haut niveau.',
        'cap.3.title':'Photographie 100% réaliste','cap.3.desc':'Portraits, produits et lieux qui n\'ont jamais existé — avec la qualité d\'un équipement professionnel.',
        'cap.4.title':'Publicités & Spots','cap.4.desc':'Films publicitaires avec narration, rythme et identité cinématographique de haut niveau.',
        'cap.5.title':'Films publicitaires','cap.5.desc':'Branded films, contenu institutionnel et campagnes avec la plus haute production visuelle.',
        'cap.6.title':'Courts & Longs métrages','cap.6.desc':'Oui — nous faisons du cinéma. Scripts originaux ou adaptations, courts ou longs, avec une esthétique d\'auteur.',
        'cap.footer.text':'Vous avez une idée qui semblait impossible ?','cap.footer.btn':'Parlez-nous',
        'port.tag':'04 · PORTFOLIO','port.title':'Des frames qui racontent des histoires.',
        'port.sub':'Une sélection de nos travaux. Chaque film, une expérience ; chaque expérience, une découverte.',
        'port.empty':'Notre showreel est en cours de finalisation.<br>Bientôt, les premiers frames.',
        'contact.tag':'05 · ENVOYEZ VOTRE PROPOSITION','contact.title':'Clients, partenaires<br>et idées bienvenus.',
        'contact.sub':'Nous lisons chaque message attentivement et répondons dans les 48 heures ouvrables.',
        'form.name':'Nom complet *','form.company':'Entreprise / Marque','form.email':'E-mail *',
        'form.phone':'Téléphone / WhatsApp','form.type':'Type de projet *',
        'form.type.select':'Sélectionner...','form.type.commercial':'Publicité / Spot',
        'form.type.adfilm':'Film publicitaire','form.type.photo':'Photographie / Image',
        'form.type.poster':'Affiche / Key Art','form.type.short':'Court métrage',
        'form.type.feature':'Long métrage','form.type.agency':'Partenariat / Agence','form.type.other':'Autre',
        'form.message':'Décrivez votre idée *','form.submit':'Envoyer la proposition',
        'form.note':'Vos informations sont lues uniquement par l\'équipe CRIA.',
        'form.ok.title':'Nous avons reçu votre proposition.','form.ok.body':'Notre équipe vous contactera bientôt. Merci de faire confiance à CRIA.',
        'footer.tagline':'Cinéma fait d\'intelligence.<br>Goiânia · Brésil · 2026',
        'footer.nav':'Navigation','footer.contact':'Contact',
        'lang.confirm':'Entrer sur le site ›',
    },

    de: {
        'nav.home':'Start','nav.about':'Über uns','nav.capabilities':'Leistungen',
        'nav.portfolio':'Portfolio','nav.contact':'Anfrage',
        'hero.eyebrow':'DAS ERSTE KI-PRODUKTIONSSTUDIO IN GOIÁS · BRASILIEN',
        'hero.line1':'WIR','hero.line2':'ERSCHAFFEN','hero.line3':'DAS UNMÖGLICHE',
        'cria.c':'reative','cria.r':'evolutionäre','cria.i.pre':'mit ','cria.i':'ntelligenz','cria.a':'rtifizielle',
        'cria.word.c':'Kreative','cria.word.r':'Revolutionäre','cria.word.i':'mit Intelligenz','cria.word.a':'Künstliche',
        'hero.desc':'Wir sind <strong>CRIA Frames</strong> — das erste KI-Produktionsstudio in Goiás. Spezialisiert auf <em>generative KI</em>, verwandeln wir Ideen in Bilder, Filme und Erzählungen mit kinematografischer Qualität, in einem Bruchteil der Zeit und der Kosten.',
        'hero.btn.portfolio':'Portfolio ansehen','hero.btn.contact':'Anfrage senden',
        'metric.days':'Werktage<br>pro Projekt','metric.realism':'kinematografischer<br>Realismus','metric.possibilities':'kreative<br>Möglichkeiten',
        'mq.commercials':'WERBUNG','mq.photo':'HYPER-REALE FOTOGRAFIE','mq.posters':'POSTER',
        'mq.shorts':'KURZFILME','mq.adfilms':'WERBEFILME','mq.features':'SPIELFILME','mq.clips':'MUSIKVIDEOS',
        'about.tag':'02 · UNSERE GESCHICHTE','about.title':'Die Idee wartete auf ihre Zeit.',
        'about.lead':'<strong>CRIA</strong> wurde <mark>2023</mark> geboren, als künstliche Intelligenz begann, Versprechen eines neuen Kinos zu flüstern. Wir sahen es früh — aber die Technologie war noch nicht ausgereift genug, um die Qualität zu liefern, von der wir träumten.',
        'about.p1':'Wir warteten. Studierten. Verfolgten jeden Sprung, jedes Modell, jedes neue Werkzeug. Und <mark>heute</mark>, 2026, hat die Technologie unseren Ehrgeiz endlich eingeholt.',
        'about.p2':'Es gibt heute <em>mehr als genug Werkzeuge</em>, um etwas wirklich Schönes und Kinematografisches für Ihr Unternehmen zu schaffen. Wir sprechen nicht mehr von Versprechen — wir sprechen von Ausführung. Das Licht hat sich endlich eingeschaltet.',
        'tl.2023':'<strong>Der Funke.</strong> Die CRIA-Idee entsteht. Werkzeuge liefern noch nicht die erforderliche kinematografische Qualität.',
        'tl.2024':'<strong>Das Studium.</strong> Jedes Modell, jede Version. Wir haben ein tiefes technisches und ästhetisches Repertoire aufgebaut.',
        'tl.2025':'<strong>Der Wendepunkt.</strong> Generative Modelle erreichen fotografische Treue und reale zeitliche Kohärenz.',
        'tl.2026':'<strong>Das Licht geht an.</strong> CRIA Frames wird gelauncht. Kino aus Intelligenz, in Tagen geliefert.',
        'cap.tag':'03 · WAS WIR KÖNNEN',
        'cap.title':'Alles was die Kamera kann —<br>und was sie <em>nicht</em> kann.',
        'cap.sub':'Von der intimsten Fotografie bis zum unmöglichen Epos. Unsere einzige Grenze ist die Fantasie des Drehbuchs.',
        'cap.1.title':'Hyper-realistische Bilder','cap.1.desc':'Visuelle Konzepte, die unmöglich zu fotografieren sind, mit von der Realität nicht zu unterscheidender Treue.',
        'cap.2.title':'Poster & Key Art','cap.2.desc':'Kinoplakatе, Kampagnencover und visuelle Identitäten mit hochkarätiger Kunstregie.',
        'cap.3.title':'100% realistische Fotografie','cap.3.desc':'Porträts, Produkte und Locations, die nie existierten — mit professioneller Ausrüstungsqualität.',
        'cap.4.title':'Werbung & Spots','cap.4.desc':'Werbefilme mit Erzählung, Rhythmus und hochkarätiger kinematografischer Identität.',
        'cap.5.title':'Werbefilme','cap.5.desc':'Branded Films, institutionelle Inhalte und Kampagnen mit höchster visueller Produktion.',
        'cap.6.title':'Kurz- & Spielfilme','cap.6.desc':'Ja — wir machen Kino. Originaldrehbücher oder Adaptionen, Kurz- oder Spielfilm, mit Autorenästhetik.',
        'cap.footer.text':'Haben Sie eine Idee, die unmöglich schien?','cap.footer.btn':'Erzählen Sie uns',
        'port.tag':'04 · PORTFOLIO','port.title':'Frames, die Geschichten erzählen.',
        'port.sub':'Eine Auswahl unserer Arbeiten. Jeder Film ein Experiment; jedes Experiment eine Entdeckung.',
        'port.empty':'Unser Showreel wird fertiggestellt.<br>Bald: die ersten Frames.',
        'contact.tag':'05 · ANFRAGE SENDEN','contact.title':'Kunden, Partner<br>und Ideen willkommen.',
        'contact.sub':'Wir lesen jede Nachricht sorgfältig und antworten innerhalb von 48 Werktagen.',
        'form.name':'Vollständiger Name *','form.company':'Unternehmen / Marke','form.email':'E-Mail *',
        'form.phone':'Telefon / WhatsApp','form.type':'Projektart *',
        'form.type.select':'Auswählen...','form.type.commercial':'Werbung / Spot',
        'form.type.adfilm':'Werbefilm','form.type.photo':'Fotografie / Bild',
        'form.type.poster':'Poster / Key Art','form.type.short':'Kurzfilm',
        'form.type.feature':'Spielfilm','form.type.agency':'Partnerschaft / Agentur','form.type.other':'Sonstiges',
        'form.message':'Beschreiben Sie Ihre Idee *','form.submit':'Anfrage senden',
        'form.note':'Ihre Daten werden nur vom CRIA-Team gelesen.',
        'form.ok.title':'Wir haben Ihre Anfrage erhalten.','form.ok.body':'Unser Team wird sich bald bei Ihnen melden. Danke, dass Sie CRIA vertrauen.',
        'footer.tagline':'Kino aus Intelligenz.<br>Goiânia · Brasilien · 2026',
        'footer.nav':'Navigation','footer.contact':'Kontakt',
        'lang.confirm':'Website betreten ›',
    },

    it: {
        'nav.home':'Home','nav.about':'Chi siamo','nav.capabilities':'Capacità',
        'nav.portfolio':'Portfolio','nav.contact':'Proposte',
        'hero.eyebrow':'IL PRIMO STUDIO IA DI GOIÁS · BRASILE',
        'hero.line1':'NOI','hero.line2':'CREIAMO','hero.line3':'L\'IMPOSSIBILE',
        'cria.c':'reazione','cria.r':'evoluzionaria','cria.i.pre':'con ','cria.i':'ntelligenza','cria.a':'rtificiale',
        'cria.word.c':'Creazione','cria.word.r':'Rivoluzionaria','cria.word.i':'con Intelligenza','cria.word.a':'Artificiale',
        'hero.desc':'Siamo <strong>CRIA Frames</strong> — il primo studio di produzione audiovisiva con Intelligenza Artificiale di Goiás. Specializzati in <em>IA generativa</em>, trasformiamo idee in immagini, film e narrazioni con qualità cinematografica, in una frazione del tempo e del costo.',
        'hero.btn.portfolio':'Vedi Portfolio','hero.btn.contact':'Invia Proposta',
        'metric.days':'giorni lavorativi<br>per progetto','metric.realism':'realismo<br>cinematografico','metric.possibilities':'possibilità<br>creative',
        'mq.commercials':'SPOT','mq.photo':'FOTOGRAFIA IPER-REALE','mq.posters':'POSTER',
        'mq.shorts':'CORTOMETRAGGI','mq.adfilms':'FILM PUBBLICITARI','mq.features':'LUNGOMETRAGGI','mq.clips':'VIDEOCLIP',
        'about.tag':'02 · LA NOSTRA STORIA','about.title':'L\'idea ha aspettato il suo momento.',
        'about.lead':'<strong>CRIA</strong> è nata nel <mark>2023</mark>, quando l\'intelligenza artificiale iniziava a sussurrare promesse di un nuovo cinema. L\'abbiamo visto prima — ma la tecnologia non era ancora abbastanza matura per consegnare la qualità che sognavamo.',
        'about.p1':'Abbiamo aspettato. Studiato. Seguito ogni salto, ogni modello, ogni nuovo strumento. E <mark>oggi</mark>, nel 2026, la tecnologia ha finalmente raggiunto la nostra ambizione.',
        'about.p2':'Esistono oggi <em>più strumenti che sufficienti</em> per creare qualcosa di veramente bello e cinematografico per la tua azienda. Non parliamo più di promessa — parliamo di esecuzione. La luce, finalmente, si è accesa.',
        'tl.2023':'<strong>La scintilla.</strong> L\'idea di CRIA nasce. Gli strumenti non consegnano ancora la qualità cinematografica richiesta.',
        'tl.2024':'<strong>Lo studio.</strong> Ogni modello, ogni release. Abbiamo costruito un repertorio tecnico ed estetico profondo.',
        'tl.2025':'<strong>Il punto di svolta.</strong> I modelli generativi raggiungono la fedeltà fotografica e la coerenza temporale reale.',
        'tl.2026':'<strong>La luce si accende.</strong> CRIA Frames viene lanciata. Cinema fatto di intelligenza, consegnato in giorni.',
        'cap.tag':'03 · COSA SAPPIAMO FARE',
        'cap.title':'Tutto ciò che la camera può —<br>e ciò che <em>non</em> può.',
        'cap.sub':'Dalla fotografia più intima all\'epico impossibile. Il nostro unico limite è l\'immaginazione della sceneggiatura.',
        'cap.1.title':'Immagini iper-realistiche','cap.1.desc':'Concetti visivi impossibili da fotografare con fedeltà indistinguibile dalla realtà.',
        'cap.2.title':'Poster & Key Art','cap.2.desc':'Locandine cinematografiche, copertine di campagna e identità visive con direzione artistica di alto livello.',
        'cap.3.title':'Fotografia 100% realistica','cap.3.desc':'Ritratti, prodotti e location che non sono mai esistiti — con qualità da attrezzatura professionale.',
        'cap.4.title':'Spot & Commerciali','cap.4.desc':'Film pubblicitari con narrativa, ritmo e identità cinematografica di alto livello.',
        'cap.5.title':'Film pubblicitari','cap.5.desc':'Branded film, contenuto istituzionale e campagne con la massima produzione visiva.',
        'cap.6.title':'Corto & Lungometraggi','cap.6.desc':'Sì — facciamo cinema. Sceneggiature originali o adattamenti, corto o lungo, con estetica autoriale.',
        'cap.footer.text':'Hai un\'idea che sembrava impossibile?','cap.footer.btn':'Raccontacelo',
        'port.tag':'04 · PORTFOLIO','port.title':'Frame che raccontano storie.',
        'port.sub':'Una selezione dei nostri lavori. Ogni film, un esperimento; ogni esperimento, una scoperta.',
        'port.empty':'Il nostro showreel è in fase di finalizzazione.<br>Prossimamente, i primi frame.',
        'contact.tag':'05 · INVIA LA TUA PROPOSTA','contact.title':'Clienti, partner<br>e idee benvenuti.',
        'contact.sub':'Leggiamo ogni messaggio con attenzione e rispondiamo entro 48 ore lavorative.',
        'form.name':'Nome completo *','form.company':'Azienda / Marca','form.email':'E-mail *',
        'form.phone':'Telefono / WhatsApp','form.type':'Tipo di progetto *',
        'form.type.select':'Seleziona...','form.type.commercial':'Spot / Commerciale',
        'form.type.adfilm':'Film pubblicitario','form.type.photo':'Fotografia / Immagine',
        'form.type.poster':'Poster / Key Art','form.type.short':'Cortometraggio',
        'form.type.feature':'Lungometraggio','form.type.agency':'Partnership / Agenzia','form.type.other':'Altro',
        'form.message':'Descrivi la tua idea *','form.submit':'Invia proposta',
        'form.note':'Le tue informazioni sono lette solo dal team CRIA.',
        'form.ok.title':'Abbiamo ricevuto la tua proposta.','form.ok.body':'Il nostro team ti contatterà presto. Grazie per fidarti di CRIA.',
        'footer.tagline':'Cinema fatto di intelligenza.<br>Goiânia · Brasile · 2026',
        'footer.nav':'Navigazione','footer.contact':'Contatto',
        'lang.confirm':'Entra nel sito ›',
    },

    ja: {
        'nav.home':'ホーム','nav.about':'私たちについて','nav.capabilities':'能力',
        'nav.portfolio':'ポートフォリオ','nav.contact':'提案する',
        'hero.eyebrow':'ゴイアス州初のAIプロダクションスタジオ · ブラジル',
        'hero.line1':'私たちは','hero.line2':'創造する','hero.line3':'不可能を',
        'cria.c':'reative','cria.r':'evolutionary','cria.i.pre':'with ','cria.i':'ntelligence','cria.a':'rtificial',
        'cria.word.c':'創造的','cria.word.r':'革命的','cria.word.i':'知能で','cria.word.a':'人工的',
        'hero.desc':'私たちは<strong>CRIA Frames</strong>です — ゴイアス州初の人工知能映像制作スタジオ。<em>生成AI</em>を専門とし、時間とコストのほんの一部で、映画品質の画像、映画、物語にアイデアを変換します。',
        'hero.btn.portfolio':'ポートフォリオを見る','hero.btn.contact':'提案を送る',
        'metric.days':'営業日数<br>プロジェクトごと','metric.realism':'映画的<br>リアリズム','metric.possibilities':'創造的<br>可能性',
        'mq.commercials':'コマーシャル','mq.photo':'超リアル写真','mq.posters':'ポスター',
        'mq.shorts':'短編映画','mq.adfilms':'広告映画','mq.features':'長編映画','mq.clips':'ミュージックビデオ',
        'about.tag':'02 · 私たちのストーリー','about.title':'アイデアはその時を待っていた。',
        'about.lead':'<strong>CRIA</strong>は<mark>2023年</mark>に生まれました。人工知能が新しい映画の約束をささやき始めた頃です。私たちは早くから気づいていました — しかし技術はまだ、私たちが夢見た品質を届けるほど成熟していませんでした。',
        'about.p1':'私たちは待ちました。学びました。すべての飛躍、すべてのモデル、すべての新しいツールを追いかけました。そして<mark>今日</mark>、2026年、技術はついに私たちの野望に追いつきました。',
        'about.p2':'今日、あなたのビジネスのために本当に美しく映画的なものを作るための<em>十分以上のツール</em>があります。もはや約束ではなく — 実行の話です。光がついに灯りました。',
        'tl.2023':'<strong>火花。</strong> CRIAのアイデアが生まれる。ツールはまだ必要な映画品質を提供できない。',
        'tl.2024':'<strong>学習。</strong> すべてのモデル、すべてのリリース。深い技術的・美的レパートリーを構築。',
        'tl.2025':'<strong>転換点。</strong> 生成モデルが写真的忠実度と真の時間的一貫性に達する。',
        'tl.2026':'<strong>光が灯る。</strong> CRIA Framesが発売。知性で作られた映画、数日で届く。',
        'cap.tag':'03 · 私たちができること',
        'cap.title':'カメラができること —<br>そして<em>できない</em>こと。',
        'cap.sub':'最も親密な写真から不可能な叙事詩まで。私たちの唯一の限界は脚本の想像力です。',
        'cap.1.title':'超リアルなイメージ','cap.1.desc':'現実と見分けがつかない忠実度で撮影不可能なビジュアルコンセプト。',
        'cap.2.title':'ポスター & キーアート','cap.2.desc':'映画ポスター、キャンペーンカバー、高水準のアートディレクションによるビジュアルアイデンティティ。',
        'cap.3.title':'100%リアルな写真','cap.3.desc':'存在しなかったポートレート、製品、ロケーション — プロ機材品質で。',
        'cap.4.title':'コマーシャル & CM','cap.4.desc':'ナラティブ、リズム、高水準の映画的アイデンティティを持つ広告映画。',
        'cap.5.title':'広告映画','cap.5.desc':'ブランデッドフィルム、企業コンテンツ、最高水準の映像制作によるキャンペーン。',
        'cap.6.title':'短編 & 長編映画','cap.6.desc':'はい — 私たちは映画を作ります。オリジナル脚本または翻案、短編または長編、作家的美学で。',
        'cap.footer.text':'不可能に思えたアイデアがありますか？','cap.footer.btn':'話しかけてください',
        'port.tag':'04 · ポートフォリオ','port.title':'物語を語るフレーム。',
        'port.sub':'私たちの作品セレクション。各映画は実験；各実験は発見。',
        'port.empty':'ショーリールを最終調整中。<br>もうすぐ、最初のフレームを公開。',
        'contact.tag':'05 · 提案を送る','contact.title':'クライアント、パートナー<br>そしてアイデア歓迎。',
        'contact.sub':'すべてのメッセージを丁寧に読み、48営業時間以内に返信します。',
        'form.name':'フルネーム *','form.company':'会社 / ブランド','form.email':'メール *',
        'form.phone':'電話 / WhatsApp','form.type':'プロジェクトタイプ *',
        'form.type.select':'選択...','form.type.commercial':'コマーシャル / CM',
        'form.type.adfilm':'広告映画','form.type.photo':'写真 / 画像',
        'form.type.poster':'ポスター / キーアート','form.type.short':'短編映画',
        'form.type.feature':'長編映画','form.type.agency':'パートナーシップ / エージェンシー','form.type.other':'その他',
        'form.message':'あなたのアイデアを説明してください *','form.submit':'提案を送る',
        'form.note':'あなたの情報はCRIAチームのみが読みます。',
        'form.ok.title':'提案を受け取りました。','form.ok.body':'チームがすぐに連絡します。CRIAを信頼してくださりありがとうございます。',
        'footer.tagline':'知性で作られた映画。<br>ゴイアニア · ブラジル · 2026',
        'footer.nav':'ナビゲーション','footer.contact':'連絡先',
        'lang.confirm':'サイトに入る ›',
    },

    ko: {
        'nav.home':'홈','nav.about':'소개','nav.capabilities':'역량',
        'nav.portfolio':'포트폴리오','nav.contact':'제안하기',
        'hero.eyebrow':'고이아스 주 최초의 AI 프로덕션 스튜디오 · 브라질',
        'hero.line1':'우리는','hero.line2':'창조한다','hero.line3':'불가능을',
        'cria.c':'reative','cria.r':'evolutionary','cria.i.pre':'with ','cria.i':'ntelligence','cria.a':'rtificial',
        'cria.word.c':'창의적','cria.word.r':'혁명적','cria.word.i':'지능으로','cria.word.a':'인공적',
        'hero.desc':'우리는 <strong>CRIA Frames</strong>입니다 — 고이아스 주 최초의 인공지능 영상 제작 스튜디오. <em>생성형 AI</em>를 전문으로 하며, 시간과 비용의 극히 일부로 아이디어를 영화적 품질의 이미지, 영화, 내러티브로 변환합니다.',
        'hero.btn.portfolio':'포트폴리오 보기','hero.btn.contact':'제안 보내기',
        'metric.days':'영업일<br>프로젝트당','metric.realism':'영화적<br>사실감','metric.possibilities':'창의적<br>가능성',
        'mq.commercials':'광고','mq.photo':'초현실 사진','mq.posters':'포스터',
        'mq.shorts':'단편영화','mq.adfilms':'광고영화','mq.features':'장편영화','mq.clips':'뮤직비디오',
        'about.tag':'02 · 우리의 이야기','about.title':'아이디어는 그 때를 기다렸다.',
        'about.lead':'<strong>CRIA</strong>는 <mark>2023년</mark>에 탄생했습니다. 인공지능이 새로운 영화의 약속을 속삭이기 시작했을 때입니다. 우리는 일찍 알아봤습니다 — 하지만 기술은 아직 우리가 꿈꾸는 품질을 제공할 만큼 성숙하지 않았습니다.',
        'about.p1':'우리는 기다렸습니다. 공부했습니다. 모든 도약, 모든 모델, 모든 새 도구를 따라갔습니다. 그리고 <mark>오늘</mark>, 2026년, 기술은 마침내 우리의 야망을 따라잡았습니다.',
        'about.p2':'오늘날 귀하의 비즈니스를 위해 진정으로 아름답고 영화적인 무언가를 만들기에 <em>충분한 것 이상의 도구</em>가 존재합니다. 우리는 더 이상 약속이 아닌 실행을 말합니다. 마침내 빛이 켜졌습니다.',
        'tl.2023':'<strong>불꽃.</strong> CRIA의 아이디어가 탄생. 도구들은 아직 요구되는 영화적 품질을 제공하지 못함.',
        'tl.2024':'<strong>학습.</strong> 모든 모델, 모든 릴리즈. 깊은 기술적, 심미적 레퍼토리를 구축.',
        'tl.2025':'<strong>전환점.</strong> 생성형 모델이 사진적 충실도와 실제 시간적 일관성에 도달.',
        'tl.2026':'<strong>빛이 켜지다.</strong> CRIA Frames 출시. 지능으로 만든 영화, 며칠 안에 전달.',
        'cap.tag':'03 · 우리가 할 수 있는 것',
        'cap.title':'카메라가 할 수 있는 모든 것 —<br>그리고 <em>할 수 없는</em> 것.',
        'cap.sub':'가장 친밀한 사진부터 불가능한 서사시까지. 우리의 유일한 한계는 대본의 상상력입니다.',
        'cap.1.title':'초현실적 이미지','cap.1.desc':'현실과 구별할 수 없는 충실도로 촬영이 불가능한 시각적 개념.',
        'cap.2.title':'포스터 & 키아트','cap.2.desc':'영화 포스터, 캠페인 표지 및 최고 수준의 아트 디렉션을 갖춘 시각적 정체성.',
        'cap.3.title':'100% 사실적 사진','cap.3.desc':'존재하지 않았던 인물, 제품 및 장소 — 전문 장비 품질로.',
        'cap.4.title':'광고 & CF','cap.4.desc':'내러티브, 리듬, 최고 수준의 영화적 정체성을 갖춘 광고 영화.',
        'cap.5.title':'광고 영화','cap.5.desc':'브랜디드 필름, 기업 콘텐츠 및 최고 수준의 시각적 제작을 갖춘 캠페인.',
        'cap.6.title':'단편 & 장편 영화','cap.6.desc':'네 — 우리는 영화를 만듭니다. 오리지널 또는 각색, 단편 또는 장편, 작가적 미학으로.',
        'cap.footer.text':'불가능해 보였던 아이디어가 있나요?','cap.footer.btn':'저희에게 알려주세요',
        'port.tag':'04 · 포트폴리오','port.title':'이야기를 전하는 프레임.',
        'port.sub':'우리 작품 선정. 각 영화는 실험; 각 실험은 발견.',
        'port.empty':'쇼릴을 마무리하는 중입니다.<br>곧, 첫 번째 프레임.',
        'contact.tag':'05 · 제안 보내기','contact.title':'고객, 파트너<br>그리고 아이디어 환영.',
        'contact.sub':'모든 메시지를 주의 깊게 읽고 48영업시간 이내에 응답합니다.',
        'form.name':'전체 이름 *','form.company':'회사 / 브랜드','form.email':'이메일 *',
        'form.phone':'전화 / WhatsApp','form.type':'프로젝트 유형 *',
        'form.type.select':'선택...','form.type.commercial':'광고 / CF',
        'form.type.adfilm':'광고 영화','form.type.photo':'사진 / 이미지',
        'form.type.poster':'포스터 / 키아트','form.type.short':'단편 영화',
        'form.type.feature':'장편 영화','form.type.agency':'파트너십 / 에이전시','form.type.other':'기타',
        'form.message':'아이디어를 설명해주세요 *','form.submit':'제안 보내기',
        'form.note':'귀하의 정보는 CRIA 팀만 읽습니다.',
        'form.ok.title':'제안을 받았습니다.','form.ok.body':'팀이 곧 연락할 것입니다. CRIA를 신뢰해 주셔서 감사합니다.',
        'footer.tagline':'지능으로 만든 영화.<br>고이아니아 · 브라질 · 2026',
        'footer.nav':'내비게이션','footer.contact':'연락처',
        'lang.confirm':'사이트 입장 ›',
    },

    zh: {
        'nav.home':'首页','nav.about':'关于我们','nav.capabilities':'能力',
        'nav.portfolio':'作品集','nav.contact':'发送提案',
        'hero.eyebrow':'戈亚斯州首家AI影视制作公司 · 巴西',
        'hero.line1':'我们','hero.line2':'创造','hero.line3':'不可能',
        'cria.c':'reative','cria.r':'evolutionary','cria.i.pre':'with ','cria.i':'ntelligence','cria.a':'rtificial',
        'cria.word.c':'创意','cria.word.r':'革命性','cria.word.i':'智能','cria.word.a':'人工',
        'hero.desc':'我们是<strong>CRIA Frames</strong> — 戈亚斯州首家人工智能影视制作公司。专注于<em>生成式AI</em>，我们以极短的时间和成本，将创意转化为具有电影品质的图像、电影和叙事。',
        'hero.btn.portfolio':'查看作品集','hero.btn.contact':'发送提案',
        'metric.days':'工作日<br>每个项目','metric.realism':'电影级<br>真实感','metric.possibilities':'创意<br>无限可能',
        'mq.commercials':'广告','mq.photo':'超真实摄影','mq.posters':'海报',
        'mq.shorts':'短片','mq.adfilms':'广告片','mq.features':'长片','mq.clips':'音乐视频',
        'about.tag':'02 · 我们的故事','about.title':'这个想法等待了它的时机。',
        'about.lead':'<strong>CRIA</strong>诞生于<mark>2023年</mark>，那时人工智能开始低声诉说新电影的承诺。我们早早看到了 — 但技术还不够成熟，无法交付我们梦想的品质。',
        'about.p1':'我们等待。学习。追踪每一次飞跃、每一个模型、每一个新工具。而<mark>今天</mark>，在2026年，技术终于赶上了我们的雄心。',
        'about.p2':'如今已有<em>足够多的工具</em>为您的企业创造真正美丽和电影级的作品。我们不再谈论承诺 — 我们谈论执行。光终于亮了。',
        'tl.2023':'<strong>火花。</strong> CRIA的想法诞生。工具尚未达到所需的电影品质。',
        'tl.2024':'<strong>学习。</strong> 每个模型，每次发布。建立了深厚的技术和美学积累。',
        'tl.2025':'<strong>转折点。</strong> 生成模型达到摄影级真实度和真实的时间一致性。',
        'tl.2026':'<strong>光亮起。</strong> CRIA Frames推出。由智慧创造的电影，数日内交付。',
        'cap.tag':'03 · 我们能做什么',
        'cap.title':'相机能做的一切 —<br>以及它<em>不能</em>做的。',
        'cap.sub':'从最亲密的摄影到不可能的史诗。我们唯一的限制是剧本的想象力。',
        'cap.1.title':'超真实图像','cap.1.desc':'无法用相机拍摄的视觉概念，真实度与现实无法区分。',
        'cap.2.title':'海报 & 主视觉','cap.2.desc':'电影海报、活动封面和具有顶级艺术指导的视觉形象。',
        'cap.3.title':'100%真实摄影','cap.3.desc':'从未存在过的人物、产品和场景 — 以专业设备品质呈现。',
        'cap.4.title':'广告 & TVC','cap.4.desc':'具有叙事、节奏和高标准电影身份的广告片。',
        'cap.5.title':'广告片','cap.5.desc':'品牌影片、企业内容和具有最高视觉制作水平的广告活动。',
        'cap.6.title':'短片 & 长片','cap.6.desc':'是的 — 我们拍电影。原创剧本或改编，短片或长片，具有作者美学。',
        'cap.footer.text':'您有一个看似不可能的想法吗？','cap.footer.btn':'告诉我们',
        'port.tag':'04 · 作品集','port.title':'讲述故事的帧。',
        'port.sub':'我们作品的精选。每部电影都是一次实验；每次实验都是一次发现。',
        'port.empty':'我们的样片正在最终制作中。<br>即将推出：第一批帧。',
        'contact.tag':'05 · 发送您的提案','contact.title':'欢迎客户、合作伙伴<br>和创意。',
        'contact.sub':'我们认真阅读每条信息，并在48个工作小时内回复。',
        'form.name':'全名 *','form.company':'公司 / 品牌','form.email':'电子邮件 *',
        'form.phone':'电话 / WhatsApp','form.type':'项目类型 *',
        'form.type.select':'选择...','form.type.commercial':'广告 / TVC',
        'form.type.adfilm':'广告片','form.type.photo':'摄影 / 图像',
        'form.type.poster':'海报 / 主视觉','form.type.short':'短片',
        'form.type.feature':'长片','form.type.agency':'合作 / 代理','form.type.other':'其他',
        'form.message':'描述您的想法 *','form.submit':'发送提案',
        'form.note':'您的信息仅由CRIA团队阅读。',
        'form.ok.title':'我们收到了您的提案。','form.ok.body':'我们的团队将很快与您联系。感谢您信任CRIA。',
        'footer.tagline':'由智慧创造的电影。<br>戈亚尼亚 · 巴西 · 2026',
        'footer.nav':'导航','footer.contact':'联系方式',
        'lang.confirm':'进入网站 ›',
    },

    ar: {
        'nav.home':'الرئيسية','nav.about':'من نحن','nav.capabilities':'قدراتنا',
        'nav.portfolio':'أعمالنا','nav.contact':'تواصل',
        'hero.eyebrow':'أول استوديو إنتاج بالذكاء الاصطناعي في غولياس · البرازيل',
        'hero.line1':'نحن','hero.line2':'نصنع','hero.line3':'المستحيل',
        'cria.c':'reative','cria.r':'evolutionary','cria.i.pre':'with ','cria.i':'ntelligence','cria.a':'rtificial',
        'cria.word.c':'إبداعي','cria.word.r':'ثوري','cria.word.i':'بالذكاء','cria.word.a':'الاصطناعي',
        'hero.desc':'نحن <strong>CRIA Frames</strong> — أول استوديو إنتاج سمعي بصري بالذكاء الاصطناعي في غولياس. متخصصون في <em>الذكاء الاصطناعي التوليدي</em>، نحوّل الأفكار إلى صور وأفلام وروايات بجودة سينمائية، في جزء بسيط من الوقت والتكلفة.',
        'hero.btn.portfolio':'مشاهدة الأعمال','hero.btn.contact':'إرسال اقتراح',
        'metric.days':'أيام عمل<br>لكل مشروع','metric.realism':'واقعية<br>سينمائية','metric.possibilities':'إمكانيات<br>إبداعية',
        'mq.commercials':'إعلانات','mq.photo':'تصوير فائق الواقعية','mq.posters':'ملصقات',
        'mq.shorts':'أفلام قصيرة','mq.adfilms':'أفلام إعلانية','mq.features':'أفلام روائية طويلة','mq.clips':'فيديو كليب',
        'about.tag':'02 · قصتنا','about.title':'انتظرت الفكرة وقتها.',
        'about.lead':'وُلدت <strong>CRIA</strong> في <mark>2023</mark>، حين بدأ الذكاء الاصطناعي يهمس بوعود سينما جديدة. رأينا ذلك مبكراً — لكن التكنولوجيا لم تكن ناضجة بما يكفي لتقديم الجودة التي كنا نحلم بها.',
        'about.p1':'انتظرنا. درسنا. تابعنا كل قفزة، كل نموذج، كل أداة جديدة. و<mark>اليوم</mark>، في 2026، لحقت التكنولوجيا أخيراً بطموحنا.',
        'about.p2':'توجد اليوم <em>أكثر من أدوات كافية</em> لإنشاء شيء جميل حقاً وسينمائي لأعمالكم. لم نعد نتحدث عن الوعد — نتحدث عن التنفيذ. أضاء النور أخيراً.',
        'tl.2023':'<strong>الشرارة.</strong> تولد فكرة CRIA. الأدوات لا تقدم بعد الجودة السينمائية المطلوبة.',
        'tl.2024':'<strong>الدراسة.</strong> كل نموذج، كل إصدار. بنينا ذخيرة تقنية وجمالية عميقة.',
        'tl.2025':'<strong>نقطة التحول.</strong> تصل النماذج التوليدية إلى الدقة الفوتوغرافية والاتساق الزمني الحقيقي.',
        'tl.2026':'<strong>يضيء النور.</strong> تُطلق CRIA Frames. سينما مصنوعة من الذكاء، تُسلَّم في أيام.',
        'cap.tag':'03 · ما نستطيع فعله',
        'cap.title':'كل ما تستطيع الكاميرا —<br>وما <em>لا</em> تستطيعه.',
        'cap.sub':'من التصوير الأكثر حميمية إلى الملحمة المستحيلة. حدودنا الوحيدة هي خيال النص.',
        'cap.1.title':'صور فائقة الواقعية','cap.1.desc':'مفاهيم بصرية يستحيل تصويرها بدقة لا تميزها عن الواقع.',
        'cap.2.title':'ملصقات & فن المفتاح','cap.2.desc':'ملصقات أفلام، أغلفة حملات وهويات بصرية بإخراج فني رفيع.',
        'cap.3.title':'تصوير 100% واقعي','cap.3.desc':'صور وأماكن ومنتجات لم تكن موجودة — بجودة معدات احترافية.',
        'cap.4.title':'إعلانات & سبوت','cap.4.desc':'أفلام إعلانية ذات سرد وإيقاع وهوية سينمائية بمستوى عالٍ.',
        'cap.5.title':'أفلام إعلانية','cap.5.desc':'أفلام برادنيد، محتوى مؤسسي وحملات بأعلى مستويات الإنتاج البصري.',
        'cap.6.title':'أفلام قصيرة وطويلة','cap.6.desc':'نعم — نصنع السينما. نصوص أصلية أو مقتبسة، قصيرة أو طويلة، بجمالية مؤلف.',
        'cap.footer.text':'هل لديك فكرة بدت مستحيلة؟','cap.footer.btn':'أخبرنا عنها',
        'port.tag':'04 · أعمالنا','port.title':'إطارات تحكي القصص.',
        'port.sub':'مجموعة مختارة من أعمالنا. كل فيلم تجربة؛ كل تجربة اكتشاف.',
        'port.empty':'يتم الانتهاء من عرضنا.<br>قريباً، أولى الإطارات.',
        'contact.tag':'05 · أرسل اقتراحك','contact.title':'العملاء والشركاء<br>والأفكار مرحبٌ بهم.',
        'contact.sub':'نقرأ كل رسالة بعناية ونرد في غضون 48 ساعة عمل.',
        'form.name':'الاسم الكامل *','form.company':'الشركة / العلامة التجارية','form.email':'البريد الإلكتروني *',
        'form.phone':'الهاتف / واتساب','form.type':'نوع المشروع *',
        'form.type.select':'اختر...','form.type.commercial':'إعلان / سبوت',
        'form.type.adfilm':'فيلم إعلاني','form.type.photo':'تصوير / صورة',
        'form.type.poster':'ملصق / فن مفتاح','form.type.short':'فيلم قصير',
        'form.type.feature':'فيلم طويل','form.type.agency':'شراكة / وكالة','form.type.other':'أخرى',
        'form.message':'صف فكرتك *','form.submit':'إرسال الاقتراح',
        'form.note':'معلوماتك تُقرأ فقط من قِبل فريق CRIA.',
        'form.ok.title':'استلمنا اقتراحك.','form.ok.body':'سيتواصل فريقنا معك قريباً. شكراً لثقتك بـ CRIA.',
        'footer.tagline':'سينما مصنوعة من الذكاء.<br>غولياني · البرازيل · 2026',
        'footer.nav':'التنقل','footer.contact':'التواصل',
        'lang.confirm':'الدخول إلى الموقع ›',
    },

    ru: {
        'nav.home':'Главная','nav.about':'О нас','nav.capabilities':'Возможности',
        'nav.portfolio':'Портфолио','nav.contact':'Предложения',
        'hero.eyebrow':'ПЕРВАЯ ИИ-СТУДИЯ ПРОИЗВОДСТВА В ГОЯС · БРАЗИЛИЯ',
        'hero.line1':'МЫ','hero.line2':'СОЗДАЁМ','hero.line3':'НЕВОЗМОЖНОЕ',
        'cria.c':'reative','cria.r':'evolutionary','cria.i.pre':'with ','cria.i':'ntelligence','cria.a':'rtificial',
        'cria.word.c':'Творческий','cria.word.r':'Революционный','cria.word.i':'Интеллект','cria.word.a':'Искусственный',
        'hero.desc':'Мы — <strong>CRIA Frames</strong>, первая студия аудиовизуального производства с искусственным интеллектом в штате Гояс. Специализируясь на <em>генеративном ИИ</em>, мы превращаем идеи в изображения, фильмы и истории кинематографического качества за долю времени и стоимости.',
        'hero.btn.portfolio':'Посмотреть портфолио','hero.btn.contact':'Отправить предложение',
        'metric.days':'рабочих дней<br>на проект','metric.realism':'кинематографический<br>реализм','metric.possibilities':'творческие<br>возможности',
        'mq.commercials':'РЕКЛАМА','mq.photo':'ГИПЕРРЕАЛЬНАЯ ФОТОГРАФИЯ','mq.posters':'ПОСТЕРЫ',
        'mq.shorts':'КОРОТКОМЕТРАЖКИ','mq.adfilms':'РЕКЛАМНЫЕ ФИЛЬМЫ','mq.features':'ПОЛНОМЕТРАЖНЫЕ ФИЛЬМЫ','mq.clips':'КЛИПЫ',
        'about.tag':'02 · НАША ИСТОРИЯ','about.title':'Идея ждала своего времени.',
        'about.lead':'<strong>CRIA</strong> родилась в <mark>2023</mark> году, когда искусственный интеллект начал нашёптывать обещания нового кино. Мы увидели это раньше — но технология ещё не была достаточно зрелой, чтобы обеспечить качество, о котором мы мечтали.',
        'about.p1':'Мы ждали. Изучали. Следили за каждым прорывом, каждой моделью, каждым новым инструментом. И <mark>сегодня</mark>, в 2026 году, технология наконец догнала наши амбиции.',
        'about.p2':'Сегодня существует <em>более чем достаточно инструментов</em>, чтобы создать что-то по-настоящему красивое и кинематографичное для вашего бизнеса. Мы больше не говорим об обещании — мы говорим об исполнении. Свет наконец зажёгся.',
        'tl.2023':'<strong>Искра.</strong> Рождается идея CRIA. Инструменты пока не дают требуемого кинематографического качества.',
        'tl.2024':'<strong>Обучение.</strong> Каждая модель, каждый релиз. Мы создали глубокий технический и эстетический репертуар.',
        'tl.2025':'<strong>Переломный момент.</strong> Генеративные модели достигают фотографической точности и реальной временной согласованности.',
        'tl.2026':'<strong>Свет зажигается.</strong> Запуск CRIA Frames. Кино из интеллекта, доставляемое за дни.',
        'cap.tag':'03 · ЧТО МЫ УМЕЕМ',
        'cap.title':'Всё, что может камера —<br>и то, чего она <em>не</em> может.',
        'cap.sub':'От самой интимной фотографии до невозможного эпоса. Наш единственный предел — воображение сценария.',
        'cap.1.title':'Гиперреалистичные изображения','cap.1.desc':'Визуальные концепции, невозможные для фотографирования, с достоверностью, неотличимой от реальности.',
        'cap.2.title':'Постеры & Key Art','cap.2.desc':'Киноафиши, обложки кампаний и визуальные идентичности с арт-дирекцией высшего уровня.',
        'cap.3.title':'100% реалистичная фотография','cap.3.desc':'Портреты, продукты и локации, которых никогда не существовало — с качеством профессиональной техники.',
        'cap.4.title':'Реклама & Ролики','cap.4.desc':'Рекламные фильмы с нарративом, ритмом и кинематографической идентичностью высокого уровня.',
        'cap.5.title':'Рекламные фильмы','cap.5.desc':'Брендированные фильмы, корпоративный контент и кампании с высочайшим уровнем визуального производства.',
        'cap.6.title':'Короткие & Полнометражные фильмы','cap.6.desc':'Да — мы делаем кино. Оригинальные сценарии или адаптации, короткий или полный метр, с авторской эстетикой.',
        'cap.footer.text':'Есть идея, которая казалась невозможной?','cap.footer.btn':'Расскажите нам',
        'port.tag':'04 · ПОРТФОЛИО','port.title':'Кадры, которые рассказывают истории.',
        'port.sub':'Избранные работы. Каждый фильм — эксперимент; каждый эксперимент — открытие.',
        'port.empty':'Наш шоурил дорабатывается.<br>Скоро — первые кадры.',
        'contact.tag':'05 · ОТПРАВЬТЕ ПРЕДЛОЖЕНИЕ','contact.title':'Клиенты, партнёры<br>и идеи — добро пожаловать.',
        'contact.sub':'Мы читаем каждое сообщение внимательно и отвечаем в течение 48 рабочих часов.',
        'form.name':'Полное имя *','form.company':'Компания / Бренд','form.email':'E-mail *',
        'form.phone':'Телефон / WhatsApp','form.type':'Тип проекта *',
        'form.type.select':'Выберите...','form.type.commercial':'Реклама / Ролик',
        'form.type.adfilm':'Рекламный фильм','form.type.photo':'Фотография / Изображение',
        'form.type.poster':'Постер / Key Art','form.type.short':'Короткометражный фильм',
        'form.type.feature':'Полнометражный фильм','form.type.agency':'Партнёрство / Агентство','form.type.other':'Другое',
        'form.message':'Опишите вашу идею *','form.submit':'Отправить предложение',
        'form.note':'Ваши данные читает только команда CRIA.',
        'form.ok.title':'Мы получили ваше предложение.','form.ok.body':'Наша команда свяжется с вами в ближайшее время. Спасибо за доверие к CRIA.',
        'footer.tagline':'Кино из интеллекта.<br>Гоян · Бразилия · 2026',
        'footer.nav':'Навигация','footer.contact':'Контакт',
        'lang.confirm':'Войти на сайт ›',
    },
};

/* Languages that fall back to English for missing keys */
const LANG_FALLBACKS = { da:'en', no:'en', sv:'en', nl:'en', pl:'en', tr:'en',
    hi:'en', th:'en', id:'en', ms:'en', fi:'en', cs:'en', hu:'en', el:'en',
    uk:'en', vi:'en' };

function t(key) {
    const lang = sessionStorage.getItem(DB.lang) || 'pt';
    const dict = T[lang] || T[LANG_FALLBACKS[lang]] || T.en;
    return dict[key] ?? T.en[key] ?? key;
}

function applyTranslations() {
    const lang = sessionStorage.getItem(DB.lang) || 'pt';
    const isRTL = lang === 'ar' || lang === 'he';
    document.getElementById('htmlRoot').setAttribute('lang', lang);
    document.getElementById('htmlRoot').setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    $$('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = t(key);
        el.innerHTML = val;
    });
}


/* =========================================================
   LANGUAGE SELECTOR
   ========================================================= */
let selectedCountry = null;

function initLangSelector() {
    const screen  = $('#langScreen');
    const options = $('#langOptions');
    const dropdown = $('#langDropdown');
    const flagEl  = $('#langFlag');
    const nameEl  = $('#langSelectedName');
    const confirm = $('#langConfirm');

    // Build options list
    COUNTRIES.forEach((c, i) => {
        const btn = document.createElement('button');
        btn.className = 'lang-option';
        btn.type = 'button';
        btn.innerHTML = `<span class="lang-option-flag">${c.flag}</span><span>${c.name}</span>`;
        btn.addEventListener('click', () => {
            selectedCountry = c;
            flagEl.textContent = c.flag;
            nameEl.textContent = c.name;
            dropdown.classList.remove('open');
            $$('.lang-option').forEach(o => o.classList.remove('selected'));
            btn.classList.add('selected');
            // preview language on select button text
            sessionStorage.setItem(DB.lang, c.lang);
            const confirmBtn = $('#langConfirm');
            if (confirmBtn) confirmBtn.querySelector('[data-i18n]').textContent = t('lang.confirm');
        });
        options.appendChild(btn);
    });

    // Toggle dropdown
    $('#langSelected').addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });
    document.addEventListener('click', e => {
        if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
    });

    // Confirm
    confirm.addEventListener('click', () => {
        if (!selectedCountry) {
            // default to Portuguese if none selected
            selectedCountry = COUNTRIES.find(c => c.lang === 'pt');
            sessionStorage.setItem(DB.lang, 'pt');
        }
        sessionStorage.setItem(DB.lang, selectedCountry.lang);
        applyTranslations();
        screen.classList.add('exiting');
        setTimeout(() => {
            screen.style.display = 'none';
            $('#siteHeader').classList.add('visible');
        }, 500);
    });
}

function showLangScreen() {
    const screen = $('#langScreen');
    screen.style.display = 'flex';
}


/* =========================================================
   INTRO
   ========================================================= */
function initIntro() {
    const intro   = $('#intro');
    const spot    = $('#introSpot');
    const wrap    = $('#introLogoWrap');
    const curtain = $('#introCurtain');
    const flash   = $('#introFlash');
    const caption = $('#introCaption');
    const skipBtn = $('#skipIntro');

    function exitIntro() {
        intro.classList.add('exiting');
        sessionStorage.setItem(DB.intro, '1');
        setTimeout(() => {
            intro.style.display = 'none';
            // Show lang screen if not yet chosen this session
            const langSeen = sessionStorage.getItem(DB.lang + '_seen');
            if (!langSeen) {
                showLangScreen();
            } else {
                applyTranslations();
                $('#siteHeader').classList.add('visible');
            }
        }, 900);
    }

    skipBtn.addEventListener('click', exitIntro);

    if (sessionStorage.getItem(DB.intro)) {
        intro.style.display = 'none';
        const langSeen = sessionStorage.getItem(DB.lang + '_seen');
        if (!langSeen) {
            showLangScreen();
        } else {
            applyTranslations();
            $('#siteHeader').classList.add('visible');
        }
        return;
    }

    setTimeout(() => {
        flash.classList.add('on');
        setTimeout(() => {
            flash.classList.remove('on');
            spot.classList.add('gone');
            wrap.classList.add('visible');
            requestAnimationFrame(() => requestAnimationFrame(() => curtain.classList.add('open')));
            setTimeout(() => caption.classList.add('show'), 1400);
            setTimeout(exitIntro, 3700);
        }, 220);
    }, 700);
}

// Patch confirm to also mark lang as seen
document.addEventListener('DOMContentLoaded', () => {
    const origConfirm = $('#langConfirm');
    if (origConfirm) {
        origConfirm.addEventListener('click', () => {
            sessionStorage.setItem(DB.lang + '_seen', '1');
        }, { once: true });
    }
});


/* =========================================================
   TAB NAVIGATION
   ========================================================= */
function switchTab(name) {
    $$('.page').forEach(p => p.classList.toggle('active', p.dataset.tab === name));
    $$('[data-tab]').forEach(el => {
        if (el.classList.contains('nav-link') || el.classList.contains('nav-admin-btn')) {
            el.classList.toggle('active', el.dataset.tab === name);
        }
    });
    window.scrollTo({ top: 0 });
    if (name === 'portfolio') renderPortfolio();
    if (name === 'admin')     refreshAdmin();
}

function initNav() {
    const hamburger = $('#hamburger');
    const nav = $('#mainNav');

    hamburger.addEventListener('click', () => nav.classList.toggle('open'));
    document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) nav.classList.remove('open');
    });
    document.addEventListener('click', e => {
        const el = e.target.closest('[data-tab]');
        if (!el) return;
        const tab = el.dataset.tab;
        if (!tab) return;
        e.preventDefault();
        switchTab(tab);
        nav.classList.remove('open');
    });
}


/* =========================================================
   PROPOSAL FORM
   ========================================================= */
function initProposalForm() {
    const form = $('#proposalForm');
    const ok   = $('#formSuccess');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form));
        const list = load(DB.proposals);
        list.unshift({ id: 'p' + Date.now(), ...data, createdAt: new Date().toISOString(), read: false });
        save(DB.proposals, list);
        form.reset();
        ok.style.display = 'flex';
        setTimeout(() => { ok.style.display = 'none'; }, 7000);
    });
}


/* =========================================================
   PORTFOLIO
   ========================================================= */
function ytThumb(url) {
    const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (m) return `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg`;
    const gd = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
    if (gd) return `https://drive.google.com/thumbnail?id=${gd[1]}&sz=w640`;
    return null;
}

function toEmbed(url) {
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`;
    const vm = url.match(/vimeo\.com\/(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
    const gd = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
    if (gd) return `https://drive.google.com/file/d/${gd[1]}/preview?rm=minimal`;
    return null;
}

function renderPortfolio() {
    const grid  = $('#portfolioGrid');
    const empty = $('#portfolioEmpty');
    const items = load(DB.portfolio);
    grid.innerHTML = '';

    if (!items.length) { empty.classList.add('show'); return; }
    empty.classList.remove('show');

    items.forEach(it => {
        const thumb = it.thumb || ytThumb(it.url);
        const card = document.createElement('article');
        card.className = 'vid-card';
        card.innerHTML = `
            ${thumb
                ? `<img src="${esc(thumb)}" alt="${esc(it.title)}" loading="lazy" />`
                : `<div style="width:100%;height:100%;background:linear-gradient(135deg,#12151d,#1535b8)"></div>`}
            <div class="vid-overlay">
                <div class="vid-title">${esc(it.title)}</div>
                ${it.category ? `<div class="vid-cat">${esc(it.category)}</div>` : ''}
            </div>
            <div class="vid-play">▶</div>
        `;
        card.addEventListener('click', () => openVideoModal(it));
        grid.appendChild(card);
    });
}


/* =========================================================
   VIDEO MODAL
   ========================================================= */
function openVideoModal(it) {
    const modal = $('#videoModal');
    const wrap  = $('#playerWrap');
    $('#mTitle').textContent = it.title || '';
    $('#mCat').textContent   = it.category || '';
    $('#mDesc').textContent  = it.description || '';

    wrap.innerHTML = '';
    const embedUrl = toEmbed(it.url);
    if (embedUrl) {
        const f = document.createElement('iframe');
        f.src = embedUrl;
        f.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
        f.setAttribute('allowfullscreen', '');
        f.setAttribute('webkitallowfullscreen', '');
        f.setAttribute('mozallowfullscreen', '');
        f.style.cssText = 'width:100%;height:100%;border:0;display:block;';
        wrap.appendChild(f);
    } else {
        const v = document.createElement('video');
        v.src = it.url; v.controls = true; v.autoplay = true;
        v.setAttribute('playsinline', '');
        v.setAttribute('webkit-playsinline', '');
        v.style.cssText = 'width:100%;height:100%;display:block;background:#000;';
        wrap.appendChild(v);
    }
    modal.style.display = 'flex';
    // Prevent body scroll while modal open
    document.body.style.overflow = 'hidden';
}

function initModals() {
    const closeVideo = () => {
        $('#videoModal').style.display = 'none';
        $('#playerWrap').innerHTML = '';
        document.body.style.overflow = '';
    };
    const closeProp = () => { $('#propModal').style.display = 'none'; };

    $('#videoModalClose').addEventListener('click', closeVideo);
    $('#propModalClose').addEventListener('click', closeProp);
    $('#videoModal').addEventListener('click', e => { if (e.target === $('#videoModal')) closeVideo(); });
    $('#propModal').addEventListener('click', e => { if (e.target === $('#propModal')) closeProp(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeVideo(); closeProp(); } });
}


/* =========================================================
   ADMIN
   ========================================================= */
function initAdmin() {
    const form    = $('#adminLoginForm');
    const pass    = $('#adminPass');
    const errEl   = $('#adminError');

    function tryLogin() {
        const val = (pass.value || '').trim();
        if (val === PWD) {
            sessionStorage.setItem(DB.admin, '1');
            errEl.style.display = 'none';
            pass.value = '';
            refreshAdmin();
        } else {
            errEl.style.display = 'block';
            errEl.textContent = val ? 'Senha incorreta. Tente novamente.' : 'Digite a senha.';
            pass.value = '';
            pass.focus();
        }
    }

    form.addEventListener('submit', e => { e.preventDefault(); tryLogin(); });

    $('#logoutBtn').addEventListener('click', () => {
        sessionStorage.removeItem(DB.admin);
        refreshAdmin();
    });

    $$('.atab[data-atab]').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.atab[data-atab]').forEach(b => b.classList.toggle('active', b === btn));
            const key = btn.dataset.atab;
            $$('.admin-sec').forEach(s => s.classList.toggle('active', s.id === 'sec' + cap(key)));
        });
    });

    $('#addVideoForm').addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        const list = load(DB.portfolio);
        list.unshift({ id: 'v' + Date.now(), ...data });
        save(DB.portfolio, list);
        e.target.reset();
        renderPortAdminList();
    });
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function refreshAdmin() {
    const authed = !!sessionStorage.getItem(DB.admin);
    $('#adminLogin').style.display = authed ? 'none' : 'block';
    $('#adminPanel').style.display = authed ? 'block' : 'none';
    if (authed) { renderProposalList(); renderPortAdminList(); }
}

function renderProposalList() {
    const list  = $('#proposalList');
    const empty = $('#propEmpty');
    const items = load(DB.proposals);
    list.innerHTML = '';

    const unread = items.filter(p => !p.read).length;
    $('#badgeCount').textContent = unread;

    if (!items.length) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';

    items.forEach(p => {
        const row = document.createElement('div');
        row.className = 'prop-item' + (p.read ? '' : ' unread');
        const preview = (p.message || '').replace(/\n/g, ' ').slice(0, 100);
        row.innerHTML = `
            <div>
                <div class="prop-from">${esc(p.name || '—')} <span style="color:var(--mute);font-size:.75em">${esc(p.company || p.email || '')}</span></div>
                <div class="prop-preview">${esc(preview)}${preview.length >= 100 ? '…' : ''}</div>
            </div>
            <span class="prop-type">${esc(p.type || '—')}</span>
            <span class="prop-date">${fmtDate(p.createdAt)}</span>
        `;
        row.addEventListener('click', () => openProposal(p.id));
        list.appendChild(row);
    });
}

function openProposal(id) {
    const items = load(DB.proposals);
    const p = items.find(x => x.id === id);
    if (!p) return;
    p.read = true;
    save(DB.proposals, items);

    $('#propDetail').innerHTML = `
        <h3>${esc(p.name || '—')}</h3>
        <p style="font-family:var(--fm);font-size:11px;letter-spacing:.2em;color:var(--beam);text-transform:uppercase;margin-top:4px">${esc(p.type || '—')} · ${fmtDate(p.createdAt)}</p>
        ${p.company ? pdField('Empresa', p.company) : ''}
        ${pdField('E-mail', `<a href="mailto:${esc(p.email)}" style="color:var(--beam)">${esc(p.email)}</a>`)}
        ${p.phone ? pdField('Telefone / WhatsApp', p.phone) : ''}
        ${pdField('Mensagem', `<pre style="white-space:pre-wrap;font-family:var(--fb)">${esc(p.message || '')}</pre>`)}
        <div class="pd-actions">
            <a class="btn btn-primary" href="mailto:${esc(p.email)}?subject=${encodeURIComponent('CRIA Frames — Retorno')}" target="_blank">Responder por E-mail</a>
            ${p.phone ? `<a class="btn btn-outline" href="https://wa.me/${digits(p.phone)}" target="_blank" rel="noopener">WhatsApp</a>` : ''}
            <button class="btn btn-outline" id="delPropBtn" style="border-color:#ff5a5f;color:#ff5a5f">Excluir</button>
        </div>
    `;

    $('#delPropBtn').addEventListener('click', () => {
        if (!confirm('Excluir esta proposta permanentemente?')) return;
        save(DB.proposals, load(DB.proposals).filter(x => x.id !== id));
        $('#propModal').style.display = 'none';
        renderProposalList();
    });

    $('#propModal').style.display = 'flex';
    renderProposalList();
}

function pdField(label, val) {
    return `<div class="pd-field"><div class="pd-label">${label}</div><div class="pd-val">${val}</div></div>`;
}

function renderPortAdminList() {
    const wrap  = $('#portList');
    const items = load(DB.portfolio);
    wrap.innerHTML = items.length
        ? `<h4 style="font-family:var(--fd);font-size:20px;color:var(--bone);letter-spacing:.02em;margin-bottom:16px">Publicados (${items.length})</h4>`
        : '<p style="color:var(--mute);font-size:13px">Nenhum vídeo publicado.</p>';

    items.forEach(it => {
        const thumb = it.thumb || ytThumb(it.url);
        const row = document.createElement('div');
        row.className = 'port-admin-item';
        row.innerHTML = `
            ${thumb ? `<img src="${esc(thumb)}" alt="" />` : `<div style="width:80px;height:45px;background:#12151d"></div>`}
            <div>
                <div class="pai-title">${esc(it.title)}</div>
                <div class="pai-cat">${esc(it.category || '—')}</div>
            </div>
            <button class="btn-del" data-id="${esc(it.id)}">Remover</button>
        `;
        row.querySelector('[data-id]').addEventListener('click', () => {
            if (!confirm('Remover do portfólio?')) return;
            save(DB.portfolio, load(DB.portfolio).filter(x => x.id !== it.id));
            renderPortAdminList();
            renderPortfolio();
        });
        wrap.appendChild(row);
    });
}


/* =========================================================
   UTILS
   ========================================================= */
function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c =>
        ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]);
}
function digits(s) { return String(s || '').replace(/\D/g, ''); }
function fmtDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()} · ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}


/* =========================================================
   DEFAULT PORTFOLIO SEED
   ========================================================= */
const DEFAULT_PORTFOLIO = [
    { id: 'v_teaser',  title: 'TEASER — A ÚLTIMA CORRIDA', category: 'Teaser',  url: 'https://drive.google.com/file/d/16ULeD6E4ZPFkl9EroFPFR1rQuj5OfjKr/view' },
    { id: 'v_corrida', title: 'A ÚLTIMA CORRIDA',           category: 'Curta',   url: 'https://drive.google.com/file/d/1STYkYGlajEVjdhbco_wSevvfBMeOaBj1/view' },
    { id: 'v_espelho', title: 'MEU ESPELHO',                category: 'Curta',   url: 'https://drive.google.com/file/d/1wRPl93mmU2rdEqEDbrgNndlRXyu_hiqI/view' },
    { id: 'v_craque',  title: 'O CRAQUE',                   category: 'Curta',   url: 'https://drive.google.com/file/d/1KuFvg-wOSvIVMgxzk75YoY54yMQlhcKa/view' },
];

function seedPortfolio() {
    const stored = load(DB.portfolio);
    const storedIds = new Set(stored.map(v => v.id));
    const toAdd = DEFAULT_PORTFOLIO.filter(v => !storedIds.has(v.id));
    if (toAdd.length) save(DB.portfolio, [...toAdd, ...stored]);
}


/* =========================================================
   BOOT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    seedPortfolio();
    initLangSelector();
    initIntro();
    initNav();
    initProposalForm();
    initAdmin();
    initModals();
    renderPortfolio();
});
