$(document).ready(function(){
    $('.header').height($(window).height());
  });
var $table = $('#table')
    $('#table').on('all.bs.table', function (e) {
      var totalRecords = $('#table').bootstrapTable('getOptions').totalRows ;
      var currentPage = $('#table').bootstrapTable('getOptions').pageNumber;
      var pageSize = $('#table').bootstrapTable('getOptions').pageSize;
      var showingFrom = ((currentPage-1) * pageSize)+1;
      var showingTo = (currentPage) * pageSize > totalRecords ? totalRecords : (currentPage) * pageSize;
      $('#total').text('Showing '+showingFrom +' to ' + showingTo +' of '+ totalRecords+' Records')
   })

   $(function () {
    var $table = $('#table');
    $('#export').click(function () {
      $table.tableExport({
        type: 'excel',
      //  escape: false
      });
    });
  }); 
 