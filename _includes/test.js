// Hi
console.log("Hi");

<!-- capture the JS content as a Nunjucks variable -->
{% set js %}
  {% include "sample.js" %}
{% endset %}
<!-- feed it through our jsmin filter to minify -->
<script>
  {{ js | jsmin | safe }}
</script>