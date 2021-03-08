## Weather Dashboard

Hi! My name is Jason Smith and this is my weather dashboard app!

# ![Site Screen Shot](/assets/images/screenshot.png)

## About the project
As an avid skier/mountain biker I am always looking at the weather in different locations to see where will be good to ride. So I made a weather dashboard app that I can use to search through different cities! The user simply has to enter the name of a city they want to look up and the app will give them the current weather including: an icon of the current conditions, temperature, humidity, wind speed and uv index. The app also shows the 5-day forecast for that location as well.

This project is built using mostly HTML, Jquery, Moment, Bootstrap and a touch of CSS. I think I enjoyed this project the most out of all of my front-end development projects, I finally saw how all the puzzle pieces fit together and was able to build this site with minimal googling haha.

But that is not to say I didn't find some useful tips whenever I got stuck. The first tip I found was while trying to generate the 5-day forecast. I had originally wrote them all out in HTML/Bootstrap to dial in the code but I wanted to create the card elements using DOM manipulation. So using my for loop I was ready to change the text contents of my card container to generate the cards for the forecast but having the whole code segment typed out in one line annoyed the crap out of me. Luckily I found out about the \, this guy let me create a string over multiple lines so I could have my entire code segment spaced and indented exactly the way I wanted. Super cool.

I guess DOM manipulation was where I struggled because my second issue was in that same vein. Getting the search history card stack to prepend a new list element was an easy task but I found out the hard way that you cannot click on an appended element by calling out its class or id. Again google came to the rescue and I found out that I needed to call the document element first then using the on function I could designate an event and a child element to track for that event. I will hopefully remember that when I use DOM manipulation again.

***

The weather dashboard has been published at the following URL:  
[Weather Dashboard](https://jasonpsmith180.github.io/weather-dashboard/)

***NOTE** I removed my API keys from the repository for privacy/security so in order for the site to function go to https://openweathermap.org/ and create an account to get an API key. Then insert it into the APIkey variable at the top of the script file.

## Credits
[Jason Smith](https://github.com/Jasonpsmith180)

## Shoutouts
University of Utah  
Trilogy Education Services  
For teaching me web development! 
