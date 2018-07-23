window.addEventListener('load', function load(event) {
    ['one','two','three','four','five','six','seven','eight','nine','zero','plus','minus','times','div'].forEach(function(color) {
        document.getElementById(color).onclick = function() {
            document.getElementById("display").value+=document.getElementById(color).value;
        };
    });

    document.getElementById("doit").onclick = function() {
          document.getElementById("display").value=eval(document.getElementById("display").value);
    };

    document.getElementById("clear").onclick = function() {
          document.getElementById("display").value='';
    };
});
