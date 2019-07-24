var student_email="", student_name="",contents_template="";
$(function(){

    let subject_text = $("textarea#subtxt"); 
    // Init the dialog box for choosing template
    $("#dialog").dialog({
        width : 275,
        height : 150,
        autoOpen: false, 
        draggable : false,
        modal : true,
        closeOnEscape: false,
        buttons: {
            T1: function() {
                console.log(student_name);
                console.log(student_email);
                // Load data here from html file
                // Send GET to server and fetch the file
                $.post(
                        '/api/students/template',
                        {name:student_name,option:1},
                        function(data){
                            contents_template = data;
                            console.log(data);
                            // Set the value of the text area
                            $('textarea#htmltxt').val(contents_template);
                        }
                );
                $( "#dialog-2" ).dialog( "open" );
                $("#dialog").dialog("close");
            },
            T2: function() {
                console.log(student_name);
                console.log(student_email);
                $.post(
                    '/api/students/template',
                    {name:student_name,option:2},
                    function(data){
                        contents_template = data;
                        console.log(data);
                        // Set the value of the text area
                        $('textarea#htmltxt').val(contents_template);
                    }
                );
                $( "#dialog-2" ).dialog( "open" );
                $("#dialog").dialog("close");
            },
            T3: function() {
                console.log(student_name);
                console.log(student_email);
                $.post(
                    '/api/students/template',
                    {name:student_name,option:3},
                    function(data){
                        contents_template = data;
                        console.log(data);
                        // Set the value of the text area
                        $('textarea#htmltxt').val(contents_template);
                    }
                );
                $( "#dialog-2" ).dialog( "open" );
                $("#dialog").dialog("close");
            },
            T4: function() {
                console.log(student_name);
                console.log(student_email);
                $.post(
                    '/api/students/template',
                    {name:student_name,option:4},
                    function(data){
                        contents_template = data;
                        console.log(data);
                        // Set the value of the text area
                        $('textarea#htmltxt').val(contents_template);
                    }
                );
                $( "#dialog-2" ).dialog( "open" );
                $("#dialog").dialog("close");
            }
        },
        title: "Choose Template",
        position: {
            my: "center",
            at: "center"
        }
    });


    // Init another dialog box for last minute changes
    $("#dialog-2").dialog({
        width : 525,
        height : 450,
        autoOpen: false, 
        draggable : false,
        modal : true,
        closeOnEscape: false,
        buttons: {
            SEND: function() {
                console.log("Sending POST request to server.");
                $.post(
                    '/api/students/email',
                    {name:student_name,email:student_email,template_content:contents_template,template_subject:subject_text.val()},
                    function(output){
                        console.log(output);
                        // Show confirmation toast
                        $("#alert-div").show().css('font-weight','bold').css('font-family','Courier New').text('Email successfully send to '+student_email+'.').delay(1500).fadeOut();
                    }
                )
                $( "#dialog-2" ).dialog( "close" );
            }
        },
        title: "Edit For Modifications",
        position: {
            my: "center",
            at: "center"
        }
    });



    // Loader
    let loader = $("#loader");
    
    console.log("Page Loaded");

    let filter_bttn = $('#filter-button');
    let table = $('#table');
    let entry = $('#entry');
   
    // Ref. all the table headers
    let index = $('#index');
    let name = $('#name');
    let college = $('#college');
    let batch = $('#batch')
    let branch = $('#branch');
    let email = $('#email');
    let phone = $('#phone');

    // Ref. all the checkboxes

    let dtu = $('#dtu');
    let nsit = $('#nsit')

    let k17 = $('#k17');
    let k18 = $('#k18');
    
    let co = $('#co');
    let it = $('#it');
    let se = $('#se');
    let mc = $('#mc');
    let ec = $('#ec');
    let ee = $('#ee');
    let ep = $('#ep');
    let me = $('#me');
    let pe = $('#pe');
    let ae = $('#ae');
    let ce = $('#ce');
    let ps = $('#ps');
    let bt = $('#bt');
    let en= $('#en');
    let mpae = $('#mpae');
    let ice = $('#ice');

    if($('#branch').is(':active')){
        console.log('True');
    }

    filter_bttn.click(function(){

        loader.show();

        // Empty the table
        table.find("tr:gt(0)").empty();

        var obj = {

        };
        console.log('Button clicked.')
        if(dtu.is(':checked')){
            console.log('DTU is checked');
            obj[0] = 'DTU';
        }
        if(k18.is(':checked')){
            console.log('2K18 is checked');
            obj[1] = '2K18';
        }
        if(k17.is(':checked')){
            console.log('2K17 is checked');
            obj[3] = '2K17';
        }
        if(co.is(':checked')){
            console.log('CO is checked');
            obj[4] = 'CO';
        }
        if(it.is(':checked')){
            console.log('IT is checked');
            obj[5] = 'IT';
        }
        if(se.is(':checked')){
            console.log('SE is checked');
            obj[6] = 'SE';
        }
        if(mc.is(':checked')){
            console.log('MC is checked');
            obj[7] = 'MC';
        }
        if(ec.is(':checked')){
            console.log('EC is checked');
            obj[8] = 'EC';
        }
        if(ee.is(':checked')){
            console.log('EE is checked');
            obj[9] = 'EE';
        }
        if(ep.is(':checked')){
            console.log('EP is checked');
            obj[10] = 'EP';
        }
        if(me.is(':checked')){
            console.log('ME is checked');
            obj[11] = 'ME';
        }
        if(pe.is(':checked')){
            console.log('PE is checked');
            obj[12] = 'PE';
        }
        if(ae.is(':checked')){
            console.log('AE is checked');
            obj[13] = 'AE';
        }
        if(ce.is(':checked')){
            console.log('CE is checked');
            obj[14] = 'CE';
        }
        if(bt.is(':checked')){
            console.log('BT is checked');
            obj[15] = 'BT';
        }
        if(ps.is(':checked')){
            console.log('PS is checked');
            obj[16] = 'PS';
        }
        if(en.is(':checked')){
            console.log('EN is checked');
            obj[17] = 'EN';
        }
        if(nsit.is(':checked')){
            console.log('NSIT is checked');
            obj[18] = 'NSIT';
        }
        if(ice.is(':checked')){
            console.log('ICE is checked');
            obj[19] = 'ICE';
        }
        if(mpae.is(':checked')){
            console.log('MPAE is checked');
            obj[20] = 'MPAE';
        }
        
        $.post(
            '/api/students',
            obj,
            function(students){
                console.log('Request send to fetch the data');
                console.log(obj);
                entry.text(students.length+" entries found.");
                for(student of students){
                    console.log(student);
                    table.append(addRow(student));
                }
                loader.hide();
            }
        )
    });

    index.click(function(){
        // Number Sort
        var table = $(this).parents('table').eq(0)
        var rows = table.find('tr:gt(0)').toArray().sort(comparerIndex($(this).index()))
        this.asc = !this.asc
        if (!this.asc){
            rows = rows.reverse()
        }
        for (var i = 0; i < rows.length; i++){
            table.append(rows[i])
        }
    });

    function comparerIndex(index) {
        return function(a, b) {
            console.log(index);
            var valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }

    name.click(function(){
        // Alphabetical Sort
       var table = $(this).parents('table').eq(0)
       var rows = table.find('tr:gt(0)').toArray().sort(comparerName($(this).index()))
       for (var i = 0; i < rows.length; i++){
           table.append(rows[i])
       }
    });

    function comparerName(index) {
        return function(a, b) {
            console.log(index+1);
            var valA = getCellValue(a, index+1), valB = getCellValue(b, index+1)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }
    
    college.click(function(){
        // Alphabetical Sort
        var table = $(this).parents('table').eq(0)
        console.log('Before Sort');
        var rows = table.find('tr:gt(0)').toArray().sort(comparerCollege($(this).index()))
        console.log('After sort.');
        for (var i = 0; i < rows.length; i++){
            table.append(rows[i])
        }
    });

    function comparerCollege(index) {
        return function(a, b) {
            console.log(index+2);
            var valA = getCellValue(a, index+2), valB = getCellValue(b, index+2);
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }
    
    branch.click(function(){
        // Alphabetical Sort
        var table = $(this).parents('table').eq(0);
        console.log('Before Sort');
        var rows = table.find('tr:gt(0)').toArray().sort(comparerBranch($(this).index()));
        console.log('After sort.');
        for (var i = 0; i < rows.length; i++){
            table.append(rows[i])
        }
    });

  
    function comparerBranch(index) {
        return function(a, b) {
            console.log(index+3);
            var valA = getCellValue(a, index+3), valB = getCellValue(b, index+3)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }
    
    function getCellValue(row, index){ 
        return $(row).children('td').eq(index).text() 
    }

    batch.click(function(){
        console.log('Batch clicked.');
        var table = $(this).parents('table').eq(0)
        console.log('Before Sort');
        // Show div loader here
        var rows = table.find('tr:gt(0)').toArray().sort(comparerBatch($(this).index()))
        console.log('After sort.');
        // Hide the loader her
        for (var i = 0; i < rows.length; i++){
            table.append(rows[i])
        }
    });

    function comparerBatch(index) {
        return function(a, b) {
            console.log(index+4);
            var valA = getCellValue(a, index+4), valB = getCellValue(b, index+4)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }

    email.click(function(){
        // Do Nothing
    });

    phone.click(function(){
        // Do Nothing
    });
})

function addRow(student){
    return $(`
    <tr>
    <td style="font-size:12px;">${student.index}</td>
    <td style="font-size:12px;">${student.Name}</td>
    <td style="font-size:12px;">${student.College}</td>
    <td style="font-size:12px;">${student.Branch}</td>
    <td style="font-size:12px;">${student.Batch}</td>
    <td onclick="sendMail('${student.Email}','${student.Name}')" type="btn" style="font-size:12px;cursor:move;">${student.Email}</td>
    <td class="no-click" onclick="send(${student.Phone})" style="font-size:12px;cursor:move;">${student.Phone}</td>
    </tr>
    `)
}

// Send POST request to implement sending of messages
function send(val){
    $.post(
        '/api/students/phone',
        {number:val},
        function(output){
            console.log(output);
            // Show confirmation toast
            $("#alert-div").show().css('font-weight','bold').css('font-family','Courier New').text('Message successfully send to '+val+'.').delay(1500).fadeOut();
        }
    )
};

// Sending Email 
function sendMail(st_email,st_name) {
    // Updating current Name and Email
    student_email = st_email;
    student_name = st_name;
    // Show Dialog box here
    $( "#dialog" ).dialog( "open" );
};