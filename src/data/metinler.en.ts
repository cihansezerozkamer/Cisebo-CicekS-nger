// SİTEDEKİ YAZILAR (İNGİLİZCE). Yapı metinler.ts ile aynı.
import type { Metinler } from './metinler';

export const metinler: Metinler = {
  giris: {
    baslik: "Shredded foam and cushion inserts, all by the kilo.",
    aciklama: "For {yil} years Çiçek Sünger has sold shredded foam, ready-filled cushion inserts in 55×55, 65×65 or custom sizes, foam sheets by the kilo and ball fibre. By the sack or by the truckload, across Turkey and to Germany.",
    siparisButonu: "Order on WhatsApp",
    urunlerButonu: "See products",
    maddeler: [
      "Everything by the kilo, in sacks",
      "Full-truckload business shipping",
      "Delivery across Turkey and to Germany",
    ],
    videoAltYazisi: "From our warehouse: shredded foam sold by the kilo",
  },

  anaSayfa: {
    urunlerBasligi: "Our products, all by the kilo",
    tumUrunlerLinki: "All products",
    nedenBasligi: "Why Çiçek Sünger?",
    videoBasligi: "Videos from the warehouse",
    videoAciklamasi: "The videos show best what is in stock.",
  },

  neden: [
    { baslik: "{yil} years in the trade", aciklama: "We have done this for a quarter of a century and know which filling goes where." },
    { baslik: "By the kilo, in sacks", aciklama: "Sacks for workshops, a single bag for home. Everything is weighed." },
    { baslik: "Full-truckload business shipping", aciklama: "We ship large orders by truck, right to your company’s door." },
    { baslik: "Quick replies on WhatsApp", aciklama: "Tell us the product and quantity, and we will sort out price and transport together." },
  ],

  sevkiyat: {
    baslik: "Full-truckload business shipping",
    aciklama: "We ship by freight to every part of Turkey and abroad. We get the freight price from truck and haulage companies and pass it on to your company. Let’s discuss the details on WhatsApp.",
    sehirlerBasligi: "Some places we ship to",
    sehirler: ["Istanbul", "Kayseri", "Denizli", "Mardin", "Manisa", "Tekirdağ", "Diyarbakır"],
    yurtdisi: ["Germany"],
    buton: "Ask for a freight price",
  },

  rehber: {
    baslik: "What are you filling?",
    onerimizEtiketi: "We recommend",
    alternatifEtiketi: "Alternative",
    hesaplaButonu: "Calculate the filling",
    sorButonu: "Ask us",
    secenekler: [
      {
        ad: "Cushion",
        aciklama: "For 55×55 or 65×65 covers, a ready-filled insert is the easiest; we make other sizes on request. Filling it yourself? Use shredded foam, mixed with ball fibre if you want it softer.",
        oneriler: ["kirlent-ic-yastigi", "kirpinti-sunger"],
        hesapla: true,
      },
      {
        ad: "Seat pad",
        aciklama: "Shredded foam for soft floor cushions. Foam sheets by the kilo for a flatter seat.",
        oneriler: ["kirpinti-sunger", "kiloluk-sunger"],
        hesapla: true,
      },
      {
        ad: "Bed pillow",
        aciklama: "A memory foam pillow for neck support. Ball fibre for a classic soft pillow.",
        oneriler: ["visko-yastik", "boncuk-silikon"],
        hesapla: false,
      },
      {
        ad: "Pet bed",
        aciklama: "Shredded foam is the most popular filling for cat and dog beds. Add a foam sheet as the base.",
        oneriler: ["kirpinti-sunger", "kiloluk-sunger"],
        hesapla: true,
      },
      {
        ad: "Toy",
        aciklama: "In plush toys, ball fibre spreads softly and evenly. For a fuller, cheaper fill, use shredded foam.",
        oneriler: ["boncuk-silikon", "kirpinti-sunger"],
        hesapla: false,
      },
      {
        ad: "Bean bag",
        aciklama: "Shredded foam is cheap and holds its shape in a bean bag. Use the calculator to find the amount.",
        oneriler: ["kirpinti-sunger"],
        hesapla: true,
      },
    ],
  },

  hesaplayici: {
    baslik: "How much filling do I need?",
    aciklama: "Enter the size of your cushion or bean bag and we will tell you the approximate amount of filling. Send us the result with one tap.",
    kirlentNot: "Example: a 55×55 cushion needs about 450 grams of ball fibre and shredded foam mix. Other sizes are calculated from this.",
    buton: "Get a price for this amount",
    not: "This is an estimate. Fabric stretch and how firmly you stuff it change the result.",
  },

  toptanBandi: {
    baslik: "Trade customers get special prices.",
    aciklama: "Regular supply, price per kilo and full-truckload shipping for upholsterers, cushion workshops, furniture makers, pet bed and toy manufacturers.",
    link: "About wholesale",
    whatsappButonu: "Ask for a wholesale price",
  },

  iletisimBlogu: {
    baslik: "Where to find us",
    konumButonu: "Get directions",
  },

  videolar: [
    { dosya: "sunger-3", yazi: "New foam by the kilo has arrived" },
    { dosya: "depo-1", yazi: "White shredded foam, from the sack" },
    { dosya: "depo-2", yazi: "Foam sheet pieces by the kilo" },
    { dosya: "gri-sunger", yazi: "Flexible grey foam" },
    { dosya: "plaka-yigin", yazi: "Foam sheet stock in the warehouse" },
    { dosya: "kirpinti-avuc", yazi: "Mint shredded foam" },
  ],

  urunlerSayfasi: {
    baslik: "Products",
    aciklama: "Our fillings and foams, all by the kilo. Prices change often, so we give the current price on WhatsApp.",
    googleAciklamasi: "Shredded foam by the kilo, ready-filled cushion inserts in 55×55, 65×65 and custom sizes, foam sheets, ball fibre and memory foam pillows. In sacks and by the truckload.",
  },

  urunSayfasi: {
    fiyatButonu: "Get a price",
    araButonu: "Call",
    fiyatNotu: "Prices change often, so we give the current price on WhatsApp.",
    kullanimBasligi: "What is it for?",
    sssBasligi: "Common questions",
    benzerBasligi: "Similar products",
  },

  hangiDolguSayfasi: {
    baslik: "Which filling is right for me?",
    aciklama: "Choose what you are filling and we will suggest the right product. You can also calculate how much filling you need.",
    googleBasligi: "Which filling? How many kg of foam for a bean bag?",
    googleAciklamasi: "Which filling for cushions, seat pads, pillows, pet beds and bean bags? Use the calculator to find how many kilos of shredded foam you need.",
    tabloBasligi: "How the fillings compare",
    tabloBasliklari: ["Filling", "Feel", "Best for"],
    tablo: [
      { dolgu: "Shredded foam", his: "Full, holds its shape", yer: "Cushions, seat pads, pet beds, bean bags", urun: "kirpinti-sunger" },
      { dolgu: "Shredded foam + ball fibre", his: "Full but softer", yer: "Cushion inserts", urun: "kirlent-ic-yastigi" },
      { dolgu: "Foam sheet", his: "Flat, fixed shape", yer: "Upholstery, seats, packaging", urun: "kiloluk-sunger" },
      { dolgu: "Ball fibre", his: "Soft, fluffy", yer: "Pillows, cushions, toys", urun: "boncuk-silikon" },
      { dolgu: "Recycled polyester fill", his: "Soft, economical", yer: "Budget cushions and toys", urun: "boncuk-silikon" },
      { dolgu: "Memory foam", his: "Shapes to you, slow recovery", yer: "Bed and neck pillows", urun: "visko-yastik" },
    ],
  },

  toptanSayfasi: {
    baslik: "Wholesale foam and filling for businesses",
    aciklama: "Everything by the kilo, in sacks. Special prices per kilo for regular buyers and full-truckload business shipping.",
    googleBasligi: "Wholesale foam and filling, truckload shipping",
    googleAciklamasi: "Wholesale shredded foam, foam sheets by the kilo, ball fibre and cushion inserts for upholsterers, workshops, furniture, pet bed and toy makers. Shipping across Turkey and to Germany.",
    whatsappButonu: "Ask for a wholesale price",
    kimlerBasligi: "Who we sell to",
    kimler: [
      { baslik: "Upholsterers", aciklama: "Foam sheets by the kilo and shredded foam for sofas and chairs." },
      { baslik: "Cushion workshops", aciklama: "Ready inserts in 55×55, 65×65 and custom sizes, ball fibre and polyester fill." },
      { baslik: "Furniture makers", aciklama: "Foam sheets by the kilo for upholstery base and seat pads." },
      { baslik: "Pet bed makers", aciklama: "Shredded foam by the kilo and foam sheets for the base." },
      { baslik: "Toy makers", aciklama: "Ball fibre and shredded foam for plush toys." },
    ],
    adimlarBasligi: "How it works",
    adimlar: [
      "Message us on WhatsApp with the product and quantity: kilos, sacks or a truckload.",
      "We give you the current price per kilo, and get the freight price from truck companies for you.",
      "Your order is weighed, packed in sacks and sent to your address by freight.",
    ],
    videoBasligi: "Videos from the warehouse",
  },

  hakkimizdaSayfasi: {
    baslik: "Filling everything for {yil} years",
    googleAciklamasi: "Çiçek Sünger: shredded foam, foam by the kilo and fillings from Buca, İzmir for {yil} years.",
    paragraflar: [
      "For {yil} years Çiçek Sünger has sold shredded foam, foam sheets by the kilo, ball fibre and ready-filled cushion inserts in Buca, İzmir.",
      "Some of our customers are upholsterers and workshops, others want to refill a bean bag at home. We treat them all the same: we ask what they need and recommend the right filling.",
      "We ship by freight to every part of Turkey, and even to Germany.",
      "Our online stores on Trendyol and Hepsiburada are called ÇisebO.",
    ],
    eksikNotu: "",
  },

  sssSayfasi: {
    baslik: "Frequently asked questions",
    googleAciklamasi: "Common questions about shredded foam, ball fibre, cushion inserts, ordering and shipping.",
    siparisBasligi: "Ordering and shipping",
    urunlerBasligi: "Products",
    siparisSorulari: [
      { soru: "Why are there no prices on the website?", cevap: "Foam and filling prices change often. To avoid showing a wrong price, we give the current price on WhatsApp." },
      { soru: "How do I order?", cevap: "Message us on WhatsApp with what you need and how much. We will give you the price and when it will be ready." },
      { soru: "How do you sell?", cevap: "Everything is weighed by the kilo and supplied in sacks. Large orders ship as a full truckload." },
      { soru: "Do you ship abroad?", cevap: "Yes. We ship by freight across Turkey and to Germany, including Istanbul, Kayseri, Denizli, Mardin, Manisa, Tekirdağ and Diyarbakır." },
      { soru: "How much is shipping?", cevap: "We get the freight price from truck and haulage companies and pass it on. It depends on quantity and address, so message us on WhatsApp." },
    ],
  },

  iletisimSayfasi: {
    baslik: "Contact",
    aciklama: "We answer fastest on WhatsApp. Just send the product, quantity and delivery address.",
  },

  altBilgi: {
    etiket: "Cushions and shredded foam, ball fibre, memory foam",
    telif: "Foam and filling for {yil} years. Shipping across Turkey and to Germany.",
    whatsappLinki: "Message us on WhatsApp",
  },

  ui: {
    menu: [
      { label: "Products", path: "urunler" },
      { label: "Which filling?", path: "hangi-dolgu" },
      { label: "Wholesale / Shipping", path: "toptan" },
      { label: "About us", path: "hakkimizda" },
      { label: "FAQ", path: "sss" },
      { label: "Contact", path: "iletisim" },
    ],
    anaSayfa: "Home",
    menuButonu: "Menu",
    icerigeGec: "Skip to content",
    dil: "Language",
    siteBasligi: "Shredded Foam, Cushion Inserts, Foam by the Kilo",
    altUrunler: "Products",
    onlineMagaza: "Our online store",
    altSayfalar: "Pages",
    fotoYakinda: "Photo coming soon",
    satisBirimi: "Sold by",
    birimler: { kg: "kg", "çuval": "sack", adet: "piece" },
    whatsappSiparis: "Order on WhatsApp",
    telefonlaAra: "Call us",
    hizliIletisim: "Quick contact",
    oncekiVideolar: "Previous videos",
    sonrakiVideolar: "Next videos",
    videoSeridi: "Videos from the warehouse, scroll sideways",
    adres: "Address",
    saatler: "Opening hours",
    telefon: "Phone",
    whatsappEtiket: "WhatsApp",
    ofisYetkilisi: "Office (WhatsApp)",
    ofisButonu: "Message the office",
    kapali: "Closed",
    gunler: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    haritaBasligi: "on the map",
    sekmeKirlent: "Cushion",
    sekmePuf: "Bean bag / Seat pad",
    hesapTuru: "What are you calculating for?",
    adet: "Pieces",
    kirlentSonuc: "grams / piece",
    kirlentToplam: "about {kg} kg of filling in total for {adet} pieces",
    sekil: "Shape",
    kutu: "Square / rectangular",
    silindir: "Round (cylinder)",
    en: "Width (cm)",
    boy: "Length (cm)",
    cap: "Diameter (cm)",
    yukseklik: "Height (cm)",
    dolgunluk: "How firm should it be?",
    yumusak: "Soft",
    orta: "Medium",
    sert: "Firm",
    aralik: "about {min} to {max} kg, {litre} litres of volume",
    wa: {
      siparis: "Hello, I would like to place an order.",
      bilgi: "Hello, I would like some information about your products.",
      toptan: "Hello, I would like a wholesale price for my company.",
      nakliye: "Hello, I would like a freight price. Delivery city: ",
      rehber: "Hello, I want to fill a {ne}. Which filling do you recommend?",
      hesap: "Hello, I need about {kg} kg of shredded foam for a {dolgu} seat pad/bean bag ({olcu}). Could you give me a price?",
      hesapKirlent: "Hello, I would like {adet} cushion inserts {en}×{boy} cm (about {g} grams of filling each). Could you give me a price?",
      hesapKutu: "{en}×{boy}×{h} cm",
      hesapSilindir: "round, Ø {cap} cm, height {h} cm",
    },
  },
};
