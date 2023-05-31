
# Reflektion

### Databas, externa API och Webservices

Vi valde i detta projekt att gå vidare med RPS spelet då vi kände att vi inte riktigt var klara sedan tidigare projekt.
På Databas-sidan så valde vi att fortsätta med vår Postgres databas som vi alla har lokalt på våra respektive datorer, 
det vi har gjort för att slippa ändra i application properties varenda gång är att vi har skapat egna user profiles där
vi har våra individuella credetials.

Jag tycker att Postgres DB fungerar alldeles utmärkt till den data vi vill lagra. 

Vi har i backend en relation mellan våran playerEntity och vår gameEntity och detta tycker jag är väldigt lätt att 
åstadkomma med spring boots annoteringar och vår postgres bd. 
Jag har börjat kolla lite smått på MongoDB och har även lyckats lägga upp en snurrande databas på AWS där man kan ge
access till andra IP adresser så fler kan skicka och hämta data.
Jag anser att det hade varit svårare att få till en bra db med MongoDB i detta fall, mest beroende på att jag inte är 
100% hemma på hur det fungerar än.

Detta hade varit roligt att få till en Cloud-variant med vår Postgres db så vi alla hade kunnat jobba mot samma db, 
men vi får ta det i nästa projekt känner jag.

För vårat Backend API så har vi återanvänt vårat Spring boot REST-API från tidigare projekt, dock så har den tweakats 
lite för att ge plats åt lite roliga extrafunktioner som vi lagt till längs vägen.
Vi gjorde en lite större refactor på våra anrop i vårt förra projekt där vi ändrade endpoints så att det skulle bli 
"lite" mer generic. Dessa ändringar har vi låtit vara och så har vi byggt vidare litegrann på det. I slutändan så har 
vi fått till ett mer effektivt och tydligare API än vi hade i första projektet.

I det stora hela så är detta projekt det som jag är mest stolt över hittills. Jag tycker vi har lyckats effektivisera 
våra anrop, vårat projekt har en tydlig struktur och allt ligger snyggt paketerat i en mappstruktur som är lättnavigerad.
Vi har jobbat mycket med att bryta ut components och dessutom göra dessa relativt återanvändbara. 

Vi har utforskat en hel del roliga Native-element såsom modaler, vi har mappat horizontella flatlists med 
egentillverkade components och även lyckats trycka in både bakgrundsljud och lite custom Fonter. 

Denna app kan jag stå bakom till 100%, jag tycker att den vart "RIKTIGT" häftig!