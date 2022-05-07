Kedves javító!
Üdvözöllek az én webshop alkalmazásomban, remélem elnyeri tetszésedet!
A webshop a következő verziós eszközökkel készült:
-Angular CLI: 13.2.4
-Node: 16.14.0
-Package Manager: npm 8.3.1

A webshop-ot a következő URL-en találod:
https://fishing-webshop-2022.web.app

A github repository linkje a következő:
https://github.com/matias10008/fishing-webshop-2022

A weboldalról:
Alapvetően egy horgász webshop-ot valósít meg a CRUD-nak megfelelően.
Az oldal használatához be kell jelentkezni / regisztrálni. 
(Ha nem szeretnél regisztrálni akkor a "test@test.com" és a "testtest" felhasználónév-jelszó párossal tudsz belépni!)
Bejelentkezett felhasználóknak nyílik meg a weblap, lehetőség van kosárba tenni a cikkeket, viszont az oldal újratöltésével a kosár kiürül.
(Local storage segítségével oldottam meg a Kosarat, ami törlődik a weboldal újratöltésével.)
Minden cikk mellett találsz egy "Link" gombot, arra rányomva lehet rákeresni az adott nevű cikkre az interneten.
A Cart menüpont alatt találod a kosarad tartalmát, itt tudod törölni a nemkívánt elemeket.
A cikkek listája alatt tudod megadni a Számlázási nevet, illetve címet, ahova majd szállíthatom a csomagot.
A PAY gomb lenyomásával tudod megrendelni a kosaradban található dolgokat.

Térjünk át az Admin felületre, ahol a CRUD nagy része meg lett valósítva.
Az adminfelület eléréséhez az "admin@gmail.com" és "adminka" felhasználónév-jelszó párossal tudunk jutni.
Ezen az oldalon található az összes árusított termék illetve a beérkezett rendelések. A rendeléseknél a Deliver gomb megnyomásával lehet kiszállítani őket.
(Törlődnek az adatbázisból ezáltal).
Szintén itt lehet az árusított termékeket törölni illetve módosítani azokat. A Módosítás gomb átvisz egy másik oldalra, ahol el tudjuk végezni a módosításokat.
Itt minden mezőt ki kell tölteni, ellenkező esetben felülírja az adatbázisban tárolt adatokat üres stringek-re. Ehhez segítségként kiírtam a jellenlegi értékeket, innén egyszerűen lehet másolni.
Alapvetően nem így szerettem volna megoldani, de máshogy nem jutottam eredményre. Ezt nézd el nekem kérlek! 


Sajnos maradt benne néhány bug amire sajnos nem tudtam rájönni:
- A login gombra néha többször kell rányomni, hogy átdobjon a megfelelő oldalra.
- A menü néha önálló életet él... Bejön amikor nem kéne és fordítva! :)
- Ezen felül a hosting-nál jött elő, hogy ha túl sok minden van a kosárban,akkor nem tudja megszámolni és egy baromi nagy számot ad rá ki.
- A kosáról 1 gomb törlésének hatására több azonos nevű cikk is törlődhet.

Ha elakadnál a javításban / beüzemelésben keress nyugodtan:
Email: vargamate005@gmail.com
Discord: matias10008#4598


Ennyi lett volna a rövid bemutató, csatolok egy javítási segédletet, ami megkönnyítheti a dolgod a javításnál!
Köszönöm szépen, hogy végig olvastad, további szép napot/estét!