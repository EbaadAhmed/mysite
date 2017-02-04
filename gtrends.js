


var googleTrends = require('google-trends-api');
//googleTrends.topRelated('dog house')
googleTrends.trendData({keywords: 'Data Science', timePeriod: {type: 'day', value: 1}})
.then(function(results){
	 var valuecheck = results[0].values;
	 
 console.log(results[0].values);
  //var obj  = JSON.parse(results[0]);
  //console.log(obj);
  /*var obj = JSON.parse('{"date": 212345 , "value" : 79},{"date": 212  , "value" : 9}', (key, value) => {
  console.log(value); // log the current property name, the last is "".
  return value;     // return the unchanged property value.*/
  //console.log(results[0]);
   for (var i=0;i<5;i++)
  {
	  console.log(valuecheck[i].date);
	  console.log(valuecheck[i].value);
res.end(valuecheck[i].value);
   }

  
})
.catch(function(err){
  console.error(err);
});


