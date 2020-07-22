/* 6. (OBRIGATÓRIO) Escreva uma consulta do MongoDB para exibir os próximos
5 restaurantes depois de pular os 5 primeiros que estão no bairro Bronx.
*/

db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);