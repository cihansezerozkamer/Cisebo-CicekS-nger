// İşletme bilgileri. Google İşletme Profili ile birebir aynı olmalı.
// Kaynak: Google Haritalar kaydı (05.11.2026)

export const site = {
  name: 'Çiçek Sünger',
  // Google'daki kayıtlı ad
  googleName: 'Çicek Sünger ,Kırlent Yastık ve Kırpıntı, Boncuk Silikon, Visko ve Şark Köşesi',
  years: 25,
  // Arama numarası (Google kaydındaki). Bu numarada WhatsApp yok.
  phoneDisplay: '0543 455 90 99',
  phoneE164: '+905434559099',
  // Sitedeki bütün WhatsApp butonları bu numaraya gider
  whatsapp: '4915511090098',
  whatsappDisplay: '+49 155 11090098',
  // Ofis yetkilisi: ayrı WhatsApp bağlantısı
  office: { whatsapp: '905326345801', display: '0532 634 58 01' },
  address: {
    neighborhood: 'Seyhan Mah.',
    street: '663/1. Sk. No:46/1',
    district: 'Buca',
    city: 'İzmir',
    postalCode: '35340',
    country: 'TR',
  },
  geo: { lat: 38.374835, lng: 27.1375738 },
  googlePlaceId: 'ChIJ1Z2Dv0nfuxQRnQdxyTeFcx0',
  // Google Haritalar kaydının kalıcı adresi (işletme verisinde sameAs olarak kullanılır)
  googleMapsUrl: 'https://maps.google.com/?cid=2122186324070959005',
  // gün numaraları: 1 = Pazartesi … 7 = Pazar
  hours: [
    { days: [1, 2, 3, 4, 5], open: '08:00', close: '19:00' },
    { days: [6], open: '08:00', close: '14:30' },
  ],
  closedDays: [7],
  shipping: true, // nakliye ile Türkiye geneli + yurtdışı
  // Online mağazalar (ÇisebO). Linkler eklenince alt bilgide tıklanabilir olur.
  storeName: 'ÇisebO',
  onlineStores: [
    { name: 'Trendyol', url: '' }, // TODO: mağaza linki
    { name: 'Hepsiburada', url: '' }, // TODO: mağaza linki
  ],
  instagram: '', // TODO
};

const a = site.address;
export const addressLine = `${a.neighborhood}, ${a.street}, ${a.postalCode} ${a.district}/${a.city}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(`Çicek Sünger, ${a.street}, ${a.district}/${a.city}`)}&ll=${site.geo.lat},${site.geo.lng}&z=16&output=embed`;
export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.name + ' ' + a.district + ' ' + a.city)}&query_place_id=${site.googlePlaceId}`;

export function waLink(message: string, number: string = site.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function officeWaLink(message: string) {
  return waLink(message, site.office.whatsapp);
}

export function telLink() {
  return `tel:${site.phoneE164}`;
}
