$(document).ready(function(){

    /*
    var template = '{{#data}}<div><h2>{{Title}}</h2><p>{{Course}}</p><p>{{Category}}</p></div>{{/data}}';
    var data = JSON.parse('[{"Title":"Algorithms","Course":"CSI241","Category":"science"},{"Title":"Fluid dynamics","Course":"PHY345","Category":"science"}]')
    var html = Mustache.to_html(template, { data: data });
    */

    var btnCancel = $('<button></button>').text('Cancel').addClass('btn btn-danger').on('click', function(){
        $('#smartwizard').smartWizard("reset");
        $('#myForm').find("input, textarea").val("");
    });

    // Smart Wizard
    $('#smartwizard').smartWizard({
            selected: 0,
            theme: 'arrows',
            transitionEffect:'fade',
            toolbarSettings: {toolbarPosition: 'bottom',
                              toolbarExtraButtons: [btnCancel]
                            },
            anchorSettings: {
                        markDoneStep: true, // add done css
                        markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
                        removeDoneStepOnNavigateBack: true, // While navigate back done step after active step will be cleared
                        enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
                    }
    });

    $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
        if(stepNumber == 3){
          $.get( 'templates/hcdwp.hbs', function(source) {
       	      var template = Handlebars.compile(source);
       	      
       	      var data = { "numero" : $("numero").value,
       	      			   "categoria": $("categoria").value,
       	      			   "titolo": $("titolo").value,
       	      			   "messaggio": $("messaggio").value,
       	      			   "versioni": $("versioni").value }
       	      
       	      $("#risultato").html(template(data));
       	});
      }
    });

});
