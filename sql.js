var MongoClient=require("mongodb").MongoClient;
var express=require('express')
var router=express.Router();
var path=require('path')
var url=require('url');
var querystring=require('querystring')
router.use(express.static('./public'))
var dbname;
var urls="mongodb+srv://jaisuriyad:Jaisuriyad.20cse@cluster0.uikhuua.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(urls,function(err,db)
{
   if (err) throw err;
   dbname=db.db("mydb");
   console.log("connected")

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
router.get('/staffdone',function(req,res)
{
    var query=url.parse(req.url).query;
   var name=querystring.parse(query)["name"]
   var pass=querystring.parse(query)["pwd"]
   var std=querystring.parse(query)["selectstd"]
   dbname.collection("teacherpassword").find({$or:[{"password":pass},{"password": pass}]}).toArray(function(err,result)
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
    else
    {
      
      res.sendFile(path.join(__dirname,'public/templates/incorrect.html'))
    }
   }); 
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
    var data={
      "name":name,
      "rollno":rollno,
      "tamil":tamil,
      "english":english,
      "maths":maths,
      "science":science,
      "social":social
    }
    dbname.collection('sslcmarks').insertOne(data,function(err,result)
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
    var deleteroll={"rollno":rollno}
    dbname.collection('sslcmarks').deleteOne(deleteroll,function(err,result)
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
    var data={
      "name":name,
      "rollno":rollno,
      "tamil":tamil,
      "english":english,
      "maths":maths,
      "physics":physics,
      "chemistry":chemistry,
      "biology":biology
    }
    dbname.collection('biomarks').insertOne(data,function(err,result)
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
    var deleteroll={"rollno":rollno}
    dbname.collection('biomarks').deleteOne(deleteroll,function(err,result)
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
    var data={
      "name":name,
      "rollno":rollno,
      "tamil":tamil,
      "english":english,
      "maths":maths,
      "physics":physics,
      "chemistry":chemistry,
      "computerscience":computerscience
    }
    dbname.collection('csemarks').insertOne(data,function(err,result)
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
    var deleteroll={"rollno":rollno}
    dbname.collection('csemarks').deleteOne(deleteroll,function(err,result)
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
    var data={
      "name":name,
      "rollno":rollno,
      "tamil":tamil,
      "english":english,
      "economics":economics,
      "accountancy":accountancy,
      "commerce":commerce,
      "history":history
    }
    dbname.collection('artsmarks').insertOne(data,function(err,result)
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
    var deleteroll={"rollno":rollno}
    dbname.collection('artsmarks').deleteOne(deleteroll,function(err,result)
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
      var qur=dbname.collection("sslcmarks").find({"rollno":rollno});
    }
    else if(std=="12thbio")
    {
      var qur=dbname.collection("biomarks").find({"rollno":rollno});
    }
    else if(std=="12thcse")
    {
      var qur=dbname.collection("csemarks").find({"rollno":rollno});
    }
    else if(std=="12tharts")
    {
      var qur=dbname.collection("artsmarks").find({"rollno":rollno});
    }
    qur.toArray(function(err,result)
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
        else
        {
         res.sendFile(path.join(__dirname,'public/templates/incorrects.html'))
        }
    })
})


module.exports=router;