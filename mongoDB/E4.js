/* (OBRIGATÓRIO) Escreva uma consulta do MongoDB para exibir todo o
restaurante localizado no bairro Bronx. 
*/


db.restaurants.find({"borough": "Bronx"});