/* 8.(OBRIGATÓRIO) Escreva uma consulta do MongoDB para encontrar os
restaurantes que atingiram uma pontuação maior que 80, mas menor que 100.
*/

db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}});