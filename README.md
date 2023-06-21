# pagination-server
To Paginate we just need to do simple things right down bellow.
+ **first the client side will send us the data of currentPage and perPage in the (query)**
+ get the currentPage from req.query.(currentPage)!
+ get the perPage form req.query.(perPage)!
- [x] make sure that the currentPage and perPage are converted into number with ### parseInt()
+ count the total data of your collection with estimatedDocumentCount() or countDocuments
+ skip(currentPage * perPage) to skip the unwanted data
+ limit(perPage) to reduce rest data after skip
+ res.send({count,result})
Thats all you need to do for pagination in backend side
