var express=require('express')
var router=express.Router();
var path=require('path')
var url=require('url');
var querystring=require('querystring')
var mysql=require('mysql')
router.use(express.static('./public'))

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
router.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/main.html'))
})
router.get('/teacher.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/teacher.html'))
})
router.get('/student.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/student.html'))
})
router.get('/staffs.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/staffs.html'))
})
router.get('/acheive.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/acheive.html'))
})
router.get('/staffdone',function(req,res)
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
router.get('/bio.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/bio.html'))
})
router.get('/cse.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/cse.html'))
})
router.get('/arts.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/arts.html'))
})
router.get('/campus.html',function(req,res)
{
    res.sendFile(path.join(__dirname,'public/templates/campus.html'))
})

router.get('/10thinsert',function(req,res)
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
router.get('/10thdelete',function(req,res)
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



router.get('/bioinsert',function(req,res)
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
router.get('/biodelete',function(req,res)
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

router.get('/cseinsert',function(req,res)
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
router.get('/csedelete',function(req,res)
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

router.get('/artsinsert',function(req,res)
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
router.get('/artsdelete',function(req,res)
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
router.get('/studentsubmit',function(req,res)
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
            console.log(result)
            if(std=="12thbio")
            {
                res.render('displaybio',{title:'sending result',action:'list',rows:result});
            }
            else if(std=="12thcse")
            {
                res.render('displaycse',{title:'sending result',action:'list',rows:result});
            }
            else if(std=="12tharts")
            {
                res.render('displayarts',{title:'sending result',action:'list',rows:result});
            }
            else{
            res.render('display',{title:'sending result',action:'list',rows:result});
            }
        }
    })
})
module.exports=router;