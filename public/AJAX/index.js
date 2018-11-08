function getCurrentTime(url, data) {
    $.ajax({
        url: url ,
        data: data,
        type: 'GET',
        success: function (dataR) {
            var content = "";
            console.log(dataR);
        },
        error: function (xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
}


function onSubmitGetCurrentTime(url) {
    var formArray= $("form").serializeArray();
    var data={};
    for (index in formArray){
        data[formArray[index].name]= formArray[index].value;
    }

    getCurrentTime(url, data);

}