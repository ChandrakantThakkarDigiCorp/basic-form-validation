function formValidation(formaID) {
    var validateForm = true;
    //CBT:get All element which have validation attributes
    var allControlforValidation = $("#" + formaID + " *").filter("[validation]");
    for (var i = 0; i < allControlforValidation.length; i++) {
        var formCotrol = allControlforValidation[i];
        var requiredValidation = $(formCotrol).attr("validation").split(",");
        var formControlId = $(formCotrol).attr("id");
        var controlValue = $(formCotrol).val();
        var allValidationFlag = 0;
        requiredValidation.forEach(function(validationType) {
            if (validationType.toLowerCase() == "required") {
                if (controlValue == "" || controlValue == null || controlValue == undefined) {
                    validateForm = false;
                    $("#" + formControlId + "_validation").show();
                    $("#" + formControlId + "_validation").text("Input Required");
                    allValidationFlag = allValidationFlag + 1;
                }
            } else if (validationType.toLowerCase() == "onlydigitwithdot") {
                if (isNaN(controlValue) == true) {
                    validateForm = false;
                    $("#" + formControlId + "_validation").show();
                    $("#" + formControlId + "_validation").text("Enter only digit");
                    allValidationFlag = allValidationFlag + 1;
                }
            } else if (validationType.toLowerCase() == "onlydigit") {
                var onlyDigitPatter = /^(([0-9]*)|(([0-9]*)))$/;
                if (onlyDigitPatter.exec(controlValue) == null) {
                    validateForm = false;
                    $("#" + formControlId + "_validation").show();
                    $("#" + formControlId + "_validation").text("Enter only digit");
                    allValidationFlag = allValidationFlag + 1;
                }
            } else if (validationType.toLowerCase() == "onlyalphabet") {
                var onlyAplphabetPatter = /^([A-Za-z]|[A-Za-z]|[A-Za-z])+$/;
                if (onlyAplphabetPatter.exec(controlValue) == null) {
                    validateForm = false;
                    $("#" + formControlId + "_validation").show();
                    $("#" + formControlId + "_validation").text("Enter only alphabets");
                    allValidationFlag = allValidationFlag + 1;
                }
            } else if (validationType.toLowerCase() == "onlyalphabetwithspace") {
                var onlyAplphabetWithSpacePatter = /^([A-Za-z]|[A-Za-z][\s]*|[\s]*[A-Za-z])+$/;
                if (onlyAplphabetWithSpacePatter.exec(controlValue) == null) {
                    validateForm = false;
                    $("#" + formControlId + "_validation").show();
                    $("#" + formControlId + "_validation").text("Enter only alphabets, (Only space allowed)");
                    allValidationFlag = allValidationFlag + 1;
                }
            } else if (validationType.toLowerCase().search("size") != -1) {
                var requiredValLength = validationType.toLowerCase().substring(validationType.toLowerCase().indexOf('(') + 1, validationType.toLowerCase().indexOf(')'));
                if (controlValue.length != parseInt(requiredValLength)) {
                    validateForm = false;
                    $("#" + formControlId + "_validation").show();
                    $("#" + formControlId + "_validation").text("Enter only " + requiredValLength + " characters");
                    allValidationFlag = allValidationFlag + 1;
                }
            } else if (validationType.toLowerCase() == "email") {
                var email = $("#" + formControlId).val();
                var atpos = email.indexOf("@");
                var dotpos = email.lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                    validateForm = false;
                    $("#" + formControlId + "_validation").show();
                    $("#" + formControlId + "_validation").text("Enter valid E-mail ID");
                    allValidationFlag = allValidationFlag + 1;
                }
            }
        });
        if (allValidationFlag == 0) {
            $("#" + formControlId + "_validation").hide();
        }
    }
    return validateForm;
}

function resetFormWithValidation(formaID, cb) {
    //CBT:get All element which have validation attributes
    var allControlforValidation = $("#" + formaID + " *").filter("[validation]");
    for (var i = 0; i < allControlforValidation.length; i++) {
        var formCotrol = allControlforValidation[i];
        var formControlId = $(formCotrol).attr("id");
        $("#" + formControlId).val("");
        $("#" + formControlId + "_validation").val("");
        $("#" + formControlId + "_validation").hide();
    }
}
