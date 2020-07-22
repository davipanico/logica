/* 5. (OBRIGATÓRIO) Escreva uma consulta do MongoDB para exibir os 5
primeiros restaurantes do Bronx.
*/

db.restaurants.find({"borough": "Bronx"}).limit(5);