# EXPLORE IRELAND

This is an interactive Website containing basic information about certain parts of Ireland that attract a lot of Tourists. The site has 2 pages and a link to an external site. Both pages are divided into two main sections (one containing informtion about each County, and the other displaying the Map).

## UX

I aimed for simplicity and efficiency in this design to ensure the user(s) find(s) their way around the website with ease. A navigation bar<em>(dark)</em> conveniently fixed at the top, to take the user to each section of the webpage. A dark themed page beautifully blended in with a great picture of **Dublin City** at night, a _Dark mode Map_, and a _dark abstract background image_ filling the entire page. In mobile view the two sections are stacked (displayed in a Column), with the **Explore Ireland** and **Popular Hotels** sections in index.HTML and location.HTML, respectively, displayed before the MAP. On tablets and Laptops the two sections are displayed side by side (row).


## Features

#### The Navbar
##### Mobile
> Bootstrap Hamburger Menu that activates hidden elements, on click. Taken from [this](https://www.w3schools.com/bootstrap4/bootstrap_navbar.as) Bootstrap 4 example.
>>Jquery and Bootstrap scripts (in that order) required in your index.html file to enable collapse of navbar.
>Containing 4 links on the home page
>>>**HOME**
>
>>>**PLACES** 
>
>>>**MAP** 
>
>>>**HOTELS**
>
>>>Each link takes you to the section labeled above
>
>>**HOTELS** takes you to the second webpage containing a list of five hotels in each County.
>>>An additional link **BOOKINGS** appears on the **HOTELS** page, this link brings you to an external website, where users can book hotels/flights and/or compare prices of each destination.
>
>Smooth scrolling enabled on all devices for smoother navigation through the page.
>>Smooth scroll code taken from this [link](https://codepen.io/bradtraversy/pen/xBdyzr)>

##### Tablets and Laptops
>All links mentioned above displayed side by side centrally on the navbar. Navigation bar is fixed at the top, with each link taking you to its assigned section. 
>
>> Has all features mentioned above.

#### Maps

##### Rendering Google Maps using Gooogle APIs
>  <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" type="text/javascript"></script> added just before closing body tag in the html file.
>
>>> requested Api key here : https://developers.google.com/maps/documentation/javascript/get-api-key
>
>>replace "YOUR_API_KEY" with Key attained.
>
>>Followed a step by step example of how to write function to render maps from this [repo](https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/01-GoogleMaps/06-moving_the_code_into_its_own_script/assets/js/maps.js) Code Institute
>>> Including how to add Map Markers
>
>>>>I hard coded each County's lat and lng, quick google search of each County and Hotel.
>
>>>>> 5 markers on the **HOME** page's Map showing each County, and 25 markers to show hotels on the Map for **HOTELS** page.
>
>>>clicking on the number *e.g.* 5 markers on the map, expands the map to display the locations.
>
> Example on how to enable the _Dark mode_ was taken [here](https://developers.google.com/maps/documentation/javascript/styling)

### Features Left to Implement

- Map displaying nearby hotels, restaurants etc.
- Search bar
- Comments section
- Custom markers

## Technologies Used

1. HTML5
2. CSS3
3. Bootstrap (https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js)
4. JSON
5. JavaScript

## Testing

Extensive testing was done on several devices, and overall the outcome was satisfactory.
The navigation bar in both mobile, tablets and laptops displayed well, no issues with the responsiveness of the width and height. The transition from individual links to the Hamburger menu from large to smaller screen sizes is near flawless. The rest of the page responds well in both large screens and smaller ones. Initially had an issue with the Map on devices with a max-width of 767px, but quickly resolved it with a media query.

Some of the devices the tests were done on:

###### Mobile phones
- OnePlus 3t
- OnePlus 6t
- Samsung s7
- Samsung s9
- Iphone 6
- Iphone 6s
- Iphone 7

###### Laptops

- HP i5
- HP i3
-  Apple MacBook air (2018)

## Deployment

This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://chizkay.github.io/trial-milestone-project/ into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.

## Credits

Gained a better understanding  of the maps from this Youtube [Tutorial](https://www.youtube.com/watch?v=Zxf1mnP5zcw&t=709s)


### Content

The Information about the Counties was from a quick Google search, wikipedia was the result I used. Selection of the Counties was based on personal experience, really enjoyed my time in each place. Currently live in Dublin. :)

### Media

>Background image was taken from an _Abstract background images_ google search.
>
>The Image below the navbar was taken [from](https://www.google.com/search?q=ireland+at+night+images&rlz=1C1CHBF_enIE830IE830&sxsrf=ACYBGNRR9t8-WduZmLNPXCxIvnqPAXt28A:1573686811049&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjnzfCaqOjlAhX9QxUIHTl5AyMQ_AUIEigB&biw=1282&bih=577)


### Acknowledgements

I did not really take inspiration from a specific place. I envisioned the page and tried to just base it off my own style. Credit to my mentor, **Sandeep Aggarwal** for suggesting JSON as opposed to pure Html. For my web layout.
