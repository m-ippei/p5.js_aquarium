function setup() {
    //windowの作成
    createCanvas(windowWidth, windowHeight - 15), W = windowWidth, H = windowHeight - 15, setInterval(function() {
        t++
    }, 1e3), colorMode(HSL), fn = 7;
    for (var a = 0; a < fn; a++) {
        fishes[a] = JSON.parse(JSON.stringify(s));
        var b = fishes[a].position,
            c = fishes[a].enviroment,
            d = fishes[a].value.tail;
        b.x[0] = random(-300, W + 300), b.y = random(H), b.Min = random(-200, -100), b.Max = W + random(100, 200), b.Noise = random(500), b.Speed = random(.5, 1.2), b.Noise_step = random(.001, .003), c.Max_Y = H, d[0] = random(0, 2), d[2] = random(0, 2)
    }
    fullscreen()
}

function draw() {
    background(255);
    //配列の更新
    for (var a in fishes) fishes[a] = ms(fishes[a])
}

function ms(a) {
    //差分の更新
    var b = a.position,
        c = map(b.x[0], 0, b.Max, 0, 360),
        d = a.value,
        e = a.enviroment;
    return a.position.Noise = b.Noise + b.Noise_step, a.value.tail = s_fish(b.x[0], noise(b.Noise) * e.Max_Y, d.tail, color(c, 100, 75, .8), b.x[1]), a.position.x = move(b.x[0], b.x[1], b.Speed, b.Min, b.Max), a
}

function s_fish(a, b, c, d, e) {
    d || (d = color(104, 183, 221)), c || (c = [0, !0, 2, !0]), push();
    var f = c[0] / 180 * PI,
        g = c[2] / 180 * PI,
        h = [25, 20, -25, -26, -25, 20];
    return e && h.forEach(function(a, b, c) {
        c[b] = a * -1
    }), translate(a, b), fill(d), push(), translate(h[0], 0), rotate(f), ellipse(h[1], 0, 24, 15), pop(), ellipse(0, 0, 80, 20), fill(255), ellipse(h[2], -1.5, 10, 10), fill(0), ellipse(h[3], -1.5, 6, 6), translate(h[4], 3), rotate(g), fill(d), ellipse(h[5], 0, 18, 8), pop(), c = taleManage(c)
}

function taleManage(a) {
    var b = taleMove(a[0], a[1], .2, 2),
        c = taleMove(a[2], a[3], .3, 2);
    return a[0] = b[0], a[1] = b[1], a[2] = c[0], a[3] = c[1], a
}

function taleMove(a, b, c, d) {
    return b === !0 && a <= d ? a += c : b === !0 && a > d ? b = !1 : b === !1 && a >= -d ? a -= c : b === !1 && a < -d && (b = !0), [a, b]
}

function move(a, b, c, d, e) {
    return b === !0 && a <= e ? a += c : b === !0 && a > e ? b = !1 : b === !1 && a >= d ? a -= c : b === !1 && a < d && (b = !0), [a, b]
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - 15)
}
var t = 0,
    W, H, fishes = {},
    fn = 0,
    s = {
        position: {
            x: [0, !0],
            y: 0,
            Min: 0,
            Max: 0,
            Speed: 1,
            Noise: 0,
            Noise_step: .002
        },
        enviroment: {
            Max_X: 0,
            Max_Y: 0
        },
        value: {
            tail: [0, !0, 2, !1]
        },
        option: {
            ColorMode: "hsl",
            Color: [0, 0, 0, 1]
        }
    };
