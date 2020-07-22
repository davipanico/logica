/* (OBRIGATÓRIO) Escreva uma consulta do MongoDB para exibir os campos
restaurant_id, nome, bairro e culinária de todos os documentos no restaurante
de coleção. 
*/

db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});