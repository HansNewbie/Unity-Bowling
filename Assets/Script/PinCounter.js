private static var counter = 0;

function OnTriggerExit (collision : Collider) {
	if (collision.gameObject.name == "Pin") {
		counter++;
	}
}

static function getCounter() {
	return counter;
}