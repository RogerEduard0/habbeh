
<!--div style="max-width: 1170px; width: 95%; margin: -25px auto 10px auto; background-color: transparent; box-sizing: border-box;">

  <div class="event-box"
    style="
	background-image: url('https://i.imgur.com/CT77lp4.png');
	/* background-image: url('https://i.imgur.com/NA4axBS.png');  */
	background-color: #126700; width: 100%; border-radius: 5px; 
	position: relative; min-height: 70px; 
	background-repeat: no-repeat; 
	background-position: right; 
	margin-top: 15px; padding: 13px; 
	box-sizing: border-box; 
	display: flex; 
	flex-direction: column; 
	justify-content: space-between;">


    <p style="background-color: #000000B3; border-radius: 5px; padding: 5px 10px; color: white; width: fit-content; font-size: 13px; margin: 0;">
      <b>¡PELEA DE GALLOS!</b>
    </p>

    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-top: 8px;">

      <?php

      $eventDate = new DateTime('2025-06-30 18:00:00', new DateTimeZone('America/Mexico_City'));
      $targetTimestamp = $eventDate->getTimestamp() * 1000;
      ?>


      <div id="countdown" style="width: auto; color: white; background-color: #000000B3; border-radius: 5px; font-size: 12px; padding: 6px 10px;">
        <span class="countdown-row countdown-show4">
          <span class="countdown-section"><span id="days">0</span><span class="countdown-period"> Días</span></span>
          <span class="countdown-section"><span id="hours">0</span><span class="countdown-period"> Horas</span></span>
          <span class="countdown-section"><span id="minutes">0</span><span class="countdown-period"> Minutos</span></span>
          <span class="countdown-section"><span id="seconds">0</span><span class="countdown-period"> Segundos</span></span>
        </span>
      </div>


      <a target="_blank" href="#"
        style="color: white; padding: 7px 12px; background: rgba(0,0,0,.7); border-radius: 5px; text-decoration: none; font-size: 13px;">
        Leer más&nbsp;»
      </a>

    </div>

  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date(<?= $targetTimestamp ?>);

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
</script-->