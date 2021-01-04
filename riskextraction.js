window.ajaxOptions = {
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Custom-Auth-Token', 'custom-auth-token')
    }
}
$(function () {
    var $table = $('#table');
    $("#invalid").hide();
    var data = [
        {
            "tdr_id": "SE_611216",
            "rmr_id": "0000285730",
            "dcrm_id": "",
            "prm_id": "468",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": "SE_611216",
            "rmr_id": "0000285730",
            "dcrm_id": "",
            "prm_id": "",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": "1",
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""

        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        },
        {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        }, {
            "tdr_id": 1,
            "rmr_id": "Item 1",
            "dcrm_id": "$0",
            "prm_id": "abc",
            "entry_number": "",
            "possible harm": "",
            "cause of hazard": "",
            "risk level": ""
        }
    ]
    $table.bootstrapTable({
        data: data,
        columns: [{
            field: 'tdr_id',
            title: 'TDR Document <br> # / Name ',

        }, {
            field: 'rmr_id',
            title: 'RMR Document #/ <br> Name',

        },
        {
            field: 'dcrm_id',
            title: 'Document <br> Category',

        },
        {
            field: 'prm_id',
            title: 'DCRM/PRM <br> Document # / <br> Name',

        },
        {
            field: 'added_on',
            title: 'Entry #'
        },
        {
            field: 'componentNo',
            title: 'Possible Harm'
        },
        {
            field: 'componentRiskLevel',
            title: 'Cause of Hazard'
        },
        {
            field: 'componentRiskLevel',
            title: 'Risk Level'
        }
        
        ]
    });

    $('td[data-toggle="tooltip"]').tooltip();
    $('#applySearch').click(function (event) {
        event.preventDefault();
        $("input[name='riskExtractionRadio']:checked").val() == 'TDR' || 'RMR' ? $("#invalid").show() : $("#invalid").hide();
        // if ($('#inlineRadio1 option:selected').val() != 0 && $('#inlineRadio2 option:selected').val() != -1) {
        //     $.ajax({
        //         url: formURL,
        //         type: "POST",
        //         data: postData,
        //         success: function (data, textStatus, jqXHR) {
        //             alert('Success!');
        //         },
        //         error: function (jqXHR, textStatus, errorThrown) {
        //             alert('Error occurred!');
        //         }

        //     });
        // }

        e.preventDefault(); //STOP default action
    });

    $('input:radio[name=riskExtractionRadio]:checked').change(function () {
        if ($("input[name='riskExtractionRadio']:checked").val() == 'TDR') {
            $("#invalid").hide();
        }
        if ($("input[name='riskExtractionRadio']:checked").val() == 'RMR') {
            $("#invalid").hide();
        }
    });

})


