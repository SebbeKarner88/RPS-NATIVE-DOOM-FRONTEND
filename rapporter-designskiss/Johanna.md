## Johannas Reflektion:

Vi valde att använda vår gamla backend som vi använt oss av i tidgare projekt. Med det så blev det så att vi använde oss av vår gamla
databas som är PostgreSQL. Med det så har vi konfiguerat så att vi har enskilda profiler som vi använder oss av. Så vi behöver
inte logga in på vår databas varje gång eller att det blir något knas när någon annnan använder sig av backend/databasen. Det blir så att
databasen lagarar lokalt på våra enskilda datorer.

Jag tycker personligen att postgreSQL har varit lätt att förstå och att kunna använda sig av. Vi har i vår backend gjort annoteringar för att koppla ihop dessa. Vi har i vår backend lagt till några funktioner som lagrar highscore denna gång. Vi har fortsatt med att göra endpointsen mer generic för att minimera kod och göra saker lättare att förstå för någon som kommer utifrån och läser. Genom att vi har arbetat och förbättrat vår REST-API från första projektet har vi gjort så att den har blivit mer effektiv. Man ska aldrig repetera massa kod och genom att göra anropen generic upprepas det inte, koden blir mindre och återanvändningsbar.

Vi hade lite struligt med just lagringen av highscore då vi enbart tog in players highscore från början. Det blev så att i vår Flatlist blev varannan highscore som lagrades. Ändringen som vi gjorde var att backend ska kolla på både player och opponent. Med denna ändring blev det så att om man var opponent lagrades även denna highscore.

Detta projekt var väldigt roligt och lärorikt att arbeta med. Vi har fått sitta och googla och felsöka väldigt mycket. Vi har experimenterat med olika lösningar och metoder för att få programmet att starta och fungera som vi ville.

Vi har gjort komponenter återanvändningsbara för att minimera kod i projektet. Samt att vi har lagt alla fetcharna i en enskild fil som vi kallar från. Vi har även gjort en IP config js fil där vi fyller i vår egna IP adress för att kunna köra från våra mobiler eller simulatorer. Detta har underlättat väldigt mycket men också minimerat den kod som vi måste skriva i alla filer. Då behövs vår IP adress ändras på bara ett ställe.

Jag är väldigt stolt över det vi har gjort under denna kurs. Jag tycker att det har varit väldigt roligt att arbeta med react native, jag tycker det är roligt och och tillfredsställande att få ha mer ordning med komponenter, screens m.m.
