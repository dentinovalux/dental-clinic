export const DICT = {
  en: {
    _meta: { name: "English", dir: "ltr" },
    nav: { home: "Home", about: "About", services: "Services", contact: "Contact" },
    currency: "MDL",
    home: {
      title: "Brighten Your Smile with Expert Dental Care",
      subtitle: "Professional and friendly dental services in Chișinău. Healthy teeth, happy smiles!",
      cta: "Book an appointment",
      image: "/home/pexels-vinicius-wiesehofer-289347-1130626.jpg"
    },
    services: {
      title: "Our Services",
      list: [
        {
          title: "Consultancy",
          image: "/services/consultancy-pexels-karolina-grabowska-6627286.jpg",
          list: [
            {
              title: "Session",
              price: "100"
            }
          ]
        },
        {
          title: "Anesthesia",
          image: "/services/anesthesia-pexels-tima-miroshnichenko-5355908.jpg",
          list: [
            {
              title: "Procedure",
              price: "100"
            }
          ]
        },
        {
          title: "Dental Radiography",
          image: "/services/radiography-pexels-cottonbro-6502033.jpg",
          list: [
            {
              title: "Procedure",
              price: "50"
            }
          ]
        },
        {
          title: "Dental caries",
          image: "/services/carries-pexels-karolina-grabowska-6627531.jpg",
          list: [
            {
              title: "Dental caries",
              price: "850-1500"
            },
            {
              title: "Dental pult one chanal",
              price: "850"
            },
            {
              title: "Dental pult two channels",
              price: "1600"
            },
            {
              title: "Dental pult two channels",
              price: "1600"
            },
            {
              title: "Endodontic therapy using antiseptic paste",
              price: "400"
            }
          ]
        },
        {
          title: "Preventive dentistry",
          image: "/services/preventive-pexels-karolina-grabowska-6627537.jpg",
          list: [
            {
              title: "Professional scaling and brushing",
              price: "1200"
            },
            {
              title: "Teeth whitening",
              price: "1800"
            }
          ]
        },
        {
          title:"Dental prosthetics",
          image: "/services/prosthetics-pexels-ggrudic-19328507.jpg",
          list: [
            {
              title: "Temporary acrylic crown",
              price: "850"
            },
            {
              title: "Metal-ceramic crowns",
              price: "2000"
            },
            {
              title: "Zirconium crowns",
              price: "3500"
            },
            {
              title: "Cast crowns",
              price: "850"
            },
            {
              title: "Implant-supported crown",
              price: "4000"
            }
          ]
        },
        {
          title: "Implants",
          image: "/services/implants-pexels-cottonbro-6502343.jpg",
          list: [
            {
              title: "Megagen implant",
              price: "6000"
            }
          ]
        },
        {
          title: "Tooth extraction",
          image: "/services/extraction-pexels-karolina-grabowska-7195433.jpg",
          list: [
            {
              title: "Extraction of a wisdom tooth",
              price: "800-2000"
            }
          ]
        }
      ],
    },
    about: {
      title: "About Us",
      image: "/about/pexels-olly-3952125.jpg",
      intro: {
        title: "Welcome to Dentinova Lux",
        info: '<p className="text-gray-600 mb-4 leading-relaxed"> \
                 At <span className="font-semibold">Dentinova Lux</span>, \
                 we are committed to providing high-quality dental care in a warm \
                 and friendly environment. Our team of experienced dentists and \
                 hygienists use the latest technology to ensure your comfort and \
                 health. \
               </p> \
               <p className="text-gray-600 mb-4 leading-relaxed"> \
                 We believe that a beautiful smile is the key to confidence and \
                 overall well-being. From routine check-ups to cosmetic treatments, \
                 we tailor our services to meet the unique needs of every patient. \
               </p> \
               <p className="text-gray-600 leading-relaxed"> \
                 Our mission is simple: to keep your smile healthy and bright for \
                 years to come. \
               </p>'
      },
      coreValues: {
        title: "Our Core Values",
        items: [
          {
            title: "Care",
            info: "We treat every patient with compassion and respect, like family."
          },
          {
            title: "Quality",
            info: "Using modern technology and best practices, we deliver excellent care."
          },
          {
            title: "Trust",
            info: "We build long-lasting relationships through honesty and professionalism."
          },
        ]
      }
    },
    contact: {
      title: "Contact Us",
      chat: {
       title: "Get in Touch",
       name: "Name",
       namePlaceholder: "Your name",
       email: "Email",
       emailPlaceholder: "name@gmail.com",
       phone: "Phone",
       phonePlaceholder: "+37360000000",
       message: "Message",
       messagePlaceholder: "How can we help you?",
       submitTitle: "Send Message"
      },
      info: {
        title: "Clinic Information",
        address: "Address:",
        addressContent: "Cuza Voda 13/8, Chișinău, Moldova",
        phone: "Phone:",
        phoneContent: "+37368022526",
        email: "Email:",
        emailContent: "dentinovalux@gmail.com"
      },
      location: "Location"
    },
    footer: { rights: "All rights reserved." },
    seo: {
      homeTitle: "Dentinova Lux — Home",
      homeDesc: "Trusted, modern dental care for the whole family.",
      aboutTitle: "Dentinova Lux — About",
      aboutDesc: "Find more info about us.",
      servicesTitle: "Dentinova Lux — Services",
      servicesDesc: "From preventive care to implants and orthodontics.",
      contactTitle: "Dentinova Lux — Contact",
      contactDesc: "Call, email, or visit our clinic."
    },
  },
  ro: {
    _meta: { name: "Română", dir: "ltr" },
    nav: { home: "Acasă", about: "Despre noi", services: "Servicii", contact: "Contact" },
    currency: "MDL",
    home: {
      title: "Îți luminăm zâmbetul cu îngrijire dentară profesionistă",
      subtitle: "Servicii stomatologice profesionale și prietenoase în Chișinău. Dinți sănătoși, zâmbete fericite!",
      cta: "Programează o consultație",
      image: "/home/pexels-vinicius-wiesehofer-289347-1130626.jpg"
    },
    services: {
      title: "Serviciile noastre",
      list: [
        {
          title: "Consultanță",
          image: "/services/consultancy-pexels-karolina-grabowska-6627286.jpg",
          list: [
            {
              title: "Ședință",
              price: "100"
            }
          ]
        },
        {
          title: "Anestezie",
          image: "/services/anesthesia-pexels-tima-miroshnichenko-5355908.jpg",
          list: [
            {
              title: "Procedură",
              price: "100"
            }
          ]
        },
        {
          title: "Radiografie dentară",
          image: "/services/radiography-pexels-cottonbro-6502033.jpg",
          list: [
            {
              title: "Procedură",
              price: "50"
            }
          ]
        },
        {
          title: "Cariile dentare",
          image: "/services/carries-pexels-karolina-grabowska-6627531.jpg",
          list: [
            {
              title: "Carii dentare",
              price: "850-1500"
            },
            {
              title: "Pulpă dentară un canal",
              price: "850"
            },
            {
              title: "Pulpă dentară două canale",
              price: "1600"
            },
            {
              title: "Pulpă dentară două canale",
              price: "1600"
            },
            {
              title: "Terapie endodontică cu pastă antiseptică",
              price: "400"
            }
          ]
        },
        {
          title: "Stomatologie preventivă",
          image: "/services/preventive-pexels-karolina-grabowska-6627537.jpg",
          list: [
            {
              title: "Detartraj și periaj profesional",
              price: "1200"
            },
            {
              title: "Albire dentară",
              price: "1800"
            }
          ]
        },
        {
          title:"Protetică dentară",
          image: "/services/prosthetics-pexels-ggrudic-19328507.jpg",
          list: [
            {
              title: "Coroană temporară acrilică",
              price: "850"
            },
            {
              title: "Coroane metal-ceramice",
              price: "2000"
            },
            {
              title: "Coroane din zirconiu",
              price: "3500"
            },
            {
              title: "Coroane turnate",
              price: "850"
            },
            {
              title: "Coroană pe implant",
              price: "4000"
            }
          ]
        },
        {
          title: "Implanturi",
          image: "/services/implants-pexels-cottonbro-6502343.jpg",
          list: [
            {
              title: "Implant Megagen",
              price: "6000"
            }
          ]
        },
        {
          title: "Extracții dentare",
          image: "/services/extraction-pexels-karolina-grabowska-7195433.jpg",
          list: [
            {
              title: "Extracția unui măsele de minte",
              price: "800-2000"
            }
          ]
        }
      ],
    },
    about: {
      title: "Despre noi",
      image: "/about/pexels-olly-3952125.jpg",
      intro: {
        title: "Bine ați venit la Dentinova Lux",
        info: '<p className="text-gray-600 mb-4 leading-relaxed"> \
                 La <span className="font-semibold">Dentinova Lux</span>, \
                 ne angajăm să oferim îngrijire dentară de înaltă calitate într-un mediu cald \
                 și prietenos. Echipa noastră de stomatologi și igieniști cu experiență \
                 utilizează cele mai noi tehnologii pentru a vă asigura confortul și sănătatea. \
               </p> \
               <p className="text-gray-600 mb-4 leading-relaxed"> \
                 Credem că un zâmbet frumos este cheia încrederii și a stării generale de bine. \
                 De la controale de rutină până la tratamente estetice, ne adaptăm serviciile \
                 pentru nevoile fiecărui pacient. \
               </p> \
               <p className="text-gray-600 leading-relaxed"> \
                 Misiunea noastră este simplă: să păstrăm zâmbetul dumneavoastră sănătos și strălucitor \
                 mulți ani de acum înainte. \
               </p>'
      },
      coreValues: {
        title: "Valorile noastre fundamentale",
        items: [
          {
            title: "Grijă",
            info: "Tratamentează fiecare pacient cu compasiune și respect, ca pe un membru al familiei."
          },
          {
            title: "Calitate",
            info: "Folosind tehnologie modernă și cele mai bune practici, oferim îngrijire excelentă."
          },
          {
            title: "Încredere",
            info: "Construim relații durabile prin onestitate și profesionalism."
          },
        ]
      }
    },
    contact: {
      title: "Contactează-ne",
      chat: {
       title: "Ia legătura cu noi",
       name: "Nume",
       namePlaceholder: "Numele tău",
       email: "Email",
       emailPlaceholder: "nume@gmail.com",
       phone: "Telefon",
       phonePlaceholder: "+37360000000",
       message: "Mesaj",
       messagePlaceholder: "Cu ce vă putem ajuta?",
       submitTitle: "Trimite mesaj"
      },
      info: {
        title: "Informații clinică",
        address: "Adresă:",
        addressContent: "Cuza Vodă 13/8, Chișinău, Moldova",
        phone: "Telefon:",
        phoneContent: "+37368022526",
        email: "Email:",
        emailContent: "dentinovalux@gmail.com"
      },
      location: "Locație"
    },
    footer: { rights: "Toate drepturile rezervate." },
    seo: {
      homeTitle: "Dentinova Lux — Acasă",
      homeDesc: "Îngrijire dentară modernă și de încredere pentru întreaga familie.",
      aboutTitle: "Dentinova Lux — Despre noi",
      aboutDesc: "Aflați mai multe despre noi.",
      servicesTitle: "Dentinova Lux — Servicii",
      servicesDesc: "De la îngrijire preventivă la implanturi și ortodonție.",
      contactTitle: "Dentinova Lux — Contact",
      contactDesc: "Sunați, scrieți email sau vizitați clinica noastră."
    },
  },
ru: {
    _meta: { name: "Русский", dir: "ltr" },
    nav: { home: "Главная", about: "О нас", services: "Услуги", contact: "Контакты" },
    currency: "MDL",
    home: {
      title: "Сделайте вашу улыбку ярче с профессиональным уходом",
      subtitle: "Профессиональные и дружелюбные стоматологические услуги в Кишиневе. Здоровые зубы — счастливые улыбки!",
      cta: "Записаться на приём",
      image: "/home/pexels-vinicius-wiesehofer-289347-1130626.jpg"
    },
    services: {
      title: "Наши Услуги",
      list: [
        {
          title: "Консультация",
          image: "/services/consultancy-pexels-karolina-grabowska-6627286.jpg",
          list: [{ title: "Сеанс", price: "100" }]
        },
        {
          title: "Анестезия",
          image: "/services/anesthesia-pexels-tima-miroshnichenko-5355908.jpg",
          list: [{ title: "Процедура", price: "100" }]
        },
        {
          title: "Рентген зубов",
          image: "/services/radiography-pexels-cottonbro-6502033.jpg",
          list: [{ title: "Процедура", price: "50" }]
        },
        {
          title: "Кариес",
          image: "/services/carries-pexels-karolina-grabowska-6627531.jpg",
          list: [
            { title: "Лечение кариеса", price: "850-1500" },
            { title: "Пульпит — один канал", price: "850" },
            { title: "Пульпит — два канала", price: "1600" },
            { title: "Пульпит — два канала", price: "1600" },
            { title: "Эндодонтическая терапия с антисептической пастой", price: "400" }
          ]
        },
        {
          title: "Профилактическая стоматология",
          image: "/services/preventive-pexels-karolina-grabowska-6627537.jpg",
          list: [
            { title: "Профессиональная чистка и полировка", price: "1200" },
            { title: "Отбеливание зубов", price: "1800" }
          ]
        },
        {
          title: "Зубные протезы",
          image: "/services/prosthetics-pexels-ggrudic-19328507.jpg",
          list: [
            { title: "Временная акриловая коронка", price: "850" },
            { title: "Металлокерамическая коронка", price: "2000" },
            { title: "Циркониевая коронка", price: "3500" },
            { title: "Литая коронка", price: "850" },
            { title: "Коронка на импланте", price: "4000" }
          ]
        },
        {
          title: "Импланты",
          image: "/services/implants-pexels-cottonbro-6502343.jpg",
          list: [{ title: "Имплант Megagen", price: "6000" }]
        },
        {
          title: "Удаление зуба",
          image: "/services/extraction-pexels-karolina-grabowska-7195433.jpg",
          list: [{ title: "Удаление зуба мудрости", price: "800-2000" }]
        }
      ]
    },
    about: {
      title: "О нас",
      image: "/about/pexels-olly-3952125.jpg",
      intro: {
        title: "Добро пожаловать в Dentinova Lux",
        info: `
          <p className="text-gray-600 mb-4 leading-relaxed">
            В <span className="font-semibold">Dentinova Lux</span> мы стремимся предоставлять стоматологическую помощь высокого качества в тёплой и дружелюбной атмосфере.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Мы верим, что красивая улыбка — это залог уверенности и благополучия. От профилактики до эстетики, мы подбираем лечение индивидуально для каждого.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Наша миссия проста: сохранить вашу улыбку здоровой и сияющей на долгие годы.
          </p>`
      },
      coreValues: {
        title: "Наши ценности",
        items: [
          { title: "Забота", info: "Каждого пациента мы принимаем с уважением и вниманием." },
          { title: "Качество", info: "Современные технологии и лучшие практики обеспечивают высокий уровень." },
          { title: "Доверие", info: "Мы строим долгосрочные отношения на честности и профессионализме." }
        ]
      }
    },
    contact: {
      title: "Связаться с нами",
      chat: {
        title: "Напишите нам",
        name: "Имя",
        namePlaceholder: "Ваше имя",
        email: "Эл. почта",
        emailPlaceholder: "name@gmail.com",
        phone: "Телефон",
        phonePlaceholder: "+37360000000",
        message: "Сообщение",
        messagePlaceholder: "Как мы можем помочь?",
        submitTitle: "Отправить"
      },
      info: {
        title: "Информация о клинике",
        address: "Адрес:",
        addressContent: "Куза Водэ 13/8, Кишинёв, Молдова",
        phone: "Телефон:",
        phoneContent: "+37368022526",
        email: "Эл. почта:",
        emailContent: "dentinovalux@gmail.com"
      },
      location: "Местоположение"
    },
    footer: { rights: "Все права защищены." },
    seo: {
      homeTitle: "Dentinova Lux — Главная",
      homeDesc: "Надёжная и современная стоматология для всей семьи.",
      aboutTitle: "Dentinova Lux — О нас",
      aboutDesc: "Узнайте больше о нашей клинике.",
      servicesTitle: "Dentinova Lux — Услуги",
      servicesDesc: "От профилактики до имплантов и ортодонтии.",
      contactTitle: "Dentinova Lux — Контакты",
      contactDesc: "Позвоните, напишите или приходите в клинику."
    }
  }
};
