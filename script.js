
<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

<!-- Contact JS Modal Script -->
    // Add any JavaScript/jQuery as needed
    $(document).ready(function() {
      // You can include animations, interactions, etc.
    });


  $(document).ready(function() {
    // Open Map Modal
    $('#openMap').on('click', function() {
      $('#mapModal').modal('show');
    });
    
    // Close Map Modal
    $('#closeMap').on('click', function() {
      $('#mapModal').modal('hide');
    });
  });

    $(document).ready(function() {
        $('#toggleSidebar').on('click', function() {
            $('.sidebar').toggleClass('active');
            $('.pusher').toggleClass('active');
        });
    });
