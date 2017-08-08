/* Customized Javascript
 * File:	 custom.js
 * Author:   Matthew Testerman
 * Created:  11-06-16
 * Modified: 11-06-16
 * Description:
 * Makes custom changes using javascript
*/

/*Driver Method*/
function main(){	
 setFooter();
 
 $( window ).resize(function() {
  setFooter();
 });
}


function setFooter()
{
	var spacer = '0px';
	var windowHeight = $(window).height();
	var footerHeight = $('#footer').height();
	var navBarHeight = $('#topNav').height();
	var mainHeight = $('main').height();	
	spacer = windowHeight - (footerHeight + mainHeight);
	$('#fillSpace').css('height',spacer);
	
}

/*Sub Methods */