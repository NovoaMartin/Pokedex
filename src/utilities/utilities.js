export function refreshSelect() {
  // eslint-disable-next-line no-undef
  $('.selectpicker').selectpicker('refresh');
}

export function selectRandom() {
  document.querySelectorAll('option')[Math.floor(Math.random() * 964)].selected = true;
}
