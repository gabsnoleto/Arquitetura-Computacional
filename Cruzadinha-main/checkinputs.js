var cc = 0, width = 1.36986301369863;
var z1d = { value: false, letter: "M", name: "z1d" };
var z2a = { value: false, letter: "A", name: "z2a" };
var z2b = { value: false, letter: "D", name: "z2b" };
var z2c = { value: false, letter: "R", name: "z2c" };
var z2d = { value: false, letter: "E", name: "z2d" };
var z2e = { value: false, letter: "S", name: "z2e" };
var z2f = { value: false, letter: "S", name: "z2f" };
var z2g = { value: false, letter: "B", name: "z2g" };
var z2h = { value: false, letter: "U", name: "z2h" };
var z2i = { value: false, letter: "S", name: "z2i" };
var z3b = { value: false, letter: "A", name: "z3b" };
var z3d = { value: false, letter: "M", name: "z3d" };
var z4b = { value: false, letter: "T", name: "z4b" };
var z4d = { value: false, letter: "O", name: "z4d" };
var z4f = { value: false, letter: "S", name: "z4f" };
var z4h = { value: false, letter: "Q", name: "z4h" };
var z5b = { value: false, letter: "A", name: "z5b" };
var z5d = { value: false, letter: "R", name: "z5d" };
var z5f = { value: false, letter: "C", name: "z5f" };
var z5g = { value: false, letter: "P", name: "z5g" };
var z5h = { value: false, letter: "U", name: "z5h" };
var z6b = { value: false, letter: "B", name: "z6b" };
var z6d = { value: false, letter: "I", name: "z6d" };
var z6e = { value: false, letter: "5", name: "z6e" };
var z6h = { value: false, letter: "A", name: "z6h" };
var z7b = { value: false, letter: "U", name: "z7b" };
var z7c = { value: false, letter: "L", name: "z7c" };
var z7d = { value: false, letter: "A", name: "z7d" };
var z7h = { value: false, letter: "D", name: "z7h" };
var z8b = { value: false, letter: "S", name: "z8b" };
var z8d = { value: false, letter: "D", name: "z8d" };
var z8e = { value: false, letter: "U", name: "z8e" };
var z8f = { value: false, letter: "A", name: "z8f" };
var z8g = { value: false, letter: "L", name: "z8g" };
var z8h = { value: false, letter: "C", name: "z8h" };
var z8i = { value: false, letter: "O", name: "z8i" };
var z8j = { value: false, letter: "R", name: "z8j" };
var z8k = { value: false, letter: "E", name: "z8k" };
var z9d = { value: false, letter: "E", name: "z9d" };
var z9h = { value: false, letter: "O", name: "z9h" };
var z9j = { value: false, letter: "O", name: "z9j" };
var za5 = { value: false, letter: "F", name: "za5" };
var za9 = { value: false, letter: "E", name: "za9" };
var zaa = { value: false, letter: "P", name: "zaa" };
var zab = { value: false, letter: "R", name: "zab" };
var zac = { value: false, letter: "O", name: "zac" };
var zad = { value: false, letter: "M", name: "zad" };
var zah = { value: false, letter: "R", name: "zah" };
var zai = { value: false, letter: "A", name: "zai" };
var zaj = { value: false, letter: "M", name: "zaj" };
var zb5 = { value: false, letter: "L", name: "zb5" };
var zb8 = { value: false, letter: "D", name: "zb8" };
var zbd = { value: false, letter: "A", name: "zbd" };
var zbh = { value: false, letter: "E", name: "zbh" };
var zc5 = { value: false, letter: "A", name: "zc5" };
var zc8 = { value: false, letter: "M", name: "zc8" };
var zcd = { value: false, letter: "S", name: "zcd" };
var zd1 = { value: false, letter: "R", name: "zd1" };
var zd2 = { value: false, letter: "E", name: "zd2" };
var zd3 = { value: false, letter: "G", name: "zd3" };
var zd4 = { value: false, letter: "I", name: "zd4" };
var zd5 = { value: false, letter: "S", name: "zd5" };
var zd6 = { value: false, letter: "T", name: "zd6" };
var zd7 = { value: false, letter: "R", name: "zd7" };
var zd8 = { value: false, letter: "A", name: "zd8" };
var zd9 = { value: false, letter: "D", name: "zd9" };
var zda = { value: false, letter: "O", name: "zda" };
var zdb = { value: false, letter: "R", name: "zdb" };
var zdc = { value: false, letter: "E", name: "zdc" };
var zdd = { value: false, letter: "S", name: "zdd" };
var ze5 = { value: false, letter: "H", name: "ze5" };
var ze4 = { value: false, letter: "7", name: "ze4" };
var zed = { value: false, letter: "A", name: "zed" };


function checkInput(ch, inp) { //
    if (inp.toUpperCase() != ch.letter) { 
        if (ch.value != false) {
            cc -= width;
            ch.value = false;
            if (cc < 0) {
                cc = 0;
            }
        }
        document.getElementById("porcent").style.width = `${cc}%`;
        document.getElementById(`${ch.name}`).style.backgroundColor = "#F94141";
        return false;
    } else {
        ch.value = true;
        cc += width;
        document.getElementById("porcent").style.width = `${cc}%`;
        document.getElementById(`${ch.name}`).style.backgroundColor = "#3CDF7E";
        checkWord()
        if (checkAll()) {
            alert("Parabens voce conseguiu")
        }
        return true;
    }
}

function checkWord() {

    if (z5f.value && z5g.value && z5h.value) {
        document.getElementById('p-cpu').style.textDecoration = "line-through"
    } 

    if(z7b.value && z7c.value && z7c.value){
        document.getElementById('p-ula').style.textDecoration = "line-through"
    }
    
    if (zd1.value && zd2.value && zd3.value && zd4.value && zd5.value && zd6.value && zd7.value && zd8.value && zd9.value && zda.value && zdb.value && zdc.value && zdd.value) {
        document.getElementById('p-regis').style.textDecoration = "line-through"
    }

    if(zah.value && zai.value && zaj.value){
        document.getElementById('p-ram').style.textDecoration = "line-through"
    } 

    if (z8j.value && z9j.value && zaj.value) {
        document.getElementById('p-rom').style.textDecoration = "line-through"
    }

    if (za9.value && zaa.value && zab.value && zac.value && zad.value) {
        document.getElementById('p-eprom').style.textDecoration = "line-through"
    }

    if (za5.value && zb5.value && zc5.value && zd5.value && ze5.value) {
        document.getElementById('p-flash').style.textDecoration = "line-through"
    }

    if (z1d.value && z2d.value && z3d.value && z4d.value && z5d.value && z6d.value && z7d.value && z8d.value && z9d.value && zad.value && zbd.value && zcd.value && zdd.value && zed.value) {
        document.getElementById('p-massa').style.textDecoration = "line-through"
    }

    if (zb8.value && zc8.value && zd8.value){
        document.getElementById('p-dma').style.textDecoration = "line-through"
    }

    if(z5f.value && z4f.value){
        document.getElementById('p-cs').style.textDecoration = "line-through"
    }

    if(z2a.value && z2b.value && z2c.value && z2d.value && z2e.value && z2f.value && z2g.value && z2h.value && z2i.value){
        document.getElementById('p-add').style.textDecoration = "line-through"
    }

    if (z2b.value && z3b.value && z4b.value && z5b.value && z6b.value && z7b.value && z8b.value) {
        document.getElementById('p-data').style.textDecoration = "line-through"
    }

    if (z6d.value && z6e.value) {
        document.getElementById('p-i5').style.textDecoration = "line-through"
    }

    if (zd4.value && ze4.value) {
        document.getElementById('p-i7').style.textDecoration = "line-through"
    }

    if (z8d.value && z8e.value && z8f.value && z8g.value && z8h.value && z8i.value && z8j.value && z8k.value) {
        document.getElementById('p-dual').style.textDecoration = "line-through"
    }

    if (z4h.value && z5h.value && z6h.value && z7h.value && z8h.value && z9h.value && zah.value && zbh.value) {
        document.getElementById('p-quad').style.textDecoration = "line-through"
    }

}

function checkAll() {
    if (
        z1d.value &&
        z2a.value &&
        z2b.value &&
        z2c.value &&
        z2d.value &&
        z2e.value &&
        z2f.value &&
        z2g.value &&
        z2h.value &&
        z2i.value &&
        z3b.value &&
        z3d.value &&
        z4b.value &&
        z4d.value &&
        z4f.value &&
        z4h.value &&
        z5b.value &&
        z5d.value &&
        z5h.value &&
        z5f.value &&
        z5g.value &&
        z6b.value &&
        z6d.value &&
        z6e.value &&
        z6h.value &&
        z7b.value &&
        z7c.value &&
        z7d.value &&
        z7h.value &&
        z8b.value &&
        z8d.value &&
        z8e.value &&
        z8f.value &&
        z8g.value &&
        z8h.value &&
        z8i.value &&
        z8j.value &&
        z8k.value &&
        z9d.value &&
        z9h.value &&
        z9j.value &&
        za9.value &&
        zaa.value &&
        zab.value &&
        zac.value &&
        zad.value &&
        za5.value &&
        zah.value &&
        zai.value &&
        zaj.value &&
        zb5.value &&
        zb8.value &&
        zbd.value &&
        zbh.value &&
        zc5.value &&
        zc8.value &&
        zcd.value &&
        zd1.value &&
        zd2.value &&
        zd3.value &&
        zd4.value &&
        zd5.value &&
        zd6.value &&
        zd7.value &&
        zd8.value &&
        zd9.value &&
        zda.value &&
        zdb.value &&
        zdc.value &&
        zdd.value &&
        ze4.value &&
        ze5.value &&
        zed.value
    ) {
        return true;
    } else {
        return false;
    }
}

function clean() {
    location.reload()
}

function finish() {
    document.getElementById("z1d").value = z1d.letter;
    checkInput(z1d,document.getElementById("z1d").value)
    document.getElementById("z2a").value = z2a.letter;
    checkInput(z2a,document.getElementById("z2a").value)
    document.getElementById("z2b").value = z2b.letter;
    checkInput(z2b,document.getElementById("z2b").value)
    document.getElementById("z2c").value = z2c.letter;
    checkInput(z2c,document.getElementById("z2c").value)
    document.getElementById("z2d").value = z2d.letter;
    checkInput(z2d,document.getElementById("z2d").value)
    document.getElementById("z2e").value = z2e.letter;
    checkInput(z2e,document.getElementById("z2e").value)
    document.getElementById("z2f").value = z2f.letter;
    checkInput(z2f,document.getElementById("z2f").value)
    document.getElementById("z2g").value = z2g.letter;
    checkInput(z2g,document.getElementById("z2g").value)
    document.getElementById("z2h").value = z2h.letter;
    checkInput(z2h,document.getElementById("z2h").value)
    document.getElementById("z2i").value = z2i.letter;
    checkInput(z2i,document.getElementById("z2i").value)
    document.getElementById("z3b").value = z3b.letter;
    checkInput(z3b,document.getElementById("z3b").value)
    document.getElementById("z3d").value = z3d.letter;
    checkInput(z3d,document.getElementById("z3d").value)
    document.getElementById("z4b").value = z4b.letter;
    checkInput(z4b,document.getElementById("z4b").value)
    document.getElementById("z4d").value = z4d.letter;
    checkInput(z4d,document.getElementById("z4d").value)
    document.getElementById("z4f").value = z4f.letter;
    checkInput(z4f,document.getElementById("z4f").value)
    document.getElementById("z4h").value = z4h.letter;
    checkInput(z4h,document.getElementById("z4h").value)
    document.getElementById("z5b").value = z5b.letter;
    checkInput(z5b,document.getElementById("z5b").value)
    document.getElementById("z5d").value = z5d.letter;
    checkInput(z5d,document.getElementById("z5d").value)
    document.getElementById("z5f").value = z5f.letter;
    checkInput(z5f,document.getElementById("z5f").value)
    document.getElementById("z5g").value = z5g.letter;
    checkInput(z5g,document.getElementById("z5g").value)
    document.getElementById("z5h").value = z5h.letter;
    checkInput(z5h,document.getElementById("z5h").value)
    document.getElementById("z6b").value = z6b.letter;
    checkInput(z6b,document.getElementById("z6b").value)
    document.getElementById("z6d").value = z6d.letter;
    checkInput(z6d,document.getElementById("z6d").value)
    document.getElementById("z6e").value = z6e.letter;
    checkInput(z6e,document.getElementById("z6e").value)
    document.getElementById("z6h").value = z6h.letter;
    checkInput(z6h,document.getElementById("z6h").value)
    document.getElementById("z7b").value = z7b.letter;
    checkInput(z7b,document.getElementById("z7b").value)
    document.getElementById("z7c").value = z7c.letter;
    checkInput(z7c,document.getElementById("z7c").value)
    document.getElementById("z7d").value = z7d.letter;
    checkInput(z7d,document.getElementById("z7d").value)
    document.getElementById("z7h").value = z7h.letter;
    checkInput(z7h,document.getElementById("z7h").value)
    document.getElementById("z8b").value = z8b.letter;
    checkInput(z8b,document.getElementById("z8b").value)
    document.getElementById("z8d").value = z8d.letter;
    checkInput(z8d,document.getElementById("z8d").value)
    document.getElementById("z8e").value = z8e.letter;
    checkInput(z8e,document.getElementById("z8e").value)
    document.getElementById("z8f").value = z8f.letter;
    checkInput(z8f,document.getElementById("z8f").value)
    document.getElementById("z8g").value = z8g.letter;
    checkInput(z8g,document.getElementById("z8g").value)
    document.getElementById("z8h").value = z8h.letter;
    checkInput(z8h,document.getElementById("z8h").value)
    document.getElementById("z8i").value = z8i.letter;
    checkInput(z8i,document.getElementById("z8i").value)
    document.getElementById("z8j").value = z8j.letter;
    checkInput(z8j,document.getElementById("z8j").value)
    document.getElementById("z8k").value = z8k.letter;
    checkInput(z8k,document.getElementById("z8k").value)
    document.getElementById("z9d").value = z9d.letter;
    checkInput(z9d,document.getElementById("z9d").value)
    document.getElementById("z9h").value = z9h.letter;
    checkInput(z9h,document.getElementById("z9h").value)
    document.getElementById("z9j").value = z9j.letter;
    checkInput(z9j,document.getElementById("z9j").value)
    document.getElementById("za9").value = za9.letter;
    checkInput(za9,document.getElementById("za9").value)
    document.getElementById("zaa").value = zaa.letter;
    checkInput(zaa,document.getElementById("zaa").value)
    document.getElementById("zab").value = zab.letter;
    checkInput(zab,document.getElementById("zab").value)
    document.getElementById("zac").value = zac.letter;
    checkInput(zac,document.getElementById("zac").value)
    document.getElementById("zad").value = zad.letter;
    checkInput(zad,document.getElementById("zad").value)
    document.getElementById("za5").value = za5.letter;
    checkInput(za5,document.getElementById("za5").value)
    document.getElementById("zah").value = zah.letter;
    checkInput(zah,document.getElementById("zah").value)
    document.getElementById("zai").value = zai.letter;
    checkInput(zai,document.getElementById("zai").value)
    document.getElementById("zaj").value = zaj.letter;
    checkInput(zaj,document.getElementById("zaj").value)
    document.getElementById("zb5").value = zb5.letter;
    checkInput(zb5,document.getElementById("zb5").value)
    document.getElementById("zb8").value = zb8.letter;
    checkInput(zb8,document.getElementById("zb8").value)
    document.getElementById("zbd").value = zbd.letter;
    checkInput(zbd,document.getElementById("zbd").value)
    document.getElementById("zbh").value = zbh.letter;
    checkInput(zbh,document.getElementById("zbh").value)
    document.getElementById("zc5").value = zc5.letter;
    checkInput(zc5,document.getElementById("zc5").value)
    document.getElementById("zc8").value = zc8.letter;
    checkInput(zc8,document.getElementById("zc8").value)
    document.getElementById("zcd").value = zcd.letter;
    checkInput(zcd,document.getElementById("zcd").value)
    document.getElementById("zd1").value = zd1.letter;
    checkInput(zd1,document.getElementById("zd1").value)
    document.getElementById("zd2").value = zd2.letter;
    checkInput(zd2,document.getElementById("zd2").value)
    document.getElementById("zd3").value = zd3.letter;
    checkInput(zd3,document.getElementById("zd3").value)
    document.getElementById("zd4").value = zd4.letter;
    checkInput(zd4,document.getElementById("zd4").value)
    document.getElementById("zd5").value = zd5.letter;
    checkInput(zd5,document.getElementById("zd5").value)
    document.getElementById("zd6").value = zd6.letter;
    checkInput(zd6,document.getElementById("zd6").value)
    document.getElementById("zd7").value = zd7.letter;
    checkInput(zd7,document.getElementById("zd7").value)
    document.getElementById("zd8").value = zd8.letter;
    checkInput(zd8,document.getElementById("zd8").value)
    document.getElementById("zd9").value = zd9.letter;
    checkInput(zd9,document.getElementById("zd9").value)
    document.getElementById("zda").value = zda.letter;
    checkInput(zda,document.getElementById("zda").value)
    document.getElementById("zdb").value = zdb.letter;
    checkInput(zdb,document.getElementById("zdb").value)
    document.getElementById("zdc").value = zdc.letter;
    checkInput(zdc,document.getElementById("zdc").value)
    document.getElementById("zdd").value = zdd.letter;
    checkInput(zdd,document.getElementById("zdd").value)
    document.getElementById("ze4").value = ze4.letter;
    checkInput(ze4,document.getElementById("ze4").value)
    document.getElementById("ze5").value = ze5.letter;
    checkInput(ze5,document.getElementById("ze5").value)
}

