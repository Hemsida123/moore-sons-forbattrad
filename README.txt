MOORE & SONS — WEBBPLATS

Hemsidans publiceringsfiler finns i dist/.
Ladda upp INNEHÅLLET i dist, inklusive assets, styles.css, refinements.css, script.js,
alla undermappar, favicon.svg och .nojekyll. index.html ska ligga i roten.

GitHub Pages: lägg filerna på huvudgrenen och välj denna gren samt /(root)
i Settings > Pages. Inga paket eller byggsteg behövs för publicering.

För lokal visning: öppna dist/index.html eller kör en lokal webbserver i dist.
Alla interna sid- och bildlänkar är relativa, även i undermappar.

Kontaktknapparna öppnar telefon eller e-postprogram. Ingen kontakt skickas
automatiskt och inget formulär behöver en server.

Originalinnehåll och bilder: https://mooreas.no/, hämtade 2026-10-12.
Projektgallerier skiljer mellan ritningar, 3D-bilder och fotografier.
Omdömena är utdrag från originalhemsidan, inte Google-betyg.

Ingen hostingpublicering kunde göras i Sites eftersom kontot nått gränsen
för nya webbplatser. Ingen kunds befintliga webbplats har ändrats.

Inför skarp drift: bekräfta företagsuppgifter, bildrättigheter och
personvernsinformation med företaget. Lägg till korrekt publik domän
i canonical-länkar, delningsbild och sitemap när slutlig domän är bestämd.

Källkod: build.mjs genererar HTML-filer från innehållet.
Kör node build.mjs i projektmappen om du vill regenerera dem.
Typsnitt: Montserrat (SIL OFL). Ikoner: Tabler (MIT), licenser i assets.

FÖRBÄTTRAD VERSION — 2026-10-12
Större helbildshero, tydligare projektberättelser och alla fem projekt på
startsidan. En blå ritningssektion låter besökaren växla mellan kundens
originalritning och 3D-visualisering. Tydligare direktkontakt med Larry,
uppdaterade undersidor och anpassad layout för små mobilskärmar.

Den nya filen refinements.css måste följa med vid uppladdningen.
Kör node verify.mjs för att kontrollera lokala länkar och resurser.
Kontrollerat: 14 HTML-filer (13 innehållssidor + felsida), 481 lokala
referenser, inga saknade filer. Mobilmeny, ritningsväxling och bilddialog
är provade i webbläsare. Ingen ny hastighetspoäng är uppmätt.

Profilbilden har därefter justerats utan beskärning och med samma bildyta
som tidigare: 360 × 360 px på dator och 290 × 290 px på mobil.
Justeringen gäller även Larrys porträtt på Om- och kontaktsidan.
