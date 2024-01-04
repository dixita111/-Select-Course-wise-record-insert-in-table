


let data = JSON.parse(localStorage.getItem("data2")) || [];

console.log(data);

const displayTable = () => {
    const result = data.filter(value => value.Course === "bca");
    document.getElementById("student0").innerHTML = result.map((item) => {
        return (`<tr>
        <td>${item.Name}</td>
        <td>${item.id}</td>
        <td>${item.Course}</td>
        <td>${item.School}</td>
        </tr>`)
    }).join('');

    const result1 = data.filter(value => value.Course === "B.com");
   
    document.getElementById("student2").innerHTML = result1.map((item) => {
        return (`<tr>
        <td>${item.Name}</td>
        <td>${item.id}</td>
        <td>${item.Course}</td>
        <td>${item.School}</td>
        </tr>`)
    }).join('');

    const result2 = data.filter(value => value.Course === "b.tech");
    document.getElementById("student1").innerHTML = result2.map((item) => {
        return (`<tr>
        <td>${item.Name}</td>
        <td>${item.id}</td>
        <td>${item.Course}</td>
        <td>${item.School}</td>
        </tr>`)
    }).join('');
}
displayTable();

function myFunction() {
    var x = document.getElementById("mySelect").value;
    var y = document.getElementById("mySelect2").value;
    var z = document.getElementById("mySelect3").value;
    var a = document.getElementById("mySelect4").value;
    const record = { Name: x, id: y, Course: z, School: a };
    console.log(record);



    data.push(record);

    localStorage.setItem("data2", JSON.stringify(data))
    displayTable();

    console.log(data);
}



