/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*Funkcja wyświetlająca login albo menu w zależności od tego, czy ktos jest zalogowany - obecnie zmockowana*/
function menuCheck(x) {
    var navigate = document.getElementById("navigate");
    if (x === 1) {
        document.getElementById("navigate").innerHTML = "<h4>Ticket to Health</h4><form id=\"loginForm\" name=\"loginForm\" method=\"post\" action=\"\"><fieldset><legend>Enter information</legend><p><label for=\"username\">Username</label><br /><input type=\"text\" id=\"username\" name=\"username\" class=\"text\" size=\"20\" /></p><p><label for=\"password\">Password</label><br /><input type=\"password\" id=\"password\" name=\"password\" class=\"text\" size=\"20\" /></p><p><button onclick=\"menuCheck(2)\" type=\"submit\" class=\"button positive\"><img alt=\"ok\" src=\"http://www.blueprintcss.org/blueprint/plugins/buttons/icons/tick.png\" />Login</button></p></fieldset></form>";
    }
    else {
        document.getElementById("navigate").innerHTML = "<h4>Ticket to Health</h4>      <ul class=\"nav nav-pills nav-stacked\">        <li class=\"active\"><a href=\"#section1\">Najnowsze zgłoszenia</a></li>        <li><a href=\"#section2\">Moje zgłoszenia</a></li>        <li><a href=\"#section3\">Dodaj zgłoszenie</a></li>        <li><a href=\"#section3\">Profil</a></li>      </ul><br>      <div class=\"input-group\">        <input type=\"text\" class=\"form-control\" placeholder=\"Search Blog..\">        <span class=\"input-group-btn\">          <button class=\"btn btn-default\" type=\"button\">            <span class=\"glyphicon glyphicon-search\"></span>          </button>        </span>      </div>";
    }
}

/*Funkcja, która odpytuje PHP o dane z bazy - należy dodać parametry zapytań i stworzyć osobną funkcję, która wyświetli wyniki*/
function getPosts(callback) {
    $.ajax({
    type: 'POST',  
    url: '../scripts/database.php',
    data: { album: "dobry_album" },
    success: function(response) {
            if (callback) callback(response);
    }});
}

function returnPosts(dbJSON) {
    posts = dbJSON;
}

function showTickets(dbJSON) {

        $.each(dbJSON, function(key, value){
            var subdiv = document.createElement('div');
            $(subdiv).attr("class","ticket");
            $('#tickets').append(subdiv);
        $.each(value, function(key, value){
                switch (key) {
                    case 'ticket_id' :
                        var ticket_id = document.createElement('p');
                        $(ticket_id).attr("class", "ticket_id");
                        $(ticket_id).text("Numer zgłoszenia: "+value);
                        $('#tickets').children().last().append(ticket_id);
                        break;
                    case 'ticket_title' :
                        var title = document.createElement('h2');
                        $(title).attr("class", "ticket_title");
                        $(title).text(value);
                        $('#tickets').children().last().append(title);
                        break;
                    case 'ticket_category' :
                        var category = document.createElement('p');
                        $(category).attr("class", "ticket_category");
                        $(category).text("Kategoria: "+value);
                        $('#tickets').children().last().append(category);
                        break;
                    case 'ticket_descrption' :
                        var description = document.createElement('p');
                        $(description).attr("class", "ticket_description");
                        $(description).text("Kategoria: "+value);
                        $('#tickets').children().last().append(description);
                        break;
                    case 'dataZgloszenia' :
                        var date = document.createElement('p');
                        $(date).attr("class", "ticket_description");
                        $(date).text("Data zgłoszenia: "+value);
                        $('#tickets').children().last().append(date);
                        break;
                    
                }
                
                /*$('#tickets').append(key+ " "+value +"<br>");
                $('#tickets').children().last().text(value);*/
            });
    });
};
