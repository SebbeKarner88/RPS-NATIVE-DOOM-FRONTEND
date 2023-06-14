# Reflektion Linus Åkesson

## Databas

Jag har jobbat med mySQL och postgreSQL och tycker båda är väldigt lika varandra det är småsaker som skiljer
men det är såna saker som vi inte har behövt använda oss utav i det här projektet så det känns skönt att vi
inte behövt tänkt så mycket på vad för typ av Databas vi har använt oss utav. Vi körde den databasen som vi
haft under tidigare projekt postgreSQL och samma med vår backend vi behöll den. På grund av att vi har kört
samma databas som tidigare så har vi inte riktigt behövt fokusera på att skriva om så mycket kod. Vi har ändrat
lite för att kunna hämta till exempel highscore.

Något jag skulle vilja kolla in på senare är databaser som kör noSQL.

## Externa API

Jag personligen tycker externa APIer som finns på internet som man kan läsa om till exempel jsonplaceholder
är en bra grej för mäniskor som vill lära sig programmera. Det är oftast bra information om hur man ska använda
APIerna och man behöver inte känna till exakt hur det fungerar att skapa ett API utan man kan fokusera sig på
att bara lära sig använda APIt.
Om man sen väljer att börja kolla på hur man bygger ett API från grunden då kan man kolla runt på hur andra har
strukturerat det som kommer tillbaka för att kunna få ett litet hum om hur strukturen ska se ut.

## Webservices

Vi har kört med samma backend sen i början på året. Vi har gjort lite ändringar för att få till saker som vi tror
skulle göra vårt projekt bättre och roligare att kolla på. Vi har även ändrat med resans gång så vi kan använda
oss av lite mer "generic" endpoints så vi kan skriva mindre kod i våra frontend projekt.
Jag skulle vilja säga att i den här kursen så ändrade vi inte jättemycket vi la till highscore och när vi lade till det
så började tyckte jag det verkade konstigt att vi inte fick med alla matcher men då insåg jag att vi bara kollade på spel
som spelaren STARTAT och inte om spelaren hade joinat. När vi löste det då fick vi lite problem när vi skulle räkna ihop
spelen på grund av att RESULT står ur PlayerOnes perspektiv. Då ändrade vi lite kod i frontend som kollade vart ens token var
och om det var på PlayerTwos token då körde vi en switch som bytte till "rätt" alternativ.

När jag ser Webservices som ett ord då tänker jag direkt på webhosting och liknande men jag har inge minne av
att vi har pratat om något sånt i den här kursen.
Så jag tänker anta lite att det här har med vår backend att göra.

## Slut tankar

Jag känner att den här kursen har varit hur kul som helst och det påminner VÄLDIGT mycket om React.
Något jag insett mer är nu när vi delat upp saker och ting SUPER mycket i componenter så kan det bli lite
rörigt att hålla på koll vart allt är. Det underlättar dock att skriva egna componenter om man VET att man
kommer använda sig utav en sån grej igen utan att behöva upprepa koden många gånger.
Varje gång jag har hållt på med props så känns det som jag har blivit lite klokare och det har blivit lite
roligare att hålla på med props. Det är ett väldigt "snällt" sätt att göra något återanvändbart.
