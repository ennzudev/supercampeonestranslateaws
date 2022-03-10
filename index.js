var AWS = require("aws-sdk");
AWS.config.update({region: "us-east-1"});

var translate = new AWS.Translate();

var params = {
  SourceLanguageCode: 'es',
  TargetLanguageCode: 'en',
  Text: "Historia que tu hiciste. Historia por hacer. Porque nadie resiste. Tus ganas de vencer. Ya salen las estrellas. Mi viejo Chamartín. De lejos y de cerca. Nos traes hasta aquí. Llevo tu camiseta. Pegada al corazón. Los días que tu juegas. Son todo lo que soy. Ya corre la saeta. Ya ataca mi Madrid. Soy lucha soy belleza. El grito que aprendí. Madrid, Madrid, Madrid ¡Hala madrid! Y nada más... Y nada más... ¡Hala madrid!"
};

translate.translateText(params, function (err, data) {
  if (err) console.log(err, err.stack); 
  else     console.log(data['TranslatedText']);
});