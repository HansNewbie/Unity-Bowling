function Update () {
	if (Input.GetMouseButtonDown(0)) {
		Debug.Log("clicked");
		rigidbody.AddForce(Vector3.forward * 40, ForceMode.Impulse);
	}
}