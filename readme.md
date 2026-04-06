# 💸 Mini Expense Tracker (Begginer project)

## 📌 Opis projekta

Ovaj projekat predstavlja jednostavnu web aplikaciju za praćenje ličnih troškova (expense tracker).  
Korisnik može da unosi troškove i vidi njihov zbir, ali aplikacija je trenutno **nedovršena, loše strukturisana i puna bagova**.

Vaš zadatak je da:
- pronađete i popravite bagove
- unapredite korisničko iskustvo (UI/UX)
- refaktorišete kod
- dodate nove funkcionalnosti

Cilj projekta je da razmišljate kao pravi frontend developer i rešavate realne probleme iz prakse.

---

# ⚠️ Problemi u projektu

1. Loša struktura koda – sav JS je u jednom fajlu, što će postati neodrživo
2. CSS pravila su loše napisana – previše generičkih selektora (`div`, `input`, `button`...)
3. Ne postoji folder struktura (sve je “nabacano”)

---

# 🐛 Bagovi koje treba popraviti

1. **Total se ne računa kako treba**  
   Primer: `01234` umesto `12 + 34`

2. **Nema error prikaza**
    - može se submitovati prazna forma
    - nema poruka za korisnika

3. **Amount polje prihvata bilo šta**
    - tekst, negativne vrednosti, prazno

4. **Nema success poruke**
    - korisnik ne dobija feedback nakon dodavanja

5. **Enter ne submituje formu**
    - mora klik na dugme

6. **Nema focus state za inpute**
    - input treba vizuelno da reaguje (npr. promena boje)

---

# 🚀 Features koje treba implementirati

1. **Persistencija podataka**
    - sačuvati expenses (npr. u `localStorage`)
    - nakon refresh-a podaci ostaju

2. **Brisanje troška**
    - svaki expense mora imati delete opciju

3. **Editovanje troška**
    - korisnik može izmeniti postojeći unos

4. **Kategorije**
    - dodavanje kategorija (npr. hrana, gorivo…)
    - povezivanje troška sa kategorijom

5. **Pretraga i filteri**
    - po imenu
    - po kategoriji

6. **Sortiranje**
    - po iznosu
    - po imenu

---

# 🧠 BONUS (nije obavezno)

- Bolji UI (spacing, boje, layout)
- Formatiranje valute (npr. `1,200 RSD`)
- Responsive dizajn (mobilni uređaji)
- Animacije (hover, dodavanje itema)
- Typescript

---

# 🎯 Cilj

Nakon završetka, aplikacija treba da:
- radi bez bagova
- ima jasnu strukturu koda
- ima dobar UX
- liči na realnu produkcijsku aplikaciju

---

Srećno 🚀