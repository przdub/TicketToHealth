/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function menuCheck(x) {
    var navigate = document.getElementById("navigate");
    if (x === 1) {
        document.getElementById("navigate").innerHTML = "<h4>Ticket to Health</h4><form id=\"loginForm\" name=\"loginForm\" method=\"post\" action=\"\"><fieldset><legend>Enter information</legend><p><label for=\"username\">Username</label><br /><input type=\"text\" id=\"username\" name=\"username\" class=\"text\" size=\"20\" /></p><p><label for=\"password\">Password</label><br /><input type=\"password\" id=\"password\" name=\"password\" class=\"text\" size=\"20\" /></p><p><button onclick=\"menuCheck(2)\" type=\"submit\" class=\"button positive\"><img alt=\"ok\" src=\"http://www.blueprintcss.org/blueprint/plugins/buttons/icons/tick.png\" />Login</button></p></fieldset></form>";
    }
    else {
        document.getElementById("navigate").innerHTML = "<h4>John's Blog</h4>      <ul class=\"nav nav-pills nav-stacked\">        <li class=\"active\"><a href=\"#section1\">Home</a></li>        <li><a href=\"#section2\">Friends</a></li>        <li><a href=\"#section3\">Family</a></li>        <li><a href=\"#section3\">Photos</a></li>      </ul><br>      <div class=\"input-group\">        <input type=\"text\" class=\"form-control\" placeholder=\"Search Blog..\">        <span class=\"input-group-btn\">          <button class=\"btn btn-default\" type=\"button\">            <span class=\"glyphicon glyphicon-search\"></span>          </button>        </span>      </div>";
    }
}

function getPosts() {

}


