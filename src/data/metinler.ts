// ============================================================
//  SİTEDEKİ YAZILAR (TÜRKÇE)
//  Sayfalardaki tüm metinler burada. Sadece tırnak ("...") içini değiştirin.
//
//  Dikkat:
//  - Her metin çift tırnak içinde durur:  baslik: "Yeni başlık",
//  - Satır sonundaki virgülü silmeyin.
//  - Metnin içinde çift tırnak (") kullanmayın; gerekiyorsa “ ” kullanın.
//  - {yil} yazan yere işletmenin yılı (site.ts > years) otomatik gelir.
//
//  Almanca: metinler.de.ts   İngilizce: metinler.en.ts  (aynı yapı)
//  Ürün adları ve ürün sayfası yazıları:  src/data/products.ts
//  Telefon, adres, çalışma saatleri:       src/data/site.ts
// ============================================================

export const metinler = {
  // ---------- ANA SAYFA: en üst bölüm ----------
  giris: {
    baslik: "Kırpıntı sünger ve hazır kırlent, hepsi kiloyla.",
    aciklama: "Çiçek Sünger {yil} yıldır kırpıntı sünger, 55×55, 65×65 ve isteğe göre farklı ölçülerde hazır kırlent iç yastığı, kiloluk tabaka sünger ve boncuk silikon satıyor. Çuvalla ya da TIR ile, Türkiye’nin her yerine.",
    siparisButonu: "WhatsApp’tan sipariş",
    urunlerButonu: "Ürünleri gör",
    maddeler: [
      "Her şey kiloyla, çuvalla",
      "TIR bazlı kurumsal sevkiyat",
      "Türkiye’nin her yerine nakliye",
    ],
    videoAltYazisi: "Depomuzdan: kilo ile satılan kırpıntı sünger",
  },

  // ---------- ANA SAYFA: bölüm başlıkları ----------
  anaSayfa: {
    urunlerBasligi: "Ürünlerimiz, hepsi kiloyla",
    tumUrunlerLinki: "Tüm ürünler",
    nedenBasligi: "Neden Çiçek Sünger?",
    videoBasligi: "Depodan videolar",
    videoAciklamasi: "Stokta ne olduğunu en iyi videolar anlatıyor.",
  },

  // ---------- "Neden Çiçek Sünger?" maddeleri ----------
  neden: [
    { baslik: "{yil} yıllık esnaf", aciklama: "Aynı işi çeyrek asırdır yapıyoruz. Hangi dolgunun nereye gittiğini biliriz." },
    { baslik: "Kiloyla, çuvalla", aciklama: "Atölyeye çuval çuval, evine tek torba. Her şey kilo ile tartılır." },
    { baslik: "TIR bazlı kurumsal sevkiyat", aciklama: "Büyük siparişleri TIR ve kamyonla, firmanızın kapısına kadar gönderiyoruz." },
    { baslik: "WhatsApp’tan hızlı cevap", aciklama: "Ürünü ve miktarı yazın, fiyatı ve nakliyeyi birlikte konuşalım." },
  ],

  // ---------- Sevkiyat bölümü (ana sayfa ve toptan sayfası) ----------
  sevkiyat: {
    baslik: "TIR bazlı kurumsal sevkiyat",
    aciklama: "Nakliyeyle Türkiye’nin her yerine gönderiyoruz. Nakliye fiyatını tırcılara ve kamyonculara sorup firmanıza iletiyoruz. Detaylar için WhatsApp’tan görüşelim.",
    sehirlerBasligi: "Gönderim yaptığımız bazı yerler",
    // Yurtdışı olanlar yurtdisi listesine
    sehirler: ["İstanbul", "Kayseri", "Denizli", "Mardin", "Manisa", "Tekirdağ", "Diyarbakır"],
    yurtdisi: ["Almanya"],
    buton: "Nakliye fiyatı sor",
  },

  // ---------- "Ne dolduracaksınız?" rehberi ----------
  // oneriler: products.ts içindeki ürün kodları (slug). İlki "Önerimiz", ikincisi "Alternatif".
  // hesapla: true ise "Kaç kilo lazım" butonu çıkar.
  rehber: {
    baslik: "Ne dolduracaksınız?",
    onerimizEtiketi: "Önerimiz",
    alternatifEtiketi: "Alternatif",
    hesaplaButonu: "Ne kadar dolgu lazım, hesapla",
    sorButonu: "Bize sorun",
    secenekler: [
      {
        ad: "Kırlent",
        aciklama: "Kılıfınız 55×55 ya da 65×65 ise tela içi hazır dolu iç yastık en kolayı; farklı ölçüleri de isteğe göre hazırlıyoruz. Kendiniz dolduracaksanız kırpıntı sünger kullanın; daha yumuşak olsun derseniz boncuk silikonla karıştırın.",
        oneriler: ["kirlent-ic-yastigi", "kirpinti-sunger"],
        hesapla: true,
      },
      {
        ad: "Minder",
        aciklama: "Yumuşak yer minderi için kırpıntı sünger. Daha düz bir oturak için kiloluk tabaka sünger.",
        oneriler: ["kirpinti-sunger", "kiloluk-sunger"],
        hesapla: true,
      },
      {
        ad: "Uyku yastığı",
        aciklama: "Boyun desteği isteyenlere visko yastık. Klasik yumuşak yastık için boncuk silikon dolgu.",
        oneriler: ["visko-yastik", "boncuk-silikon"],
        hesapla: false,
      },
      {
        ad: "Pet yatağı",
        aciklama: "Kedi ve köpek yataklarında kırpıntı sünger en çok tercih edilen dolgu. Tabana kiloluk tabaka sünger konabilir.",
        oneriler: ["kirpinti-sunger", "kiloluk-sunger"],
        hesapla: true,
      },
      {
        ad: "Oyuncak",
        aciklama: "Peluş oyuncakta boncuk silikon yumuşak ve eşit dağılır. Daha dolgun ve ekonomik iş için kırpıntı.",
        oneriler: ["boncuk-silikon", "kirpinti-sunger"],
        hesapla: false,
      },
      {
        ad: "Puf",
        aciklama: "Pufta kırpıntı sünger hem ekonomik hem de şeklini toplar. Ne kadar gerektiğini hesaplayıcıyla bulabilirsiniz.",
        oneriler: ["kirpinti-sunger"],
        hesapla: true,
      },
    ],
  },

  // ---------- Kırpıntı hesaplayıcı ----------
  hesaplayici: {
    baslik: "Ne kadar dolgu lazım?",
    aciklama: "Kırlentin ya da pufun ölçüsünü girin, yaklaşık dolgu miktarını söyleyelim. Sonucu tek tuşla bize gönderebilirsiniz.",
    kirlentNot: "Örnek: 55×55 kırlente yaklaşık 450 gram boncuk silikon ve kırpıntı karışımı yetiyor. Diğer ölçüler buna göre hesaplanır.",
    buton: "Bu miktar için fiyat al",
    not: "Hesap yaklaşıktır. Kumaşın esnekliği ve ne kadar sıkıştırdığınız sonucu değiştirir.",
  },

  // ---------- Bordo "Esnafsanız..." bölümü ----------
  toptanBandi: {
    baslik: "Esnafsanız özel fiyat için arayın.",
    aciklama: "Döşemeci, kırlent atölyesi, mobilyacı, pet yatağı ve oyuncak üreticilerine düzenli tedarik, kilo fiyatı ve TIR bazlı sevkiyat.",
    link: "Toptan satış hakkında",
    whatsappButonu: "Toptan fiyat iste",
  },

  // ---------- Adres / harita bölümü ----------
  iletisimBlogu: {
    baslik: "Nereden bulunuruz?",
    konumButonu: "Yol tarifi al",
  },

  // ---------- Video şeridi (dosya adı: public/video/...) ----------
  videolar: [
    { dosya: "sunger-3", yazi: "Kiloluk süngerlerimiz geldi" },
    { dosya: "depo-1", yazi: "Beyaz kırpıntı, torbadan" },
    { dosya: "depo-2", yazi: "Kiloluk tabaka parçalar" },
    { dosya: "gri-sunger", yazi: "Esnek gri sünger" },
    { dosya: "plaka-yigin", yazi: "Depoda tabaka stoğu" },
    { dosya: "kirpinti-avuc", yazi: "Mint kırpıntı sünger" },
  ],

  // ============================================================
  //  İÇ SAYFALAR
  //  googleAciklamasi: Google arama sonucunda başlığın altında görünen metin
  // ============================================================

  urunlerSayfasi: {
    baslik: "Ürünler",
    aciklama: "Dolgu ve sünger çeşitlerimiz, hepsi kiloyla. Fiyatlar sık değiştiği için güncel fiyatı WhatsApp’tan veriyoruz.",
    googleAciklamasi: "Kilo ile kırpıntı sünger, 55×55, 65×65 ve isteğe göre farklı ölçülerde hazır kırlent iç yastığı, kiloluk tabaka sünger, boncuk silikon ve visko yastık. Çuvalla ve TIR bazlı sevkiyat.",
  },

  urunSayfasi: {
    fiyatButonu: "Fiyat al",
    araButonu: "Ara",
    fiyatNotu: "Fiyatlar sık değiştiği için güncel fiyatı WhatsApp’tan bildiriyoruz.",
    kullanimBasligi: "Nerede kullanılır?",
    sssBasligi: "Sık sorulanlar",
    benzerBasligi: "Benzer ürünler",
  },

  hangiDolguSayfasi: {
    baslik: "Hangi dolgu bana uygun?",
    aciklama: "Ne dolduracağınızı seçin, uygun ürünü önerelim. Ne kadar dolgu gerektiğini de hesaplayabilirsiniz.",
    googleBasligi: "Hangi dolgu bana uygun? Puf için kaç kg sünger?",
    googleAciklamasi: "Kırlent, minder, yastık, pet yatağı ve puf için hangi dolgu kullanılır? Kırpıntı hesaplayıcı ile kaç kilo sünger gerektiğini hesaplayın.",
    tabloBasligi: "Dolgular arasındaki fark",
    tabloBasliklari: ["Dolgu", "Hissi", "En uygun olduğu yer"],
    tablo: [
      { dolgu: "Kırpıntı sünger", his: "Dolgun, şeklini toplar", yer: "Kırlent, minder, pet yatağı, puf", urun: "kirpinti-sunger" },
      { dolgu: "Kırpıntı + boncuk silikon", his: "Dolgun ama daha yumuşak", yer: "Kırlent iç yastığı", urun: "kirlent-ic-yastigi" },
      { dolgu: "Tabaka sünger", his: "Düz, belli bir şekil", yer: "Döşeme, oturak, ambalaj", urun: "kiloluk-sunger" },
      { dolgu: "Boncuk silikon", his: "Yumuşak, kabarık", yer: "Yastık, kırlent, oyuncak", urun: "boncuk-silikon" },
      { dolgu: "Fire elyaf", his: "Yumuşak, ekonomik", yer: "Ucuz kırlent ve oyuncak", urun: "boncuk-silikon" },
      { dolgu: "Visko sünger", his: "Şekil alır, yavaş geri döner", yer: "Uyku ve boyun yastığı", urun: "visko-yastik" },
    ],
  },

  toptanSayfasi: {
    baslik: "Esnafa toptan sünger ve dolgu",
    aciklama: "Her şey kiloyla, çuvalla. Düzenli alım yapan işletmelere özel kilo fiyatı ve TIR bazlı kurumsal sevkiyat.",
    googleBasligi: "Toptan sünger ve dolgu, TIR bazlı sevkiyat",
    googleAciklamasi: "Döşemeci, kırlent atölyesi, mobilyacı, pet yatağı ve oyuncak üreticilerine toptan kırpıntı sünger, kiloluk sünger, boncuk silikon ve kırlent iç yastığı. Nakliyeyle Türkiye’nin her yerine.",
    whatsappButonu: "Toptan fiyat iste",
    kimlerBasligi: "Kimlere satıyoruz?",
    kimler: [
      { baslik: "Döşemeciler", aciklama: "Koltuk ve sandalye döşemesi için kiloluk tabaka sünger ve kırpıntı." },
      { baslik: "Kırlent atölyeleri", aciklama: "55×55, 65×65 ve isteğe göre farklı ölçülerde hazır iç yastık, boncuk silikon ve elyaf." },
      { baslik: "Mobilyacılar", aciklama: "Döşeme altı ve minder için kiloluk tabaka sünger." },
      { baslik: "Pet yatağı üreticileri", aciklama: "Kilo ile kırpıntı sünger ve taban için tabaka sünger." },
      { baslik: "Oyuncak üreticileri", aciklama: "Peluş için boncuk silikon ve kırpıntı." },
    ],
    adimlarBasligi: "Nasıl çalışıyoruz?",
    adimlar: [
      "WhatsApp’tan ürünü ve miktarı yazın: kilo, çuval ya da TIR.",
      "Güncel kilo fiyatını bildiriyoruz. Nakliye fiyatını tırcı ve kamyonculara sorup size iletiyoruz.",
      "Sipariş tartılıp çuvallanır, nakliyeyle adresinize yola çıkar.",
    ],
    videoBasligi: "Depodan videolar",
  },

  hakkimizdaSayfasi: {
    baslik: "{yil} yıldır doldurduğumuz her şey",
    googleAciklamasi: "Çiçek Sünger: {yil} yıldır İzmir Buca’da kırpıntı sünger, kiloluk sünger ve dolgu satan esnaf.",
    // İlk paragraf büyük yazılır. Paragraf eklemek için yeni bir satır açın.
    paragraflar: [
      "Çiçek Sünger, {yil} yıldır İzmir Buca’da kırpıntı sünger, kiloluk tabaka sünger, boncuk silikon ve hazır dolu kırlent satıyor.",
      "Müşterilerimizin bir kısmı döşemeciler ve atölyeler, bir kısmı da evdeki pufu yeniden doldurmak isteyenler. İkisine de aynı şekilde davranıyoruz: ne lazım olduğunu soruyor, doğru dolguyu öneriyoruz.",
      "Nakliyeyle Türkiye’nin her yerine, hatta Almanya’ya bile gönderiyoruz.",
      "Trendyol ve Hepsiburada’daki online mağazalarımızın adı ÇisebO.",
    ],
    // Kuruluş hikâyesi eklenince bu satırı "" yapın (sarı etiket kaybolur).
    eksikNotu: "Buraya işletmenin kuruluş hikâyesi eklenecek",
  },

  sssSayfasi: {
    baslik: "Sıkça sorulan sorular",
    googleAciklamasi: "Kırpıntı sünger, boncuk silikon, kırlent iç yastığı, sipariş ve nakliye hakkında sık sorulan sorular.",
    siparisBasligi: "Sipariş ve nakliye",
    urunlerBasligi: "Ürünler",
    // Ürünlerle ilgili sorular products.ts'den otomatik gelir.
    siparisSorulari: [
      { soru: "Fiyatlar neden sitede yazmıyor?", cevap: "Sünger ve dolgu fiyatları sık değişiyor. Yanlış fiyat göstermemek için güncel fiyatı WhatsApp’tan bildiriyoruz." },
      { soru: "Nasıl sipariş verebilirim?", cevap: "WhatsApp’tan ne istediğinizi ve miktarı yazmanız yeterli. Fiyatı ve hazır olma zamanını bildiriyoruz." },
      { soru: "Nasıl satıyorsunuz?", cevap: "Her şey kilo ile tartılır, çuvalla verilir. Büyük siparişler TIR bazında sevk edilir." },
      { soru: "Şehir dışına gönderim var mı?", cevap: "Evet. Nakliyeyle Türkiye’nin her yerine gönderiyoruz; İstanbul, Kayseri, Denizli, Mardin, Manisa, Tekirdağ, Diyarbakır ve Almanya bunlardan bazıları." },
      { soru: "Nakliye ücreti ne kadar?", cevap: "Nakliye fiyatını tırcılara ve kamyonculara sorup size iletiyoruz. Miktara ve adrese göre değişir, WhatsApp’tan konuşalım." },
    ],
  },

  iletisimSayfasi: {
    baslik: "İletişim",
    aciklama: "En hızlı cevabı WhatsApp’tan veriyoruz. Ürün, miktar ve teslim adresini yazmanız yeterli.",
  },

  altBilgi: {
    etiket: "Kırlent Yastık ve Kırpıntı, Boncuk Silikon, Visko",
    telif: "{yil} yıldır sünger ve dolgu. Nakliyeyle Türkiye’nin her yerine.",
    whatsappLinki: "WhatsApp’tan yazın",
  },

  // ============================================================
  //  ARAYÜZ: menü, butonlar, form etiketleri
  // ============================================================
  ui: {
    menu: [
      { label: "Ürünler", path: "urunler" },
      { label: "Hangi dolgu?", path: "hangi-dolgu" },
      { label: "Toptan / Sevkiyat", path: "toptan" },
      { label: "Hakkımızda", path: "hakkimizda" },
      { label: "Sorular", path: "sss" },
      { label: "İletişim", path: "iletisim" },
    ],
    anaSayfa: "Ana sayfa",
    menuButonu: "Menü",
    icerigeGec: "İçeriğe geç",
    dil: "Dil",
    siteBasligi: "Kırpıntı Sünger, Kırlent İç Yastığı, Kiloluk Sünger",
    altUrunler: "Ürünler",
    onlineMagaza: "Online mağazamız",
    altSayfalar: "Sayfalar",
    fotoYakinda: "Fotoğraf yakında",
    satisBirimi: "Satış birimi",
    birimler: { kg: "kg", "çuval": "çuval", adet: "adet" },
    whatsappSiparis: "WhatsApp’tan sipariş",
    telefonlaAra: "Telefonla ara",
    hizliIletisim: "Hızlı iletişim",
    oncekiVideolar: "Önceki videolar",
    sonrakiVideolar: "Sonraki videolar",
    videoSeridi: "Depodan videolar, yatay kaydırılır",
    adres: "Adres",
    saatler: "Çalışma saatleri",
    telefon: "Telefon",
    whatsappEtiket: "WhatsApp",
    ofisYetkilisi: "Ofis yetkilisi (WhatsApp)",
    ofisButonu: "Ofis yetkilisine yaz",
    kapali: "Kapalı",
    gunler: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
    haritaBasligi: "harita konumu",
    // hesaplayıcı
    sekmeKirlent: "Kırlent",
    sekmePuf: "Puf / Minder",
    hesapTuru: "Ne için hesaplıyorsunuz?",
    adet: "Adet",
    kirlentSonuc: "gram / adet",
    kirlentToplam: "{adet} adet için toplam yaklaşık {kg} kg dolgu",
    sekil: "Şekil",
    kutu: "Kare / dikdörtgen",
    silindir: "Yuvarlak (silindir)",
    en: "En (cm)",
    boy: "Boy (cm)",
    cap: "Çap (cm)",
    yukseklik: "Yükseklik (cm)",
    dolgunluk: "Ne kadar dolgun olsun?",
    yumusak: "Yumuşak",
    orta: "Orta",
    sert: "Sıkı",
    aralik: "yaklaşık {min} ile {max} kg arası, {litre} litre hacim",
    // WhatsApp hazır mesajları
    wa: {
      siparis: "Merhaba, sipariş vermek istiyorum.",
      bilgi: "Merhaba, ürünleriniz hakkında bilgi almak istiyorum.",
      toptan: "Merhaba, firma adına toptan fiyat almak istiyorum.",
      nakliye: "Merhaba, nakliye fiyatı almak istiyorum. Teslim şehri: ",
      rehber: "Merhaba, {ne} doldurmak istiyorum. Hangi dolguyu önerirsiniz?",
      hesap: "Merhaba, {olcu} ölçüsünde {dolgu} dolgulu bir minder/puf için yaklaşık {kg} kg kırpıntı sünger almak istiyorum. Fiyat alabilir miyim?",
      hesapKirlent: "Merhaba, {adet} adet {en}×{boy} cm kırlent iç yastığı almak istiyorum (adet başı yaklaşık {g} gram dolgu). Fiyat alabilir miyim?",
      hesapKutu: "{en}×{boy}×{h} cm",
      hesapSilindir: "çap {cap} cm, yükseklik {h} cm yuvarlak",
    },
  },
};

export type Metinler = typeof metinler;
