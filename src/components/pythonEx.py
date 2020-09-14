
# write your code in Python 3.6
A = [1,3,4,7,9,4,6,1,2]
A.sort()
ans = 1
size = len(A)
if size == 0:
    print(1)

for i in range(size-1):
    if A[i] < 0:
        continue
    if i != size-1:
        # print(size)
        val = A[i+1]-A[i]
    else:
        val = 3
    if val == 1 or val == 0:
        continue
    if val > 1:
        ans = A[i]+1
        break
    
print(ans)    