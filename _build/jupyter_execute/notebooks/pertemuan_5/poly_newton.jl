using Plots
using Polynomials

function divided_difference(x_data, y_data)
    n = length(x_data)
    
    # divided-difference
    div_diff = zeros(n, n)
    div_diff[:, 1] .= y_data
    
    for j in 2:n
        for i in j:n
            div_diff[i, j] = (div_diff[i, j-1] - div_diff[i-1, j-1]) / (x_data[i] - x_data[i-j+1])
        end
    end
    
    return div_diff
end

function poly_newton(x_data, d, x) 
    n = length(x_data)
    # polynomial Newton
    hasil = d[n, n]
    for i in (n-1):-1:1
        hasil = hasil * (x - x_data[i]) + d[i, i]
    end
    
    return hasil
end

x = [i for i in range(-1, 1, length=10)]
y = sin.(π*x);

d = divided_difference(x, y)

xx = range(-1, 1, length=100)
yy = [poly_newton(x, d, xx[i]) for i in 1:length(xx)]
scatter(x, y, label="titik data",
    xlabel="x",
    ylabel="y"
)
plot!(xx, yy, label="interpolant")


