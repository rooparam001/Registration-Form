// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var show_divs = "";

function submit_data() {
    var data = "";
    
    $('input[type="checkbox"]').each(function () {
        if ((this.checked ? "1" : "0") == "1")
            data += 1 + "|";
        else
            data += 0 + "|";
    });
    sessionStorage.setItem("form_data", JSON.stringify(data));
    location.href = '/Privacy';

}

function reset_data() {
    $('input[type="checkbox"]').prop("checked", false);
    data = "";
}

function btn_back() {
    location.href = '/Index';
    show_divs = "";
}

$(document).ready(function () {
    show_divs = JSON.parse(sessionStorage.form_data);
    if (show_divs != "") {
        var j = 0;
        var str = show_divs.split("|");
        for (var i = 0; i < str.length; i++) {
            j = i + 1;
            if (str[i] == 1) {
                $('#div_' + j + '').show();
            }
            else {
                $('#div_' + j + '').hide();
            }
        }
    }
});
