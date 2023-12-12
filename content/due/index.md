---
layout: layouts/base.njk
eleventyNavigation:
  key: FINAL DUE
  order: 6
---
<link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" type="text/css">
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'><link rel="stylesheet" href="./timer.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="wrap"> 
  <div id="countdown">  
    <div class="countdown-section">
      <span class="h1 days">-</span>
      <div class="text-center">DAYS</div>
    </div>
    <div class="countdown-section">
      <span class="h1 hours">-</span>
      <div class="text-center">HRS</div>
    </div>
    <div class="countdown-section">
      <span class="h1 minutes"></span>
      <div class="text-center">MINS</div>
    </div>
    <div class="countdown-section">
      <span class="h1 seconds"></span>
      <div class="text-center">SECS</div>
    </div>
  </div>
</div>
<!-- partial -->
  <script  src="./timer.js"></script>

</body>