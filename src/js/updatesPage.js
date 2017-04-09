jQuery(document).ready(function($){
  TimelineHandler.init();
});

var TimelineHandler = (function(){

  var timelineBlocksSelector = '.cd-timeline-block';
  var offset = 0.8;

  var init = function(){
    TimelineBuilder.render(function(){
      hideBlocks(timelineBlocksSelector,offset);
      subscribeScroll();
    });
  };

  var subscribeScroll = function(){
    $(window).on('scroll', function(){
    (!window.requestAnimationFrame)
      ? setTimeout(function(){ showBlocks(timelineBlocksSelector, offset); }, 100)
      : window.requestAnimationFrame(function(){ showBlocks(timelineBlocksSelector, offset); });
    });
  };

  var showBlocks = function(blocks, offset) {
   $(timelineBlocksSelector).each(function(){
      ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  };

  var hideBlocks = function(blocks, offset) {
    $(timelineBlocksSelector).each(function(){
      ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  };

  return {
    init:init
  };
})();

var TimelineBuilder = (function(){
  var iconsPath = "images/PNGicons/";
  var placeholderSelector = ".cd-container#cd-timeline";

  var render = function(ready){
    fillData();
    rednerList(ready);
  };

  var fillData = function(){

    addToList('icon_0231@2x.png','December 2016',"Team started a blog");
    addToList('icon_0212@2x.png', 'August 2016', "The concept of Minimum Viable Product created. <br>MVP equity split execution time!");
    addToList('icon_0193@2x.png', 'July 2016', "Team started working on equity split");
    addToList('icon_0227@2x.png', 'July 2016', "Team selected equity split as a main idea");
    addToList('icon_0251@2x.png', 'June 2016', "Idea's Sprint month - the idea selection sprint that will define our future work.");
    addToList('icon_0104@2x.png','May 31, 2016',"Miroslav and Ian recieved MaRS Entrepreneurship 101 certificates.");
    addToList('icon_0239@2x.png','May 4, 2016',"MaRS Entrepreneurship 101 2015/2016 season is over.");
    addToList('icon_0115@2x.png','March 31, 2016',"The Calendar project is dropped due lack of interest in the topic.");
    addToList('icon_0274@2x.png','March 26, 2016',"The indestructable Sergei Stadnik joined the team as the Head of Quality Assurance! Welcome Sergei! :- )");
    addToList('icon_0231@2x.png','March 17, 2016',"Cohesive Bits is incorporated! :- )");
    addToList('icon_0142@2x.png','October 4, 2015',"Arpad joined the team, welcome aboard!");
    addToList('icon_090@2x.png','September 30, 2015',"Miroslav and Ian are starting to attend MaRS Entrepreneurship 101 lectures");
    addToList('icon_0186@2x.png','September 1, 2015',"Work on the calendar project has started");
  };

  var updatesList = [];
  var addToList = function(img,date,text){
    var obj = {};
	obj.image = img;
	obj.date = date;
	obj.text = text;

    updatesList.push(obj);
  };

  var rednerList = function(ready){
    for(var key in updatesList){
      var obj = updatesList[key];
      var template = $('.updatesTemplate').html();
	  template = template.replace('{icon}',iconsPath+obj.image);
	  template = template.replace('{date}',obj.date);
	  template = template.replace('{text}',obj.text);
     $(placeholderSelector).append(template);
    }
    ready();
  };

  return {
      render:render
  };
})();
