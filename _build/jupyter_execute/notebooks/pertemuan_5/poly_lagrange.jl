using Plots
using Polynomials
using LaTeXStrings

x = [0, 1, 2/3]
l0(x) = (x - 2/3) * (x - 1)
l1(x) = -9/2 * x * (x - 1)
l2(x) = -3 * x * (x - 2/3);

xx = range(0, 1, length=100)
y_l0 = [l0(xx[i]) for i in 1:length(xx)]
y_l1 = [l1(xx[i]) for i in 1:length(xx)]
y_l2 = [l2(xx[i]) for i in 1:length(xx)];

p1 = plot(xx, y_l0, label=L"l_0(x)")
p1_1 = scatter!(x, [l0(x[i]) for i in 1:length(x)], label = L"(x_i, l_0(x_i))")
p2 = plot(xx, y_l1, label=L"l_1(x)")
p2_1 = scatter!(x, [l1(x[i]) for i in 1:length(x)], label = L"(x_i, l_1(x_i))")
p3 = plot(xx, y_l2, label=L"l_2(x)")
p2_1 = scatter!(x, [l2(x[i]) for i in 1:length(x)], label = L"(x_i, l_2(x_i))")

plot(p1, p2, p3, layout=(3,1))


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

x = [0, 1, 2/3]
y = [1, 0, 0.5]

V = Lagrange_basis(x)
V

# Koefisien a
a = V \ y
a

p = poly_Lagrange

xx = range(0, 1, length=100)
yy = [poly_Lagrange(xx[i], x, a) for i in 1:length(xx)]
foreach(println, yy[1:length(y)])

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)
plot!(xx, yy, label="interpolant")
