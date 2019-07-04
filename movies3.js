
var func= function(){
    var c=document.getElementById("m1").value;
    var movies_name=[],pro_cont=[],overview=[],rel_date=[],popularity=[];
    var a,b;
    for(var i=1;i<100;i++){
    $.ajax({
        url:"https://api.themoviedb.org/3/movie/"+i+"?api_key=9ae85e2918d1c0d061dedeab0779eef6",
        type:"GET",
        async:false,
        success:function(response){
            a=response.original_title;
            e=response.overview;
            f=response.production_countries[0].name;
            g=response.release_date;
            h=response.popularity;
            movies_name.push(a);
            overview.push(e);
            pro_cont.push(f);
            rel_date.push(g);
            popularity.push(h);


        }

    });

    }

    
    for(var j=0;j<movies_name.length;j++){
        if(movies_name[j]===c){
             span_value2=document.getElementById("m2").innerHTML="<br>"+"<br>"+"Title :"+"           "+movies_name[j];
             span_value3=document.getElementById("m3").innerHTML="<br>"+"<br>"+"Overview :"+"          "+overview[j];
             span_value4=document.getElementById("m4").innerHTML="<br>"+"<br>"+"Production Countrie :"+"          "+pro_cont[j];
             span_value5=document.getElementById("m5").innerHTML="<br>"+"<br>"+"Release Date :"+"          "+rel_date[j];
             span_value6=document.getElementById("m6").innerHTML="<br>"+"<br>"+"Popularity :"+"            "+popularity[j];
        }
    }  
}


$( function() {
  var movies_name=[];
  for(var i=1;i<100;i++){
    $.ajax({
        url:"https://api.themoviedb.org/3/movie/"+i+"?api_key=9ae85e2918d1c0d061dedeab0779eef6",
        type:"GET",
        async:false,
        success:function(response){
          var a=response.original_title;
            movies_name.push(a);
        }

    });

    }

$( "#m1" ).autocomplete({
    source: movies_name
    
});
} );







