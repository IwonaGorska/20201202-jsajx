/**
 * a10-the-need-of-modularity
 * Explain
 *
 * #Cel:
 * Zrozumienie potrzeby dodania modułowej budowy do budowanych dzięki JS skryptów.
 * Sieć zaczyna się zmieniać z kierunku "jedynie stron internetowych" na kierunek "stron i aplikacji webowych"
 * W takim układzie JS dostaje 'zadyszki' - możemy go z politowaniem traktować jako narzędzie do walidacji formularzy
 * Potrzeba sposobu radzenia sobie z dużą ilością kodu, z podziałem kodu - z implementacją jakiejś architektury itd.
 * */

// Sposób dołączania skryptów do strony .html powoduje pewne niedogodności.
// Nie możemy poprawnie podzielić swojego kodu na mniejsze części... a przynajmniej graniczy to z cudem
// Cały problem leży w mechanice dołączania skryptów. Przypomnij sobie składnie:
/*
```html

		....
		<script src="../side-script.js"></script>
		<script src="../main-script.js"></script>
		<script>
				var myVariable = 800;
		</script>

		</body>
```
*/
// Posiadamy tutaj kilka problemów:
/*
	* jeśli w plikach `side-script.js` i/lub `main-script.js` istnieje zmienna myVariable - to właśnie została zmieniona / nadpisana.
	* mamy dostęp do wszystkich zmiennych i funkcji umieszczonych w najwyższym scope dla tych plików (local scope)
	* wszystkie dane w pikach - mieszają się
	* nie mamy pewności czy dana zmienna istnieje już w naszym scope - ponieważ nie wiadomo czy plik, który ją zawiera dalej jest dołączany do strony itp. itd.
*/
/*
	# Przypomnienie:
	Pamiętaj że w natywnym podejściu przed ES6 (rok 2015) nie jest możliwe dodawanie skryptów z wnętrza innego skryptu.
	Wszystko musi być dołączone jako <script src=""> w pliku .html ze stroną.
*/


// Natywnie, wykorzystując Vanilla.js - programiści zaczynają radzić sobie z problemem, korzystając z 2 głównych technik:
// a) namespacing
// b) IIFE - Immediately Invoked Function Expression

// AD. a) Namespacing:
var myCaffeineLib = {
	assets: ['beans', 'milk', 'more beans', 'maple syrup'],
	makeMeCoffee: function () {

	},
	laboratory: {
		newTaste: {},
		makeSample: function() {
			return 'Sample dark coffee'
		}
	}
};
// Teraz wykorzystanie nowej "biblioteki" to kwestia dostępu do odpowiednich pól:
myCaffeineLib.laboratory.makeSample(); //?


// AD. b) IIFE:
// IIFE - Immediately Invoked Function Expression (@see: https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
;(function(){
	var iAmHermetic = 'some value to print';

	console.log(iAmHermetic);
})()

// Poza IIFE nie mamy dostępu do zawartości iAmHermetic:
// console.log(iAmHermetic);
console.log(global.name);
console.log(name);
console.log(globalThis)

// -----------------------------
// Później - w latach 2009-2010 pojawiają się nowe koncepcje modułowości JavaScript'u:
// c) AMD - Asynchronous Module Definition
// d) CommonJS


// AD. c) AMD:
// Najpopularniejszą biblioteką oferującą AMD jest zrobiony przez James'a Burke - require.js
// https://requirejs.org/

// Koncepcja jest prosta:
// Używasz w JS loadera do skryptów na stronie WWW. Loader ten posiada wiedzę o tym gdzie znajdują się skrypty
// Wywołując specjalną funkcję z callbackiem - możemy poprosić o "zależności" (dependencies) naszej logiki


// AD. d) CommonJS:
// już w 2009 roku Ryan Dahl wypuścił pierwszą wersję swojej idei CommonJS - gdzie to środowisko uruchomieniowe
// wyjęte z Chromium (interpreter V8) zostaje obudowane aplikacją w C++ i powstaje "Server Side JavaScript"
// https://nodejs.org/en/

// Rozwiązanie na miarę 2020:
// Aktualnie Node.js zostaje "zaprzęgnięty" - do budowania front-endu.
// Dodatkowo rozwiązania typu Bundlery lub Babel.js - pozwalają na używanie składni ES6 - importów.
// Pozwala to na dużą eleastyczność. Możemy jednocześnie używać składni ES6 modules - dla front-endu i back-endu.
// Dodatkowo bundlery mają wbudowaną obsługę importów ze składni ES6 (rozumieją te składnię)

// W aktualnej wersji node 14.x LTS - jest możliwość użycia specjalnej zmiennej do konfiguracji w package.json
// Jeśli ustawimy:
// "type":"module"
// Możemy w plikach .js używać składni ES6 Modules
// czyli: import / export zamiast: require('') oraz module.exports = {} !


// HotNEWS 2020: Deno 🦕
// "A secure runtime for JavaScript and TypeScript."
// Twórca Node.js - Ryan Dahl, wystartował z nowym projektem
// https://deno.land/

// Na ten moment jest to bardziej "nowy hype w sieci" - niż rozwiązanie na miarę produkcji.
// Jednak warto się temu przyglądać, ponieważ w założeniu ma rozwiązać wszystkie błędy, które popełniono
// przy implementowaniu NodeJS i jego rozwoju.
// W tym układzie - można zakładać że projekt będzie się szybko adaptował - i już niedługo, będzie nadawał się
// Do pisania kodu produkcyjnego.
// Można patrzeć na to inaczej: w 2009 roku "hype'm" był NodeJS - i zobaczmy gdzie jesteśmy dzisiaj.
// NodeJS - to wybór nr 1 w przypadku nowego projektu z front-endu i back-endu w JavaScript.

