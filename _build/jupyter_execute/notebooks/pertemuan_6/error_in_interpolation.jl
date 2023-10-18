using Plots
using Polynomials

N = 50
x = range(0, 5, length=N)
y = sin.(x) + exp.(x).*cos.(x) ;

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)

V = [x[i]^j for i=1:length(x), j=0:length(x)-1]

a = V \ y
a

p = Polynomial(a)

xx = range(0, 5, length=100)
yy = p.(xx)

plot!(xx, yy, label="interpolasi polynomial", linewidth=2)

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

V = Lagrange_basis(x)
V

# Koefisien a
a = V \ y
a

p = poly_Lagrange

xx = range(0, 5, length=100)
yy = [poly_Lagrange(xx[i], x, a) for i in 1:length(xx)]

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)
plot!(xx, yy, label="Interpolasi Lagrange", linewidth=2)

x = [0.9, 1.3, 1.9, 2.1, 2.6, 3.0, 3.9, 4.4, 4.7, 5.0, 6.0, 7.0, 8.0, 9.2, 10.5, 11.3, 11.6, 12.0, 12.6, 13.0, 13.3]
y = [1.3, 1.5, 1.85, 2.12, 2.6, 2.7, 2.4, 2.15, 2.05, 2.11, 2.25, 2.3, 2.26, 1.95, 1.4, 0.9, 0.7, 0.6, 0.5, 0.4, 0.25];

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)

V = [x[i]^j for i=1:length(x), j=0:length(x)-1]

a = V \ y
a

p = Polynomial(a)

xx = range(0, 14, length=1000)
yy = p.(xx)

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)
plot!(xx, yy, label="interpolasi polynomial", linewidth=2, ylimits=(-2,4))

V = Lagrange_basis(x)
V

a = V \ y
a

p = poly_Lagrange

xx = range(0, 14, length=1000)
yy = [poly_Lagrange(xx[i], x, a) for i in 1:length(xx)]

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)
plot!(xx, yy, label="Interpolasi Lagrange", linewidth=2, ylimits=(-2,4))

N = 100
x = [2*i/N - 1 for i=1:N]
y = 1 ./(1 .+ 25 .* x .^ 2);

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)

V = [x[i]^j for i=1:length(x), j=0:length(x)-1]
a = V \ y
p = Polynomial(a)

xx = range(-1, 1, length=1000)
yy = p.(xx)

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)
plot!(xx, yy, label="interpolasi polynomial", linewidth=2, ylimits=(-0.2,1.5))

V = Lagrange_basis(x)
a = V \ y
p = poly_Lagrange

xx = range(-1, 1, length=1000)
yy = [poly_Lagrange(xx[i], x, a) for i in 1:length(xx)]
scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)
plot!(xx, yy, label="Interpolasi Lagrange", linewidth=2, ylimits=(-0.2,1.5))


