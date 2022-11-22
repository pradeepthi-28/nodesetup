const http=require("http")
http.createServer((req,res)=>{
	res.write("server is loading........")
	res.end()
}).listen(1683)