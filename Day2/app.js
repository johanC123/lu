for (let i = 0; i < 16; i++) {
    $('#squares').append('<div class="container" data-index="' + i + '"></div>');
  }

  $('#squares').on('click', '.container', function() {
    const patternIndices = [0, 3, 5, 6, 9, 10, 12, 15];
    patternIndices.forEach(i => {
      $(`.container[data-index="${i}"]`).toggleClass('active');
    });
  });