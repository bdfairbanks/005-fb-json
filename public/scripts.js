function addclickers(input, functionname){
holder = document.getElementsByClassName("input");
			for (var i=0; i<holder.length; i++)
			holder[i].addEventListener("click", functionname);
		return holder
}
window.addEventListener("load", getData);
function getData(){
	var xhr = new XMLHttpRequest();
	xhr.open ("GET", "http://localhost:4567/json");
	xhr.onload = function(){
		var jData = JSON.parse(xhr.responseText);
		debugger
		document.getElementsByClassName("person")[0].innerHTML = jData.post.post_main.name
		document.getElementsByClassName("post__body")[0].firstElementChild.innerText = jData.post.post_main.body
		document.getElementsByClassName("mainLikes")[0].innerHTML = jData.post.post_main.stats.likes
		document.getElementsByClassName("post__info")[0].lastElementChild.innerText = jData.post.post_main.stats.comments

		document.getElementsByClassName("person")[4].innerHTML = jData.post.post_comments[0].name
		document.getElementsByClassName("media__info")[1].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[0].body
		document.getElementsByClassName("comment__info")[0].lastElementChild.innerText = jData.post.post_comments[0].likes
		document.getElementsByClassName("reply")[0].innerText = jData.post.post_comments[0].replies

		document.getElementsByClassName("person")[5].innerHTML = jData.post.post_comments[0].replys_comments[0].name
		document.getElementsByClassName("media__info")[2].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[0].replys_comments[0].body
		document.getElementsByClassName("comment__info")[1].lastElementChild.innerText = jData.post.post_comments[0].replys_comments[0].likes
		document.getElementsByClassName("reply")[1].innerText = jData.post.post_comments[0].replys_comments[0].replies

		document.getElementsByClassName("person")[6].innerHTML = jData.post.post_comments[0].replys_comments[1].name
		document.getElementsByClassName("media__info")[3].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[0].replys_comments[1].body
		document.getElementsByClassName("comment__info")[2].lastElementChild.innerText = jData.post.post_comments[0].replys_comments[1].likes
		document.getElementsByClassName("reply")[2].innerText = jData.post.post_comments[0].replys_comments[1].replies
	
		document.getElementsByClassName("person")[7].innerHTML = jData.post.post_comments[0].replys_comments[2].name
		document.getElementsByClassName("media__info")[4].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[0].replys_comments[2].body
		document.getElementsByClassName("comment__info")[3].lastElementChild.innerText = jData.post.post_comments[0].replys_comments[2].likes
		document.getElementsByClassName("reply")[3].innerText = jData.post.post_comments[0].replys_comments[2].replies

		document.getElementsByClassName("person")[8].innerHTML = jData.post.post_comments[0].replys_comments[2].replys_comments[0].name
		document.getElementsByClassName("media__info")[5].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[0].replys_comments[2].replys_comments[0].body
		document.getElementsByClassName("comment__info")[4].lastElementChild.innerText = jData.post.post_comments[0].replys_comments[2].replys_comments[0].likes
		document.getElementsByClassName("reply")[4].innerText = jData.post.post_comments[0].replys_comments[2].replys_comments[0].replies

		document.getElementsByClassName("person")[9].innerHTML = jData.post.post_comments[0].replys_comments[2].replys_comments[1].name
		document.getElementsByClassName("media__info")[6].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[0].replys_comments[2].replys_comments[1].body
		document.getElementsByClassName("comment__info")[5].lastElementChild.innerText = jData.post.post_comments[0].replys_comments[2].replys_comments[1].likes
		document.getElementsByClassName("reply")[5].innerText = jData.post.post_comments[0].replys_comments[2].replys_comments[1].replies
		
		document.getElementsByClassName("person")[10].innerHTML = jData.post.post_comments[0].replys_comments[3].name
		document.getElementsByClassName("media__info")[8].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[0].replys_comments[3].body
		document.getElementsByClassName("comment__info")[6].lastElementChild.innerText = jData.post.post_comments[0].replys_comments[3].likes
		document.getElementsByClassName("reply")[6].innerText = jData.post.post_comments[0].replys_comments[3].replies

		document.getElementsByClassName("person")[11].innerHTML = jData.post.post_comments[1].name
		document.getElementsByClassName("media__info")[10].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[1].body
		document.getElementsByClassName("comment__info")[7].lastElementChild.innerText = jData.post.post_comments[1].likes
		document.getElementsByClassName("reply")[7].innerText = jData.post.post_comments[1].replies

		document.getElementsByClassName("person")[12].innerHTML = jData.post.post_comments[2].name
		document.getElementsByClassName("media__info")[12].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[2].body
		document.getElementsByClassName("comment__info")[8].lastElementChild.innerText = jData.post.post_comments[2].likes
		document.getElementsByClassName("reply")[8].innerText = jData.post.post_comments[2].replies
	
		document.getElementsByClassName("person")[13].innerHTML = jData.post.post_comments[2].replys_comments[0].name
		document.getElementsByClassName("media__info")[13].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[2].replys_comments[0].body
		document.getElementsByClassName("comment__info")[9].lastElementChild.innerText = jData.post.post_comments[2].replys_comments[0].likes
		document.getElementsByClassName("reply")[9].innerText = jData.post.post_comments[2].replys_comments[0].replies

		document.getElementsByClassName("person")[14].innerHTML = jData.post.post_comments[2].replys_comments[1].name
		document.getElementsByClassName("media__info")[14].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[2].replys_comments[1].body
		document.getElementsByClassName("comment__info")[10].lastElementChild.innerText = jData.post.post_comments[2].replys_comments[1].likes
		document.getElementsByClassName("reply")[10].innerText = jData.post.post_comments[2].replys_comments[1].replies
	
		document.getElementsByClassName("person")[15].innerHTML = jData.post.post_comments[2].replys_comments[1].replys_comments[0].name
		document.getElementsByClassName("media__info")[15].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[2].replys_comments[1].replys_comments[0].body
		document.getElementsByClassName("comment__info")[11].lastElementChild.innerText = jData.post.post_comments[2].replys_comments[1].replys_comments[0].likes
		document.getElementsByClassName("reply")[11].innerText = jData.post.post_comments[2].replys_comments[1].replys_comments[0].replies

		document.getElementsByClassName("person")[16].innerHTML = jData.post.post_comments[2].replys_comments[1].replys_comments[1].name
		document.getElementsByClassName("media__info")[16].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[2].replys_comments[1].replys_comments[1].body
		document.getElementsByClassName("comment__info")[12].lastElementChild.innerText = jData.post.post_comments[2].replys_comments[1].replys_comments[1].likes
		document.getElementsByClassName("reply")[12].innerText = jData.post.post_comments[2].replys_comments[1].replys_comments[1].replies

		document.getElementsByClassName("person")[17].innerHTML = jData.post.post_comments[2].replys_comments[1].replys_comments[2].name
		document.getElementsByClassName("media__info")[17].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[2].replys_comments[1].replys_comments[2].body
		document.getElementsByClassName("comment__info")[13].lastElementChild.innerText = jData.post.post_comments[2].replys_comments[1].replys_comments[2].likes
		document.getElementsByClassName("reply")[13].innerText = jData.post.post_comments[2].replys_comments[1].replys_comments[2].replies
		
		document.getElementsByClassName("person")[18].innerHTML = jData.post.post_comments[2].replys_comments[2].name
		document.getElementsByClassName("media__info")[19].firstElementChild.nextSibling.nodeValue = jData.post.post_comments[2].replys_comments[2].body
		document.getElementsByClassName("comment__info")[14].lastElementChild.innerText = jData.post.post_comments[2].replys_comments[2].likes
		document.getElementsByClassName("reply")[14].innerText = jData.post.post_comments[2].replys_comments[2].replies
	}

xhr.send(null);
}

window.addEventListener("load", repliesFunctionality);

function repliesFunctionality(){
	function attention(){
		that = this.parentElement
		theOther = that.nextElementSibling 
		if (theOther.style.display == "none"){
			theOther.style.display = "block"
		}
		else if (theOther.style.display == "block"){
			theOther.style.display = "none"
		}
	}
	

	var gratify = document.getElementsByClassName("reply");
	for (var i=0; i<gratify.length; i++)
	gratify[i].addEventListener("click", attention)

}

window.addEventListener("load", likes);
	function likes(){
		function test(){
		likeField =this.nextElementSibling.nextElementSibling.innerHTML;
		numString= likeField[0];
		likeField =likeField.substring(1)
		numString =Number(numString);
		if (this.innerHTML =="Like"){
			this.innerHTML = "Disdain"
			numString = numString+1;
			finished = numString.toString().concat(likeField);
			this.nextElementSibling.nextElementSibling.innerHTML = finished;
		}
		else{
			this.innerHTML = "Like";
			numString = numString-1;
			finished =numString.toString().concat(likeField);
			this.nextElementSibling.nextElementSibling.innerHTML = finished;

		}
	}
	var pray = document.getElementsByClassName("prayer");
	for (var i=0; i<pray.length; i++)
		pray[i].addEventListener("click", test)
}

window.addEventListener("load", mainLikes);
	function mainLikes(){
		function inbueWorth(){

		likeField =document.getElementsByClassName('mainLikes')[0].innerHTML;
		numString= likeField.slice(0, 2);
		likeField =likeField.slice(2);
		numString =Number(numString);
		if (this.innerHTML =="Like"){
			this.innerHTML = "Disdain"
			numString = numString+1;
			finished = numString.toString().concat(likeField);
			document.getElementsByClassName('mainLikes')[0].innerHTML = finished;
		}
		else{
			this.innerHTML = "Like";
			numString = numString-1;
			finished =numString.toString().concat(likeField);
			document.getElementsByClassName('mainLikes')[0].innerHTML = finished;

		}
	}
	var mainPray = document.getElementsByClassName("action--like")[0];
		mainPray.addEventListener("click", inbueWorth)
}

window.addEventListener("load", cursormove)
	function cursormove(){
		function slide(){
		that = document.getElementsByClassName("lastBox")[0].focus();
			var move = document.getElementsByClassName("action--comment")[0]
			move.addEventListener("click", slide)
		}
		var move = document.getElementsByClassName("action--comment")[0]
			move.addEventListener("click", slide)

	}

window.addEventListener("load", comment)
	function comment(){
		function say(){
			eMouthWords = this.previousElementSibling.value
			if (eMouthWords == ""){
				var modal = document.getElementsByClassName("modal")[0]
				modal.style.display = "block"
				document.getElementsByClassName("modal__title")[0].innerHTML = "FB COP"
				var text= document.getElementsByClassName("post__body")[0].innerHTML
				document.getElementsByClassName("modal__body")[0].innerHTML = "Honnered sir, my village in Nigeria...."
				event.preventDefault()
			}
			else {
				if (this.previousElementSibling.className == "lastBox") {
					postComments =this.parentElement.parentElement.parentElement.previousElementSibling
					post = document.createElement("div");
					post.className ="comment media";
					imageHolder = document.createElement("img");
					imageHolder.src = "images/user.png";
					imageHolder.className ="profilePhoto";
					post.appendChild(imageHolder);

					inPostDivOne = document.createElement("div");
					inPostDivOne.className="media__info"

					personBox =document.createElement("a");
					personBox.href ="#";
					myName = document.createTextNode("Ben ");
					personBox.appendChild(myName);
					personBox.className ="person";

					text = document.createTextNode(eMouthWords);

					commentInfo = document.createElement("div");
					commentInfo.className= "comment__info";
					
					prayerBox =document.createElement("a");
					prayerBox.href ="#";
					prayer1 = document.createTextNode("Like");
					prayerBox.appendChild(prayer1);
					prayerBox.className ="prayer";

					replyBox =document.createElement("a");
					replyBox.href ="#";
					reply1 = document.createTextNode("Reply");
					replyBox.appendChild(reply1);
					replyBox.className ="reply";

					time =document.createTextNode("Yesterday at 10:00am");

					inPostDivOne.appendChild(personBox);
					inPostDivOne.appendChild(text);
					
					commentInfo.appendChild(prayerBox);
					commentInfo.appendChild(replyBox);
					commentInfo.appendChild(time);

					inPostDivOne.appendChild(commentInfo)

					post.appendChild(inPostDivOne);
					postComments.appendChild(post);
					comments = this.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML
					numString=comments[0];
					comments=comments.substring(1);
					numString =Number(numString);
					numString = numString+1;
					finished = numString.toString().concat(comments);
					this.parentElement.parentElement.parentElement.parentElement.firstElementChild.lastElementChild.innerHTML = finished	
					this.previousElementSibling.value = ""
					event.preventDefault()
				}
				else {
					postComments =this.parentElement.parentElement.parentElement.parentElement
					post = document.createElement("div");
					post.className ="comment media";
					imageHolder = document.createElement("img");
					imageHolder.src = "images/user.png";
					imageHolder.className ="profilePhoto";
					post.appendChild(imageHolder);
					inPostDivOne = document.createElement("div");
					inPostDivOne.className="media__info"

					personBox =document.createElement("a");
					personBox.href ="#";
					myName = document.createTextNode("Ben ");
					personBox.appendChild(myName);
					personBox.className ="person";

					text = document.createTextNode(eMouthWords);

					commentInfo = document.createElement("div");
					commentInfo.className= "comment__info";
					
					prayerBox =document.createElement("a");
					prayerBox.href ="#";
					prayer1 = document.createTextNode("Like");
					prayerBox.appendChild(prayer1);
					prayerBox.className ="prayer";

					replyBox =document.createElement("a");
					replyBox.href ="#";
					reply1 = document.createTextNode("Reply");
					replyBox.appendChild(reply1);
					replyBox.className ="reply";

					time =document.createTextNode("Yesterday at 10:00am");

					inPostDivOne.appendChild(personBox);
					inPostDivOne.appendChild(text);
					
					commentInfo.appendChild(prayerBox);
					commentInfo.appendChild(replyBox);
					commentInfo.appendChild(time);

					inPostDivOne.appendChild(commentInfo)

					post.appendChild(inPostDivOne);
					

					comments = this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerHTML;
					if (comments == "Reply"){
						this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = "1 Reply";
						this.previousElementSibling.value =""
						event.preventDefault()
						postComments.insertBefore(post, postComments.childNodes[0]);
					}
					else if (comments == "1 Reply"){
						this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = "2 Replies";
						this.previousElementSibling.value =""
						event.preventDefault()
						postComments.insertBefore(post, postComments.childNodes[1]);
					}
					else{
						debugger
						numString=comments[0];
						comments=comments.substring(1);
						numString =Number(numString);

						insertAt = numString *2;
						numString = numString+1;
						postComments.insertBefore(post, postComments.childNodes[insertAt]);
						debugger
						finished = numString.toString().concat(comments);
						this.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.innerHTML = finished;
						this.previousElementSibling.value =""
						event.preventDefault()
					}
				}			
			}
		}

		var interject = document.getElementsByClassName("submit");
		for (var i=0; i<interject.length; i++)
			interject[i].addEventListener("click", say)
		var profile = document.getElementsByClassName("person");
		for (var i=0; i<profile.length; i++)
			profile[i].addEventListener("click", name)

}

window.addEventListener("load", name)
	function name(){
		function nomDePleur(){
			if (this.innerHTML == "Ben "){
				var modal = document.getElementsByClassName("modal")[0];
				modal.style.display = "block";
				document.getElementsByClassName("modal__title")[0].innerHTML = this.innerHTML;
				var text= "99999999999999999999999999999999999999999999999999999999?";
				document.getElementsByClassName("modal__body")[0].innerHTML = text;
			}
			else {
				var modal = document.getElementsByClassName("modal")[0]
				modal.style.display = "block"
				document.getElementsByClassName("modal__title")[0].innerHTML = this.innerHTML
				var text= "friends: 0. Who needs em?"
				document.getElementsByClassName("modal__body")[0].innerHTML = text
			}
		}
		var profile = document.getElementsByClassName("person");
		for (var i=0; i<profile.length; i++)
			profile[i].addEventListener("click", nomDePleur)
	}

window.addEventListener("load", box)
	function box(){
		function close(){
			var modal = document.getElementsByClassName("modal")[0]
			modal.style.display = "none"
			

		}
		var profile = document.getElementsByClassName("modal__close")[0];
			profile.addEventListener("click", close)
	}

window.addEventListener("load", share)
	function share(){
		function diseminate(){
			var modal = document.getElementsByClassName("modal")[0]
			modal.style.display = "block"
			var spread = "Share "
			var spread2 = "'s post! (just ask yourself if it's worth it....)"
			var spread3= document.getElementsByClassName("person")[0].innerHTML
			document.getElementsByClassName("modal__title")[0].innerHTML = spread + spread3 +spread2
			var text= document.getElementsByClassName("post__body")[0].innerHTML
			document.getElementsByClassName("modal__body")[0].innerHTML = text
			


		}
		var spout = document.getElementsByClassName("action--share")[0];
			spout.addEventListener("click", diseminate)
}

window.onclick  = function(event) {
	var modal = document.getElementsByClassName("modal")[0]
	if (event.target == modal){
		modal.style.display = "none";

	}
}