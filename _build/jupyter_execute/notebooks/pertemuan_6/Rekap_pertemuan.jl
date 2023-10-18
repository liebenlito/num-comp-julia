using Plots
using Polynomials

x = [0, 0.6, 0.9]
f(x) = cos(x)
y = f.(x)
nilai_eksak = f(0.45)

scatter(x, y, xlabel="x", ylabel="y", label="titik data")

V = [x[i]^j for i=1:length(x), j=0:length(x)-1]

a = V \ y
a

p = Polynomial(a)

error_abs = abs(p(0.45) - f(0.45))

u = x[1:length(x)-1]
v = f.(u)

V = [u[i]^j for i=1:length(u), j=0:length(u)-1]

a = V \ v

p = Polynomial(a)

p(0.45)

error_abs = abs(f(0.45) - p(0.45))

function Lagrange_basis(x_data)
    n = length(x_data)
    L = zeros(n, n)
    for i in 1:n
        for j in 1:n
            if i == j
                L[i, j] = 1.0
            else 
                L[i, j] = 0.0
            end
        end
    end
    return L
end

function poly_Lagrange(x, x_data, koef)
    n = length(x_data)
    hasil = 0.0
    for i in 1:n
        term = koef[i]
        for j in 1:n
            if i != j
                term *= (x - x_data[j]) / (x_data[i] - x_data[j])
            end
        end
        hasil += term
    end
    return hasil
end

x = [0, 0.6, 0.9]
f(x) = cos(x)
y = f.(x);

V = Lagrange_basis(x)
V

a = V \ y
a

p = poly_Lagrange

p(0.45, x, a)

error_abs = abs(p(0.45, x, a) - f(0.45))

# Buat code untuk interpolasi Newton

# http://homepages.math.uic.edu/~jan/mcs471/divdifpol.pdf


# Cari error absolut untuk P1

# Cari error absolut untuk P2
