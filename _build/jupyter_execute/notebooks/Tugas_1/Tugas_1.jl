using CSV
using DataFrames
using Plots

data = DataFrame(CSV.File("./pertemuan_4.1/dataset/podes.csv")) # download data di link yang terdapat di soal
first(data,6)

data[1, 3:end]

x = Array{Float64}(data[1, 3:end])

cols = names(data)
cols = cols[3:end]

y = [parse(Float64, cols[i]) for i=1:6]

t = y .- 2003

scatter(t, x, label="aktual",
    xlabel="sejak tahun 2003",
    ylabel="jumlah desa (ribu)",
    title="Jumlah desa di Indonesia"
)






