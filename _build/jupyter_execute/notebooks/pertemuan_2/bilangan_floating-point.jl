@show p = 22/7

@show float(pi)

accuracy = abs(p - pi)
println("akurasi absolut = $accuracy")
println("akurasi relatif = $(accuracy/pi)")

digit = floor(-log10(accuracy/pi))
println("Banyaknya digit yang akurat = $digit")

@show typeof(1);
@show typeof(1.0);

bitstring(1.0)

[bitstring(1.0), bitstring(-1.0)]

x = 1.0
@show sign(x), exponent(x), significand(x);

x = 0.25
@show sign(x), exponent(x), significand(x)

x = -0.25
@show sign(x), exponent(x), significand(x)

eps()

log2(eps())

eps(1.618)

eps(161.8)

nextfloat(161.8)

@show floatmin(), floatmax();

1/7

37.3 + 1

2^(-4)

@show 5.0, Int(5.0);


