/*(OBRIGATÓRIO) Escreva uma consulta do MongoDB para exibir os campos
restaurant_id, nome, bairro e culinária, mas exclua o campo _id para todos os
documentos na coleção.
*/

db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1,"_id":0});