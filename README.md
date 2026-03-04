 ____            _    __       _ _        __        __   _         _ _       
|  _ \ ___  _ __| |_ / _| ___ | (_) ___   \ \      / /__| |__  ___(_) |_ ___ 
| |_) / _ \| '__| __| |_ / _ \| | |/ _ \   \ \ /\ / / _ \ '_ \/ __| | __/ _ \
|  __/ (_) | |  | |_|  _| (_) | | | (_) |   \ V  V /  __/ |_) \__ \ | ||  __/
|_|   \___/|_|   \__|_|  \___/|_|_|\___/     \_/\_/ \___|_.__/|___/_|\__\___|

For my personal project I have decided to create a website which displays a portfolio page for my webistes, an about me page that introduces me and my work and a blog where I write about pop culture refernces and subjects that have interested me recently!

Requirements:

Browser that supports GSAP
How to operae:

Download the file from ["https://git.arts.ac.uk/23008862/Portfolio"]
Open index.html
Or head to ["https://cci.arts.ac.uk/~elowen/Personal-project/"]
Design process:

I began by deciding on a general colour pallette and what design inspirations I wanted to go for. I scouerd Pintrests boards high and low for guidence and landed upon a late 90s - early 2000's look, in particular the Xbox website circa 2007 and a blue and green palette. Web 1 web design interested me as they tended to be maximalist in their design. I believe this is the case as the World Wide Web was still a relatively new concept so there had not been much guidance on the pillars of web design, this lead to people taking unique creative liberties when designing webistes.

I created a moodboard and mock ups of different designs on Figma ["https://www.figma.com/design/CasTl7l87bWoubx9z2FVUu/Web-dev-personal-ideas?node-id=0-1&t=QS08GUUnVG5h7rJo-1"] where I decided on my final design, you can also view the websites evolution on this Figma. Unfortunately, when I implemented the design I realised I didnt like the design full screen and zoomed in. Therefore I created a new website design focusing on my growing passion for 3D modelling that looked attractive zoomed in. Furthermore I salvaged the blue and green colour palette and added pinks and reds, opposing colours, to add visual depth to the website. All of the models were created on Blender myself.

Challenges:

Creating and using my own API proven to be a great challange. Customising the elements after appending them intially meant I would specify data only based on their element tags which lead to many design problems. After reasearching all the different ways CSS can specify an element I found that using ".name:nth-child(5)" can bring the specification I needed to draft my designs with ease.

Another challenge I encountered was using GSAP timelines to achieve a bouncy effect for my triangle decorations in the home page. At first I tried adding reverse at the end but that didn't achieve the animation I hoped for, after looking through the GSAP documentation I found "yoyo = true" can solve my issue, paired with "repeat = -1" created the perfectly bouncy element that suited the website.

Improvements:

To improve this project, I would like to make my website accessible for bigger screens such as 2k and 4k monitors. Unfortunately I do not have access to a monitor like this myself which makes the task difficult but would be a nice addition considering the popularity of these larger monitors.
