var taskData = [
    {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
    {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
    {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
    {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
    {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
    {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
    {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

$( document ).ready(function() {
    var tasksDoc = document.getElementById('existingTasks');

    taskData.forEach(function(val, idx){
        var spanEle = document.createElement('p');

        spanEle.innerHTML = '<b>' + val.name + '</b>&nbsp;' + val.date + '<b class="right">' + val.assigned + '</b>'

        tasksDoc.appendChild(spanEle);
    });

    $('#taskSubmit').click(function(){
        var formObj = {};
        var formArray = $('#myTaskForm').serializeArray();
        formArray.forEach(function(v,i){
            if(formObj[v.name]){
                if(!formObj[v.name].push){
                    formObj[v.name] = [formObj[v.name]];
                }
                formObj[v.name].push(v.value || '');
            }
            else {
                formObj[v.name] = v.value || '';
            }
            return formObj;
        });

        //Getting first child in the tasks list so that we can insert before that.

        var firstChild = tasksDoc.firstChild;
        var spanEle = document.createElement('p');
        spanEle.innerHTML = '<b>' + formObj.name + '</b>&nbsp;' + formObj.date + '<b class="right">' + formObj.assigned + '</b>'
        tasksDoc.insertBefore(spanEle, firstChild);

        //Clearing form after submit
        $("form").trigger("reset");

    });

});