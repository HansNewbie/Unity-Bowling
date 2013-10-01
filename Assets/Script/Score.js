var score : GameObject;

function Update () {
	guiText.text = score.GetComponent("Pin Counter").getCounter().ToString();
}