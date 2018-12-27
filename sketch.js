let pos;
let koma_kiri, koma_atas, koma_kanan;

function preload() {
	koma_kiri = loadImage("img/koma-kiri.png");
	koma_atas = loadImage("img/koma-atas.png");
	koma_kanan = loadImage("img/koma-kanan.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	pos = createVector(width / 2, height / 2);
}

function draw() {
	background(255);

	translate(pos.x, pos.y);
	fill(255, 10, 10);
	stroke(0);
	strokeWeight(9);
	// lingkaran luar
	ellipse(0, 0, 400, 400);

	// lingkaran tengah
	noFill();
	stroke(0, 70);
	ellipse(0, 0, 250, 250);

	// lingkaran inti
	fill(0);
	noStroke();
	ellipse(0, 0, 70, 70);


	rotate(-frameCount / 30);
	// koma kiri
	image(koma_kiri, 0 - 160, 0 + 40, 70, 70);

	// koma atas
	image(koma_atas, 0 - 40, 0 - 180, 70, 70);

	// koma kanan
	image(koma_kanan, 0 + 90, 0 + 40, 70, 70);
}
