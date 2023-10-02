# Coffee machine app

## User Stories

Als ein User will ich...
- eine Liste von Kaffees sehen (OUTPUT)
- einen auswählen können (by name) (INPUT)
- den Preis für den Kaffee sehen (OUTPUT)
- den Betrag bezahlen (INPUT)
- wenn der Betrag reicht, den fu**** Kaffee haben (OUTPUT)
- wenn der Betrag reicht, will ich mein Wechselgeld haben (OUTPUT)
- wenn der Betrag nicht reicht, will ich krasse Rejection haben (OUTPUT)
- (advanced feature: 10% Rabatt bekommen wenn Tag Freitag ist :))

DONE

## Scenarios

[O] => Output des Programms<br />
[I] => Input des Users holen<br />
[OP] => Operation / Berechnung vom Programm (kein Output / Input)<br />

### SCENARIO 1

[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]<br />
[I] Kaffe jetzt, sag mir welchen. User wählt "Crema" (const coffee = "Crema")<br />
[OP] Checke ob es den Crema im Angebot gibt<br />
[OP] Checke was der Crema kostet<br />
[O] Kaffee kostet 1.99 EUR<br />
[I] 5 EUR (User gibt 5 EUR ein. Wir speichern das: const amount = 5.00)<br />
[OP] Prüfe ob Betrag reicht. Ja, reicht.<br />
[OP] Berechne Wechselgeld<br />
[O] Hier, Kaffee: 🍜<br />
[O] Dein Wechselgeld, buddy: 3.01 EUR<br />
DONE


### SCENARIO 2

[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]<br />
[I] Kaffe jetzt, sag mir welchen: const coffee = "Flat White"<br />
[OP] Checke ob es den Flat White im Angebot gibt<br />
[O] Fu*k off. Flat White gibt es nicht<br />
DONE

### SCENARIO 3

[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]<br />
[I] Kaffe jetzt, sag mir welchen: const coffee = "Crema"<br />
[OP] Checke ob es den Crema im Angebot gibt<br />
[OP] Checke was der Crema kostet<br />
[O] Kaffee kostet 1.99 EUR<br />
[I] User gibt ein: 1 EUR (Wir speichern: const amount = 1.00)<br />
[O] Reicht nicht. Ey! F** off. Reicht nicht. Du hattest deine Chance<br />
[O] Dein Wechselgeld, buddy: 1 EUR<br />
DONE


### ALL SCENARIOS

[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]<br />
[I] Kaffe jetzt, sag mir welchen: const coffee = "Crema"<br />
[OP] Checke ob es den Crema im Angebot gibt<br />
&nbsp;WENN NICHT => [O] Gibts nicht! Geht nicht! EXIT<br />
&nbsp;Etwas more challenging Variante: Frage solange nach Cofee Name, bis gültiger Kaffename eingegeben [LOOP]<br />
[OP] Checke was der Crema kostet<br />
[O] Kaffee kostet 1.99 EUR<br />
[I] User gibt uns Geld: X EUR (Wir speichern Input => const amount = X)<br />
&nbsp;WENN REICHT NICHT => [O] Gibts nicht! Geht nicht! EXIT<br />
&nbsp;Etwas more challenging Variante: Hole dir solange GELD, bis Betrag reicht [LOOP]<br />
[O] Hier, Kaffee: 🍜<br />
[O] Dein Wechselgeld, buddy: amount-coffeePrice EUR<br />
DONE<br />

## PSEUDO CODE

[O] console.log(Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino])<br />
[I] readline sync => Kaffe jetzt, sag mir welchen (=> const coffee = "Crema")<br />
[OP] IF NOT coffee im Array von Coffee Objects<br />
&nbsp;&nbsp;[O] console.log(Gibts nicht! Geht nicht!)<br />
&nbsp;&nbsp;[OP] process.exit()<br />
[OP] Checke was der Crema kostet => coffee.price<br />
[O] console.logge den Coffee Price (coffee.price)<br />
[I] IF amount von User kleiner als < Coffee price<br />
&nbsp;&nbsp;[O] console.log(Reicht nicht! Raus hier)<br />
&nbsp;&nbsp;[OP] process.exit()<br />
[O] console.log(Hier, Kaffee: 🍜)<br />
[O] console.log(Dein Wechselgeld, buddy: ${amount-coffeePrice} EUR)<br />
DONE<br />

Schreib dieses Programm und werde glücklich!
