



window.ajaxOptions = {
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Custom-Auth-Token', 'custom-auth-token')
    }
}
$(function () {
    var $table = $('#table');
    var $downloadTable =$('#downloadTable')
    $downloadTable.hide();
    var partItem = []
    var data = [
        {
            "partFamily": "TF10026",
            "partNo": "04.501.006",
            "docId": "261394",
            "docName": "000261394.pdf",
            "docCat": "Risk Management Plan",
            "componentNo": "component 0",
            "componentRiskLevel": "component risk level",
            "componentName": "component name"

        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abcttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": "hhds"
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        },
        {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abf",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        }, {
            "partFamily": 1,
            "partNo": "Item 1",
            "docId": "$0",
            "docName": "abc",
            "docCat": "abfkkkkk",
            "componentNo": "",
            "componentRiskLevel": "",
            "componentName": ""
        }
    ]
    $table.bootstrapTable({
        data: data,
        columns: [{
            field: 'part',
            title: 'Part Family/Number',
            formatter: function (value, row) {
                return '<b>' + row.partFamily + '</b>' + '<br>' + row.partNo;
            }
        }, {
            field: 'doc',
            title: 'Document Id/Name',
            formatter: function (value, row) {
                return '<b>' + row.docId + '</b>' + '<br>' + row.docName;
            }
        },
        {
            field: 'docCat',
            title: 'Document Category',

        },
        {
            field: 'component',
            title: 'Component Number/Name',
            formatter: function (value, row) {
                return '<b>' + row.componentNo + '</b>' + '<br>' + row.componentName;
                //  return [row.componentNo, row.componentName].join('<br>')
            }
        },
        {
            field: 'componentRiskLevel',
            title: 'Component Risk level'
        }
        ]
    });

    $downloadTable.bootstrapTable({data:data,columns: [
        {
            field: 'componentRiskLevel',
            title: 'Component Risk level'
        },
        {
            field: 'docCat',
            title: 'Document '
        },
        {
            field: 'docName',
            title: 'Document Name'
        },
        {
            field: 'docCat',
            title: 'Document Categories'
        },
        {
            field: 'componentNo',
            title: 'Component Name'
        },
        {
            field: 'componentName',
            title: 'Component Name'
        },
        {
            field: 'componentRiskLevel',
            title: 'Component Risk level'
        }

    ]});
 
    $('td[data-toggle="tooltip"]').tooltip();
    $('#applySearch').click(function (event) {
        event.preventDefault();
        $('#partFamily option:selected').val() == 0 ? $("#invalid").show() : $("#invalid").hide();
        if ($('#partFamily option:selected').val() != 0 ) {
           var part_num_str =  $('#partItem option:selected').val() == -1 ? '' : $('#partItem option:selected').val() ;
            var postData = { part_family: $('#partFamily option:selected').val(), part_num_str: part_num_str }
            $.ajax({
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data, textStatus, jqXHR) {
                    // alert('Success!');
                    tableData = data
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error occurred!');
                }

            });
        }

        e.preventDefault(); //STOP default action
    });

})


function partFamilySelection(a) {
    $("#invalid").hide()
    if ($('#partFamily option:selected').val() != 0) {
        var x = (a.value || a.options[a.selectedIndex].value);
        var partData = {
            "part_num_list": [
                "04.120.605",
                "04.120.605-US",
                "04.120.605S",
                "04.120.605S-US",
                "04.120.606",
                "04.120.606-US",
                "04.120.606S-US"
            ]
        }
        partItem = partData.part_num_list;
        $.each(partItem, function (key, val) {
            $('#partItem')
                .append($("<option></option>")
                    .attr("value", val)
                    .text('Item No. ' + val));
        });
        $('.selectpicker').selectpicker('refresh');
        /*    $.ajax({
               url: formURL,
               type: "POST",
               data: postData,
               success: function (data, textStatus, jqXHR) {
                   partItem = data.part_num_list;
                     $.each(partItem, function(key,val) {        
             $('#partItem')
            .append($("<option></option>")
            .attr("value",val)
            .text('Item No. '+val)); 
           });
           $('.selectpicker').selectpicker('refresh');
               },
               error: function (jqXHR, textStatus, errorThrown) {
                   alert('Error occurred!');
               }
   
           });//crossbrowser solution =) */
    }

    console.log(x)
}

function partItemSelection(a) {

    $("#invalid2").hide()

}

