/* 7.(OBRIGATÓRIO) Escreva uma consulta do MongoDB para encontrar os
restaurantes que atingiram uma pontuação superior a 90.
*/

db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}});