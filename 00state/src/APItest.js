const APIKey ='AIzaSyCC2qVOqKfM-1QGPIKXKFQhe5Km0qCJuic'

var site = 'https://www.googleapis.com/civicinfo/v2/representatives?key='+ APIKey +'&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS'

fetch(site)
  .then(response => response.json())
  .then(data => console.log(data));