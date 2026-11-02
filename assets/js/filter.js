(function () {
  var form = document.querySelector('[data-search]');
  if (!form) return;
  form.hidden = false;
  var input = form.querySelector('input');
  var status = form.querySelector('[data-search-status]');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  var regions = Array.prototype.slice.call(document.querySelectorAll('.region'));
  var subnav = document.querySelector('.subnav');

  function normalize(s) {
    return (s || '').toLowerCase().replace(/[֑-ׇ]/g, '');
  }

  function apply() {
    var q = normalize(input.value.trim());
    var shown = 0;
    cards.forEach(function (card) {
      var hit = !q || normalize(card.textContent).indexOf(q) > -1;
      card.hidden = !hit;
      if (hit) shown++;
    });
    regions.forEach(function (region) {
      var any = region.querySelector('.card:not([hidden])');
      region.hidden = !!q && !any;
    });
    if (subnav) subnav.hidden = !!q;
    status.textContent = q ? (shown === 0 ? 'לא נמצאו תוצאות. נסו מילה אחרת.' : 'נמצאו ' + shown + ' תוצאות') : '';
  }

  input.addEventListener('input', apply);
  form.addEventListener('submit', function (e) { e.preventDefault(); apply(); });
})();
