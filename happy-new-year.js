$(document).ready(function() {
  var countdownClock = $('[data-countdown-clock]');
  var finalDate = '01/01/2017';

  countdownClock
    .countdown(finalDate)
    .on('update.countdown', function(e) {
      $(this).find('[data-days]').text(e.strftime('%D'));
      $(this).find('[data-hours]').text(e.strftime('%H'));
      $(this).find('[data-mins]').text(e.strftime('%M'));
      $(this).find('[data-secs]').text(e.strftime('%S'));
    })
    .on('finish.countdown', function(e) {});
});
