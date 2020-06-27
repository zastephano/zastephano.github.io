$(function(){
    $("#main").load("sections/presentation.html");
});

$("#presentation").click(function(){
    $("#main").load("sections/presentation.html");
    $(".links li").removeClass('active');
    $(this).addClass('active');
});
$("#experiences").click(function(){
    $("#main").load("sections/experiences.html");
    $(".links li").removeClass('active');
    $(this).addClass('active');
});
$("#portfolio").click(function(){
    $("#main").load("sections/portfolio.html");
    $(".links li").removeClass('active');
    $(this).addClass('active');
});
$("#competences").click(function(){
    $("#main").load("sections/competences.html");
    $(".links li").removeClass('active');
    $(this).addClass('active');
});
$("#formations").click(function(){
    $("#main").load("sections/formation.html");
    $(".links li").removeClass('active');
    $(this).addClass('active');
});
$("#contact").click(function(){
    $("#main").load("sections/contact.html");
    $(".links li").removeClass('active');
    $(this).addClass('active');
});