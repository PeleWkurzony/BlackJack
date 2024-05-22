## Zawarto�� g��wnego folderu ClientApp:


 ![Alt text](./DokumentacjaDTR/Foldery.png)



### 1. Foldery z mediami:

 ![Alt text](./DokumentacjaDTR/FolderMedia.png)

- "**Cards**� zawiera zdj�cia kart kt�re s� wy�wietlane w grze.

- "**Others**� zawiera pliki mp3 oraz zdj�cie krupiera i �eton�w.

### 2. Folder �src� 

 ![Alt text](./DokumentacjaDTR/FolderSrc.png)

Zawiera pliki �r�d�owe aplikacji, kt�re s� niezb�dne do jej uruchomienia i dzia�ania. 
W jego wn�trzu znajduj� si� takie pliki jak: 

- "**App.js**� - jest g��wnym komponentem aplikacji React, kt�ry definiuje struktur� tras i renderuje g��wny layout, w tym wszystkie komponenty aplikacji, zgodnie z konfiguracj� tras z pliku AppRoutes.js.

- "**AppRoutes.js**� - zawiera konfiguracj� tras dla aplikacji, gdzie ka�da trasa jest reprezentowana jako obiekt. Obecnie zdefiniowana jest tylko jedna trasa dla g��wnej strony domowej, kt�rej elementem jest komponent Home. Pozosta�e trasy zosta�y zakomentowane.

- "**custom.css**� - definiuje niestandardowe style CSS dla �App.js�

- "**index.js**� - jest plikiem g��wnym aplikacji React. Renderuje korze� aplikacji w elemencie o id "root", u�ywaj�c przegl�darki routingu do zarz�dzania trasami, rejestruje serwis pracownika (Service Worker) do obs�ugi funkcji PWA i raportowania wska�nik�w internetowych.

### 3. Folder �components� 

 ![Alt text](./DokumentacjaDTR/FolderComponents.png)

Zawiera zestaw komponent�w, kt�re s� u�ywane w aplikacji do budowania r�nych widok�w i funkcjonalno�ci.
W jego wn�trzu znajduj� si� takie pliki jak:

- "**Home.js**" zawiera g��wny komponent reprezentuj�cy ekran g��wny gry.

- "**Layout.js**" odpowiada za definiowanie og�lnego uk�adu aplikacji i zapewnienie dost�pu do magazynu Redux dla wszystkich komponent�w podrz�dnych.

- "**NavMenu-old.js**" definiuje menu nawigacyjne aplikacji i obs�uguje jego interakcje, takie jak rozwijanie i zwijanie, oraz definiuje odno�niki do r�nych cz�ci aplikacji.

- "**Style.scss**" okre�la styl dla menu nawigacyjnego oraz strony g��wnej

- Foldery: "Bet", "Cards", "Context", "Game", "GameOver", "Home", "NavMenu"


### 4. Folder "Bet"

 ![Alt text](./DokumentacjaDTR/FolderBet.png)
 
W folderze "Bet" znajduj� si� pliki zwi�zane ze stawianiem zak�adu.

 ![Alt text](./DokumentacjaDTR/ShowBet.png)

  ![Alt text](./DokumentacjaDTR/ShowBet2.png)

- "**Bet.js**" zawiera komponent zarz�dzaj�cy procesem obstawiania zak�ad�w.

- "**Bet.scss**" zawiera stylowanie komponent�w odpowiedzialnych za stawianie zak�adu.

- "**BetController.jsx**"  zawiera komponent odpowiedzialny za kontrol� akcji podczas rozgrywki. Takich jak: Dobranie karty, podwojenie zak�adu i pasowanie. 

- "**BetController.scss**" zawiera stylowanie komponent�w odpowiedzialnych za kontrol� akcji podczas rozgrywki

- "**EndGameComponent.jsx**" zawiera komponent odpowiedzialny za wy�wietlanie informacji o zako�czeniu gry oraz umo�liwia u�ytkownikowi uruchomienie nowej gry.

- "**MoneyBet.jsx**" zawiera komponent odpowiedzialny za umo�liwienie u�ytkownikowi postawienia zak�adu o okre�lonej kwocie pieni�dzy. 

### 5. Folder "Cards"

 ![Alt text](./DokumentacjaDTR/FolderCards.png)

W folderze "Cards" znajduj� si� pliki zwi�zane z renderowaniem kart i liczeniem punkt�w.

- "**CardComponent.jsx**" zawiera komponent odpowiedzialny za renderowanie pojedynczej karty do gry.

- "**CardPoints.js**" oraz "**CardPoints.ts**" zawiera komponent odpowiedzialny za liczenie punkt�w z kart

### 6. Folder "Context"

 ![Alt text](./DokumentacjaDTR/FolderContextt.png)

W folderze "Context" znajduj� si� pliki zwi�zane z zarz�dzaniem stanem aplikacji.

- "**CardSlice.js**" - Plik zawieraj�cy reduktor i akcje zwi�zane z zarz�dzaniem stanem kart w grze, takie jak dodawanie kart do r�ki gracza i krupiera, resetowanie kart itp.

- "**GameManageSlice.js**" - Plik zawieraj�cy reduktor i akcje zwi�zane z zarz�dzaniem stanem gry, takie jak rozpocz�cie i zako�czenie gry, okre�lenie zwyci�zcy itp.

- "**ProfileSlice.js**" - Plik zawieraj�cy reduktor i akcje zwi�zane z zarz�dzaniem profilem gracza, takie jak zmiana ilo�ci pieni�dzy, ustalanie zak�adu itp.

- "**ActionsContext.js**" - Plik zawieraj�cy kontekst React do zarz�dzania dost�pnymi akcjami w grze, takimi jak podwojenie, rozdwojenie itp.

### 7. Folder "Game"

 ![Alt text](./DokumentacjaDTR/FolderGame.png)

W folderze "Game" znajduj� si� pliki zwi�zane z logik� gry, zarz�dzaniem kartami i rozgrywk�.

 ![Alt text](./DokumentacjaDTR/ShowGameManager.png)

- "**GameManager.jsx**" - Plik zawieraj�cy g��wny komponent zarz�dzaj�cy logik� gry, tak� jak rozdawanie kart, ustalanie wyniku itp.

- "**GameManager.scss**" - zawiera stylowanie generowanych kart oraz licznik�w punkt�w.

- "**RandomCard.js**" - Plik zawieraj�cy funkcj� generuj�c� losow� kart�.

### 8. Folder "GameOver"

 ![Alt text](./DokumentacjaDTR/FolderGameOver.png)


W folderze "GameOver" znajduj� si� pliki zwi�zane z ekranem ko�ca gry.

 ![Alt text](./DokumentacjaDTR/ShowGameOver.png)

- "**GameOver.jsx**" - Plik zawieraj�cy komponent wy�wietlaj�cy ekran ko�ca gry, informuj�cy gracza o wyniku i umo�liwiaj�cy rozpocz�cie nowej gry.

- "**Game Over.scss**" - zawiera stylowanie ekranu ko�ca gry.

### 9. Folder "Home"

 ![Alt text](./DokumentacjaDTR/FolderHome.png)

W folderze "Home" znajduj� si� pliki zwi�zane z ekranem g��wnym gry.

 ![Alt text](./DokumentacjaDTR/ShowCroupier.png)
 ![Alt text](./DokumentacjaDTR/ShowFall.png)

- "**BackgroundMusic.jsx**" - zawiera komponent ekranu odpowiedzialny za muzyk� w tle.

- "**Croupier.jsx**" - zawiera komponent odpowiedzialny za pojawienie sie krupiera oraz spadaj�cych �eton�w.

### 10. Folder "NavMenu"

 ![Alt text](./DokumentacjaDTR/FolderNavMenu.png)

W folderze "NavMenu" znajduj� si� pliki zwi�zane z menu nawigacyjnym aplikacji:

  ![Alt text](./DokumentacjaDTR/ShowNavMenu.png)

- "**MoneyComponent.js**" - odpowiada za utworzenie ikonki pieni�dzy. 
- "**NavMenu.js**" - odpowiada za zawarto�� menu nag��wkowego na g�rze ekranu.
- "**NavMenu.scss**" - zawiera stylowanie menu nag��wkowego na g�rze ekranu.
- "**SettingsComponent.js**" - odpowiada za utworzenie ikonki ustawie�. 





