let baza = ["Każda praca jest możliwa do wykonania jeśli podzielić ją na małe odcinki - Abraham Lincol",
"Małe szanse są często początkiem wielkich przedsięwzięć. - Demostenes",
"Żadne zadanie nie jest szczególnie trudne, jeśli podzielisz je na mniejsze podzadania. - Henry Ford",
"Motywacja do wygranej jest ważna, ale motywacja do przygotowania się jest niezbędna. - Joe Paterno",
"Sposobem na zaczęcie jest skończenie mówienia i podjęcie działania - Walt Disney"];

document.getElementById('cytat').innerHTML=baza[Math.ceil(Math.random()*5)];

