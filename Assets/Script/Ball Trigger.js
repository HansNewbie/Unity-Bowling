private var isClicked = false;
private var angle = 0.0;

function Start () {
	rigidbody.Sleep();
}

function Update () {
	if (Application.platform == RuntimePlatform.Android) {
		if (isClicked == false) {
			if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
				var touchHorizontalDeltaPosition = Input.GetTouch(0).deltaPosition.x;
				
				if ((touchHorizontalDeltaPosition > 0) && (angle < 1.3)) {
					gameObject.transform.RotateAround(Vector3.up, 0.01);
					angle += 0.01;
					Debug.Log(angle);
					rigidbody.Sleep();
				}
				else if ((touchHorizontalDeltaPosition < 0) && (angle > -1.3)) {
					gameObject.transform.RotateAround(Vector3.up, -0.01);
					angle -= 0.01;
					Debug.Log(angle);
					rigidbody.Sleep();
				}
			}
			// Try instead of tapCount, use deltaPosition.x == 0 && deltaPosition.y == 0
			else if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended && Input.GetTouch(0).tapCount > 0) {
				isClicked = true;
				Destroy(gameObject.GetComponentInChildren(TextMesh));
				rigidbody.WakeUp();
				rigidbody.AddForce(transform.forward * 70, ForceMode.Impulse);
			}
		}
	}
	else {
		if (isClicked == false) {
			if ((Input.GetKey("d")) && (angle < 1.3)) {
				gameObject.transform.RotateAround(Vector3.up, 0.01);
				angle += 0.01;
				Debug.Log(angle);
				rigidbody.Sleep();
			}
			else if ((Input.GetKey("a")) && (angle > -1.3)) {
				gameObject.transform.RotateAround(Vector3.up, -0.01);
				angle -= 0.01;
				Debug.Log(angle);
				rigidbody.Sleep();
			}
			
			if (Input.GetMouseButtonDown(0)) {
				isClicked = true;
				Destroy(gameObject.GetComponentInChildren(TextMesh));
				rigidbody.WakeUp();
				rigidbody.AddForce(transform.forward * 70, ForceMode.Impulse);
			}
		}
	}
}