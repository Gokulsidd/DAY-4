var request= new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    for(i=0;i<data.length;i++)
    console.log("NAME:"+data[i].name," "+"REGION :"+data[i].region," "+"SUB-REGION :"+data[i].subregion," "+"POPULATION :"+data[i].population)
}