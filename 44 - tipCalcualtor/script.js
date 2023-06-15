function calculate() {
    var bill = document.getElementById("bill").value;
    var select = document.getElementById("selected-data").value;
    var members = document.getElementById("members").value;
    var result = document.getElementById("result");

    percnetage = bill * select / 100
    person = bill / members + (percnetage/members)
    result.value = `₹${person.toString()}`
}