var level : String;

function OnCollisionEnter (collision : Collision) {
	if (collision.gameObject.name == "Ball") {
		Application.LoadLevel(level);
	}
}