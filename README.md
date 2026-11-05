# Çiçek Sünger web sitesi

Astro ile yapılmış statik site. Tasarım kararları: `TASARIM-DOKUMANI.md`.

## Çalıştırma

```sh
npm install
npm run dev      # http://localhost:4321/Cisebo-CicekS-nger/
npm run build    # dist/ klasörüne üretir
```

## İçerik nerede?

- `src/data/metinler.ts`: **sayfalardaki tüm yazılar** (başlıklar, butonlar, rehber, sevkiyat, toptan, hakkımızda, SSS, video yazıları, menü). Sadece tırnak içleri değiştirilir.
- `src/data/metinler.de.ts` / `metinler.en.ts`: aynı yazıların Almanca ve İngilizcesi (`/de/`, `/en/` adresleri).
- `src/data/products.i18n.ts`: ürünlerin Almanca ve İngilizce metinleri.
- Sayfa düzenleri `src/views/` içinde; `src/pages/` yalnızca adresleri tanımlar.
- `src/data/site.ts`: telefon, WhatsApp, adres, çalışma saatleri, harita, kargo. Boş (TODO) alanlar doldurulunca sitede ve Google'a giden işletme verisinde (LocalBusiness) kendiliğinden görünür.
- `src/data/products.ts`: tüm ürünler. Yeni kayıt eklenince ürün sayfası, kart ve site haritası oluşur.
- `src/assets/img/`: ürün fotoğrafları (Astro yayında WebP'ye çevirir).
- `public/video/`: web için küçültülmüş videolar (640p, 1–3 MB). Ham videolar depoya girmez.
- Kırpıntı hesaplayıcının yoğunluk değerleri: `src/components/Calculator.astro` içinde `density`.

## Yayın

`main` dalına gönderilince `.github/workflows/deploy.yml` siteyi GitHub Pages'e yayınlar:
https://ciceksunger.com

- GitHub > Settings > Pages > Source: **GitHub Actions**, Custom domain: `ciceksunger.com`
- DNS (Spaceship): `@` için 4 A kaydı (185.199.108–111.153), `www` için CNAME → `cihansezerozkamer.github.io`
- `public/google20bc2cd04791dfca.html` Search Console doğrulama dosyasıdır, silinmemeli.
