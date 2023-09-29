# Coffee machine app

User Stories

Als ein User will ich...
- eine Liste von Kaffees sehen (OUTPUT)
- einen auswählen können (by name) (INPUT)
- den Preis für den Kaffee sehen (OUTPUT)
(- 10% Rabatt bekommen wenn Tag Freitag ist)
- den Betrag bezahlen (INPUT)
- wenn der Betrag reicht, den fu**** Kaffee haben (OUTPUT)
- wenn der Betrag reicht, will ich mein Wechsel haben (OUTPUT)
- wenn der Betrag nicht reicht, will ich krasse Rejection haben (OUTPUT)
DONE

SZENARIO 1:
[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]
[I] Kaffe jetzt, sag mir welchen: const coffee = "Crema"
[OP] Checke ob es den Crema im Angebot gibt
[OP] Checke was der Crema kostet
[O] Kaffee kostet 1.99 EUR
[I] 5 EUR => const amount = 5.00
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
[I] 1 EUR => const amount = 1.00 => solange bis amount größer Kaffee Preis [LOOP]
[O] Reicht nicht:
   - Ey! F** off. Reicht nicht. Du hattest deine Chance
[O] Hier, Kaffee: 🍜
[O] Dein Wechselgeld, buddy: 3.01 EUR


ALL SZENARIOS:
[O] Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino]
[I] Kaffe jetzt, sag mir welchen: const coffee = "Crema"
[OP] Checke ob es den Crema im Angebot gibt
    WENN NICHT => [O] Gibts nicht! Geht nicht! EXIT
[OP] Checke was der Crema kostet
[O] Kaffee kostet 1.99 EUR
[I] Input User: X EUR => const amount = X
    WENN REICHT NICHT => [O] Gibts nicht! Geht nicht! EXIT
[O] Hier, Kaffee: 🍜
[O] Dein Wechselgeld, buddy: amount-coffeePrice EUR
DONE

PSEUDO CODE:
[O] console.log(Hier hast du Kaffee: [Crema, Espresso, Latte, Frappuccino])
[I] Kaffe jetzt, sag mir welchen: const coffee = "Crema" => readline sync
[OP] IF Coffee im Array von Coffee Objects
    ELSE => [O] console.log(Gibts nicht! Geht nicht! EXIT)
[OP] Checke was der Crema kostet => coffee.price
[O] console.logge den Coffee Price (coffee.price)
[I] CHECK (IF) amount von User reicht (>) als Coffee price
    WENN NICHT => [O] console.log(Gibts nicht! Geht nicht! EXIT)
[O] Hier, Kaffee: 🍜
[O] Dein Wechselgeld, buddy: amount-coffeePrice EUR
DONE
