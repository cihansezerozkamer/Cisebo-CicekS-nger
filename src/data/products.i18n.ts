// Ürünlerin Almanca (de) ve İngilizce (en) metinleri. Türkçesi: products.ts
import type { ProductText } from './products';

export const productTexts: Record<'de' | 'en', Record<string, ProductText>> = {
  de: {
    'kirpinti-sunger': {
      name: 'Schaumstoffflocken',
      seoTitle: 'Schaumstoffflocken nach Kilo, Großhandel',
      short: 'Füllung nach Kilo für Kissen, Sitzkissen und Tierbetten.',
      intro:
        'Saubere Schaumstoffstücke aus dem Plattenzuschnitt. Die beliebteste und günstigste Füllung für Kissen, Sitzkissen, Tierbetten und Spielzeug. Auch unsere fertigen Kissen-Inlets sind damit gefüllt.',
      alts: ['Mintgrüne und gelbe Schaumstoffflocken im Sack, nach Kilo verkauft'],
      uses: ['Kissenfüllung', 'Bodenkissen', 'Hunde- und Katzenbetten', 'Spielzeug und Plüschfüllung', 'Sitzsack'],
      specs: [
        { label: 'Verkauf', value: 'Nach Kilo, im Sack' },
        { label: 'Inhalt', value: 'Schaumstoffstücke in gemischten Farben' },
        { label: 'Versand', value: 'Per Spedition in die ganze Türkei und ins Ausland, LKW-Ladungen' },
      ],
      faq: [
        { q: 'Wie viele Flocken brauche ich?', a: 'Das hängt von der Größe und der gewünschten Festigkeit ab. Mit dem Rechner auf der Seite „Welche Füllung?“ finden Sie die ungefähre Menge.' },
        { q: 'Kann man die Farbe wählen?', a: 'Die Flocken kommen in gemischten Farben. Unter dem Bezug sieht man sie nicht.' },
        { q: 'Verkaufen Sie an Gewerbekunden?', a: 'Ja. Wir liefern im Sack und als komplette LKW-Ladung. Für den Kilopreis schreiben Sie uns auf WhatsApp.' },
      ],
      priceMessage: 'Hallo, ich hätte gern den Kilopreis für Schaumstoffflocken.',
    },
    'kirlent-ic-yastigi': {
      name: 'Gefüllte Kissen-Inlets',
      seoTitle: 'Kissen-Inlets 55×55, 65×65 im Großhandel',
      short: '55×55, 65×65 und Wunschgrößen, im Vlies fertig gefüllt.',
      intro:
        'Fertige Kissen-Inlets: Vliesbezug, gefüllt mit Schaumstoffflocken oder einer Mischung aus Flocken und Kugelfaser. Einfach in den eigenen Bezug stecken. Andere Größen fertigen wir auf Wunsch.',
      alts: ['Kissen-Inlet im Vliesbezug, mit Schaumstoffflocken gefüllt'],
      uses: ['Kissenbezüge', 'Deko für Sofa und Bett', 'Kissen-Nähereien', 'Heimtextilhandel'],
      specs: [
        { label: '55 × 55 cm', value: 'etwa 450 g Füllung' },
        { label: '65 × 65 cm', value: '750–800 g Füllung' },
        { label: 'Andere Größen', value: 'Auf Wunsch' },
        { label: 'Bezug', value: 'Vlies' },
        { label: 'Füllung', value: 'Mischung aus Kugelfaser und Schaumstoffflocken' },
        { label: 'Verkauf', value: 'Pro Stück, Mengenpreise auf Anfrage' },
      ],
      faq: [
        { q: 'Was ist im Inlet?', a: 'Im Vliesbezug stecken Schaumstoffflocken oder eine Mischung aus Flocken und Kugelfaser. Die Füllung besprechen wir gern auf WhatsApp.' },
        { q: 'Machen Sie auch andere Größen?', a: 'Ja, auf Wunsch fertigen wir andere Größen. Schreiben Sie uns Maß und Stückzahl auf WhatsApp. Die Füllmenge zeigt Ihnen auch der Rechner.' },
        { q: 'Sollte das Inlet größer als der Bezug sein?', a: 'Damit das Kissen schön voll wirkt, sollte das Inlet 3–5 cm größer sein als der Bezug.' },
      ],
      priceMessage: 'Hallo, ich hätte gern einen Preis für Kissen-Inlets 55×55.',
    },
    'kiloluk-sunger': {
      name: 'Schaumstoffplatten nach Kilo',
      seoTitle: 'Schaumstoffplatten nach Kilo, Großhandel',
      short: 'Platten und Reststücke, nach Kilo.',
      intro:
        'Schaumstoffplatten und große Reststücke aus der Produktion. Eine günstige Lösung für Polsterunterbau, Verpackung, Sitzkissen und Heimwerker. Nach Kilo gewogen, im Sack oder als Ballen geliefert.',
      alts: [
        'Gestapelte Schaumstoffplatten im Lager',
        'Ein gedehntes Schaumstoffstück',
        'Schaumstoffplatten in verschiedenen Farben und Stärken im Regal',
        'Elastische graue Schaumstoffplatte',
      ],
      uses: ['Polster- und Reparaturarbeiten', 'Verpackung und Schutz', 'Sitzkissen und Auflagen', 'Hobby und Modellbau'],
      specs: [
        { label: 'Verkauf', value: 'Nach Kilo, Platten oder Stücke' },
        { label: 'Stärke', value: 'Gemischt, je nach Lagerbestand' },
        { label: 'Versand', value: 'Per Spedition in die ganze Türkei und ins Ausland, LKW-Ladungen' },
      ],
      faq: [
        { q: 'Haben Sie meine Stärke?', a: 'Der Bestand wechselt ständig. Schreiben Sie uns die gewünschte Stärke, wir schicken Ihnen Fotos von dem, was da ist.' },
        { q: 'Wie wird verkauft?', a: 'Nach Kilo gewogen und im Sack geliefert. Große Bestellungen versenden wir per LKW.' },
      ],
      priceMessage: 'Hallo, ich hätte gern Kilopreis und Bestand für Schaumstoffplatten.',
    },
    'boncuk-silikon': {
      name: 'Kugelfaser & Füllwatte',
      seoTitle: 'Kugelfaser und Füllwatte nach Kilo',
      short: 'Weiche, bauschige Füllung für Kissen.',
      intro:
        'Kugelfaser besteht aus kleinen Faserbällchen, verklumpt kaum und bleibt bauschig. Ideal für Kopfkissen, Dekokissen und Plüschtiere. Günstiger ist unsere Restfaser-Füllwatte.',
      alts: ['Bauschige weiße Kugelfaser'],
      uses: ['Kopfkissen', 'Kissen-Inlets', 'Plüschtiere', 'Decken- und Bettdeckenfüllung'],
      specs: [
        { label: 'Verkauf', value: 'Nach Kilo, im Sack' },
        { label: 'Sorten', value: 'Kugelfaser, Restfaser' },
      ],
      faq: [
        { q: 'Was ist der Unterschied zu Füllwatte?', a: 'Kugelfaser besteht aus kleinen Bällchen, bleibt bauschiger und verklumpt nicht. Füllwatte ist günstiger, kann aber mit der Zeit flach werden.' },
        { q: 'Wie viel brauche ich für ein Kissen 50×70?', a: 'Das hängt von der gewünschten Füllmenge ab. Schreiben Sie uns auf WhatsApp für einen Richtwert.' },
      ],
      priceMessage: 'Hallo, ich hätte gern den Kilopreis für Kugelfaser.',
    },
    'visko-yastik': {
      name: 'Viscoschaum-Kissen',
      seoTitle: 'Viscoschaum-Kissen 60×40, Memory Foam',
      short: 'Viscoschaum-Kissen, passt sich Kopf und Nacken an, 60×40.',
      intro:
        'Kissen aus Viscoschaum (Memory Foam). Es passt sich Kopf und Nacken an und kehrt langsam in seine Form zurück. Auch in unserem ÇisebO-Shop auf Trendyol und Hepsiburada erhältlich.',
      alts: ['Viscoschaum-Kissen 60×40 cm mit Lochstruktur, aus unserem ÇisebO-Shop', 'Handabdruck im Viscoschaum'],
      uses: ['Kopfkissen', 'Nackenstütze', 'Hotels und Pensionen'],
      specs: [
        { label: 'Größe', value: '60 × 40 cm' },
        { label: 'Material', value: 'Viscoschaum (Memory Foam), gelochte Oberfläche' },
      ],
      faq: [
        { q: 'Wozu dienen die Löcher?', a: 'Die gelochte Oberfläche lässt Luft durch den Schaum zirkulieren.' },
        { q: 'Gibt es einen Bezug?', a: 'Fragen Sie uns auf WhatsApp nach den Bezügen.' },
      ],
      priceMessage: 'Hallo, ich hätte gern einen Preis für das Viscoschaum-Kissen 60×40.',
    },
  },

  en: {
    'kirpinti-sunger': {
      name: 'Shredded Foam',
      seoTitle: 'Shredded Foam by the Kilo, Wholesale',
      short: 'Fill by the kilo for cushions, floor cushions and pet beds.',
      intro:
        'Clean foam pieces from sheet cutting. The most popular and economical fill for cushions, floor cushions, pet beds and toys. Our ready-filled cushion inserts use it too.',
      alts: ['Mint and yellow shredded foam in a bag, sold by the kilo'],
      uses: ['Cushion filling', 'Floor cushions', 'Cat and dog beds', 'Toy and plush filling', 'Bean bags'],
      specs: [
        { label: 'Sold', value: 'By the kilo, in sacks' },
        { label: 'Content', value: 'Mixed-colour foam pieces' },
        { label: 'Shipping', value: 'By freight across Turkey and abroad, full truckloads' },
      ],
      faq: [
        { q: 'How much shredded foam do I need?', a: 'It depends on the size and how firm you want it. Use the calculator on the “Which filling?” page for an estimate.' },
        { q: 'Can I choose the colour?', a: 'Shredded foam comes in mixed colours. It is hidden under the fabric.' },
        { q: 'Do you sell wholesale?', a: 'Yes. We ship by the sack and by the full truckload. Message us on WhatsApp for the price per kilo.' },
      ],
      priceMessage: 'Hello, I would like the price per kilo for shredded foam.',
    },
    'kirlent-ic-yastigi': {
      name: 'Filled Cushion Inserts',
      seoTitle: 'Cushion Inserts 55×55, 65×65 Wholesale',
      short: '55×55, 65×65 and custom sizes, ready-filled in non-woven fabric.',
      intro:
        'Ready-made cushion inserts: a non-woven cover filled with shredded foam, or a mix of shredded foam and ball fibre. Just slip them into your own cover. We also make custom sizes on request.',
      alts: ['Cushion insert in a non-woven cover, filled with shredded foam'],
      uses: ['Cushion covers', 'Sofa and bed decor', 'Cushion workshops', 'Home textile retail'],
      specs: [
        { label: '55 × 55 cm', value: 'about 450 g filling' },
        { label: '65 × 65 cm', value: '750–800 g filling' },
        { label: 'Other sizes', value: 'On request' },
        { label: 'Cover', value: 'Non-woven fabric' },
        { label: 'Filling', value: 'Ball fibre and shredded foam mix' },
        { label: 'Sold', value: 'Per piece, ask for bulk prices' },
      ],
      faq: [
        { q: 'What is inside the insert?', a: 'The non-woven cover holds shredded foam or a mix of shredded foam and ball fibre. We can discuss the filling on WhatsApp.' },
        { q: 'Do you make other sizes?', a: 'Yes, we make custom sizes on request. Send us the size and quantity on WhatsApp. The calculator also shows how much filling it needs.' },
        { q: 'Should the insert be bigger than the cover?', a: 'For a full look, the insert should be 3–5 cm larger than the cover.' },
      ],
      priceMessage: 'Hello, I would like a price for 55×55 cushion inserts.',
    },
    'kiloluk-sunger': {
      name: 'Foam Sheets by the Kilo',
      seoTitle: 'Foam Sheets by the Kilo, Wholesale',
      short: 'Sheets and offcuts, by the kilo.',
      intro:
        'Foam sheets and large offcuts from production. An economical choice for upholstery base, packaging, seat pads and DIY. Weighed by the kilo and supplied in sacks or bales.',
      alts: [
        'Stacked foam sheets in the warehouse',
        'A stretched piece of foam',
        'Foam sheets in different colours and thicknesses on shelves',
        'Flexible grey foam sheet',
      ],
      uses: ['Upholstery and repairs', 'Packaging and protection', 'Seat pads', 'Hobby and model making'],
      specs: [
        { label: 'Sold', value: 'By the kilo, sheets or pieces' },
        { label: 'Thickness', value: 'Mixed, depends on stock' },
        { label: 'Shipping', value: 'By freight across Turkey and abroad, full truckloads' },
      ],
      faq: [
        { q: 'Do you have my thickness?', a: 'Stock changes all the time. Tell us the thickness you need and we will send photos of what we have.' },
        { q: 'How is it sold?', a: 'Weighed by the kilo and supplied in sacks. Large orders ship by truck.' },
      ],
      priceMessage: 'Hello, I would like the price per kilo and stock for foam sheets.',
    },
    'boncuk-silikon': {
      name: 'Ball Fibre & Polyester Fill',
      seoTitle: 'Ball Fibre and Polyester Fill by the Kilo',
      short: 'Soft, fluffy filling for pillows and cushions.',
      intro:
        'Ball fibre is made of small fibre balls, rarely clumps and stays fluffy. Ideal for pillows, cushions and plush toys. Our recycled polyester fill is a cheaper option.',
      alts: ['Fluffy white ball fibre filling'],
      uses: ['Bed pillows', 'Cushion inserts', 'Plush toys', 'Quilt and duvet filling'],
      specs: [
        { label: 'Sold', value: 'By the kilo, in sacks' },
        { label: 'Types', value: 'Ball fibre, recycled polyester fill' },
      ],
      faq: [
        { q: 'Ball fibre or polyester fill?', a: 'Ball fibre is made of small balls, stays fluffier and does not clump. Polyester fill is cheaper but can flatten over time.' },
        { q: 'How much for a 50×70 pillow?', a: 'It depends on how full you like it. Message us on WhatsApp for an estimate.' },
      ],
      priceMessage: 'Hello, I would like the price per kilo for ball fibre.',
    },
    'visko-yastik': {
      name: 'Memory Foam Pillow',
      seoTitle: 'Memory Foam Pillow 60×40',
      short: 'Memory foam pillow that follows your head and neck, 60×40.',
      intro:
        'A memory foam pillow that shapes to your head and neck and slowly returns to its form. Also sold in our ÇisebO store on Trendyol and Hepsiburada.',
      alts: ['60×40 cm perforated memory foam pillow, from our ÇisebO store', 'Hand print in memory foam'],
      uses: ['Bed pillow', 'Neck support', 'Hotels and guesthouses'],
      specs: [
        { label: 'Size', value: '60 × 40 cm' },
        { label: 'Material', value: 'Memory foam, perforated surface' },
      ],
      faq: [
        { q: 'What are the holes for?', a: 'The perforated surface helps air move through the foam.' },
        { q: 'Does it come with a cover?', a: 'Ask us on WhatsApp about cover options.' },
      ],
      priceMessage: 'Hello, I would like a price for the 60×40 memory foam pillow.',
    },
  },
};
