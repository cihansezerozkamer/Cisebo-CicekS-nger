// Ürünlerin tek kaynağı (Türkçe). Sıra = satış önem sırası.
// Almanca ve İngilizce metinler: products.i18n.ts
// Yeni ürün eklenince ürün sayfası, kart ve site haritası kendiliğinden oluşur.
import type { ImageMetadata } from 'astro';
import kirpintiTorba from '../assets/img/kirpinti-torba.jpg';
import kilolukSunger from '../assets/img/kiloluk-sunger.jpg';
import plakaIstif from '../assets/img/plaka-istif.jpg';
import plakaYigin from '../assets/img/plaka-yigin.jpg';
import griSunger from '../assets/img/gri-sunger.jpg';
import ciseboVisko from '../assets/img/cisebo-visko.jpg';
import viskoIz from '../assets/img/visko-iz.jpg';
import kirlentYastik from '../assets/img/kirlent-yastik.jpg';
import boncukSilikon from '../assets/img/boncuk-silikon.jpg';
import { productTexts } from './products.i18n';

export type Unit = 'kg' | 'çuval' | 'adet';

export interface ProductText {
  name: string;
  /** Google arama başlığı (sekme başlığı). Boşsa ürün adı kullanılır. */
  seoTitle?: string;
  short: string;
  intro: string;
  uses: string[];
  specs: { label: string; value: string }[];
  faq: { q: string; a: string }[];
  priceMessage: string;
  /** görsel açıklamaları, images ile aynı sırada */
  alts: string[];
}

interface ProductBase {
  slug: string;
  units: Unit[];
  /** Kartta görünen renk tonu: süngerin kendi rengi */
  tone: 'mint' | 'sari' | 'krem' | 'gri' | 'pembe';
  images: ImageMetadata[];
  related: string[];
}

export type Product = Omit<ProductBase, 'images'> &
  Omit<ProductText, 'alts'> & { images: { src: ImageMetadata; alt: string }[] };

const urunler: (ProductBase & ProductText)[] = [
  {
    slug: 'kirpinti-sunger',
    name: 'Kırpıntı Sünger',
    seoTitle: 'Kırpıntı Sünger Kilo Fiyatı, Toptan ve Perakende',
    short: 'Kırlent, minder ve pet yatağı için kiloyla dolgu.',
    intro:
      'Plaka kesimlerinden çıkan temiz sünger parçaları. Kırlent, minder, pet yatağı ve oyuncak dolgusunda en çok tercih edilen, ekonomik dolgu. Hazır kırlent iç yastıklarımızda da bunu kullanıyoruz.',
    units: ['kg', 'çuval'],
    tone: 'mint',
    images: [kirpintiTorba],
    alts: ['Torbada kilo ile satılan mint ve sarı renkli kırpıntı sünger'],
    uses: ['Kırlent dolgusu', 'Yer minderi', 'Kedi ve köpek yatağı', 'Oyuncak ve peluş dolgusu', 'Puf'],
    specs: [
      { label: 'Satış', value: 'Kilo ile, çuvalla' },
      { label: 'İçerik', value: 'Karışık renk sünger parçası' },
      { label: 'Gönderim', value: 'Nakliye ile Türkiye geneli, TIR bazlı sevkiyat' },
    ],
    faq: [
      { q: 'Ne kadar kırpıntı gerekir?', a: 'Doldurulacak şeyin ölçüsüne ve ne kadar sıkı olmasını istediğinize bağlı. Hangi Dolgu? sayfasındaki hesaplayıcıyla yaklaşık miktarı bulabilirsiniz.' },
      { q: 'Kırpıntının rengi seçilebiliyor mu?', a: 'Kırpıntı karışık renkli gelir. Kumaşın altında kaldığı için görünmez.' },
      { q: 'Esnafa toptan satış var mı?', a: 'Var. Çuvalla ve TIR bazında sevkiyat yapıyoruz. Kilo fiyatı için WhatsApp’tan yazın.' },
    ],
    related: ['kirlent-ic-yastigi', 'kiloluk-sunger', 'boncuk-silikon'],
    priceMessage: 'Merhaba, kırpıntı sünger için kilo fiyatı almak istiyorum.',
  },
  {
    slug: 'kirlent-ic-yastigi',
    name: 'Hazır Dolu Kırlent İç Yastığı',
    seoTitle: 'Hazır Kırlent İç Yastığı 55×55, 65×65 Toptan',
    short: '55×55, 65×65 ve isteğe göre farklı ölçüler, tela içi hazır dolu.',
    intro:
      'Tela kılıfın içine kırpıntı sünger ya da kırpıntı sünger ile boncuk silikon karışımı doldurulmuş hazır kırlent iç yastıkları. Kendi kılıfınıza takıp hemen kullanabilirsiniz. İsteğe göre farklı ölçülerde de hazırlıyoruz.',
    units: ['adet'],
    tone: 'pembe',
    images: [kirlentYastik],
    alts: ['Tela kılıflı, kırpıntı sünger dolu hazır kırlent iç yastığı'],
    uses: ['Kırlent kılıfı', 'Koltuk ve yatak süsü', 'Kırlent atölyeleri', 'Ev tekstili satışı'],
    specs: [
      { label: '55 × 55 cm', value: 'yaklaşık 450 gr dolgu' },
      { label: '65 × 65 cm', value: '750–800 gr dolgu' },
      { label: 'Diğer ölçüler', value: 'İsteğe göre hazırlanır' },
      { label: 'Kılıf', value: 'Tela' },
      { label: 'Dolgu', value: 'Boncuk silikon + kırpıntı sünger karışımı' },
      { label: 'Satış', value: 'Adet ile, toptan adetlerde fiyat sorun' },
    ],
    faq: [
      { q: 'Kırlent iç yastığının içinde ne var?', a: 'Tela kılıfın içinde kırpıntı sünger ya da kırpıntı sünger ile boncuk silikon karışımı var. Dolgu tercihini WhatsApp’tan konuşabiliriz.' },
      { q: 'Farklı ölçü yapıyor musunuz?', a: 'Evet, isteğe göre farklı ölçülerde hazırlıyoruz. Ölçüyü ve adedi WhatsApp’tan yazın. Ne kadar dolgu gideceğini hesaplayıcıyla da görebilirsiniz.' },
      { q: 'Kılıf ölçüsünden büyük mü almalıyım?', a: 'Dolgun durması için iç yastığın kılıftan 3–5 cm büyük olması önerilir.' },
    ],
    related: ['kirpinti-sunger', 'boncuk-silikon'],
    priceMessage: 'Merhaba, 55×55 kırlent iç yastığı için fiyat almak istiyorum.',
  },
  {
    slug: 'kiloluk-sunger',
    name: 'Kiloluk Tabaka Sünger',
    seoTitle: 'Kiloluk Tabaka Sünger, Kilo ile Toptan Satış',
    short: 'Tabaka ve parça sünger, kilo ile.',
    intro:
      'Üretimden artan tabaka ve büyük parça süngerler. Döşeme altı, ambalaj, minder ve kendi işini yapanlar için ekonomik çözüm. Kilo ile tartılır, çuvalla ya da balya hâlinde verilir.',
    units: ['kg', 'çuval'],
    tone: 'gri',
    images: [plakaIstif, kilolukSunger, plakaYigin, griSunger],
    alts: [
      'Depoda üst üste istiflenmiş kiloluk tabaka süngerler',
      'Elle esnetilen kiloluk sünger parçası',
      'Raflarda bekleyen farklı renk ve kalınlıkta tabaka sünger',
      'Esnek gri tabaka sünger',
    ],
    uses: ['Döşeme ve tamir işleri', 'Ambalaj ve koruma', 'Minder ve oturak', 'Hobi ve maket'],
    specs: [
      { label: 'Satış', value: 'Kilo ile, tabaka ya da parça' },
      { label: 'Kalınlık', value: 'Karışık, stoğa göre değişir' },
      { label: 'Gönderim', value: 'Nakliye ile Türkiye geneli, TIR bazlı sevkiyat' },
    ],
    faq: [
      { q: 'İstediğim kalınlık var mı?', a: 'Kiloluk süngerde stok sürekli değişir. Aradığınız kalınlığı yazın, elimizde olanın fotoğrafını gönderelim.' },
      { q: 'Nasıl satılıyor?', a: 'Kilo ile tartılıp çuvalla veriliyor. Büyük siparişleri TIR ile sevk ediyoruz.' },
    ],
    related: ['kirpinti-sunger', 'boncuk-silikon'],
    priceMessage: 'Merhaba, kiloluk tabaka sünger için kilo fiyatı ve stok bilgisi almak istiyorum.',
  },
  {
    slug: 'boncuk-silikon',
    name: 'Boncuk Silikon & Elyaf',
    seoTitle: 'Boncuk Silikon ve Elyaf Kilo Fiyatı, Toptan',
    short: 'Yastık ve kırlent için yumuşak, kabarık dolgu.',
    intro:
      'Boncuk silikon küçük toplar hâlindedir, kolay topaklanmaz ve kabarık durur. Yastık, kırlent ve peluş oyuncak için ideal. Daha ekonomik seçenek olarak fire elyaf da var.',
    units: ['kg', 'çuval'],
    tone: 'krem',
    images: [boncukSilikon],
    alts: ['Kabarık beyaz boncuk silikon dolgu'],
    uses: ['Uyku yastığı', 'Kırlent iç yastığı', 'Peluş oyuncak', 'Yorgan ve battaniye dolgusu'],
    specs: [
      { label: 'Satış', value: 'Kilo ile, çuvalla' },
      { label: 'Çeşit', value: 'Boncuk silikon, fire elyaf' },
    ],
    faq: [
      { q: 'Boncuk silikon ile elyaf farkı ne?', a: 'Boncuk silikon küçük toplar hâlindedir, daha kabarık durur ve topaklanmaz. Elyaf daha ekonomiktir ama zamanla basılabilir.' },
      { q: '50×70 bir yastığa ne kadar gider?', a: 'Tercih edilen dolgunluğa göre değişir. Yaklaşık değer için WhatsApp’tan yazın.' },
    ],
    related: ['kirlent-ic-yastigi', 'kirpinti-sunger'],
    priceMessage: 'Merhaba, boncuk silikon için kilo fiyatı almak istiyorum.',
  },
  {
    slug: 'visko-yastik',
    name: 'Visko Yastık',
    seoTitle: 'Visko Yastık 60×40, Hafızalı Sünger Yastık',
    short: 'Boyun ve baş şeklini alan visko yastık, 60×40.',
    intro:
      'Visko (hafızalı) sünger yastık. Başınızın ve boynunuzun şeklini alır, kaldırınca yavaşça eski hâline döner. Trendyol ve Hepsiburada’daki ÇisebO mağazamızda da satılıyor.',
    units: ['adet'],
    tone: 'krem',
    images: [ciseboVisko, viskoIz],
    alts: ['60×40 cm delikli visko yastık, ÇisebO mağazamızdan', 'Visko süngerde kalan el izi'],
    uses: ['Uyku yastığı', 'Boyun desteği', 'Otel ve pansiyon'],
    specs: [
      { label: 'Ölçü', value: '60 × 40 cm' },
      { label: 'Malzeme', value: 'Visko (hafızalı) sünger, delikli yüzey' },
    ],
    faq: [
      { q: 'Yüzeydeki delikler ne işe yarar?', a: 'Delikli yüzey süngerin içinden hava geçmesine yardım eder.' },
      { q: 'Kılıfı var mı?', a: 'Kılıf seçenekleri için WhatsApp’tan bilgi alabilirsiniz.' },
    ],
    related: ['kirlent-ic-yastigi', 'boncuk-silikon'],
    priceMessage: 'Merhaba, 60×40 visko yastık için fiyat almak istiyorum.',
  },
];

function build(p: ProductBase & ProductText, t: ProductText): Product {
  const { alts, images, ...rest } = { ...p, ...t, images: p.images };
  return { ...rest, images: images.map((src, i) => ({ src, alt: alts[i] ?? p.alts[i] ?? t.name })) };
}

/** Dile göre ürün listesi. Çevirisi olmayan ürün Türkçe görünür. */
export function localizedProducts(lang: 'tr' | 'de' | 'en'): Product[] {
  return urunler.map((p) => {
    const t = lang === 'tr' ? undefined : productTexts[lang][p.slug];
    return build(p, t ?? p);
  });
}

/** Türkçe liste (eski kullanım için) */
export const products = localizedProducts('tr');
export const bySlug = (slug: string) => products.find((p) => p.slug === slug);
