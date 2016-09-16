## Facebook Video aggregator ##
Web application that displays all the videos (public) uploaded by a page on facebook. The objective of the project was to gain insights and be comfortable using Facebook [Graph-API](https://developers.facebook.com/docs/graph-api). 

I created this application out of a need to browse through videos of [TASTY](https://www.facebook.com/buzzfeedtasty/videos/). I was all hungry and I realized there was an excess of content which I didn't want viz. comments made by others, the long time it took to populate the page etc.

Thus, I thought of creating an application that will show all the videos at my page without having to visit it in facebook.  


#### Project Description & Development ####
In order to create a web application that involves using facebook Graph-API, one must have an application already running. There must be an existing server that should be deploying resources to it's client. 

The entire project was developed in 7 days and I had no prior experience developing such application(s). This entire project was developed because I hustled and I took steps which you may think is counterproductive, but at that time it was a life-saver for me. 

So, I had **three** issues:

1. Having an existing application:
If there wasn't an existing application, then facebook login button will not be rendered. The static pages in my local systems wouldn't even continue to the main implementation.
**My Soln**: I pushed my repo to _srajappa.github.io_ repository which was a server that rendered the *index.html* page. Things worked, but the only downside was I had to push code for every change I made. *I know ! things could have done little better. After taking inputs from experts and friends I found out that I could use mockservers (so that I don't have to push to the repo) or a dev environment (to ensure facebook Graph-API to run) or a data stubs (to contain all the facebook Graph-API responses to facilitate the operations). The thing was I got this input quite late, when I was about to finish developing the application. So, next time I will definitely put this into use.*

2. Tweaking the Graph-API calls:  
I thank the developers at Stackoverflow and my friends helped me a ton understanding the Graph-API calls. It was a tedious task understanding the calls, but once I understood it all was easy. 

3. UI-related issues:
I used Modal bootstraping to load the facebook login button. As Facebook Graph-API restricts only 25 videos per request, I only loaded 25 videos initially. I also loaded new videos whenever the scrollable event fired and it reached the bottom of the page. *I wish to improve this application more by using templating to load the next 25 videos. Templating will help load the content in less time compared to the current technique.*


#### Running the application ####
Clone this repo (or your own fork!) to your **home** directory (`/Users/username`).
```
$ cd ~
$ https://github.com/srajappa/facebookPageVideoCatalogue.git
```
Change into the directory and then run the myApp.
```
$ cd face
$ ./myApp
```

#### Future updates ####
I have some plans to update the repo by adding new features like Templating and enable users to add page that they want to render. Stay tuned !! I will also be involved in improving the way I develop such applications. :sunny:

#### Contributing ####
How did I present ? How did I code ? Any feedback ? Let me know [@cruiousCOCO](http://twitter.com/cruiousCOCO)



![alt tag](https://lh3.googleusercontent.com/uKlr21TXOLVxLNKFErDOZCrUg2aOfeWJqifD4mLbdV1bhmugoZmkVRJebd8YrYXW9hYj9qSnlrAGJIy-sy9i3xaBbrOpUNlQ8aizbPCoZ7jvscIpKzcX0VZSwoU-jNzBZRRmQ2NptUvGm5Z04DXvs5RC7VOUy_Zxfz0mjxfc5bv-Idep6_NhupOuqcjKIZ-kXQCmnXsGNEQ6eKTL2kiv2eo56yJze_xRIh0Kk3XrXVwMonBDNK4pf70FBvp4vqgYAVeG3gv4XbW9fQoMxQds78VwfuTjTKHK_xftojxobx6SuZSNch92sXXSSJNPrFUEgX5K76Kzs0qwHInBxSAYGniFfIgMyVB6idr4zR9RA3BFRqnhstxWtueBF3Q6fyjh47SHDKVQUJXHyFZQEwR3Vw3RgYxPMhcQXusBON23hMSIaRxj254sGB-BBYusGqI0Ed2N5s_FPCuX-ika-B6zmMXG-AI2MMCgJcEaftm6C5KFk9K2mnwm-wtY6QVcJIj7QLidGT89ZLoMw2zLOKWi-BO5YgbIDm3_yW7UFYFrdMWn5Yia4hs5zIY2ZSDRHaGCOXTmtCXEYHSuD-5GHfRn4r6IoWcMYuLCO_34WiLMGSQDITszZw=w1855-h984-no)



![alt tag](https://lh3.googleusercontent.com/7qJvhW_9P29PUTdoPXkeGdMnf0_lWrY0gza0UA9Mc86QmShsMfjBC13odt2x17o0f1l-y0UXexoquUNe5tvwZ1m5AwpO7dNYJ3VH5qjGOvfP4ylQzcNfRu7_OFo365FeLnWferCVU8zcy9h7Io3fOrePtfMbbmRacImfB6YvokGEymQ7-gL1E7pCFLMBIxzoCRAqvA5yQoZGbFRunlCz6rxRF9ONqmw81Czsp9GdoFYET2ILvehBNxlkx3Iv0TOrjBGBTustMTGd7XwBBHrtAa8otAy7R7eoV8iw0SMqFtAPR18WnOmdiq3KJRIS_ZRsoZ7_SFlknnyBUL_t9xE3AOs52zWngDky0j-3Yqks0piLr6Y1X45P-9YMxJ6LefiHOndLWchV8Ft-f0EnZZ8oCfzIF4cmGqiO1L-5YGqSxmd-z8yCailhHvlfc9JHn6nBD2mnIQA2WrCmUGBgdTgvAFOuiqjUO1DnExhXWcKB00F883jWdznt3Q9nvoEQ9FyRGrW7pF9dqaI8GUZqSxVKS91j6Ufs3iS0QWEmkN4uYDN1McjoQ_8mVuEsTd_pF6uD2gGU3_k04MBo5lSYjPCH0AEpbWuHkzYgS2vaR3o1JiKYXjUBCQ=w1840-h990-no)

