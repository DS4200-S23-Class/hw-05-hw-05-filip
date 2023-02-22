//function to get border data
function Border() {

    console.log("1")
    this.classList.toggle("add_border");
    let circle_x = this.getAttribute("cx") / 50;
    let circle_y = (500 - this.getAttribute("cy")) / 50;
    let newText = "Last Point Clicked: (" + circle_x + ", " + circle_y + ")"
    document.getElementById("print_points").innerHTML = newText;
}
//function to add border
function addBorder() {
    let circle_values = document.getElementsByTagName("circle");

    for (let i = 0; i < circle_values.length; i++){
        let circle_value = circle_values[i];
        circle_value.addEventListener("click", Border);
        console.log("2")
    }
}
//function to get coordinates
function getcoordinates() {

    // Get X and Y coordinates
    let x_ax = document.getElementById('X-ax');
    let y_ax = document.getElementById('Y-ax');
    let x = x_ax.value * 50;
    let y = 500 - (y_ax.value * 50);

    svg_plot = document.getElementById("svg_plot");
    svg_plot.innerHTML += '<circle class="circle" cx=' + x + ' cy=' + y + ' r="10" onClick="addBorder()"/>';

    }
//function to send new point to svg
function SendPoint() {
    let new_point = document.getElementById("SendPoint");
    new_point.addEventListener("click", getcoordinates);
}