using Polynomials
using Plots

function chebyshev_nodes(n, a, b)
    return [(a + b) / 2 + (b - a) / 2 * cos(π * (2*i + 1) / (2 * n + 2) * π) for i in 1:n]
end

function poly_Lagrange(f, nodes, x)
    n = length(nodes)
    return sum(f(nodes[i])* prod([(x - nodes[j]) / (nodes[i] - nodes[j]) for j in 1:n if j ≠ i]) for i in 1:n)
end

runge(z) = 1 / (1 + 25z^2)

N = 30
x = range(-1, 1, length=N+1)
y = runge.(x);

scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)

xx = range(-1, 1, length=1000)
nodes = chebyshev_nodes(N, -1, 1)

yy = [poly_Lagrange(runge, nodes, xx[i]) for i in 1:length(xx)]
yL = [poly_Lagrange(runge, x, xx[i]) for i in 1:length(xx)]
scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)

plot!(xx, yy, label="interpolasi Chebyshev", linewidth=2, ylimits=(-0.2,1.5))
plot!(xx, yL, label="interpolasi Lagrange", linewidth=2, ylimits=(-0.2,1.5), linestyle=:dash)


