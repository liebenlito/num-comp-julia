---
exports:
  - format: pdf
    template: egu_copernicus
---
# Pertemuan 1

## Beberapa Cara Menjalankan Julia

### Kenapa Julia?
Julia adalah bahasa pemrograman yang dikhususkan untuk mengimplementasikan algoritma-algoritma di bidang scientific computing. Sama halnya dengan pemrograman Python, Julia digolongkan ke dalam [bahasa interpreter](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/) yang berarti syntax-nya tidak serumit bahasa compiler seperti C/C++. Perbedaan yang signifikan antara Python dan Julia adalah performa komputasinya. Seperti yang terlihat pada [](#performance-julia), Julia mengungguli Python pada operasi perkalian matriks-vektor dan semakin besar ukuran matriksnya maka selisihnya akan semakin jauh.

```{figure} images/julia_vs_python_timing.png
:name: performance-julia
:width: 500px
:align: left

Operasi perkalian matriks-vektor Julia vs Python.
```

### Pengaturan Julia di PC Lokal
1. [Download Julia](https://julialang.org/downloads/) pilih stable version dan sesuai dengan OS yang kita punya.
2. Buka REPL Julia kemudian tekan `]` dan ketik `add IJulia` untuk menginstall package IJulia.
3. Untuk bekerja dengan jupyter notebook, di REPL ketik

```{code-block} python
:name: ijulia

using IJulia
notebook()
```
4. Selesai 🥳.

### REPL (Read-Evaluate-Print Loop)

```{figure} images/repl.png
:name: repl
:width: 500px
:align: left

Command-Line Julia REPL.
```
REPL di Julia merupakan command-line interaktif yang dapat menjalankan blok-blok code secara langsung. Secara default kita dapat menjalankan Julia seperti [](#repl), untuk lebih jelasnya silahkan kunjungi link [ini](https://docs.julialang.org/en/v1/stdlib/REPL/). Ada beberapa shortcut penting yang perlu diketahui dalam Pemrograman Julia, yaitu:

* Tekan `]` untuk masuk ke dalam mengatur (add/remove) package Julia; tekan `backspace` untuk kembali.
* Tekan `Ctrl-C` untuk membatalkan eksekusi.
* Tekan `?` untuk masuk ke mode help.
* Ada beberapa shortcut lain yang bisa dilihat di [manualnya](https://docs.julialang.org/en/v1/stdlib/InteractiveUtils/).


### Jupyter Notebook / Lab

Install `IJulia` kemudian jalankan `IJulia.notebook()` di REPL untuk masuk ke dalam Jupyter melalui web browser, seperti yang terlihat pada [](#jupyterlab). 

```{figure} images/jupyter_lab.png
:name: jupyterlab
:width: 500px
:align: left

Tampilan Jupyter Lab di Browser.
```

* Jupyter Lab terdiri dari baris-baris yang dinamakan __cell__. Kita dapat melakukan coding dan juga dapat menulis dengan Markdown di cell tersebut. Tekan `Shift-Enter` untuk mengeksekusi cell.
* Klik tombol persegi 🔳 untuk memberhentikan eksekusi.
* Gunakan `include Pkg` kemudian `Pkg.add`, dst. untuk menginstall package Julia.

## Dasar-Dasar Julia

:::{list-table}
:width: 15 100
:header-rows: 1

*   - Item/Reference
    - Contoh
*   - Perintah Help pada fungsi
    - `?func`
*   - [Mencari Help](https://docs.julialang.org/en/v1/stdlib/InteractiveUtils/#Base.Docs.apropos)
    - `aprospos("topik")`
*   - [Assign variabel](https://docs.julialang.org/en/v1/manual/variables/#man-variables)
    - `=`
*   - Comment
    - Dimulai dengan `#`
*   - [Pendefinisian fungsi](https://docs.julialang.org/en/v1/manual/functions/#man-anonymous-functions)
    - `function foo(x, y)` atau `foo = (x, y) ->`
*   - Assign variabel
    - `=`
*   - [Simbol-Simbol](https://docs.julialang.org/en/v1/base/punctuation/#Punctuation)
    - `% ÷ ∘`
*   - [Simbol LaTeX](https://en.wikipedia.org/wiki/List_of_mathematical_symbols_by_subject)
    - `\beta` + `Tab`, `x\_0` + `Tab`, `z\hat` + `Tab` 
:::

## Input dan Output

:::{list-table}
:width: 50 50 30
:header-rows: 1

*   - 
    - Contoh
    - Package
*   - [Integer](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/#Integers)
    - `56`, `-2`, `0`
    - 
*   - [Float](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/#Floating-Point-Numbers)
    - `56.2`, `-2.0`, `0.`, `NaN`, `Inf` 
    - 
*   - Notasi saintifik
    - `1.5432e-10` 
    - 
*   - Bilangan kompleks
    - `2+3im`, `complex(2,3)` 
    - 
*   - Konstanta
    - `pi`, `𝜋`, `exp(1)` 
    - 
*   - String
    - `"string", 'ini'` 
    - 
*   - Lihat hasil
    - `@show` 
    - 
*   - Cetak ke screen
    - `print`, `println` 
    - 
*   - Format cetak
    - `@sprintf`, `@printf` 
    - [Printf](https://docs.julialang.org/en/v1/stdlib/Printf/)
*   - [Interpolasi string](https://docs.julialang.org/en/v1/manual/strings/#string-interpolation)
    - `"1 + 2 = $(1 + 2)"` 
    - 
*   - Table
    - `pretty_table` 
    - [PrettyTables](https://ronisbr.github.io/PrettyTables.jl/stable/)
:::

## Operator

:::{list-table}
:width: 50 50
:header-rows: 1

*   - 
    - Contoh
*   - Aritmatik
    - `+ - * / ^`
*   - [Broadcast untuk seluruh array](https://docs.julialang.org/en/v1/manual/arrays/#Broadcasting)
    - prefix dengan dot, atau `@.` di depannya
*   - [Test equality](https://docs.julialang.org/en/v1/base/math/#Base.:==)
    - `== !=`
*   - Perbandingan
    - `< <= > >=`
*   - Logika AND/OR/NOT
    - `&& || !`
:::

## Error

:::{list-table}
:width: 50 50
:header-rows: 1

*   - Pesan
    - Kemungkinan penyebabnya
*   - `BoundsError`
    - Mengakses elemen array yang tidak ada
*   - `MethodError`
    - Kemungkinan menggunakan tipe atau nilai yang salah pada argumen fungsi
*   - [`InexactError`](https://docs.julialang.org/en/v1/manual/conversion-and-promotion/)
    - Ilegal dalam Konversi tipe, mungkin bisa terjadi ketika memberikan nilai pada array 
*   - "Cannot juxtapose string literal"
    - Konstruksi string yang salah 
*   - [Perubahan array yang tidak diharapkan](https://docs.julialang.org/en/v1/manual/arrays/#man-multi-dim-arrays)
    - Gunakan `copy` daripada array reference
*   - [Salah norm](https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/#LinearAlgebra.norm)
    - menggunakan `norm` ketika `opnorm` dibutuhkan
:::

## Iterasi

:::{list-table}
:width: 50 50
:header-rows: 1

*   - 
    - Contoh
*   - [Predetermined number](https://docs.julialang.org/en/v1/manual/control-flow/#man-loops)
    - `for i in 1:100`
*   - [Berdasarkan kondisi](https://docs.julialang.org/en/v1/manual/control-flow/#man-loops)
    - 'while abs(x) > 1'
*   - [Comprehensions](https://docs.julialang.org/en/v1/manual/arrays/#man-comprehensions)
    - `[i+j for i in 1:3, j in 1:3]` 
*   - [Generator](https://docs.julialang.org/en/v1/manual/arrays/#Generator-Expressions)
    - `sum(k for k in 1:10)` 
:::

## Vektor, Matriks, dan Array

:::{list-table}
:width: 50 50 30
:header-rows: 1

*   - 
    - Contoh
    - Package
*   - ones, zeros
    - `ones(4), zeros(2,5)`
    - 
*   - Bangkitkan elemen random
    - rand(100), randn(3,1)
    - 
*   - [Menggabungkan (concate)](https://docs.julialang.org/en/v1/manual/arrays/#man-array-concatenation)
    - `[1;2;3]` kolom, `[1 2 3]` baris
    - 
*   - Menampilkan dimensi
    - `length`, `size`
    - 
*   - [Mengeluarkan elemen diagonal](https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/#LinearAlgebra.diag)
    - `diag(A)`, `diag(A, -1)`
    - LinearAlgebra
*   - [Membangun diagonal dengan posisi yg ditentukan](https://docs.julialang.org/en/v1/stdlib/LinearAlgebra/#LinearAlgebra.diag)
    - `diagm([1,2,3])`, `diagm(1=>[-1,-1])`
    - LinearAlgebra
*   - [Mengakses elemen](https://docs.julialang.org/en/v1/manual/arrays/#man-array-indexing)
    - `x[2]`, `A[1,4]`
    - 
*   - [Mengakses blok](https://docs.julialang.org/en/v1/manual/arrays/#man-array-indexing)
    - `x[1:end-1]`, `A[1:4,2:3]`
    - 
*   - [Mengakses baris/kolom](https://docs.julialang.org/en/v1/manual/arrays/#man-array-indexing)
    - `A[4,:]`, `A[:, 2:2:end]`
    - 
*   - [Range dengan stepsize](https://docs.julialang.org/en/v1/base/math/#Base.::)
    - `0:4`, `1:2:9`, `5:-1:1`
    - 
*   - [Range dengan length](https://docs.julialang.org/en/v1/base/math/#Base.range)
    - `range(a, b, length=10)`
    - 
*   - Perintah kopi variabel array
    - `copy`
    - 

:::

## Grafik

:::{list-table}
:width: 50 50 30
:header-rows: 1

*   - 
    - Contoh
    - Package
*   - [Satu variabel](https://docs.juliaplots.org/latest/generated/gr/#gr-ref1)
    - `plot`, `scatter`, `hline`, `vline`
    - [Plots](https://docs.juliaplots.org/latest/)
*   - [Dua variabel](https://docs.juliaplots.org/latest/generated/gr/#gr-ref22)
    - `surface`, `contour`, `contourf`
    - [Plots](https://docs.juliaplots.org/latest/)
*   - [Jaringan](https://docs.juliaplots.org/latest/graphrecipes/introduction/)
    - `graphplot`
    - [GraphRecipes](https://docs.juliaplots.org/latest/GraphRecipes/examples/)
*   - Nilai matriks
    - `spy`
    - [Plots](https://docs.juliaplots.org/latest/)
*   - Nilai matriks
    - `spy`
    - [Plots](https://docs.juliaplots.org/latest/)
*   - Memodifikasi plot yang sudah ada
    - `plot!`, `xlabel!`
    - [Plots](https://docs.juliaplots.org/latest/)
*   - [Layout](https://docs.juliaplots.org/latest/layouts/#layouts)
    - `layout=(2,1)`, `subplot=2`
    - [Plots](https://docs.juliaplots.org/latest/)
*   - Skala log
    - `yscale=:log10`
    - [Plots](https://docs.juliaplots.org/latest/)
*   - Warna dan image
    - `RGB(1,0,1)`, `Gray.(img)`
    - [Images](https://juliaimages.org/stable/)

:::


```julia

```
