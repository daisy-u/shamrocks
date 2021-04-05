const btnElQ = document.getElementById("moreQuotes");
const pElNewQuote = document.getElementById("newQuote");
const pElNewAuthor = document.getElementById("newAuthor");
//btnElMov.addEventListener('click', clickMovBtn);

$( "#moreQuotes" ).click(function() {
     fetch("./quotes.json")                                         // did not get an api key, so decided to host a local jason file of about
         .then(extractJSON)                                              // 100 movie quotes and generate a random one
         .then(useTheData);

         function extractJSON (response) {
             return response.json()
         }

        function useTheData (data) {
            function getRandomInt(max) {                        //send this function a max value and it returns an int between 0 and max
                return Math.floor(Math.random() * Math.floor(max));
            }
            let quoteNumber = getRandomInt(data.length-1);      //we need an int between 0 and (max-1) for array indexing
            //console.log(data[0]);
            
         pElNewQuote.innerHTML = '"' + data[quoteNumber].quote + '"';
            pElNewAuthor.innerHTML = data[quoteNumber].author;
            $( "#qContainer" ).effect( "highlight", "slow" );
        } 
    
  });
