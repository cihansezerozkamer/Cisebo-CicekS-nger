// SİTEDEKİ YAZILAR (ALMANCA). Yapı metinler.ts ile aynı.
import type { Metinler } from './metinler';

export const metinler: Metinler = {
  giris: {
    baslik: "Schaumstoffflocken und Kissen-Inlets, alles nach Kilo.",
    aciklama: "Çiçek Sünger verkauft seit {yil} Jahren Schaumstoffflocken, fertige Kissen-Inlets 55×55, 65×65 und auf Wunsch in anderen Größen, Schaumstoffplatten nach Kilo und Kugelfaser. Im Sack oder als LKW-Ladung, in die ganze Türkei und nach Deutschland.",
    siparisButonu: "Per WhatsApp bestellen",
    urunlerButonu: "Produkte ansehen",
    maddeler: [
      "Alles nach Kilo, im Sack",
      "Gewerbeversand per LKW",
      "Lieferung in die ganze Türkei und nach Deutschland",
    ],
    videoAltYazisi: "Aus unserem Lager: Schaumstoffflocken nach Kilo",
  },

  anaSayfa: {
    urunlerBasligi: "Unsere Produkte, alles nach Kilo",
    tumUrunlerLinki: "Alle Produkte",
    nedenBasligi: "Warum Çiçek Sünger?",
    videoBasligi: "Videos aus dem Lager",
    videoAciklamasi: "Was gerade auf Lager ist, zeigen die Videos am besten.",
  },

  neden: [
    { baslik: "{yil} Jahre Erfahrung", aciklama: "Wir machen das seit einem Vierteljahrhundert und wissen, welche Füllung wohin gehört." },
    { baslik: "Nach Kilo, im Sack", aciklama: "Sackweise für die Werkstatt, ein Beutel für zu Hause. Alles wird gewogen." },
    { baslik: "Gewerbeversand per LKW", aciklama: "Große Bestellungen liefern wir per LKW bis vor Ihre Firma." },
    { baslik: "Schnelle Antwort auf WhatsApp", aciklama: "Schreiben Sie Produkt und Menge, Preis und Transport klären wir gemeinsam." },
  ],

  sevkiyat: {
    baslik: "Gewerbeversand per LKW",
    aciklama: "Wir liefern per Spedition in die ganze Türkei und ins Ausland. Den Frachtpreis holen wir bei LKW- und Transportunternehmen ein und geben ihn an Ihre Firma weiter. Details klären wir auf WhatsApp.",
    sehirlerBasligi: "Einige Orte, die wir beliefern",
    sehirler: ["Istanbul", "Kayseri", "Denizli", "Mardin", "Manisa", "Tekirdağ", "Diyarbakır"],
    yurtdisi: ["Deutschland"],
    buton: "Frachtpreis anfragen",
  },

  rehber: {
    baslik: "Was möchten Sie füllen?",
    onerimizEtiketi: "Unsere Empfehlung",
    alternatifEtiketi: "Alternative",
    hesaplaButonu: "Füllmenge berechnen",
    sorButonu: "Fragen Sie uns",
    secenekler: [
      {
        ad: "Kissen",
        aciklama: "Für Bezüge 55×55 oder 65×65 ist das fertige Inlet am einfachsten; andere Größen fertigen wir auf Wunsch. Selbst füllen? Dann Schaumstoffflocken, für mehr Weichheit mit Kugelfaser gemischt.",
        oneriler: ["kirlent-ic-yastigi", "kirpinti-sunger"],
        hesapla: true,
      },
      {
        ad: "Sitzkissen",
        aciklama: "Für weiche Bodenkissen Schaumstoffflocken. Für eine flache Sitzfläche Schaumstoffplatten nach Kilo.",
        oneriler: ["kirpinti-sunger", "kiloluk-sunger"],
        hesapla: true,
      },
      {
        ad: "Kopfkissen",
        aciklama: "Wer Nackenstütze möchte, nimmt das Viscoschaum-Kissen. Für das klassische weiche Kissen Kugelfaser.",
        oneriler: ["visko-yastik", "boncuk-silikon"],
        hesapla: false,
      },
      {
        ad: "Tierbett",
        aciklama: "Für Hunde- und Katzenbetten sind Schaumstoffflocken die beliebteste Füllung. Als Boden passt eine Schaumstoffplatte.",
        oneriler: ["kirpinti-sunger", "kiloluk-sunger"],
        hesapla: true,
      },
      {
        ad: "Spielzeug",
        aciklama: "Bei Plüschtieren verteilt sich Kugelfaser weich und gleichmäßig. Für feste und günstige Füllung Flocken.",
        oneriler: ["boncuk-silikon", "kirpinti-sunger"],
        hesapla: false,
      },
      {
        ad: "Sitzsack",
        aciklama: "Im Sitzsack sind Schaumstoffflocken günstig und halten die Form. Die Menge finden Sie mit dem Rechner.",
        oneriler: ["kirpinti-sunger"],
        hesapla: true,
      },
    ],
  },

  hesaplayici: {
    baslik: "Wie viel Füllung brauche ich?",
    aciklama: "Geben Sie die Maße Ihres Kissens oder Sitzsacks ein, wir sagen Ihnen die ungefähre Füllmenge. Das Ergebnis schicken Sie uns mit einem Klick.",
    kirlentNot: "Beispiel: Für ein Kissen 55×55 reichen etwa 450 Gramm Mischung aus Kugelfaser und Schaumstoffflocken. Andere Größen werden danach berechnet.",
    buton: "Preis für diese Menge anfragen",
    not: "Die Berechnung ist ein Richtwert. Stoffdehnung und wie fest Sie stopfen, ändern das Ergebnis.",
  },

  toptanBandi: {
    baslik: "Gewerbekunden erhalten Sonderpreise.",
    aciklama: "Regelmäßige Lieferung, Kilopreis und LKW-Versand für Polsterer, Kissen-Nähereien, Möbelhersteller, Tierbett- und Spielzeughersteller.",
    link: "Mehr zum Großhandel",
    whatsappButonu: "Großhandelspreis anfragen",
  },

  iletisimBlogu: {
    baslik: "So finden Sie uns",
    konumButonu: "Route planen",
  },

  videolar: [
    { dosya: "sunger-3", yazi: "Neue Schaumstoffplatten nach Kilo" },
    { dosya: "depo-1", yazi: "Weiße Flocken aus dem Sack" },
    { dosya: "depo-2", yazi: "Plattenstücke nach Kilo" },
    { dosya: "gri-sunger", yazi: "Elastischer grauer Schaumstoff" },
    { dosya: "plaka-yigin", yazi: "Plattenbestand im Lager" },
    { dosya: "kirpinti-avuc", yazi: "Mintgrüne Schaumstoffflocken" },
  ],

  urunlerSayfasi: {
    baslik: "Produkte",
    aciklama: "Unsere Füllungen und Schaumstoffe, alles nach Kilo. Da sich die Preise oft ändern, nennen wir den aktuellen Preis auf WhatsApp.",
    googleAciklamasi: "Schaumstoffflocken nach Kilo, fertige Kissen-Inlets 55×55, 65×65 und in Wunschgrößen, Schaumstoffplatten, Kugelfaser und Viscoschaum-Kissen. Im Sack und per LKW.",
  },

  urunSayfasi: {
    fiyatButonu: "Preis anfragen",
    araButonu: "Anrufen",
    fiyatNotu: "Da sich die Preise oft ändern, nennen wir den aktuellen Preis auf WhatsApp.",
    kullanimBasligi: "Wofür?",
    sssBasligi: "Häufige Fragen",
    benzerBasligi: "Ähnliche Produkte",
  },

  hangiDolguSayfasi: {
    baslik: "Welche Füllung passt zu mir?",
    aciklama: "Wählen Sie, was Sie füllen möchten, wir empfehlen das passende Produkt. Und berechnen Sie, wie viel Füllung Sie brauchen.",
    googleBasligi: "Welche Füllung? Wie viel kg Schaumstoff für einen Sitzsack?",
    googleAciklamasi: "Welche Füllung für Kissen, Sitzkissen, Kopfkissen, Tierbett und Sitzsack? Berechnen Sie mit dem Rechner, wie viel Kilo Schaumstoffflocken Sie brauchen.",
    tabloBasligi: "Die Füllungen im Vergleich",
    tabloBasliklari: ["Füllung", "Gefühl", "Am besten für"],
    tablo: [
      { dolgu: "Schaumstoffflocken", his: "Voll, hält die Form", yer: "Kissen, Sitzkissen, Tierbett, Sitzsack", urun: "kirpinti-sunger" },
      { dolgu: "Flocken + Kugelfaser", his: "Voll, aber weicher", yer: "Kissen-Inlets", urun: "kirlent-ic-yastigi" },
      { dolgu: "Schaumstoffplatte", his: "Flach, feste Form", yer: "Polster, Sitzfläche, Verpackung", urun: "kiloluk-sunger" },
      { dolgu: "Kugelfaser", his: "Weich, bauschig", yer: "Kopfkissen, Kissen, Spielzeug", urun: "boncuk-silikon" },
      { dolgu: "Restfaser", his: "Weich, günstig", yer: "Günstige Kissen und Spielzeug", urun: "boncuk-silikon" },
      { dolgu: "Viscoschaum", his: "Passt sich an, langsame Rückstellung", yer: "Kopf- und Nackenkissen", urun: "visko-yastik" },
    ],
  },

  toptanSayfasi: {
    baslik: "Schaumstoff und Füllung für Gewerbekunden",
    aciklama: "Alles nach Kilo, im Sack. Sonderpreise für Betriebe mit regelmäßigem Bedarf und Gewerbeversand per LKW.",
    googleBasligi: "Großhandel Schaumstoff und Füllung, Versand per LKW",
    googleAciklamasi: "Schaumstoffflocken, Schaumstoffplatten nach Kilo, Kugelfaser und Kissen-Inlets im Großhandel für Polsterer, Nähereien, Möbel-, Tierbett- und Spielzeughersteller. Versand in die ganze Türkei und nach Deutschland.",
    whatsappButonu: "Großhandelspreis anfragen",
    kimlerBasligi: "Für wen?",
    kimler: [
      { baslik: "Polsterer", aciklama: "Schaumstoffplatten nach Kilo und Flocken für Sofas und Stühle." },
      { baslik: "Kissen-Nähereien", aciklama: "Fertige Inlets 55×55, 65×65 und in Wunschgrößen, Kugelfaser und Füllwatte." },
      { baslik: "Möbelhersteller", aciklama: "Schaumstoffplatten nach Kilo für Polsterunterbau und Sitzkissen." },
      { baslik: "Tierbett-Hersteller", aciklama: "Schaumstoffflocken nach Kilo und Platten für den Boden." },
      { baslik: "Spielzeughersteller", aciklama: "Kugelfaser und Flocken für Plüschtiere." },
    ],
    adimlarBasligi: "So läuft es ab",
    adimlar: [
      "Schreiben Sie uns auf WhatsApp Produkt und Menge: Kilo, Sack oder LKW-Ladung.",
      "Wir nennen den aktuellen Kilopreis. Den Frachtpreis holen wir bei LKW-Unternehmen ein.",
      "Die Ware wird gewogen, in Säcke verpackt und per Spedition zu Ihnen geschickt.",
    ],
    videoBasligi: "Videos aus dem Lager",
  },

  hakkimizdaSayfasi: {
    baslik: "Seit {yil} Jahren füllen wir alles",
    googleAciklamasi: "Çiçek Sünger: seit {yil} Jahren Schaumstoffflocken, Schaumstoff nach Kilo und Füllungen aus Buca, İzmir.",
    paragraflar: [
      "Çiçek Sünger verkauft seit {yil} Jahren in Buca, İzmir Schaumstoffflocken, Schaumstoffplatten nach Kilo, Kugelfaser und fertige Kissen-Inlets.",
      "Zu unseren Kunden gehören Polsterer und Werkstätten, aber auch Menschen, die zu Hause einen Sitzsack neu füllen möchten. Alle behandeln wir gleich: Wir fragen, was gebraucht wird, und empfehlen die richtige Füllung.",
      "Wir liefern per Spedition in die ganze Türkei und sogar nach Deutschland.",
      "Unsere Online-Shops auf Trendyol und Hepsiburada heißen ÇisebO.",
    ],
    eksikNotu: "",
  },

  sssSayfasi: {
    baslik: "Häufige Fragen",
    googleAciklamasi: "Häufige Fragen zu Schaumstoffflocken, Kugelfaser, Kissen-Inlets, Bestellung und Versand.",
    siparisBasligi: "Bestellung und Versand",
    urunlerBasligi: "Produkte",
    siparisSorulari: [
      { soru: "Warum stehen keine Preise auf der Website?", cevap: "Die Preise für Schaumstoff und Füllung ändern sich oft. Damit kein falscher Preis steht, nennen wir den aktuellen Preis auf WhatsApp." },
      { soru: "Wie bestelle ich?", cevap: "Schreiben Sie uns auf WhatsApp, was Sie brauchen und wie viel. Wir nennen Preis und Liefertermin." },
      { soru: "Wie wird verkauft?", cevap: "Alles wird nach Kilo gewogen und im Sack geliefert. Große Bestellungen versenden wir als LKW-Ladung." },
      { soru: "Liefern Sie ins Ausland?", cevap: "Ja. Wir liefern per Spedition in die ganze Türkei und auch nach Deutschland, unter anderem nach Istanbul, Kayseri, Denizli, Mardin, Manisa, Tekirdağ und Diyarbakır." },
      { soru: "Was kostet der Versand?", cevap: "Wir holen den Frachtpreis bei LKW- und Transportunternehmen ein und geben ihn weiter. Er hängt von Menge und Adresse ab, schreiben Sie uns auf WhatsApp." },
    ],
  },

  iletisimSayfasi: {
    baslik: "Kontakt",
    aciklama: "Am schnellsten antworten wir auf WhatsApp. Schreiben Sie Produkt, Menge und Lieferadresse.",
  },

  altBilgi: {
    etiket: "Kissen und Schaumstoffflocken, Kugelfaser, Viscoschaum",
    telif: "Seit {yil} Jahren Schaumstoff und Füllung. Versand in die ganze Türkei und nach Deutschland.",
    whatsappLinki: "Auf WhatsApp schreiben",
  },

  ui: {
    menu: [
      { label: "Produkte", path: "urunler" },
      { label: "Welche Füllung?", path: "hangi-dolgu" },
      { label: "Großhandel / Versand", path: "toptan" },
      { label: "Über uns", path: "hakkimizda" },
      { label: "Fragen", path: "sss" },
      { label: "Kontakt", path: "iletisim" },
    ],
    anaSayfa: "Startseite",
    menuButonu: "Menü",
    icerigeGec: "Zum Inhalt",
    dil: "Sprache",
    siteBasligi: "Schaumstoffflocken, Kissen-Inlets, Schaumstoff nach Kilo",
    altUrunler: "Produkte",
    onlineMagaza: "Unser Online-Shop",
    altSayfalar: "Seiten",
    fotoYakinda: "Foto folgt",
    satisBirimi: "Verkaufseinheit",
    birimler: { kg: "kg", "çuval": "Sack", adet: "Stück" },
    whatsappSiparis: "Per WhatsApp bestellen",
    telefonlaAra: "Anrufen",
    hizliIletisim: "Schnellkontakt",
    oncekiVideolar: "Vorherige Videos",
    sonrakiVideolar: "Nächste Videos",
    videoSeridi: "Videos aus dem Lager, seitlich scrollen",
    adres: "Adresse",
    saatler: "Öffnungszeiten",
    telefon: "Telefon",
    whatsappEtiket: "WhatsApp",
    ofisYetkilisi: "Büro (WhatsApp)",
    ofisButonu: "Dem Büro schreiben",
    kapali: "Geschlossen",
    gunler: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    haritaBasligi: "auf der Karte",
    sekmeKirlent: "Kissen",
    sekmePuf: "Sitzsack / Sitzkissen",
    hesapTuru: "Wofür berechnen Sie?",
    adet: "Stück",
    kirlentSonuc: "Gramm / Stück",
    kirlentToplam: "für {adet} Stück insgesamt etwa {kg} kg Füllung",
    sekil: "Form",
    kutu: "Quadratisch / rechteckig",
    silindir: "Rund (Zylinder)",
    en: "Breite (cm)",
    boy: "Länge (cm)",
    cap: "Durchmesser (cm)",
    yukseklik: "Höhe (cm)",
    dolgunluk: "Wie fest soll es sein?",
    yumusak: "Weich",
    orta: "Mittel",
    sert: "Fest",
    aralik: "etwa {min} bis {max} kg, {litre} Liter Volumen",
    wa: {
      siparis: "Hallo, ich möchte bestellen.",
      bilgi: "Hallo, ich hätte gern Informationen zu Ihren Produkten.",
      toptan: "Hallo, ich möchte für meine Firma einen Großhandelspreis anfragen.",
      nakliye: "Hallo, ich möchte einen Frachtpreis anfragen. Lieferort: ",
      rehber: "Hallo, ich möchte {ne} füllen. Welche Füllung empfehlen Sie?",
      hesap: "Hallo, ich brauche für ein {dolgu} gefülltes Sitzkissen/einen Sitzsack ({olcu}) etwa {kg} kg Schaumstoffflocken. Können Sie mir einen Preis nennen?",
      hesapKirlent: "Hallo, ich möchte {adet} Kissen-Inlets {en}×{boy} cm (je etwa {g} Gramm Füllung). Können Sie mir einen Preis nennen?",
      hesapKutu: "{en}×{boy}×{h} cm",
      hesapSilindir: "rund, Ø {cap} cm, Höhe {h} cm",
    },
  },
};
