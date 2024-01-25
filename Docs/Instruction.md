# Instrukcja korzystania z Githuba i gita
Bądź gitem!

## Instalowanie git - czyli kontrola wersji
1. Wchodzisz na oficjalną stronę git'a i pobierasz wersję odpowiednią dla swojego 
systemu ```https://git-scm.com/download/win```
2. Instalujesz przeklikując wszystko na tak i zostawijąc wszystko domyślnie
3. Restartujesz komputer
4. Gotowe

## Klonowanie repozytorium
### Aby pracować na plikach z repozytorium musisz pobrać jednorazowo na komputer wszystkie pliki projektu

1. Otwierasz konsolę np. cmd lub powershell
2. Wybierasz folder, w którym ma znajdywać się projekt za pomocą komend ```cd <folder>``` i ```dir```
3. Wpisujesz ```git clone https://github.com/PeleWkurzonyZSL/BlackJack```
4. Wykonaj instrukcje z pliku ```Installation.md```

## Dodawanie własnych udoskonaleń
1.  ```git pull``` - aby pobrać najnowsze zmiany projektu
1. ```git branch <nazwa-zmiany>``` - tworzy nowego brancha o nazwie
2. ```git checkout <nazwa-brancha>``` - zmienia na brancha, którego przed chwilą utowrzyłeś 
3. Po utworzeniu zmian w projekcie tworzycie commita 
4. ```git add *``` ewentualnie dodajecie konkretne pliki ```git add <plik>```
5. ```git commit``` - otworzy się tobie okienko, w którym macie podsumowanie wszystkich zmian. W niezakomentowanym polu wpisujesz nazwę commita, która ma powstać i opisywać wprowadzone przez ciebie zmiany. Zapisanie pliku kończy powstanie commita. Inna opcją jest ```git commit -m <opis>```, który pozwala ominąć podsumowanie.
6. ```git push``` - aby wysłać zmiany na serwer
7. ```git switch main``` - aby przełączyć się na głównego brancha projektu (opcjonalne)

## Zasady i dodatkowe informacje
* Nie publikujcie nic w branchu main i nie twórzcie tam żadnych zmian
* Uważajcie na usuwanie czegokolwiek z repozytorium
* Twórzcie commity przy każdej mniejszej zmianie
* Używajcie często ```git pull``` aby mieć najnowsze zmiany u siebie lokalnie
