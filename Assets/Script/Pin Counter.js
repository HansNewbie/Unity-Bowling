private var counter = 0;

function OnTriggerExit (collision : Collider) {
	if (collision.gameObject.name == "Pin") {
		counter++;
	}
}

function getCounter() {
	return counter;
}