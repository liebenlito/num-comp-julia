x = 1.5
TOL = 1e-5
M = 1000

# set
N = 1
y = x - 1
SUM = 0
POWER = y
TERM = y
SIGN = -1

while N <= M
    SIGN = -SIGN
    SUM = SUM + SIGN * TERM
    POWER = POWER * y
    TERM = POWER / (N + 1)
    
    if abs(TERM) < TOL
        println(N)
        println(SUM)
        break
    end
    N = N + 1
end

0.40546511
