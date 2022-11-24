function calculate() {
	let sum = document.getElementById('sum').value
	let tip = document.getElementById('tip').value
	let numberOfFriends = document.getElementById('numberOfFriends').value
	document.getElementById('result').innerHTML =
		(parseInt(sum) + parseFloat(tip) * parseInt(sum)) / parseInt(numberOfFriends)
	let hideForm = document.getElementById('showSum')
	hideForm.classList.toggle('hide')
}
