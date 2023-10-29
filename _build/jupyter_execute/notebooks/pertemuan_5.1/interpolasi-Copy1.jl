using Plots
using Polynomials

x = [0, 1, 2/3]
y = [1, 0, 0.5]

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)

V = [x[i]^j for i=1:length(x), j=0:length(x)-1]
V

a = V \ y
a

p = Polynomial(a)

xx = range(0, 1, length=100)
yy = p.(xx)
foreach(println, yy[1:length(y)])

plot!(xx, yy, label="interpolant")

tahun = [1980, 2000, 2010, 2015]
populasi = [79.2, 223.6, 260.2, 278.2]

t = tahun .- 1980
y = populasi;

scatter(t, y, label="aktual",
    xlabel="sejak tahun 1980",
    ylabel="jumlah penduduk (juta)",
    title="Populasi penduduk di Indonesia"
)

V = [t[i]^j for i=1:4, j=0:3]

c = V \ y

y - V*c

p = Polynomial(c)
p(2000-1980)

tt = range(0, 35, length=100)
yy = p.(tt)
foreach(println, yy[1:4])

plot!(tt, yy, label="interpolant")
