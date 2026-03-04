/* Home!----------------------------*/
gsap.from(".name", {
	opacity: 0,
	x: 200,
	duration: 1.5,
	ease: "power3.out",
});

gsap.from(".aboutMe", {
	x: -200, 
	opacity: 0,
	ease: "back.out(1.7)",
	duration: 1.5,
});

gsap.from(".portfolio", {
	x: -200, 
	opacity: 0,
	ease: "back.out(1.7)",
	duration: 1.5,
});

gsap.from(".blog", {
	x: -200, 
	opacity: 0,
	ease: "back.out(1.7)",
	duration: 1.5,
});

/* Creating two timeline animations for the triangles, repeat -1 so that it loops and yoyo:true so it reverses and starts and reverses and starts and so on */
const tlOne = gsap.timeline({ repeat: -1, yoyo: true });

const tlTwo = gsap.timeline({ repeat: -1, yoyo: true });

tlOne.to(".animatedTrianglesTopLeft", {
  duration: 1,
  rotation: 10,
  ease: "none",
});

tlTwo.to(".animatedTrianglesBottomRight", {
	duration: 1,
	rotation: -80,
	ease: "none",

  });

/*PORTFOLIO! -----------------------*/

gsap.from(".displayPortfolio", {
	x: 150,
	duration: 1.5,
});

gsap.from(".portfolioText", {
	x: 150,
	duration: 1.5,
});

gsap.from(".bearPortfolio", {
	opacity: 0,
	x: -200,
	ease: "back.out(1.7)",
	duration: 1.5,
});

gsap.from(".websitesBtn", {
	x: -200, 
	opacity: 0,
	ease: "back.out(1.7)",
	duration: 1.5,
});

gsap.from(".codingBtn", {
	x: -200, 
	opacity: 0,
	ease: "back.out(1.7)",
	duration: 1.5,
});

gsap.from(".homeBtn", {
	x: -200, 
	opacity: 0,
	ease: "back.out(1.7)",
	duration: 1.5,
});

const tlPortfolio = gsap.timeline({ repeat: -1});

tlPortfolio.to(".squareDeco", {
	duration: 10,
	rotation: 360,
	ease: "none",
});

/*About Me! ------------------------- */

gsap.from(".bearAboutMe", {
	x: 100,
	duration: 1.5,
	ease: "power3.out",
});

gsap.from(".displayAboutMe", {
	x: 100,
	duration: 1.5,
	ease: "power3.out",
});

gsap.from(".homeBtnAboutMe", {
	x: -100, 
	opacity: 0,
	ease: "back.out(1.7)",
	duration: 1.5,
});

gsap.from(".aboutMeText", {
	x: 100,
	duration: 1.5,
	ease: "power3.out",
});

const tlStar = gsap.timeline({repeat: -1, yoyo: true})

tlStar.to(".star",{
	duration: 1,
	rotation: 30,
	scale: 1.5,
	ease: "none",
})
/*BLOG------------------------------------------*/
gsap.from(".bearBlog", {
	x: 100,
	duration: 1.5,
	ease: "power3.out",
});

gsap.from(".blogText", {
	x: 100,
	duration: 1.5,
	ease: "power3.out",
});

gsap.from(".displayBlog", {
	x: 100,
	duration: 1.5,
	ease: "power3.out",
});

gsap.from(".homeBtnBlog", {
	x: -100, 
	opacity: 0,
	ease: "back.out(1.7)",
	duration: 1.5,
});

const tlBear = gsap.timeline({repeat: -1, yoyo: true})

tlBear.to(".bearBlog",{
	duration: 1,
	rotation: 10,
	ease: "none",
});

//PORTFOLIO API---------------------------------
/* Created the API using Google Sheets and Ben Borgar's Opensheet found at "https://github.com/benborgers/opensheet?tab=readme-ov-file#readme" */
const websiteUrl = "https://opensheet.elk.sh/14kjixV_lRDfOaR1Fb7y-UJ1XynorW67g_BC5cWyaQis/Sheet1";


async function getData() {
    try {
	  // Fetch the data
      const response = await fetch(websiteUrl); 
	  // Convert the response to JSON
      const data = await response.json();

	  //Finding portfolioText ID
	  var portfolioText = document.querySelector(".portfolioText");

	  data.forEach(row => {
		//Creating grouping containers for each row of data
		const pairContainer = document.createElement("div"); 
		pairContainer.classList.add("pair-container");

		//Title into h2
        const title = document.createElement("h2");
        title.textContent = row.title;

		/* Image into img element */
        const img = document.createElement("img");
        img.src = row.image;

		/* Description into p element */
		const description = document.createElement("p");
		description.textContent = row.description;

		/* Importing the link as anchor tags */
		const link = document.createElement("a");
		// Set the URL from the API (row.url)
		link.href = row.link; 
  		link.target = "_blank";  
		 
		  /* Appending the elements  */
		  pairContainer.appendChild(title);
		  /* appending the link to the images  */
		  link.appendChild(img);
		  pairContainer.appendChild(description);
		  pairContainer.appendChild(link);
		  portfolioText.appendChild(pairContainer);
	  });

	}

	catch (error) {
	  /* catching any errors */
	  console.error("Error fetching data:", error); 
	}
  }
  
getData(); 


//BLOG API--------------------------------------
//This was an API to create blogs from Google Sheet
//Decided to implement it to the html directly as
//there was little benefit for it to be an API
//at this small of a scale.

/* const url = "https://opensheet.elk.sh/1Jj5-FZWIdUBaOzXZvAZLHd3YXSx1HDSQE_p_eiZWugU/Blog";

var blogRow1 = document.querySelector(".blogRow1");
var blogRow2 = document.querySelector(".blogRow2");

async function getData() {
    try {
      const response = await fetch(url);  // Fetch the data
      const data = await response.json(); // Convert the response to JSON


	data.forEach(row => {
        const title = document.createElement("h2");
        title.textContent = row.Title;

		const date = document.createElement("h3");
        date.textContent = row.Date;

		const text = document.createElement("p");
        text.textContent = row.Text;


        blogRow1.appendChild(title); 
        blogRow1.appendChild(date); 
        blogRow1.appendChild(text);   

		blogRow2.appendChild(title); 
        blogRow2.appendChild(date); 
        blogRow2.appendChild(text);   
	});

  }

  catch (error) {
	console.error("Error fetching data:", error); // Handle any errors
  }
}

getData(); */

