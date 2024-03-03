let arr = []

arr[0] = {
    name: "bread",
    quantity: 2,
    status: "куплен"
}
arr[1] = {
    name: "oil",
    quantity: 2,
    status: "ке куплен"
}
arr[2] = {
    name: "water",
    quantity: 4,
    status: "Куплен"
}
function sortProduct() {
    if (arr.status == 'Не куплен') return -1; 
    if (arr.status == 'Куплен') return 1; 
}
arr.sort(sortProduct);

for (i in arr) {
    for (j in arr[i]) {
      document.write(j + ": " + arr[i][j] + "<br \/>");
    }
}