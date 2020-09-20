  
  $(document).ready(function() {
    if (window.File && window.FileList && window.FileReader) {
      $("#files").on("change", function(e) {
        var files = e.target.files,
          filesLength = files.length;
        for (var i = 0; i < filesLength; i++) {
          var f = files[i]
          var fileReader = new FileReader();
          fileReader.onload = (function(e) {
            var file = e.target;
            $("<div class=\"container  pip \">"+
              "<img class=\"imageThumb img-thumbnail\" src=\""  + e.target.result + "\" title=\"" + file.name + "\"/>"+
                "<span class=\"middle remove\">"+
              "<button type=\"button\" class=\"btn btn-danger\">Delete</button>"+
                "</span>"+
              "</div>").insertAfter("#files");
            $(".remove").click(function(){
              $(this).parent(".pip").remove();
            });
            
     
          });
          fileReader.readAsDataURL(f);
        }
      });
    } else {
      alert("Your browser doesn't support to File API")
    }
  });