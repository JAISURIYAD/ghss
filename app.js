var express=require('express')
var url=require('url');
var querystring=require('querystring')
var app=express()
var path=require('path')
//var mysql=require('mysql')

var routing=require('./sql.js')
app.set("view engine","ejs")
app.set("views",path.resolve(__dirname,'./views'))
app.use('/',routing);
 /*app.use(express.static('./public'))


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jaisuriyad.20cse",
    database: "mydb"
  });
  con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
});
app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/main.html'))
})
app.get('/teacher.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/teacher.html'))
})
app.get('/student.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/student.html'))
})
app.get('/staffs.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/staffs.html'))
})
app.get('/acheive.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/acheive.html'))
})
app.get('/staffdone',function(req,res)
{
    var query=url.parse(req.url).query;
   var name=querystring.parse(query)["name"]
   var password=querystring.parse(query)["pwd"]
   var std=querystring.parse(query)["selectstd"]

   var qur="select * from teacherpassword where '"+password+"'='ghsspachal10' or '"+password+"'='ghsspachal12'"; 
   con.query(qur,function(err,result)
   {
    if(err) throw err;
    else if(result!="" && std=="10th")
    {
        res.sendFile(path.join(__dirname,'public/templates/10thmark.html'))
    }
    else if(result!="" && std=="12th")
        {
        res.sendFile(path.join(__dirname,'public/templates/12thmark.html'))
    }
   })
})
app.get('/bio.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/bio.html'))
})
app.get('/cse.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/cse.html'))
})
app.get('/arts.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/arts.html'))
})
app.get('/campus.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/campus.html'))
})

app.get('/10thinsert',function(req,res)
{
    var query=url.parse(req.url).query;
    var name=querystring.parse(query)['name']
    var rollno=querystring.parse(query)['rollno']
    var tamil=querystring.parse(query)['tamil']
    var english=querystring.parse(query)['english']
    var maths=querystring.parse(query)['maths']
    var science=querystring.parse(query)['science']
    var social=querystring.parse(query)['social']
    var q="insert into sslcmarks values('"+name+"','"+rollno+"','"+tamil+"','"+english+"','"+maths+"','"+science+"','"+social+"')"
    con.query(q,function(err,result)
    {
        if(err) throw err;
        console.log(result)
        res.sendFile(path.join(__dirname,'public/templates/10thmark.html'))
    })
})
app.get('/10thdelete',function(req,res)
{
    var query=url.parse(req.url).query;
    var rollno=querystring.parse(query)['rollno']
    var q="delete from sslcmarks where rollno='"+rollno+"'";
    con.query(q,function(err,result)
    {
        if(err) throw err;
        console.log('deleted successfully')
        res.sendFile(path.join(__dirname,'public/templates/10thmark.html'))
    })
})



app.get('/bioinsert',function(req,res)
{
    var query=url.parse(req.url).query;
    var name=querystring.parse(query)['name']
    var rollno=querystring.parse(query)['rollno']
    var tamil=querystring.parse(query)['tamil']
    var english=querystring.parse(query)['english']
    var maths=querystring.parse(query)['maths']
    var physics=querystring.parse(query)['physics']
    var chemistry=querystring.parse(query)['chemistry']
    var biology=querystring.parse(query)['biology']
    var q="insert into biomarks values('"+name+"','"+rollno+"','"+tamil+"','"+english+"','"+maths+"','"+physics+"','"+chemistry+"','"+biology+"')"
    con.query(q,function(err,result)
    {
        if(err) throw err;
        console.log(result)
        res.sendFile(path.join(__dirname,'public/templates/bio.html'))
    })
})
app.get('/biodelete',function(req,res)
{
    var query=url.parse(req.url).query;
    var rollno=querystring.parse(query)['rollno']
    var q="delete from biomarks where rollno='"+rollno+"'";
    con.query(q,function(err,result)
    {
        if(err) throw err;
        console.log('deleted successfully')
        res.sendFile(path.join(__dirname,'public/templates/bio.html'))
    })
})

app.get('/cseinsert',function(req,res)
{
    var query=url.parse(req.url).query;
    var name=querystring.parse(query)['name']
    var rollno=querystring.parse(query)['rollno']
    var tamil=querystring.parse(query)['tamil']
    var english=querystring.parse(query)['english']
    var maths=querystring.parse(query)['maths']
    var physics=querystring.parse(query)['physics']
    var chemistry=querystring.parse(query)['chemistry']
    var computerscience=querystring.parse(query)['computerscience']
    var q="insert into csemarks values('"+name+"','"+rollno+"','"+tamil+"','"+english+"','"+maths+"','"+physics+"','"+chemistry+"','"+computerscience+"')"
    con.query(q,function(err,result)
    {
        if(err) throw err;
        console.log(result)
        res.sendFile(path.join(__dirname,'public/templates/cse.html'))
    })
})
app.get('/csedelete',function(req,res)
{
    var query=url.parse(req.url).query;
    var rollno=querystring.parse(query)['rollno']
    var q="delete from csemarks where rollno='"+rollno+"'";
    con.query(q,function(err,result)
    {
        if(err) throw err;
        console.log('deleted successfully')
        res.sendFile(path.join(__dirname,'public/templates/cse.html'))
    })
})

app.get('/artsinsert',function(req,res)
{
    var query=url.parse(req.url).query;
    var name=querystring.parse(query)['name']
    var rollno=querystring.parse(query)['rollno']
    var tamil=querystring.parse(query)['tamil']
    var english=querystring.parse(query)['english']
    var economics=querystring.parse(query)['economics']
    var accountancy=querystring.parse(query)['accountancy']
    var commerce=querystring.parse(query)['commerce']
    var history=querystring.parse(query)['history']
    var q="insert into artsmarks values('"+name+"','"+rollno+"','"+tamil+"','"+english+"','"+economics+"','"+accountancy+"','"+commerce+"','"+history+"')";
    con.query(q,function(err,result)
    {
        if(err) throw err;
        console.log(result)
        res.sendFile(path.join(__dirname,'public/templates/arts.html'))
    })
})
app.get('/artsdelete',function(req,res)
{
    var query=url.parse(req.url).query;
    var rollno=querystring.parse(query)['rollno']
    var q="delete from artsmarks where rollno='"+rollno+"'";
    con.query(q,function(err,result)
    {
        if(err) throw err;
        console.log('deleted successfully')
        res.sendFile(path.join(__dirname,'public/templates/arts.html'))
    })
})
app.get('/studentsubmit',function(req,res)
{
    var query=url.parse(req.url).query;
    var name=querystring.parse(query)['name'];
    var rollno=querystring.parse(query)['rollno']
    var std=querystring.parse(query)['selectstd']
    if(std=="10th")
    {
        var qur="select * from sslcmarks where rollno='"+rollno+"'";
    }
    else if(std=="12thbio")
    {
        var qur="select * from biomarks where rollno='"+rollno+"'";
    }
    else if(std=="12thcse")
    {
        var qur="select * from csemarks where rollno='"+rollno+"'";
    }
    else if(std=="12tharts")
    {
        var qur="select * from artsmarks where rollno='"+rollno+"'";
    }
    con.query(qur,function(err,result)
    {
        if(err) throw err;
        else if(result!="")
        {
            res.sendFile(path.join(__dirname,'public/templates/arts.html',{title:'sending result',action:'list',sampleData:data}))
        }
    })
})*/
app.listen(8010);