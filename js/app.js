console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth

	const middleEarth = document.createElement("section")
	middleEarth.setAttribute("id", "middle-earth")

	// 2. use a for loop to iterate over the lands array that does the following:

	for (let i = 0; i < lands.length; i++) {
		//console.log(land)

		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle = document.createElement("article")
		//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.setAttribute("id", lands[i])
		//   2c. includes an h1 with the name of the land inside each land article
		const landTitle = document.createElement("h1")
		//   2d. appends each land to the middle-earth section
		landTitle.innerHTML = lands[i]
		landArticle.appendChild(landTitle)
		middleEarth.appendChild(landArticle)
	}
	// 3. append the section to the body of the DOM.
	document.body.appendChild(middleEarth)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	const shire = document.getElementById("The-Shire")

	// display an `unordered list` of hobbits in the shire

	const hobbitList = document.createElement("ul")
	hobbitList.setAttribute("id", "Hobbits")
	shire.appendChild(hobbitList)


	// give each hobbit a class of `hobbit`
	hobbits.forEach((hobbit) => {
		const hobbitLi = document.createElement("li")
		hobbitLi.classList.add("hobbit")
		hobbitLi.innerHTML = hobbit
		hobbitList.appendChild(hobbitLi)
	})
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
	
	//console.log(shire)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	// give the div a class of `'magic-imbued-jewelry'`
	theRing.classList.add('magic-imbued-jewelry')
	// add the ring as a child of `Frodo`
	frodo = document.getElementsByClassName('hobbit')[0]
	frodo.appendChild(theRing)
	const shire = document.getElementById('The-Shire')
	
	//console.log(shire)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	
	const mordor = document.getElementById('Mordor')

	// display an unordered list of baddies in Mordor
	const baddiesList = document.createElement('ul')

	// give each of the baddies a class of "baddy"
	baddiesList.classList.add('baddy')
	// remember to append them to Mordor
	mordor.appendChild(baddiesList)
	baddies.forEach((baddie) => {
		const baddieLi = document.createElement('li')
		baddieLi.classList.add('baddies')
		baddieLi.innerHTML = baddie
		baddiesList.appendChild(baddieLi)
	})
	console.log(mordor)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag

	const aside = document.createElement("aside")
	aside.setAttribute("id", "buddies")

	// put an `unordered list` of the `'buddies'` in the aside

	const buddiesUl = document.createElement("ul")
	buddiesUl.classList.add("buddies")
//	buddiesUl.setAttribute("id", "buddiesUl")

	buddies.forEach( buddy => {
		const buddiesLi = document.createElement("li")
		buddiesLi.classList.add("buddy")
		buddiesLi.innerHTML = buddy
		buddiesUl.appendChild(buddiesLi) 
	})
	aside.appendChild(buddiesUl)

	// insert your aside as a child element of `rivendell`
	const rivendell = document.getElementById("Rivendell")
	//console.log(rivendell)
	rivendell.appendChild(aside)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const hobbitList = document.getElementById('Hobbits')
	const rivendell = document.getElementById('Rivendell')
	rivendell.appendChild(hobbitList)
	
	//console.log(rivendell)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	const rivendell = document.getElementById("Rivendell")
	shireBuddies = document.getElementsByClassName("buddy")
	shireBuddies[3].innerHTML = "Aragorn"
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const fellowShip = document.createElement('div')
	fellowShip.setAttribute('id', 'fellow-ship')
	const rivendell = document.getElementById('Rivendell')
	rivendell.appendChild(fellowShip)
	//console.log(fellowship)

	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	fellowshipHobbits = document.getElementsByClassName('hobbit')
	fellowshipBuddies = document.getElementsByClassName('buddy')

	//this looks at both lists (hobbits and buddies) under Rivendell instead of directly from the array
	//it is done this way because the array doesn't have the name update from Strider to Aragorn
	const rivendellLi = document
		.getElementById('Rivendell')
		.querySelectorAll('li')
	rivendellLi.forEach((li) => {
		fellowShip.appendChild(li)
		//this is the alert
		alert(`${li.innerText} has joined your party!`)
	})
	
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const fellowShip = document.getElementById('Rivendell')
	fellowShipBuddies = document.getElementsByClassName('buddy')
	fellowShipBuddies[0].innerHTML = 'Gandalf the White'
	
	// apply the following style to the element, make the // background 'white', add a grey border
	
	fellowShipBuddies[0].style.background = 'white'
	fellowShipBuddies[0].style.border = '5px grey solid'
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert("The Horn of Gondor has been blown!")

	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	const fellowShip = document.getElementById('fellow-ship')
	fellowShip.removeChild(document.getElementsByClassName('buddy')[4])
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const frodo = document.getElementsByClassName('hobbit')[0]
	const sam = document.getElementsByClassName("hobbit")[1]
	const mordorList = document.getElementById('Mordor').querySelector('ul')
	mordorList.appendChild(frodo)
	mordorList.appendChild(sam)
	
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mordor = document.getElementById("Mordor")
	const mountDoom = document.createElement("div")
	mountDoom.setAttribute("id", "mount-doom")
	mordor.appendChild(mountDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div')
	const mordor = document.getElementById('Mordor')
	gollum.setAttribute('id', 'gollum')
	mordor.appendChild(gollum)
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	gollum.appendChild(document.getElementById('the-ring'))
	// Move Gollum into Mount Doom
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.appendChild(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const mountDoom = document.getElementById('mount-doom')
	const gollum = document.getElementById('gollum')
	mountDoom.removeChild(gollum)
	// Move all the `hobbits` back to `the shire`
	const shire = document.getElementById('The-Shire')
	const hobbitList = document.createElement('ul')
	hobbitList.setAttribute('id', 'Hobbits')
	shire.appendChild(hobbitList)
	
	hobbitList.appendChild(document.getElementsByClassName('hobbit')[0])
	hobbitList.appendChild(document.getElementsByClassName('hobbit')[1])
	hobbitList.appendChild(document.getElementsByClassName('hobbit')[2])
	hobbitList.appendChild(document.getElementsByClassName('hobbit')[3])
	
	
	//fellowShipHobbits = document.getElementsByClassName('hobbit')
	//fellowShipHobbits.forEach(hobbit =>{
	//	hobbitList.appendChild(hobbit)
	//})
	
	//const frodo = document.getElementsByClassName('hobbit')[0]
	//const sam = document.getElementsByClassName('hobbit')[1]
	//const shireList = document.getElementById('The-Shire').querySelector('ul')
	//mordorList.appendChild(frodo)
	//mordorList.appendChild(sam)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
