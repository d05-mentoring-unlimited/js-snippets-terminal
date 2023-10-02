# Coffee machine app

User Stories

Als ein User will ich...
- eine Liste von Kaffees sehen (OUTPUT)
- einen auswählen können (by name) (INPUT)
- den Preis für den Kaffee sehen (OUTPUT)
- den Betrag bezahlen (INPUT)
- wenn der Betrag reicht, den fu**** Kaffee haben (OUTPUT)
- wenn der Betrag reicht, will ich mein Wechselgeld haben (OUTPUT)
- wenn der Betrag nicht reicht, will ich krasse Rejection haben (OUTPUT)
(- advanced feature: 10% Rabatt bekommen wenn Tag Freitag ist :))
DONE

SZENARIOS:
[O] => Output des Programms
[I] => Input des Users holen
[OP] => Operation / Berechnung vom Programm (kein Output / Input)

SZENARIO 1:
[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]
[I] Kaffe jetzt, sag mir welchen. User wählt "Crema" (const coffee = "Crema")
[OP] Checke ob es den Crema im Angebot gibt
[OP] Checke was der Crema kostet
[O] Kaffee kostet 1.99 EUR
[I] 5 EUR (User gibt 5 EUR ein. Wir speichern das: const amount = 5.00)
[OP] Prüfe ob Betrag reicht. Ja, reicht.
[OP] Berechne Wechselgeld
[O] Hier, Kaffee: 🍜
[O] Dein Wechselgeld, buddy: 3.01 EUR
DONE


SZENARIO 2:
[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]
[I] Kaffe jetzt, sag mir welchen: const coffee = "Flat White"
[OP] Checke ob es den Flat White im Angebot gibt
[O] Fu*k off. Flat White gibt es nicht
DONE

SZENARIO 3:
[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]
[I] Kaffe jetzt, sag mir welchen: const coffee = "Crema"
[OP] Checke ob es den Crema im Angebot gibt
[OP] Checke was der Crema kostet
[O] Kaffee kostet 1.99 EUR
[I] User gibt ein: 1 EUR (Wir speichern: const amount = 1.00)
[O] Reicht nicht:
   - Ey! F** off. Reicht nicht. Du hattest deine Chance
[O] Dein Wechselgeld, buddy: 1 EUR


ALL SZENARIOS:
[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]
[I] Kaffe jetzt, sag mir welchen: const coffee = "Crema"
[OP] Checke ob es den Crema im Angebot gibt
    WENN NICHT => [O] Gibts nicht! Geht nicht! EXIT
	Etwas more challenging Variante: Frage solange nach Cofee Name, bis gültiger Kaffename eingegeben [LOOP]
[OP] Checke was der Crema kostet
[O] Kaffee kostet 1.99 EUR
[I] User gibt uns Geld: X EUR => const amount = X    
    WENN REICHT NICHT => [O] Gibts nicht! Geht nicht! EXIT
	Etwas more challenging Variante: Hole dir solange GELD, bis Betrag reicht [LOOP]
[O] Hier, Kaffee: 🍜
[O] Dein Wechselgeld, buddy: amount-coffeePrice EUR
DONE

PSEUDO CODE:
[O] console.log(Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino])
[I] readline sync => Kaffe jetzt, sag mir welchen: const coffee = "Crema"
[OP] IF NOT coffee im Array von Coffee Objects
    [O] console.log(Gibts nicht! Geht nicht!)
	[OP] process.exit()
[OP] Checke was der Crema kostet => coffee.price
[O] console.logge den Coffee Price (coffee.price)
[I] IF amount von User kleiner als < Coffee price
    [O] console.log(Reicht nicht! Raus hier)
	[OP] process.exit()
[O] console.log(Hier, Kaffee: 🍜)
[O] console.log(Dein Wechselgeld, buddy: ${amount-coffeePrice} EUR)
DONE

Schreib dieses Programm und werde glücklich!
